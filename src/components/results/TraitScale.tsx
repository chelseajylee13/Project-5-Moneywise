import { dimensionDefinitions } from "../../domain/assessment/dimensions";
import type { DimensionScore } from "../../domain/assessment";

export function TraitScale({ score }: { readonly score: DimensionScore }) {
  const definition = dimensionDefinitions[score.dimension];
  const position = ((score.total + 8) / 16) * 100;
  const direction =
    score.total === 0
      ? score.interpretation.label
      : `${score.interpretation.label} toward ${score.total < 0 ? definition.firstLabel : definition.secondLabel}`;

  return (
    <article className="trait-card">
      <div className="trait-heading">
        <h3>{definition.firstLabel} / {definition.secondLabel}</h3>
        <p>{direction}</p>
      </div>
      <div
        className="trait-scale"
        role="img"
        aria-label={`${definition.firstLabel} to ${definition.secondLabel}: ${direction}. ${score.interpretation.explanation}`}
      >
        <span className="trait-marker" style={{ left: `${position}%` }} />
      </div>
      <div className="trait-labels" aria-hidden="true">
        <span>{definition.firstLetter}</span>
        <span>{definition.secondLetter}</span>
      </div>
      <p className="trait-explanation">{score.interpretation.explanation}</p>
      {score.limitedResponse.applies ? (
        <p className="limited-note">{score.limitedResponse.explanation}</p>
      ) : null}
    </article>
  );
}
