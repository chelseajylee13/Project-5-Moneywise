import { describe, expect, it } from "vitest";

import { assessmentQuestions } from "../../content/assessment/questions";
import { scoreAssessment, type ResponseValue } from "../assessment";
import { recommendLessons } from "./recommendLessons";

function uniformAnswers(value: -2 | 2): Record<string, ResponseValue> {
  return Object.fromEntries(
    assessmentQuestions.map((question) => [
      question.id,
      question.reverse ? (value === -2 ? 2 : -2) : value,
    ]),
  );
}

describe("recommendLessons", () => {
  it("returns deterministic explained recommendations", () => {
    const result = scoreAssessment(uniformAnswers(-2));
    const first = recommendLessons(result);
    const second = recommendLessons(result);

    expect(first).toEqual(second);
    expect(first).toHaveLength(3);
    expect(first.map((item) => item.lesson.id)).toEqual([
      "first-paycheck",
      "retirement-accounts",
      "compound-growth",
    ]);
    expect(first.every((item) => item.reason.length > 40)).toBe(true);
  });

  it("uses trait totals rather than the personality name", () => {
    const result = scoreAssessment(uniformAnswers(2));
    const recommendations = recommendLessons(result);

    expect(recommendations.map((item) => item.lesson.id)).toEqual([
      "first-paycheck",
      "retirement-accounts",
      "compound-growth",
    ]);
    expect(recommendations.flatMap((item) => item.triggeredBy)).toContain("AI");
  });

  it("provides two neutral defaults when scores are balanced", () => {
    const answers = uniformAnswers(2);
    for (const question of assessmentQuestions.filter((item) => !item.anchor)) {
      answers[question.id] = 0;
    }
    for (const question of assessmentQuestions.filter((item) => item.anchor)) {
      answers[question.id] = question.id === "SE4" || question.id === "PF4" ? -1 : 1;
    }

    const recommendations = recommendLessons(scoreAssessment(answers));

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((item) => item.lesson.id)).toEqual([
      "first-paycheck",
      "retirement-accounts",
    ]);
  });
});
