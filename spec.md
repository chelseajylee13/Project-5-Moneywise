# Specification

> EDITING DIRECTIVE: DEVELOPER AND AGENT EDIT THIS FILE COLLABORATIVELY. THE DEVELOPER MUST REVIEW AND APPROVE ITS CONTENT.

Purpose: Keep a concise, testable description of what the project should do now and how the system is structured to do it.

## Working agreement

Developer: Approve the intended behavior and the system's structure, test directly, understand each part well enough to explain it in your own words, and update this file whenever either changes.

Agent: Read the project documents and inspect the project. Turn the Developer's decisions into acceptance checks without inventing product choices or freezing details that still need testing. Propose structures suited to the project's scope, with their trade-offs, in plain language. Keep the architecture consistent with the actual project and point out where they have drifted apart. Do not restructure the project without the Developer's approval.

When you begin this step, start a fresh chat so its transcript stays clean. For example:

`Read the project documents, inspect the project, and help me specify what the next version should do.`

## Intended experience

What Users should be able to do and experience in the current version, tied to the goals in your pitch.

**Status:** Requirements below are Developer-approved unless marked **Provisional** or **Outstanding**.

Moneywise should help Users ages 16–25 reflect on how their assessment answers relate to four money-behavior dimensions, then move into practical financial education without judgment. The intended journey is:

**Landing → Discover → Analyze → Learn → Apply → Reflect**

Users may instead enter Moneywise Academy directly. The assessment personalizes suggested starting points but never restricts lesson access. The experience must not assume employment, income, access to benefits, prior knowledge, or investable money.

Results describe response patterns, not psychological probabilities, diagnoses, fixed traits, financial competence, or likelihood of success. Lessons provide general education using fictional examples, not personalized financial, investment, legal, or tax advice.

## Behavior and acceptance checks

For each feature or behavior you are building, describe what it should do and what counts as working, including failure cases and accessibility where they apply. Distinguish approved behavior from provisional ideas, and leave untested details open until they are needed.

### Landing and navigation — Approved

- Introduce Moneywise's purpose and the self-reflection limitation in plain language.
- Offer separate actions to begin the assessment or browse Academy.
- Allow browser-back and direct Academy lesson navigation through hash-based routes.
- On an unknown route, show a useful recovery path rather than a blank screen.
- Provide a visible keyboard focus state and logical heading and landmark structure.

### Assessment — Approved contract; wording provisional

- Present exactly 16 questions covering four dimensions, with four questions per dimension.
- Require one valid response per question before calculating a result; never silently substitute an answer.
- Let Users review or change earlier answers before submitting.
- Show progress in text as well as visually.
- Support keyboard and touch input without relying on drag gestures.
- Explain before submission that the activity is an original educational self-reflection framework, not a validated psychological test.
- Explain that Users do not need a job, financial account, or previous financial experience and may answer hypothetical situations based on what feels most natural.
- For the 12 non-anchor questions, show Strongly disagree, Somewhat disagree, Not sure yet, Somewhat agree, and Strongly agree. `Not sure yet` is a valid answered state scored `0`; it is not equivalent to missing data.
- For the four anchor questions, use the forced-choice four-point agreement scale without `Not sure yet` so an exact tie always has a deterministic direction.
- A missing response has no score and blocks submission until answered. Do not silently convert it to `0`.
- Avoid language suggesting a correct or financially superior response. The internal anchor and reverse-score metadata must never be presented as a signal that one question is more important.
- **Provisional:** Final ordering and the approved working wording below require small-scale usability testing before being treated as stable content.

### Personality dimensions and scoring — Approved contract; provisional interpretation bands

The four axes are:

1. Security-focused (S) ↔ Experience-focused (E)
2. Analytical (A) ↔ Intuitive (I)
3. Planned (P) ↔ Flexible (F)
4. Cautious (C) ↔ Exploratory (O)

For every axis, the first listed pole is negative and the second is positive. An ordinary second-pole item maps Strongly disagree, Somewhat disagree, Not sure yet, Somewhat agree, and Strongly agree to `-2`, `-1`, `0`, `+1`, and `+2`. A first-pole item is explicitly marked `reverse: true`, multiplying that response value by `-1`. Four keyed values are summed, giving an integer raw total from `-8` to `+8`. Anchor items never receive `0`.

- Negative total → first letter: S, A, P, or C.
- Positive total → second letter: E, I, F, or O.
- Zero total → use the keyed sign of that dimension's internally identified anchor response. Because the anchor scale has no neutral option, it always supplies a direction.

The anchor breaks classification ties only. A zero raw total must still display as balanced, and the question must not appear more authoritative in the interface. The result explanation states that a direct preference response supplied the code letter when the overall answers were evenly split. The same answers always produce the same four-letter code. Tests must demonstrate that all 16 codes are reachable.

**Provisional interpretation bands:** absolute total `0` is balanced, `1–2` is nearly balanced, `3–5` is a moderate lean, and `6–8` is a stronger lean. Directional language describes response patterns, for example, “Your responses leaned toward analytical decision-making.” The interface states that preferences and habits may change.

The initial version does not display numerical percentages. Each dimension uses a clear visual position plus the primary qualitative labels balanced, nearly balanced, moderate lean, or stronger lean. Every visual has an equivalent text statement and does not imply probability, accuracy, fixed trait strength, scientific measurement, or prediction of financial outcomes. **Provisional:** If two or more non-anchor answers on one dimension are `Not sure yet`, its explanation notes that the result is based on fewer directional responses and does not use stronger certainty language.

#### Proposed assessment questions — Provisional

The IDs, axis, key direction, reverse-score status, and anchor status are internal. Question language is shown to Users; metadata is not.

| ID | Dimension | Proposed statement | Keying | Anchor |
| --- | --- | --- | --- | --- |
| SE1 | S/E | If I received some money unexpectedly, I would be more likely to save it for future needs than spend it on something enjoyable now. | S; reverse | No |
| SE2 | S/E | A meaningful experience can be worth saving a little less for a while. | E; standard | No |
| SE3 | S/E | Before paying for a special event or trip, I would want money set aside in case something unexpected happened. | S; reverse | No |
| SE4 | S/E | If both choices were reasonable, I would choose a memorable experience now over putting the same amount into savings. | E; standard | Yes |
| AI1 | A/I | Before making a money decision, I prefer comparing the numbers and available options. | A; reverse | No |
| AI2 | A/I | I can feel comfortable with a money choice before I can explain all the numbers behind it. | I; standard | No |
| AI3 | A/I | Even for a purchase I care about, I would check the cost and alternatives before deciding. | A; reverse | No |
| AI4 | A/I | When I do not have complete information, I would rather follow my instincts than keep analyzing. | I; standard | Yes |
| PF1 | P/F | I like deciding in advance how I would use my money. | P; reverse | No |
| PF2 | P/F | I prefer leaving room to change a spending or saving plan when circumstances change. | F; standard | No |
| PF3 | P/F | If I received money, I would prefer assigning it to specific purposes instead of deciding as I go. | P; reverse | No |
| PF4 | P/F | If circumstances changed, I would rather adapt freely than stay with my original money plan. | F; standard | Yes |
| CO1 | C/O | When learning about money, I prefer starting with familiar options before considering unfamiliar ones. | C; reverse | No |
| CO2 | C/O | I enjoy learning how an unfamiliar financial tool or account works. | O; standard | No |
| CO3 | C/O | I would rather understand one financial option thoroughly than explore several unfamiliar possibilities at once. | C; reverse | No |
| CO4 | C/O | After learning the basics, I would rather explore a new financial approach than stay with one I already know. | O; standard | Yes |

These questions are provisionally approved. Before implementation is considered content-complete, test their reading level, double meanings, social desirability, scenario variety, and whether `Not sure yet` is understood as uncertainty rather than a neutral preference. Each scenario remains hypothetical and answerable without employment or financial-product experience.

### Sixteen personality types and families — Provisional matrix

Families are provisionally determined by the first two letters. Their identities summarize orientation and decision style; the last two letters create meaningful variations in planning and exploration. The matrix is content for Developer review, not a validated taxonomy.

#### SA — Measured Builders

Security-focused and analytical. This family tends to protect stability through evidence, comparison, and deliberate trade-offs.

| Code | Working name | Short description | Potential strengths | Possible blind spots | Educational financial-growth suggestions |
| --- | --- | --- | --- | --- | --- |
| SAPC | The Method Maker | Builds orderly financial foundations and prefers well-tested plans. | Preparation, consistency, careful comparison | May delay action while seeking certainty or resist useful change | Compare retirement-account structures; test paycheck assumptions |
| SAPO | The Strategist | Uses structure and research to pursue promising new options without losing sight of security. | Long-range thinking, informed experimentation | May overengineer decisions or underestimate emotional priorities | Explore compound-growth assumptions; compare account trade-offs |
| SAFC | The Calibrator | Protects stability while adjusting plans as new facts appear. | Practical analysis, measured flexibility | May repeatedly revise instead of committing or focus heavily on downside | Practice paycheck trade-offs; examine how match rules change outcomes |
| SAFO | The Refiner | Looks for flexible, evidence-based ways to improve financial outcomes. | Resourcefulness, comparison, adaptive problem-solving | May chase marginal improvements or make simple choices feel complex | Test employer-match scenarios; vary compound-growth inputs |

#### SI — Steady Guides

Security-focused and intuitive. This family tends to protect stability through values, lived experience, and awareness of what feels sustainable.

| Code | Working name | Short description | Potential strengths | Possible blind spots | Educational financial-growth suggestions |
| --- | --- | --- | --- | --- | --- |
| SIPC | The Steward | Follows a steady plan and treats money as something to protect with care. | Reliability, patience, responsibility | May avoid unfamiliar options or rely on comfortable rules without comparing them | Learn paycheck and deduction basics; compare traditional and Roth structures |
| SIPO | The Wayfinder | Uses a clear plan and personal judgment to explore opportunities selectively. | Purpose, commitment, thoughtful courage | May become attached to an initial direction or overlook disconfirming details | Compare retirement accounts; test long-term projections and assumptions |
| SIFC | The Anchor | Maintains a sense of security while adapting gently to changing circumstances. | Resilience, restraint, awareness of personal limits | May remain with familiar choices too long or leave goals loosely defined | Explore paycheck allocation; learn how time changes compound growth |
| SIFO | The Scout | Protects a secure base while using instinct to investigate new possibilities. | Curiosity with boundaries, adaptability | May act on a promising impression before checking costs or rules | Practice account comparison; inspect risk and assumptions in projections |

#### EA — Intentional Explorers

Experience-focused and analytical. This family tends to pursue meaningful possibilities through research, design, and explicit trade-offs.

| Code | Working name | Short description | Potential strengths | Possible blind spots | Educational financial-growth suggestions |
| --- | --- | --- | --- | --- | --- |
| EAPC | The Curator | Plans valued experiences carefully and selects opportunities with evidence. | Prioritization, research, intentional spending | May rationalize preferred experiences or make plans too rigid | Compare take-home and saving trade-offs; examine retirement-account constraints |
| EAPO | The Producer | Turns ambitious possibilities into researched plans and concrete next steps. | Initiative, organization, informed exploration | May take on too many goals or assume a detailed plan controls uncertainty | Test compound-growth scenarios; explore employer-match assumptions |
| EAFC | The Editor | Revises choices as circumstances change while keeping attention on what matters most. | Discernment, flexibility, evidence-based adjustment | May optimize after every new detail or struggle to settle on priorities | Practice paycheck allocation; compare account features side by side |
| EAFO | The Experimenter | Learns by testing new options, observing results, and adjusting quickly. | Curiosity, analytical learning, adaptability | May treat financial choices as low-cost experiments when consequences persist | Explore projection uncertainty; compare account rules before acting |

#### EI — Responsive Pioneers

Experience-focused and intuitive. This family tends to value possibility, personal meaning, and responsiveness to the moment.

| Code | Working name | Short description | Potential strengths | Possible blind spots | Educational financial-growth suggestions |
| --- | --- | --- | --- | --- | --- |
| EIPC | The Grounded Dreamer | Makes plans for meaningful experiences while keeping exploration within chosen limits. | Purpose, imagination, follow-through | May build a plan around optimistic assumptions or avoid less inspiring details | Work through paycheck deductions; compare retirement-account basics |
| EIPO | The Trailblazer | Commits to an exciting direction and is willing to explore beyond familiar choices. | Vision, momentum, openness | May move quickly past uncertainty or treat enthusiasm as evidence | Test long-term scenarios; examine employer-match and account rules |
| EIFC | The Navigator | Adapts by feel, values present experience, and avoids unnecessary uncertainty. | Responsiveness, practical self-awareness | May postpone long-term structure or default to the most comfortable option | Practice flexible paycheck trade-offs; build a foundation in account types |
| EIFO | The Catalyst | Responds quickly to possibilities and brings energy to trying new approaches. | Initiative, creativity, comfort with change | May underweight future costs, details, or consistency | Explore compound-growth trade-offs; slow decisions through account comparison |

The short learning suggestions above are possible starting points, not the final recommendation engine. Actual recommendations primarily use individual scores and response rules. All Users can access all lessons.

### Results and recommendations — Approved

- Show the four-letter code and personality name as an approachable summary, not a diagnosis or destiny.
- Show all four response tendencies with qualitative labels and text equivalents for every visual.
- Render all 16 records through one shared result-page structure containing description, strengths, possible blind spots, financial growth suggestions, response-score explanations, and learning recommendations.
- Treat every name and description as editable content data rather than branching presentation code.
- Include changeable habits using neutral language and explain that people with the same code may behave differently.
- Recommend lessons from actual dimension thresholds or meaningful answer patterns, not from the personality code alone.
- For every recommendation, show a brief explanation identifying the relevant response tendency without claiming a knowledge deficit.
- Resolve multiple matches with a documented priority rule and show no more than three recommendations.
- If no specific rule matches, provide a neutral default recommendation.
- Always provide access to the complete Academy.
- Recommendation boundary values and fallback behavior must have automated tests.

### Moneywise Academy — Approved

The launch catalog contains:

1. Your First Paycheck & Employer Match
2. Retirement Accounts Explained
3. The Power of Compound Growth

Each lesson follows **Understand → See an Example → Interact → Reflect**. It includes concise source-verified copy, a fictional scenario, one meaningful interaction, plain-language assumptions, a reflection, source links, and a factual review date.

Financial content must distinguish workplace plans from IRAs and traditional from Roth tax treatment where relevant. A retirement account must not be presented as an investment by itself. Employer matching, eligibility, vesting, deductions, and tax situations vary; fictional examples must not be mistaken for universal rules. Annual contribution limits or other time-sensitive figures may appear only with a source and “reviewed on” date.

### Phase 2 First Paycheck lesson — Approved scope

- State that the User does not need a job or workplace benefits to learn from the scenario.
- Identify all salary, deduction, contribution, and employer-match figures as fictional assumptions.
- Let the User change at least a retirement contribution input and see employee contribution, hypothetical employer match, total retirement contribution, and estimated take-home trade-offs update deterministically.
- Do not imply that the scenario includes every payroll deduction or produces a real paycheck estimate.
- Explain the calculation and rounding in plain language.
- Allow zero contribution and boundary inputs without errors or misleading output.
- End with a reflection that describes trade-offs without prescribing a personally correct contribution.

### Later launch lessons — Approved, not required for Phase 2

- **Retirement Accounts Explained:** Compare traditional 401(k), Roth 401(k), traditional IRA, and Roth IRA through an approachable interactive matrix or sorting activity. Do not recommend one account as universally best.
- **The Power of Compound Growth:** Adjust starting age, ending age, starting amount, monthly contribution, and hypothetical return. Separate contributions from hypothetical growth, label results as projections rather than promises, and explain that actual returns vary.

### Privacy, persistence, and restart — Approved with provisional persistence

- Collect no accounts, credentials, income, balances, employer details, or other real personal financial data.
- Allow assessment restart and lesson replay.
- Core assessment and Academy browsing must work without local storage.
- **Provisional:** If local progress saving is added, disclose what stays in the browser, provide a clear reset, validate stored data, and recover safely from missing or outdated values.

### Shared accessibility and responsive checks — Approved

- All actions work by keyboard and touch; focus order remains logical.
- Text, controls, focus indicators, and meaningful graphics meet the selected WCAG contrast target.
- Do not use color alone to communicate traits, progress, or chart series.
- Charts have labels and equivalent text summaries.
- Motion respects `prefers-reduced-motion` and is never required to understand an outcome.
- Content remains usable at narrow mobile widths and enlarged text without horizontal page scrolling.
- Errors and unavailable state explain recovery in text.

## Architecture

How the system works and the structural decisions that keep it coherent, consistent, and easy to change. Adapt these sections to your project and tech stack.

### Overview

The main parts of the system, what each is responsible for, and how they connect. Include a simple diagram.

Moneywise is a static client-side React application. Structured content supplies questions, 16 personality records, lesson prose, and sources. Pure TypeScript domain functions transform answers and fictional lesson inputs. React screens render those outputs and manage navigation; they do not contain hidden scoring or financial rules.

```text
question content → answers → dimension totals → four-letter code → personality record
                                      │
lesson catalog → recommendation rules ┴→ suggested lessons
      │
      └→ lesson content → activity calculation → reflection/progress

hash route + current state → React screens → accessible visual/text output
```

The planned layers are:

- `domain/assessment`: dimension scoring, deterministic letter classification, and recommendation rules.
- `domain/academy`: paycheck, match, and compound-growth calculations.
- `content`: questions, personality records, lessons, and source records.
- `screens`: route-level landing, assessment, results, Academy, lesson, and reflection views.
- `components`: reusable interface, assessment, lesson, and chart pieces.
- `storage`: optional non-sensitive progress adapter.
- `styles`: global rules and design tokens.
- `tests`: domain rules and critical interaction tests.

### Data and state

What information the system keeps, where each piece lives, and how it moves and changes. Name the single source of truth for each important piece of state.

- **Question definitions:** static typed content; the single source for prompt, dimension, direction, response mapping, reverse-score flag, and anchor flag.
- **Current answers:** application assessment state; the only mutable source during an assessment. Missing is represented separately from the valid zero-scored `Not sure yet` response, and anchors cannot hold `0`.
- **Dimension profile and personality code:** derived from current answers by the scoring function; never separately hand-edited.
- **Personality name and profile copy:** one static record keyed by each of the 16 valid codes.
- **Recommendation list:** derived from the trait profile and documented answer-pattern rules.
- **Lesson catalog and factual sources:** static typed content with source IDs and review dates.
- **Activity inputs:** lesson-screen state; calculation outputs are derived rather than independently stored.
- **Navigation:** the URL hash is the source of the active route.
- **Progress:** session state initially; optional validated local storage later. Saved data must not become the source for financial facts or calculation rules.

A lesson record contains its ID, title, summary, topic tags, estimated time, ordered sections, activity ID, reflection, source IDs, and factual review date. A source record contains publisher, title, URL, supported claims, access date, and whether it is time-sensitive.

### Interaction loop

How User input or other events lead to changes in state and then to what the User sees, hears, or receives.

```text
User answers a question
→ assessment state changes
→ after valid submission, pure scoring calculates four response scores
→ sign and documented anchor tiebreaks select four letters
→ the code selects one personality content record
→ recommendation rules select and explain lesson suggestions
→ results render chart plus text
→ User opens any lesson
→ fictional inputs change
→ pure lesson calculation returns new outputs
→ interface explains what changed and why
→ reflection records completion in session state
```

Invalid, incomplete, unknown-route, or unavailable-saved-state paths must return a clear recovery action rather than manufacturing data.

### Visual and content rules

The shared rules that establish the art style and keep the presentation consistent, such as branding, layout, color, type, motion, sound, and asset conventions.

- Use a modern editorial hierarchy with a restrained responsive content width, large sans-serif display type, readable body type, generous spacing, and consistent alignment.
- Use warm off-white and deep charcoal as the base; muted sage, soft lavender, and restrained neutrals provide accents. Final color values and typefaces are **Outstanding** pending visual testing and license review.
- The Phase 1 logo at `branding/assets/moneywise-logo.svg` is **Provisional — Subject to Refinement**. Its lowercase wordmark supports an approachable editorial tone; its circular coin/compass outline refers to money and direction; four rounded fields represent the four assessment dimensions; and the center diamond represents their combined result. Preserve the asset for the Phase 1 snapshot, but do not treat its symbol, typography, spacing, or palette values as final design-system rules.
- Use clean cards, dividers, and minimal geometric illustrations. Avoid mascots, cartoon game language, saturated reward effects, and generic banking-dashboard chrome.
- Build every layout from shared container, spacing, type, color, radius, and motion tokens rather than page-specific values.
- Motion should explain state change or hierarchy, remain subtle, and have a reduced-motion alternative.
- Trait charts and simulations pair visual output with plain-language summaries and visible assumptions.
- Use conversational, concise, nonjudgmental language. Define a technical term before relying on it.
- Label fictional examples, hypothetical returns, limitations, and source review dates near the relevant content rather than hiding them in a general disclaimer.
- Do not copy the distinctive appearance, wording, type names, descriptions, codes beyond Moneywise's approved axes, or illustrations of another personality or education brand.

### Structure rules

The conventions that keep the system lean: how files and code are organized, where new features belong, and the general rules that handle cases by design instead of one-off fixes.

- Domain functions may not import React or read the browser directly.
- Components render passed data and emit events; they do not redefine scoring, recommendation, or financial formulas.
- Content records reference source IDs instead of duplicating citation text.
- New lesson content uses the shared lesson structure; only its meaningful activity receives lesson-specific domain logic.
- Use one route-level screen per major experience stage and shared primitives for repeated interface patterns.
- Add dependencies only when they replace substantial reliable work; record their version, license, and purpose in `research.md`.
- Prefer native HTML controls and CSS/SVG over large UI or chart libraries.
- Do not create a generic visual lesson-builder or plugin system for three known lessons.
- Handle invalid content and state through shared validation and recovery rules, not screen-specific patches.

### Decisions and changes

Consequential structural decisions, the alternatives considered, and why you chose as you did, including later changes to the structure.

- **November 2, 2026 — Combined product:** Chose personality-guided Academy over assessment-only or Academy-only concepts to connect a distinctive entry point with practical learning. Scope is controlled through three launch lessons.
- **November 2, 2026 — Static client architecture:** Chose React, TypeScript, Vite, and structured local content over a backend because the approved experience needs no accounts, live data, or private information.
- **November 2, 2026 — Pure domain logic:** Scoring, recommendations, and calculators stay separate from presentation so results can be explained and tested.
- **November 2, 2026 — Hash routes:** Chose hash-based navigation over server-style paths to support individual Academy views and browser history on GitHub Pages without rewrite configuration.
- **November 2, 2026 — Source-linked content:** Chose structured source records and review dates because financial rules can change and factual maintenance must not depend on searching interface components.
- **November 2, 2026 — Runtime AI excluded:** Chose predefined reviewed content over generated explanations to protect accuracy, privacy, reliability, and scope. AI-assisted development decisions will be documented separately.
- **November 2, 2026 — Sixteen-type classification:** Replaced four nearest prototypes with four binary score classifications and an internally identified anchor tiebreak for each axis. This makes every code explainable but increases content and test coverage.
- **Outstanding:** Review profile wording, question usability, the provisional limited-response and near-balance conventions, recommendation thresholds, test library, route library, replacement or refinement of the provisional logo, typography, and design tokens before they become implementation rules.
