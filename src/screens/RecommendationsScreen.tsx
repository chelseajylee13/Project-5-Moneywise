import { Link } from "react-router-dom";

import { useAssessment } from "../app/AssessmentContext";
import { routePaths } from "../app/routePaths";
import { LessonCard } from "../components/academy/LessonCard";
import { recommendLessons } from "../domain/recommendations/recommendLessons";

export function RecommendationsScreen() {
  const { result } = useAssessment();

  if (!result) {
    return (
      <section className="empty-state">
        <h1>Your learning path needs an assessment result.</h1>
        <Link className="button-link" to={routePaths.assessment}>Start assessment</Link>
      </section>
    );
  }

  const recommendations = recommendLessons(result);

  return (
    <section className="catalog-page" aria-labelledby="recommendation-title">
      <header className="section-heading">
        <p className="eyebrow">Your learning path</p>
        <h1 id="recommendation-title">Start where your responses connect.</h1>
        <p className="lede">
          These suggestions use your dimension totals and response patterns—not your personality
          name alone. Every Academy lesson remains open to everyone.
        </p>
      </header>
      <div className="lesson-grid">
        {recommendations.map((recommendation) => (
          <LessonCard
            key={recommendation.lesson.id}
            lesson={recommendation.lesson}
            recommendation={recommendation}
          />
        ))}
      </div>
      <Link className="text-link" to={routePaths.academy}>Browse the full Academy</Link>
    </section>
  );
}
