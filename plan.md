# Plan

> EDITING DIRECTIVE: DEVELOPER AND AGENT EDIT THIS FILE COLLABORATIVELY. THE DEVELOPER MUST REVIEW AND APPROVE ITS CONTENT.

Purpose: Track the five-week map, the next build checkpoints, testing, and simplification reviews.

## Working agreement

Developer: Choose priorities, plan only the next few checkpoints in detail, test results directly, and keep the map current.

Agent: Read the project documents and inspect the project. Where practical, keep each checkpoint small enough to run and judge. Do not expand scope or mark the Developer's verification complete.

When you begin this step, start a fresh chat so its transcript stays clean. For example:

`Read the project documents, inspect the project, and help me complete the next checkpoint.`

## Five-week map

The current plan for each phase, starting from the map in your pitch. Update it as the project evolves.

### Phase 1 — Ideate and pitch (Oct. 26–Nov. 2)

- Define Moneywise's purpose, audience, ethical boundaries, and visual direction.
- Choose the combined personality-guided Academy concept.
- Define the four dimensions, complete 16-type matrix, and three-lesson Academy launch scope.
- Establish the proposed architecture, MVP, risks, and source requirements.
- Include `branding/assets/moneywise-logo.svg` as **Provisional — Subject to Refinement** for the Phase 1 snapshot; logo redesign or refinement remains later approved work.
- Obtain Developer review, then Studio director approval before application development.

### Phase 2 — Prove the core (Nov. 2–9)

- Finalize 16 questions, keyed scoring, anchor tiebreaks, 16 personality records, and recommendation rules.
- Create the React/TypeScript/Vite application only after pitch approval.
- Build and verify one end-to-end journey through the First Paycheck lesson.
- Deploy the proof and present evidence at the milestone review.

### Phase 3 — Revise, expand, build, and test (Nov. 9–16)

- Respond to milestone findings before expanding.
- Implement Retirement Accounts Explained and The Power of Compound Growth using the shared lesson structure.
- Establish responsive design tokens, core components, trait visualization, and lesson visual language.
- Test new calculations, routing, and previously working assessment behavior.
- Complete the Phase 3 simplification review.

### Phase 4 — Integrate and prepare for peer review (Nov. 16–30)

- Complete content, source, accessibility, responsive, privacy, and error-state reviews.
- Add only approved progress persistence and visual polish that fit remaining time.
- Verify the GitHub Pages production build across target browsers and devices.
- Conduct formative User testing and revise priority usability issues.
- Complete the Phase 4 simplification review and end with a peer-review-ready version.

### Phase 5 — Finish and showcase (Nov. 30–Dec. 7)

- Record peer-review observations separately from interpretation.
- Fix high-priority stability, clarity, accessibility, and visual-coherence issues.
- Recheck time-sensitive content and every external credit.
- Verify the public release, complete the final simplification review, breakdown, and debrief, and prepare showcase material.

## Checkpoints

The next few results to build, each with what it should produce and how you will test it against the acceptance checks in `spec.md`. Test each result before moving on, including related behavior that already worked, and commit meaningful working checkpoints.

Development remains blocked on Studio director pitch approval. After approval, Phase 2 should proceed through these small checkpoints.

### 1. Freeze the assessment contract

**Produce:** Final four dimension definitions, 16 provisionally approved questions, the five ordinary response states, the four forced-choice anchor states, numeric mapping, reverse-score markers, four internally identified anchor questions, qualitative balance language, and deterministic code construction. Usability-review the approved family and working-name direction plus the provisional descriptions, strengths, blind spots, and growth suggestions. Finalize a small table of recommendation rules with thresholds, priority, lesson ID, and User-facing reason.

**Test:** Manually calculate at least 16 controlled answer sets that produce every code, plus separate balanced, near-balanced, reverse-score, `Not sure yet`, missing-answer, and exact-tie cases for every dimension. Confirm the revised S/E scenarios are meaningfully different. The Developer reviews whether questions, names, family identities, and profile language feel neutral, distinct, age-appropriate, and understandable before code begins.

### 2. Prove scoring and recommendations without presentation

**Produce:** Typed question and personality records plus pure dimension-scoring, letter-classification, code-lookup, and recommendation functions with automated tests.

**Test:** Verify missing and invalid answers are rejected; `Not sure yet` is accepted as `0` only on non-anchor questions; anchors reject `0`; repeated inputs are deterministic; all 16 codes are reachable; reverse-scored items, axis endpoints, raw zeroes, qualitative bands, and anchor tiebreaks are correct; two or more neutral answers trigger limited-response language; every code resolves to exactly one complete content record; and recommendation rules pass below, at, and above each threshold.

### 3. Prove the First Paycheck calculation and content

**Produce:** Source-reviewed lesson outline, fictional scenario assumptions, calculation rules, rounding rules, and pure paycheck/employer-match function. The lesson must state that actual deductions, eligibility, vesting, and employer matching vary.

**Test:** Compare hand calculations with function output for zero, typical, and boundary contribution values. Verify that no input requests real personal data and no output claims to be a real paycheck estimate or personal recommendation. The Developer reviews every factual claim against its recorded source.

### 4. Build the end-to-end MVP journey

**Produce:** Landing, assessment, result and trait analysis, explained recommendation, Academy catalog shell, complete First Paycheck lesson, reflection, restart, and hash navigation.

**Test:** Complete the flow with mouse, keyboard, and touch-sized controls; revise an earlier answer; distinguish unanswered from `Not sure yet`; verify an unanswered question blocks submission with a clear recovery message; sample all families and trigger known codes and recommendations; confirm balanced and nearly balanced visuals have text equivalents and no percentages; open Academy without an assessment; use browser back; recover from an unknown route; restart; and test narrow mobile and desktop widths. Confirm motion respects reduced-motion settings.

### 5. Deploy and review the proof

**Produce:** A production build deployed through GitHub Pages and a concise record of known limitations.

**Test:** Open the public URL in a fresh browser session, navigate directly to a hash lesson route, complete the core journey, refresh at major screens, and check the browser console for errors. The Developer performs and records final milestone verification rather than relying only on Agent results.

### Phase 2 completion checklist

- [ ] Studio director has approved `pitch.md`.
- [ ] All 16 questions, ordinary and anchor response states, score mapping, reverse-score flags, balance bands, and tie rules are approved in `spec.md`.
- [ ] Missing, directional, and `Not sure yet` states remain distinct from input through results.
- [ ] All 16 codes resolve to reviewed names and complete shared-structure content records.
- [ ] Controlled fixtures reach all 16 codes and cover both anchor directions for all four exact-tie paths.
- [ ] Reverse-score, qualitative-band boundary, neutral-response, and limited-response cases pass.
- [ ] Recommendation rules are approved and documented.
- [ ] Financial claims and fictional assumptions are sourced in `research.md`.
- [ ] Scoring, recommendation, and lesson calculations pass automated and manual checks.
- [ ] The approved end-to-end journey works locally and on GitHub Pages.
- [ ] Keyboard, responsive, chart-text, and reduced-motion checks pass.
- [ ] The Developer has directly reviewed the result language and financial explanation.
- [ ] Known defects and deferred scope are recorded before the milestone snapshot.

## Testing and evidence

Record what you tested and what happened. For peer testing, note what people did or said separately from your interpretation, keep it non-identifying, and record the revisions you made and how you verified them.

### Phase 1 evidence

- **November 2, 2026:** Reviewed the Project 5 brief and the unchanged course templates before documentation edits.
- **November 2, 2026:** Verified the financial references listed in `research.md` on official IRS, Investor.gov, CFPB, and FDIC domains. No annual contribution amount has been adopted as a Moneywise requirement.
- **November 2, 2026:** Confirmed the repository contains documentation only; no application dependencies or implementation files have been created.
- **Not yet tested:** Provisionally approved assessment wording, interpretation bands, neutral-response comprehension, personality profiles, recommendations, financial calculations, interface behavior, accessibility, responsive behavior, and deployment. These remain planned work, not completed results.

For later tests, record the date, build or commit tested, device/browser or test command, inputs, observed output, expected result, pass/fail status, and any follow-up change. Developer verification must be recorded separately from Agent verification.

## Simplification reviews

A project this size invites Agents to pile on code. Redirect them away from bloat, stacked patches, obsolete features, and edge cases that a simpler design or code-structure rule would prevent. At the end of Phases 3, 4, and 5, have the Agent identify these problems, then decide yourself what to change. Record what it found, what you decided and why, and the result. Update the architecture in `spec.md` if the structure changes.

No implementation exists to review yet. At the end of Phases 3, 4, and 5, inspect at minimum:

- scoring, recommendation, or financial rules duplicated in components;
- type-specific result components or conditions that should be one shared data-driven result structure;
- separate lesson layouts that should use the shared lesson structure;
- one-off responsive or accessibility patches that indicate a missing shared rule;
- unused dependencies, components, content fields, styles, and saved-state versions;
- obsolete experiments or conflicting navigation/state approaches;
- financial copy duplicated instead of linked to one reviewed content record; and
- stretch work that weakens core stability or polish.

For each review, record what was found, the Developer's decision, the reason, the resulting verification, and any architecture update made in `spec.md`.
