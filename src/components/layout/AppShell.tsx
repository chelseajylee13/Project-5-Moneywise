import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import { routePaths } from "../../app/routePaths";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="wordmark" to={routePaths.home} aria-label="Moneywise home">
          moneywise
        </Link>
        <nav aria-label="Main navigation">
          <Link to={routePaths.assessment}>Assessment</Link>
          <Link to={routePaths.academy}>Academy</Link>
        </nav>
      </header>
      <main className="page-container">{children}</main>
    </div>
  );
}
