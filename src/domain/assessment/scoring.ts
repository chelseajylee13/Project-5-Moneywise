import { assessmentQuestions } from "../../content/assessment/questions";
import {
  getPersonalityRecord,
  isPersonalityCode,
} from "../../content/assessment/personalities";
import { dimensionDefinitions } from "./dimensions";
import {
  dimensionIds,
  responseValues,
  type AssessmentResult,
  type DimensionId,
  type DimensionScore,
  type PersonalityCode,
  type PoleLetter,
  type QualitativeInterpretation,
  type QuestionContribution,
  type QuestionId,
  type ResponseValue,
  type ValidationIssue,
} from "./types";

export type AssessmentAnswerInput = Readonly<Record<string, unknown>>;
type ValidatedAnswers = Readonly<Record<QuestionId, ResponseValue>>;

export type AssessmentValidationResult =
  | { readonly valid: true; readonly answers: ValidatedAnswers }
  | { readonly valid: false; readonly issues: readonly ValidationIssue[] };

const validQuestionIds = new Set(assessmentQuestions.map((question) => question.id));
const validResponseValues = new Set<number>(responseValues);

export class AssessmentValidationError extends Error {
  readonly issues: readonly ValidationIssue[];

  constructor(issues: readonly ValidationIssue[]) {
    super("Assessment answers are incomplete or invalid.");
    this.name = "AssessmentValidationError";
    this.issues = issues;
  }
}

export function validateAssessmentAnswers(
  input: AssessmentAnswerInput,
): AssessmentValidationResult {
  const issues: ValidationIssue[] = [];

  for (const questionId of Object.keys(input)) {
    if (!validQuestionIds.has(questionId as QuestionId)) {
      issues.push({
        questionId,
        reason: "unknown-question",
        message: `"${questionId}" is not a recognized assessment question.`,
      });
    }
  }

  for (const question of assessmentQuestions) {
    if (!Object.hasOwn(input, question.id) || input[question.id] === undefined) {
      issues.push({
        questionId: question.id,
        reason: "missing-answer",
        message: `${question.id} requires an answer.`,
      });
      continue;
    }

    const response = input[question.id];

    if (question.anchor && response === 0) {
      issues.push({
        questionId: question.id,
        reason: "anchor-neutral",
        message: `${question.id} is an anchor question and cannot use "Not sure yet".`,
      });
      continue;
    }

    if (
      typeof response !== "number" ||
      !validResponseValues.has(response) ||
      !question.responseOptions.some((option) => option.value === response)
    ) {
      issues.push({
        questionId: question.id,
        reason: "invalid-response",
        message: `${question.id} has an invalid response value.`,
      });
    }
  }

  if (issues.length > 0) {
    return { valid: false, issues };
  }

  return {
    valid: true,
    answers: input as ValidatedAnswers,
  };
}

export function getQualitativeInterpretation(
  total: number,
  dimension: DimensionId,
): QualitativeInterpretation {
  const definition = dimensionDefinitions[dimension];
  const absoluteTotal = Math.abs(total);

  if (!Number.isInteger(total) || absoluteTotal > 8) {
    throw new RangeError("Dimension totals must be whole numbers from -8 through 8.");
  }

  if (total === 0) {
    return {
      band: "balanced",
      label: "Balanced",
      explanation: `Your responses were evenly split between ${definition.firstLabel} and ${definition.secondLabel}.`,
    };
  }

  const leaningLabel = total < 0 ? definition.firstLabel : definition.secondLabel;

  if (absoluteTotal <= 2) {
    return {
      band: "nearly-balanced",
      label: "Nearly balanced",
      explanation: `Your responses were nearly balanced, with a slight lean toward ${leaningLabel}.`,
    };
  }

  if (absoluteTotal <= 5) {
    return {
      band: "moderate-lean",
      label: "Moderate lean",
      explanation: `Your responses showed a moderate lean toward ${leaningLabel}.`,
    };
  }

  return {
    band: "stronger-lean",
    label: "Stronger lean",
    explanation: `Your responses showed a stronger lean toward ${leaningLabel}.`,
  };
}

function scoreDimension(
  dimension: DimensionId,
  answers: ValidatedAnswers,
): DimensionScore {
  const definition = dimensionDefinitions[dimension];
  const questions = assessmentQuestions.filter((question) => question.dimension === dimension);
  const anchorQuestion = questions.find((question) => question.anchor);

  if (!anchorQuestion) {
    throw new Error(`Dimension ${dimension} does not have an anchor question.`);
  }

  const contributions: QuestionContribution[] = questions.map((question) => {
    const originalResponse = answers[question.id];
    const selectedOption = question.responseOptions.find(
      (option) => option.value === originalResponse,
    );
    const scoringMultiplier =
      question.scoringMode === "agreement" && question.reverse ? -1 : 1;

    if (!selectedOption) {
      throw new Error(`Question ${question.id} could not resolve its selected response.`);
    }

    return {
      questionId: question.id,
      questionText: question.text,
      questionFormat: question.format,
      originalResponse,
      selectedAnswer: selectedOption.label,
      reverseScored: scoringMultiplier === -1,
      scoringMultiplier,
      scoredContribution:
        originalResponse === 0 ? 0 : originalResponse * scoringMultiplier,
    };
  });

  const total = contributions.reduce(
    (sum, contribution) => sum + contribution.scoredContribution,
    0,
  );
  const anchorContribution = contributions.find(
    (contribution) => contribution.questionId === anchorQuestion.id,
  );

  if (!anchorContribution) {
    throw new Error(`Dimension ${dimension} could not score its anchor question.`);
  }

  let assignedLetter: PoleLetter;
  let anchorTiebreakerApplied = false;

  if (total < 0) {
    assignedLetter = definition.firstLetter;
  } else if (total > 0) {
    assignedLetter = definition.secondLetter;
  } else {
    anchorTiebreakerApplied = true;
    assignedLetter =
      anchorContribution.scoredContribution < 0
        ? definition.firstLetter
        : definition.secondLetter;
  }

  const neutralResponseCount = contributions.filter(
    (contribution) =>
      contribution.questionId !== anchorQuestion.id && contribution.originalResponse === 0,
  ).length;
  const limitedResponses = neutralResponseCount >= 2;

  return {
    dimension,
    questionIds: questions.map((question) => question.id),
    contributions,
    total,
    interpretation: getQualitativeInterpretation(total, dimension),
    assignedLetter,
    anchorQuestionId: anchorQuestion.id,
    anchorTiebreakerApplied,
    limitedResponse: {
      applies: limitedResponses,
      neutralResponseCount,
      explanation: limitedResponses
        ? `This dimension includes ${neutralResponseCount} "Not sure yet" responses, so its result is based on fewer directional answers.`
        : null,
    },
  };
}

function buildPersonalityCode(
  dimensions: Readonly<Record<DimensionId, DimensionScore>>,
): PersonalityCode {
  const code = dimensionIds
    .map((dimension) => dimensions[dimension].assignedLetter)
    .join("");

  if (!isPersonalityCode(code)) {
    throw new Error(`Scoring produced an unsupported personality code: ${code}`);
  }

  return code;
}

export function scoreAssessment(input: AssessmentAnswerInput): AssessmentResult {
  const validation = validateAssessmentAnswers(input);

  if (!validation.valid) {
    throw new AssessmentValidationError(validation.issues);
  }

  const dimensions = Object.fromEntries(
    dimensionIds.map((dimension) => [
      dimension,
      scoreDimension(dimension, validation.answers),
    ]),
  ) as Record<DimensionId, DimensionScore>;
  const code = buildPersonalityCode(dimensions);

  return {
    code,
    personality: getPersonalityRecord(code),
    dimensions,
  };
}
