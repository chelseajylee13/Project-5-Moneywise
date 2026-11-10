import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { routePaths } from "../app/routePaths";
import {
  calculatePaycheck,
  paycheckAssumptions,
} from "../domain/academy/paycheck";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function FirstPaycheckScreen() {
  const [contributionPercent, setContributionPercent] = useState(6);
  const result = useMemo(
    () => calculatePaycheck(contributionPercent),
    [contributionPercent],
  );

  return (
    <article className="lesson-page" aria-labelledby="lesson-title">
      <header className="lesson-hero">
        <p className="eyebrow">Moneywise Academy · Available lesson</p>
        <h1 id="lesson-title">Your First Paycheck & Employer Match</h1>
        <p className="lede">
          You do not need a job or workplace benefits to use this example. Follow one fictional
          paycheck and see how a retirement contribution changes the trade-off.
        </p>
      </header>

      <section className="lesson-section">
        <p className="step-label">01 · Understand</p>
        <h2>Gross pay is the starting point—not what reaches your account.</h2>
        <p>
          Gross pay is earnings before deductions. Take-home pay, sometimes called net pay, is
          what remains after taxes and other deductions. A 401(k) is a workplace retirement plan;
          some employers match part of an employee contribution, but not every employer offers
          a plan or match.
        </p>
      </section>

      <section className="lesson-section scenario-panel">
        <p className="step-label">02 · See an example</p>
        <h2>Meet Jordan’s fictional monthly paycheck.</h2>
        <dl className="assumption-grid">
          <div><dt>Gross pay</dt><dd>{currency.format(paycheckAssumptions.monthlyGrossPay)}</dd></div>
          <div><dt>Illustrative withholding</dt><dd>{currency.format(paycheckAssumptions.illustrativeWithholding)}</dd></div>
          <div><dt>Benefits deduction</dt><dd>{currency.format(paycheckAssumptions.benefitsDeduction)}</dd></div>
          <div><dt>Fictional match</dt><dd>50% of contributions, up to 6% of pay</dd></div>
        </dl>
        <p className="fine-print">
          These are simplified fictional assumptions, not a tax calculation or paycheck estimate.
          Actual deductions, eligibility, matching formulas, and vesting rules vary by employer and plan.
        </p>
      </section>

      <section className="lesson-section interactive-panel">
        <div>
          <p className="step-label">03 · Interact</p>
          <h2>Choose Jordan’s contribution.</h2>
          <label className="range-label" htmlFor="contribution">
            Employee contribution: <strong>{contributionPercent}%</strong>
          </label>
          <input
            id="contribution"
            type="range"
            min="0"
            max="10"
            step="1"
            value={contributionPercent}
            onChange={(event) => setContributionPercent(Number(event.target.value))}
          />
          <div className="range-labels" aria-hidden="true"><span>0%</span><span>10%</span></div>
        </div>
        <div className="paycheck-output" aria-live="polite">
          <div><span>Employee contribution</span><strong>{currency.format(result.employeeContribution)}</strong></div>
          <div><span>Fictional employer match</span><strong>{currency.format(result.employerMatch)}</strong></div>
          <div className="output-total"><span>Total added to retirement</span><strong>{currency.format(result.totalRetirementContribution)}</strong></div>
          <div><span>Illustrative take-home pay</span><strong>{currency.format(result.estimatedTakeHome)}</strong></div>
        </div>
        <p className="calculation-note">
          Moneywise subtracts the selected employee contribution from the simplified take-home
          amount. The employer match goes to the retirement account; it does not increase current
          take-home pay. The match stops increasing after a 6% employee contribution in this example.
        </p>
      </section>

      <section className="lesson-section">
        <p className="step-label">04 · Reflect</p>
        <h2>There is a trade-off, not one correct percentage.</h2>
        <p>
          A larger contribution leaves less current spending money in this simplified example and
          adds more to retirement. Real decisions depend on needs, plan rules, and access to benefits.
        </p>
        <Link className="button-link" to={routePaths.reflection}>Reflect on the trade-off</Link>
      </section>

      <footer className="source-note">
        <h2>Sources reviewed November 9, 2026</h2>
        <ul>
          <li><a href="https://www.irs.gov/retirement-plans/plan-sponsor/401k-plan-overview">IRS: 401(k) plan overview</a></li>
          <li><a href="https://www.irs.gov/retirement-plans/matching-contributions-help-you-save-more-for-retirement">IRS: Matching contributions</a></li>
          <li><a href="https://files.consumerfinance.gov/f/documents/cfpb_building_block_activities_how-to-read-pay-stub_handout.pdf">CFPB: How to read a pay stub</a></li>
        </ul>
      </footer>
    </article>
  );
}
