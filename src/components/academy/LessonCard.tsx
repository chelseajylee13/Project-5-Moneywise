import { Link } from "react-router-dom";

import { routePaths } from "../../app/routePaths";
import type { LessonRecommendation } from "../../domain/recommendations/recommendLessons";
import type { LessonSummary } from "../../content/academy/lessons";

interface LessonCardProps {
  readonly lesson: LessonSummary;
  readonly recommendation?: LessonRecommendation;
}

export function LessonCard({ lesson, recommendation }: LessonCardProps) {
  return (
    <article className="lesson-card">
      <div className="lesson-meta">
        <span>{lesson.estimatedTime}</span>
        <span className={lesson.status === "available" ? "status available" : "status"}>
          {lesson.status === "available" ? "Available now" : "Upcoming"}
        </span>
      </div>
      <h3>{lesson.title}</h3>
      <p>{lesson.summary}</p>
      {recommendation ? <p className="recommendation-reason">{recommendation.reason}</p> : null}
      <p className="lesson-preview">{lesson.preview}</p>
      {lesson.id === "first-paycheck" ? (
        <Link className="button-link" to={routePaths.firstPaycheck}>
          Start lesson
        </Link>
      ) : (
        <span className="unavailable-label">Not yet functional</span>
      )}
    </article>
  );
}
