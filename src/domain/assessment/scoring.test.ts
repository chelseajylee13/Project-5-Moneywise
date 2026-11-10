import { describe, expect, it } from "vitest";

import { assessmentQuestions } from "../../content/assessment/questions";
import {
  getPersonalityRecord,
  personalityCodes,
} from "../../content/assessment/personalities";
import { dimensionDefinitions } from "./dimensions";
import {
  AssessmentValidationError,
  getQualitativeInterpretation,
  scoreAssessment,
  validateAssessmentAnswers,
} from "./scoring";
import {
  dimensionIds,
  type DimensionId,
  type PersonalityCode,
  type ResponseValue,
} from "./types";

function answersForCode(code: PersonalityCode): Record<string, ResponseValue> {
  const letterIndex: Record<DimensionId, number> = {
    SE: 0,
    AI: 1,
    PF: 2,
    CO: 3,
  };

  return Object.fromEntries(
    assessmentQuestions.map((question) => {
      const definition = dimensionDefinitions[question.dimension];
      const desiredLetter = code[letterIndex[question.dimension]];
      const wantsFirstPole = desiredLetter === definition.firstLetter;
      const response = question.reverse
        ? wantsFirstPole
          ? 2
          : -2
        : wantsFirstPole
          ? -2
          : 2;

      return [question.id, response];
    }),
  );
}

function answersWithTie(
  dimension: DimensionId,
  anchorDirection: "first" | "second",
): Record<string, ResponseValue> {
  const answers = answersForCode("SAPC");
  const questions = assessmentQuestions.filter(
    (question) => question.dimension === dimension,
  );
  const reverseQuestion = questions.find((question) => question.reverse);
  const standardQuestion = questions.find(
    (question) => question.format === "agreement" && !question.reverse,
  );
  const neutralScenario = questions.find(
    (question) => question.format === "scenario" && !question.anchor,
  );
  const anchorQuestion = questions.find((question) => question.anchor);

  if (!reverseQuestion || !standardQuestion || !neutralScenario || !anchorQuestion) {
    throw new Error(`Unexpected question structure for ${dimension}.`);
  }

  if (anchorDirection === "first") {
    answers[reverseQuestion.id] = -2; // +2 after reverse scoring
    answers[standardQuestion.id] = -1;
    answers[neutralScenario.id] = 0;
    answers[anchorQuestion.id] = -1;
  } else {
    answers[reverseQuestion.id] = 2; // -2 after reverse scoring
    answers[standardQuestion.id] = 1;
    answers[neutralScenario.id] = 0;
    answers[anchorQuestion.id] = 1;
  }

  return answers;
}

describe("scoreAssessment", () => {
  it.each(personalityCodes)("reaches %s with a controlled answer set", (code) => {
    const result = scoreAssessment(answersForCode(code));

    expect(result.code).toBe(code);
    expect(result.personality).toBe(getPersonalityRecord(code));
  });

  it("reverse-scores first-pole questions and preserves the original response", () => {
    const result = scoreAssessment(answersForCode("EIFO"));
    const contribution = result.dimensions.SE.contributions.find(
      (item) => item.questionId === "SE1",
    );

    expect(contribution).toEqual(expect.objectContaining({
      questionId: "SE1",
      originalResponse: -2,
      reverseScored: true,
      scoringMultiplier: -1,
      scoredContribution: 2,
      selectedAnswer: "Strongly disagree",
      questionFormat: "agreement",
    }));
  });

  it("calculates independent negative totals", () => {
    const result = scoreAssessment(answersForCode("SAPC"));

    expect(Object.values(result.dimensions).map((dimension) => dimension.total)).toEqual([
      -8, -8, -8, -8,
    ]);
  });

  it("calculates independent positive totals", () => {
    const result = scoreAssessment(answersForCode("EIFO"));

    expect(Object.values(result.dimensions).map((dimension) => dimension.total)).toEqual([
      8, 8, 8, 8,
    ]);
  });

  it.each(dimensionIds)("uses the %s anchor toward the first pole for an exact tie", (dimension) => {
    const result = scoreAssessment(answersWithTie(dimension, "first"));
    const score = result.dimensions[dimension];

    expect(score.total).toBe(0);
    expect(score.interpretation.label).toBe("Balanced");
    expect(score.anchorTiebreakerApplied).toBe(true);
    expect(score.assignedLetter).toBe(dimensionDefinitions[dimension].firstLetter);
  });

  it.each(dimensionIds)("uses the %s anchor toward the second pole for an exact tie", (dimension) => {
    const result = scoreAssessment(answersWithTie(dimension, "second"));
    const score = result.dimensions[dimension];

    expect(score.total).toBe(0);
    expect(score.interpretation.label).toBe("Balanced");
    expect(score.anchorTiebreakerApplied).toBe(true);
    expect(score.assignedLetter).toBe(dimensionDefinitions[dimension].secondLetter);
  });

  it("keeps missing answers distinct from neutral responses", () => {
    const answers = answersForCode("SAPC");
    delete answers.SE1;

    const validation = validateAssessmentAnswers(answers);

    expect(validation).toEqual({
      valid: false,
      issues: [
        {
          questionId: "SE1",
          reason: "missing-answer",
          message: "SE1 requires an answer.",
        },
      ],
    });
  });

  it.each([3, -3, "2", null, Number.NaN])("rejects invalid response value %s", (value) => {
    const answers: Record<string, unknown> = answersForCode("SAPC");
    answers.SE1 = value;

    const validation = validateAssessmentAnswers(answers);

    expect(validation.valid).toBe(false);
    if (!validation.valid) {
      expect(validation.issues).toContainEqual(
        expect.objectContaining({ questionId: "SE1", reason: "invalid-response" }),
      );
    }
  });

  it.each(["SE4", "AI4", "PF4", "CO4"])("rejects zero on anchor question %s", (questionId) => {
    const answers: Record<string, unknown> = answersForCode("SAPC");
    answers[questionId] = 0;

    const validation = validateAssessmentAnswers(answers);

    expect(validation.valid).toBe(false);
    if (!validation.valid) {
      expect(validation.issues).toContainEqual(
        expect.objectContaining({ questionId, reason: "anchor-neutral" }),
      );
    }
  });

  it("rejects unknown question IDs", () => {
    const answers: Record<string, unknown> = answersForCode("SAPC");
    answers.UNKNOWN = 1;

    const validation = validateAssessmentAnswers(answers);

    expect(validation.valid).toBe(false);
    if (!validation.valid) {
      expect(validation.issues).toContainEqual(
        expect.objectContaining({ questionId: "UNKNOWN", reason: "unknown-question" }),
      );
    }
  });

  it("throws a structured validation error instead of manufacturing a result", () => {
    expect(() => scoreAssessment({})).toThrow(AssessmentValidationError);

    try {
      scoreAssessment({});
    } catch (error) {
      expect(error).toBeInstanceOf(AssessmentValidationError);
      expect((error as AssessmentValidationError).issues).toHaveLength(16);
    }
  });

  it("accepts zero on an ordinary question and tracks it as neutral", () => {
    const answers = answersForCode("SAPC");
    answers.SE1 = 0;

    const result = scoreAssessment(answers);

    expect(result.dimensions.SE.limitedResponse).toEqual({
      applies: false,
      neutralResponseCount: 1,
      explanation: null,
    });
    expect(
      result.dimensions.SE.contributions.find((item) => item.questionId === "SE1"),
    ).toEqual(expect.objectContaining({ originalResponse: 0, scoredContribution: 0 }));
  });

  it("maps scenario choices directly without reverse scoring", () => {
    const result = scoreAssessment(answersForCode("SAPC"));
    const contribution = result.dimensions.SE.contributions.find(
      (item) => item.questionId === "SE3",
    );

    expect(contribution).toEqual(
      expect.objectContaining({
        questionFormat: "scenario",
        originalResponse: -2,
        scoredContribution: -2,
        reverseScored: false,
        scoringMultiplier: 1,
        selectedAnswer: "Rebuild my cushion and skip the weekend extra.",
      }),
    );
  });

  it.each(dimensionIds)("adds limited-response language for two neutral %s answers", (dimension) => {
    const answers = answersForCode("SAPC");
    const ordinaryQuestions = assessmentQuestions
      .filter((question) => question.dimension === dimension && !question.anchor)
      .slice(0, 2);

    for (const question of ordinaryQuestions) {
      answers[question.id] = 0;
    }

    const notice = scoreAssessment(answers).dimensions[dimension].limitedResponse;

    expect(notice.applies).toBe(true);
    expect(notice.neutralResponseCount).toBe(2);
    expect(notice.explanation).toContain("based on fewer directional answers");
  });

  it("returns all explainability fields for every dimension", () => {
    const result = scoreAssessment(answersForCode("SAFO"));

    for (const dimension of dimensionIds) {
      const score = result.dimensions[dimension];

      expect(score.questionIds).toHaveLength(4);
      expect(score.contributions).toHaveLength(4);
      expect(score.anchorQuestionId).toBe(`${dimension}4`);
      expect(score.contributions).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            questionId: `${dimension}1`,
            questionText: expect.any(String),
            originalResponse: expect.any(Number),
            selectedAnswer: expect.any(String),
            reverseScored: true,
            scoringMultiplier: -1,
            scoredContribution: expect.any(Number),
          }),
        ]),
      );
      expect(score.interpretation.explanation.length).toBeGreaterThan(20);
    }
  });

  it("returns deterministic results for identical inputs", () => {
    const answers = answersWithTie("AI", "second");

    expect(scoreAssessment(answers)).toEqual(scoreAssessment({ ...answers }));
  });
});

describe("qualitative interpretation bands", () => {
  it.each([
    [-8, "stronger-lean", "Stronger lean"],
    [-6, "stronger-lean", "Stronger lean"],
    [-5, "moderate-lean", "Moderate lean"],
    [-3, "moderate-lean", "Moderate lean"],
    [-2, "nearly-balanced", "Nearly balanced"],
    [-1, "nearly-balanced", "Nearly balanced"],
    [0, "balanced", "Balanced"],
    [1, "nearly-balanced", "Nearly balanced"],
    [2, "nearly-balanced", "Nearly balanced"],
    [3, "moderate-lean", "Moderate lean"],
    [5, "moderate-lean", "Moderate lean"],
    [6, "stronger-lean", "Stronger lean"],
    [8, "stronger-lean", "Stronger lean"],
  ] as const)("maps total %i to %s", (total, band, label) => {
    expect(getQualitativeInterpretation(total, "SE")).toEqual(
      expect.objectContaining({ band, label }),
    );
  });

  it.each([-9, 9, 1.5])("rejects out-of-contract total %s", (total) => {
    expect(() => getQualitativeInterpretation(total, "SE")).toThrow(RangeError);
  });
});
