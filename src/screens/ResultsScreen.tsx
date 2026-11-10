import { Link, useNavigate } from "react-router-dom";

import { useAssessment } from "../app/AssessmentContext";
import { routePaths } from "../app/routePaths";
import { TraitScale } from "../components/results/TraitScale";
import { dimensionIds } from "../domain/assessment";

export function ResultsScreen() {
  const { result, resetAssessment } = useAssessment();
  const navigate = useNavigate();

  if (!result) {
    return (
      <section className="empty-state">
        <p className="eyebrow">Result unavailable</p>
        <h1>Complete the assessment first.</h1>
        <p>Your result is calculated only after all 16 responses are present.</p>
        <Link className="button-link" to={routePaths.assessment}>Start assessment</Link>
      </section>
    );
  }

  return (
    <section className="results-page" aria-labelledby="result-title">
      <header className="result-hero">
        <p className="eyebrow">{result.personality.family.name}</p>
        <p className="personality-code">{result.code}</p>
        <h1 id="result-title">{result.personality.name}</h1>
        <p className="lede">{result.personality.description}</p>
        <p className="family-description">{result.personality.family.description}</p>
      </header>

      <div className="profile-grid">
        <article className="profile-panel">
          <p className="eyebrow">Financial strengths</p>
          <ul>{result.personality.strengths.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="profile-panel lavender">
          <p className="eyebrow">Possible blind spots</p>
          <ul>{result.personality.blindSpots.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </div>

      <section className="trait-section" aria-labelledby="trait-title">
        <p className="eyebrow">Your response tendencies</p>
        <h2 id="trait-title">Four dimensions, one working profile</h2>
        <p>These scales summarize this set of responses. They are not probabilities or fixed traits.</p>
        <div className="trait-grid">
          {dimensionIds.map((dimension) => (
            <TraitScale key={dimension} score={result.dimensions[dimension]} />
          ))}
        </div>
      </section>

      <details className="calculation-details">
        <summary>How was my result calculated?</summary>
        <p>
          Agreement responses use values from −2 to +2. First-pole agreement statements are
          reverse-scored. Scenario choices map directly to their direction.
        </p>
        {dimensionIds.map((dimension) => {
          const score = result.dimensions[dimension];
          return (
            <section className="calculation-dimension" key={dimension}>
              <h3>{dimension}: total {score.total >= 0 ? "+" : ""}{score.total}</h3>
              <ol>
                {score.contributions.map((item) => (
                  <li key={item.questionId}>
                    <p><strong>{item.questionText}</strong></p>
                    <p>Your answer: “{item.selectedAnswer}”</p>
                    <p>
                      Contribution: {item.scoredContribution >= 0 ? "+" : ""}
                      {item.scoredContribution}
                      {item.reverseScored ? " after reverse scoring" : ""}
                    </p>
                  </li>
                ))}
              </ol>
              <p>Assigned <strong>{score.assignedLetter}</strong>. {score.interpretation.explanation}</p>
              {score.anchorTiebreakerApplied ? (
                <p className="tie-note">
                  The total was balanced, so the direct preference in {score.anchorQuestionId}
                  supplied the code letter.
                </p>
              ) : null}
            </section>
          );
        })}
      </details>

      <div className="page-cta">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Turn reflection into practical learning.</h2>
        </div>
        <Link className="button-link" to={routePaths.recommendations}>
          Continue to my learning path
        </Link>
      </div>
      <button
        className="button-secondary retake-button"
        type="button"
        onClick={() => {
          resetAssessment();
          navigate(routePaths.assessment);
        }}
      >
        Retake assessment
      </button>
    </section>
  );
}
