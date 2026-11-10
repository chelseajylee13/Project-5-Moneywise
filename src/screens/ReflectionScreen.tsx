import { Link } from "react-router-dom";

import { routePaths } from "../app/routePaths";

export function ReflectionScreen() {
  return (
    <section className="reflection-page" aria-labelledby="reflection-title">
      <p className="eyebrow">Lesson reflection</p>
      <h1 id="reflection-title">What trade-off did you notice?</h1>
      <p className="lede">
        Consider how increasing a contribution changed current take-home pay, the employer match,
        and the total entering retirement. There is no answer you need to submit or save.
      </p>
      <div className="reflection-prompts">
        <p>Which output changed in a way you did not expect?</p>
        <p>What question would you ask before joining a real workplace plan?</p>
      </div>
      <div className="action-row">
        <Link className="button-link" to={routePaths.academy}>Return to Academy</Link>
        <Link className="text-link" to={routePaths.firstPaycheck}>Replay the lesson</Link>
      </div>
    </section>
  );
}
