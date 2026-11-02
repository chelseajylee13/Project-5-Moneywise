# Research

> EDITING DIRECTIVE: DEVELOPER AND AGENT EDIT THIS FILE COLLABORATIVELY. THE DEVELOPER MUST REVIEW AND APPROVE ITS CONTENT.

Purpose: Keep the evidence, decisions, and current scope that guide the build.

## Working agreement

Developer: Direct the inquiry toward what the next decision needs, judge sources and options, make the consequential decisions, and keep this file current.

Agent: Read the project documents and inspect the project. Help investigate, compare options, and test assumptions quickly. Verify sources directly.

When you begin this step, start a fresh chat so its transcript stays clean. For example:

`Read the project documents and help me research what I need for the next build decision.`

## Inquiry and decisions

Record what informs your build decisions: the questions you investigated, useful sources and what they support, experiments and their results, and the decisions you made with your reasons. Distinguish evidence from assumptions; an Agent's recommendation alone is not evidence.

### Current status

The Developer approved the combined personality-assessment and Moneywise Academy direction on November 2, 2026. The items below marked **Approved** define the current scope. Items marked **Provisional** or **Outstanding** require further research or Developer review before implementation.

### Product and audience

- **Approved:** Moneywise is an educational web application for ages 16–25 with little or no assumed financial knowledge.
- **Approved:** Users are not assumed to have employment, income, investable money, or access to workplace retirement benefits.
- **Approved:** The experience combines a 16-question self-reflection assessment, four response-based binary dimensions, 16 four-letter personality types, transparent lesson recommendations, and a three-lesson Academy.
- **Approved:** The assessment is not scientifically validated, diagnostic, predictive of success, or a measure of financial ability. No personality, pole, or family is superior.
- **Approved:** The application requests no account, income, balance, credential, or other sensitive financial information.

### Assessment and personalization inquiry

- **Approved:** The four dimensions are Security-focused (S) versus Experience-focused (E), Analytical (A) versus Intuitive (I), Planned (P) versus Flexible (F), and Cautious (C) versus Exploratory (O). Selecting one letter from each axis creates all 16 possible codes.
- **Approved:** Deterministic dimensional classification replaces nearest-prototype matching. Each dimension uses three ordinary questions plus one internally identified anchor. Ordinary responses are scored `-2`, `-1`, `0`, `+1`, or `+2`; the zero-scored `Not sure yet` is a valid answer distinct from missing data. Anchor questions use the same agreement direction without the zero option. Items keyed to the first pole are reverse-scored so negative totals indicate the first letter and positive totals indicate the second.
- **Approved:** If a dimension's four-item total equals zero, the keyed sign of its anchor response selects the classification letter. The interface still describes the raw dimension as balanced and explains that a direct preference response supplied the code letter. The anchor is a deterministic implementation tiebreaker, not a more authoritative question and is not presented that way to Users.
- **Provisional:** A raw absolute total of `0` is “balanced,” `1–2` is “nearly balanced,” `3–5` is a moderate lean, and `6–8` is a stronger lean. Wording and thresholds require usability review before implementation.
- **Approved working direction:** Families use the first two letters (SA, SI, EA, EI), and the 16 working names in `spec.md` are approved. Descriptions, strengths, blind spots, and learning suggestions remain provisional content pending usability review.
- **Approved:** The initial result uses qualitative labels and an accessible visual position rather than numerical percentages. It describes patterns in responses, not personality probabilities, fixed traits, scientific measurements, or predictions of financial outcomes.
- **Approved:** Recommendations use dimension scores and meaningful response patterns, never the personality label alone. Each rule explains why a lesson may be useful, and every lesson remains available to every User.
- **Approved working names:** SAPC is The Method Maker and SAFO is The Refiner. The other 14 names remain the approved working direction.
- **Outstanding:** Usability-test the provisionally approved question wording for social-desirability bias, reading level, scenario variety, and how Users interpret `Not sure yet`. Review every profile for distinctiveness, tone, and consistency with its code.

### Academy and financial-content inquiry

- **Approved:** The launch lessons are Your First Paycheck & Employer Match, Retirement Accounts Explained, and The Power of Compound Growth.
- **Approved:** Each lesson follows **Understand → See an Example → Interact → Reflect** and uses predefined, source-verified content and deterministic calculations.
- **Approved:** Phase 2 fully implements only the First Paycheck lesson. The other two follow after the core journey works.
- **Evidence:** IRS guidance describes a 401(k) as a workplace-plan feature that permits employee wage deferrals and may include employer contributions. Eligibility, available features, vesting, and matching depend on the employer's plan; therefore, the lesson must label its scenario and match formula as fictional assumptions.
- **Evidence:** IRS guidance distinguishes a Roth IRA from a designated Roth account within a workplace plan. The comparison lesson must not use “Roth” as if it were one product, and must distinguish account structure, access, contribution eligibility, and tax treatment without claiming one option is best.
- **Evidence:** Investor.gov explains compound growth and investment risk and provides a public compound-interest calculator. The Moneywise simulator must label returns as hypothetical, allow for non-guaranteed outcomes in its explanation, and show contributions separately from projected growth.
- **Evidence:** FDIC Money Smart for Young Adults uses practical scenarios covering income, spending, saving, and credit. CFPB financial-education tools similarly use concrete activities and cash-flow exercises. This supports Moneywise's scenario-first, short-interaction lesson format.
- **Outstanding:** Verify the exact paycheck deductions included in the fictional scenario, choose a clearly labeled fictional salary and match formula, and decide whether the simulator displays nominal dollars only or discusses inflation. Do not add current annual contribution limits until there is a specific learning need and a dated review process.

### Technical inquiry and decisions

- **Approved:** React, TypeScript, Vite, CSS, hash-based routing, and GitHub Pages. No backend, accounts, paid APIs, or runtime generative AI.
- **Approved:** Dimension scoring, letter classification, recommendations, and financial calculations remain pure TypeScript domain functions separate from React components and lesson prose.
- **Approved:** Lesson content and source references are structured data so factual claims can be reviewed without rewriting interface code.
- **Provisional:** Local storage may save non-sensitive progress after the core flow is stable. The experience must work without saved progress.
- **Outstanding:** Select the smallest suitable routing and test libraries during Phase 2 and record their versions, licenses, and reasons before installation.

## Scope

### Stretch goals

Keep the current stretch goals in priority order, starting from your approved pitch, noting cuts and additions.

1. Budgeting and emergency-savings lessons.
2. Credit cards, credit scores, and debt lesson.
3. Investing risk and diversification lesson.
4. Optional local progress persistence.
5. Additional scenario variants, geometric illustrations, and motion polish.
6. Extra assessment questions, family-specific layouts, or type-specific illustrations beyond the shared results structure.

### Scope changes

Record consequential changes to the approved scope: what changed, why, and what was added or cut. Update `spec.md` when a change alters the intended behavior.

- **November 2, 2026 — Academy added during Phase 1 ideation:** The concept expanded from a personality assessment with three challenges into a personality-guided learning platform. To keep five-week scope realistic, the Developer approved exactly three launch lessons and one shared lesson structure. Only one lesson is required for the Phase 2 MVP.
- **November 2, 2026 — Ethical score presentation clarified:** Results use qualitative labels and a visual position, not numerical percentages. They summarize assessment answers rather than psychological probabilities, fixed characteristics, or financial predictions.
- **November 2, 2026 — Routing approved:** Individual Academy lessons will use hash-based routes to support browser navigation and GitHub Pages without server rewrite rules.
- **November 2, 2026 — Sixteen personalities approved:** The earlier four-archetype nearest-prototype model was replaced before development with four deterministic binary classifications producing 16 codes. The assessment increased from 12 to 16 questions. This expands content and testing scope, so all types must share one result structure and recommendations remain trait-driven.
- **November 2, 2026 — Assessment contract finalized for implementation review:** Added zero-scored `Not sure yet` to the 12 non-anchor questions, preserved forced-choice anchors, distinguished neutral from missing state, provisionally approved revised scenario wording, retained provisional qualitative score bands, and renamed SAPC and SAFO. Implementation remains pending Developer approval of this finalized contract.
- **November 2, 2026 — Temporary logo retained:** The Developer reviewed `branding/assets/moneywise-logo.svg` and chose to retain it for the Phase 1 submission as **Provisional — Subject to Refinement**. The Developer plans to redesign or refine the logo in a later phase; retaining this asset does not approve it as final branding.
- **November 2, 2026 — Deferred or cut from launch:** Accounts, sensitive data, live financial connections, a backend, live AI explanations, paid APIs, a large Academy, unique result-page layouts, and bespoke illustrations for all 16 types.

## Sources and credits

List every external source, code library, asset, and dataset you use, with its link, license or usage terms, and required credit.

Reviewed November 2, 2026. These government sources are currently used as factual references only: Moneywise will paraphrase concepts, link to the source, and will not reproduce agency text, calculators, illustrations, seals, or branding. Before publishing copied or adapted media, verify that asset's specific usage terms. Time-sensitive claims must be rechecked near release.

### Financial education references

- **Internal Revenue Service, “401(k) plans.”** https://www.irs.gov/retirement-plans/401k-plans — Supports the basic definition of a 401(k), wage deferrals, employer contributions, and traditional versus designated Roth treatment.
- **Internal Revenue Service, “Retirement topics — Designated Roth account.”** https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-designated-roth-account — Supports workplace Roth account structure and tax-treatment distinctions. Annual figures on this or any page require a current-year check before use.
- **Internal Revenue Service, “Ten differences between a Roth IRA and a designated Roth account.”** https://www.irs.gov/retirement-plans/ten-differences-between-a-roth-ira-and-a-designated-roth-account — Supports the account comparison and prevents conflating Roth IRAs with Roth workplace accounts.
- **Internal Revenue Service, “Traditional and Roth IRAs.”** https://www.irs.gov/retirement-plans/traditional-and-roth-iras — Supports introductory IRA distinctions and links to current eligibility and contribution guidance.
- **U.S. Securities and Exchange Commission, Investor.gov, “Introduction to Investing.”** https://www.investor.gov/introduction-investing — Supports plain-language explanations of saving, investing, compound growth, risk, asset allocation, and diversification.
- **U.S. Securities and Exchange Commission, Investor.gov, “Compound Interest Calculator.”** https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator — Reference for the inputs and educational framing of compound-growth calculations; Moneywise will implement and test its own deterministic calculator rather than embed or copy this tool.
- **Consumer Financial Protection Bureau, “Your Money, Your Goals toolkit.”** https://www.consumerfinance.gov/consumer-tools/educator-tool/your-money-your-goals/toolkit/ — Supports activity-based treatment of income, spending, cash flow, saving, debt, and credit.
- **Consumer Financial Protection Bureau, “An essential guide to building an emergency fund.”** https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/ — Supports future emergency-savings content; currently a stretch-goal reference.
- **Federal Deposit Insurance Corporation, “Money Smart for Young Adults.”** https://www.fdic.gov/consumer-resource-center/money-smart-young-adults — Supports the target audience, practical scenario format, and topic selection around income, spending, saving, and credit.

### Technical and creative credits

- **Moneywise provisional logo.** `branding/assets/moneywise-logo.svg` — Original SVG created collaboratively by the Developer and Agent for this project. No external image or logo asset was copied. Status: **Provisional — Subject to Refinement**. The mark uses a lowercase system-font wordmark and four rounded geometric fields inside a coin/compass circle. Colors: warm off-white `#F5F1E8`, charcoal `#262A27`, sage `#93A88F` and `#758D73`, and muted lavender `#B7A8C8` and `#9C8DAF`. No external attribution is required.
- No application libraries or other external creative assets have been selected or installed. Record each future dependency, font, icon, illustration, photograph, or adapted asset here before use, including its version or creator, source link, license, modifications, and required attribution.
