import { getLesson, type LessonId, type LessonSummary } from "../../content/academy/lessons";
import type { AssessmentResult, DimensionId } from "../assessment";

export interface LessonRecommendation {
  readonly lesson: LessonSummary;
  readonly reason: string;
  readonly triggeredBy: readonly DimensionId[];
}

function addRecommendation(
  recommendations: LessonRecommendation[],
  lessonId: LessonId,
  reason: string,
  triggeredBy: readonly DimensionId[],
) {
  if (!recommendations.some((item) => item.lesson.id === lessonId)) {
    recommendations.push({ lesson: getLesson(lessonId), reason, triggeredBy });
  }
}

export function recommendLessons(result: AssessmentResult): readonly LessonRecommendation[] {
  const { SE, AI, PF, CO } = result.dimensions;
  const recommendations: LessonRecommendation[] = [];

  if (Math.abs(SE.total) >= 3 || Math.abs(PF.total) >= 3) {
    addRecommendation(
      recommendations,
      "first-paycheck",
      "Your responses showed a clear approach to present trade-offs or planning. This lesson makes those choices concrete with take-home pay and retirement contributions.",
      ["SE", "PF"],
    );
  }

  if (Math.abs(AI.total) >= 3 || Math.abs(CO.total) >= 3) {
    addRecommendation(
      recommendations,
      "retirement-accounts",
      "Your decision and exploration responses suggest that a clear comparison of unfamiliar account types could be a useful next step.",
      ["AI", "CO"],
    );
  }

  if (SE.total <= -3 || PF.total <= -3 || CO.total >= 3) {
    addRecommendation(
      recommendations,
      "compound-growth",
      "Your responses connected with future security, advance planning, or exploring new tools. This lesson shows how time and repeated contributions interact.",
      ["SE", "PF", "CO"],
    );
  }

  if (recommendations.length < 2) {
    addRecommendation(
      recommendations,
      "first-paycheck",
      "Your responses were relatively balanced across the trade-off dimensions. A concrete paycheck example is a neutral place to begin exploring what changes when you save more or less.",
      ["SE", "PF"],
    );
  }

  if (recommendations.length < 2) {
    addRecommendation(
      recommendations,
      "retirement-accounts",
      "Your responses did not point strongly toward one learning style, so this overview offers a practical foundation for comparing common retirement accounts.",
      ["AI", "CO"],
    );
  }

  return recommendations.slice(0, 3);
}
