import { Link } from "react-router-dom";

import { routePaths } from "../app/routePaths";

export function NotFoundScreen() {
  return (
    <section className="intro" aria-labelledby="not-found-title">
      <p className="eyebrow">404</p>
      <h1 id="not-found-title">That page is not available.</h1>
      <p className="lede">The link may be incomplete or the page may not exist yet.</p>
      <Link className="button-link" to={routePaths.home}>
        Return home
      </Link>
    </section>
  );
}
