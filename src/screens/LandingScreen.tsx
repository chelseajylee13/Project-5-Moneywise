import { Link } from "react-router-dom";

import { routePaths } from "../app/routePaths";

export function LandingScreen() {
  return (
    <section className="hero" aria-labelledby="landing-title">
      <div>
        <p className="eyebrow">Money habits, made understandable</p>
        <h1 id="landing-title">Meet the way you think about money.</h1>
        <p className="lede">
          Explore 16 everyday choices, discover your Moneywise personality, and get a learning
          path built from your actual responses.
        </p>
        <div className="action-row">
          <Link className="button-link" to={routePaths.assessment}>Start the assessment</Link>
          <Link className="text-link" to={routePaths.academy}>Browse the Academy</Link>
        </div>
        <p className="fine-print">
          Moneywise is an original educational self-reflection tool—not a scientific personality
          test or personalized financial advice. No job or financial experience is required.
        </p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <span>S</span><span>A</span><span>P</span><span>C</span>
      </div>
    </section>
  );
}
