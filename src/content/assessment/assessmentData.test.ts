import { describe, expect, it } from "vitest";

import { dimensionDefinitions } from "../../domain/assessment/dimensions";
import { dimensionIds } from "../../domain/assessment/types";
import { assessmentQuestions, standardResponseOptions } from "./questions";
import {
  getPersonalityRecord,
  personalityCodes,
  personalityFamilies,
  personalityRecords,
} from "./personalities";

describe("assessment question data", () => {
  it("contains 16 questions with unique stable IDs", () => {
    const ids = assessmentQuestions.map((question) => question.id);

    expect(assessmentQuestions).toHaveLength(16);
    expect(new Set(ids)).toHaveLength(16);
  });

  it.each(dimensionIds)("maps %s to exactly four questions and one anchor", (dimension) => {
    const questions = assessmentQuestions.filter(
      (question) => question.dimension === dimension,
    );

    expect(questions).toHaveLength(4);
    expect(questions.filter((question) => question.anchor)).toHaveLength(1);
  });

  it("uses the approved five response options for agreement questions", () => {
    expect(standardResponseOptions.map((option) => option.value)).toEqual([-2, -1, 0, 1, 2]);

    for (const question of assessmentQuestions.filter((item) => item.format === "agreement")) {
      expect(question.responseOptions).toBe(standardResponseOptions);
    }
  });

  it("contains eight agreement and eight scenario questions", () => {
    expect(assessmentQuestions.filter((question) => question.format === "agreement")).toHaveLength(8);
    expect(assessmentQuestions.filter((question) => question.format === "scenario")).toHaveLength(8);

    for (const dimension of dimensionIds) {
      const questions = assessmentQuestions.filter((question) => question.dimension === dimension);
      expect(questions.filter((question) => question.format === "agreement")).toHaveLength(2);
      expect(questions.filter((question) => question.format === "scenario")).toHaveLength(2);
    }
  });

  it("uses direct scoring for scenarios and preserves neutral only on non-anchors", () => {
    for (const question of assessmentQuestions.filter((item) => item.format === "scenario")) {
      expect(question.scoringMode).toBe("direct");
      expect(question.reverse).toBe(false);
      const values: readonly number[] = question.responseOptions.map(
        (option) => option.value,
      );
      expect(values.filter((value) => value !== 0)).toEqual([-2, -1, 1, 2]);
      expect(values.includes(0)).toBe(!question.anchor);
    }
  });

  it("keeps directional keys and reverse flags consistent", () => {
    for (const question of assessmentQuestions) {
      const dimension = dimensionDefinitions[question.dimension];
      const expectedKey = question.id.endsWith("1")
        ? dimension.firstLetter
        : dimension.secondLetter;

      expect(question.directionalKey).toBe(expectedKey);
      expect(question.reverse).toBe(question.id.endsWith("1"));
    }
  });
});

describe("personality content", () => {
  it("contains all 16 unique personality codes", () => {
    expect(personalityCodes).toHaveLength(16);
    expect(new Set(personalityCodes)).toHaveLength(16);
    expect(Object.keys(personalityRecords)).toHaveLength(16);
  });

  it("contains the four approved families", () => {
    expect(Object.keys(personalityFamilies)).toEqual(["SA", "SI", "EA", "EI"]);
  });

  it.each(personalityCodes)("provides complete content and lookup for %s", (code) => {
    const personality = getPersonalityRecord(code);

    expect(personality.code).toBe(code);
    expect(personality.name).toMatch(/^The /);
    expect(personality.family.code).toBe(code.slice(0, 2));
    expect(personality.description.length).toBeGreaterThan(20);
    expect(personality.strengths.length).toBeGreaterThan(0);
    expect(personality.blindSpots.length).toBeGreaterThan(0);
    expect(personality.growthSuggestions.length).toBeGreaterThan(0);
  });
});
