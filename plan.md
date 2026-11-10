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
- Obtain Developer review, then Studio director approval before application development. **Completed November 2, 2026:** the Studio director approved the pitch during the class meeting and recommended narrowing the target audience. The Developer refined the primary audience to young adults ages 18–25, especially college students, recent graduates, and people beginning financial independence. `pitch.md` remains unchanged after approval.

### Phase 2 — Prove the core (Nov. 2–9)

- Finalize 16 questions, keyed scoring, anchor tiebreaks, 16 personality records, and recommendation rules.
- Create the React/TypeScript/Vite application after the recorded pitch approval.
- Build and verify one end-to-end journey through separate Personality Results and Personalized Learning Recommendations screens to the First Paycheck lesson.
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

Studio director approval was confirmed by the Developer on November 9, 2026, as having occurred during the November 2 class meeting. Phase 2 may proceed through the approved checkpoints below. Do not modify the approved `pitch.md`.

### 1. Initialize the application and verify local development

**Produce:** Record the approval, audience refinement, and separate Personality Results and Personalized Learning Recommendations screens; initialize React, TypeScript, Vite, CSS, hash routing, Vitest, and the approved source structure. Do not implement scoring, assessment screens, results, recommendations, or Academy lessons in this checkpoint.

**Test:** Start the development server, run the initial automated test, and create a production build. Record the actual commands and outcomes without marking Developer verification complete.

**Status November 9, 2026:** Agent implementation and verification complete; awaiting Developer review. No commit, push, scoring, assessment screen, result screen, recommendation screen, or Academy lesson was created.

### 2. Implement and test the assessment scoring engine

**Produce:** Final four dimension definitions, 16 approved working questions, the five ordinary response states, the four forced-choice anchor states, numeric mapping, reverse-score markers, four internally identified anchor questions, qualitative balance language, deterministic code construction, explainability data, and 16 personality records. Recommendation rules and their screen remain outside this checkpoint.

**Test:** Calculate at least 16 controlled answer sets that produce every code, plus separate balanced, near-balanced, reverse-score, `Not sure yet`, missing-answer, invalid-answer, and exact-tie cases for every dimension. The Developer still reviews whether questions, names, family identities, and profile language feel neutral, distinct, age-appropriate, and understandable before content is considered final.

**Produce in code:** Typed question and personality records plus pure answer validation, dimension scoring, letter classification, qualitative interpretation, code construction, and profile lookup with automated tests.

**Test:** Verify missing and invalid answers are rejected; `Not sure yet` is accepted as `0` only on non-anchor questions; anchors reject `0`; repeated inputs are deterministic; all 16 codes are reachable; reverse-scored items, axis endpoints, raw zeroes, qualitative bands, and anchor tiebreaks are correct; two or more neutral answers trigger limited-response language; and every code resolves to exactly one complete content record.

**Status November 9, 2026:** Agent implementation and verification complete; awaiting Developer review. The assessment UI, Results UI, recommendation engine and screen, and Academy remain unimplemented.

### 3. Build the assessment interface

**Produce:** The one-question-per-screen assessment, interleaved order, progress, Back and Next navigation, answer revision, ordinary and anchor response options, and required-answer validation. Keep scoring in the tested domain layer.

**Test:** Complete the assessment by keyboard and pointer, revise earlier answers, distinguish missing from `Not sure yet`, verify unanswered recovery, and confirm the interface does not reveal anchor or scoring metadata.

**Status November 9, 2026:** Implemented one reusable question screen for eight agreement and eight scenario questions, hash-based question routes, progress, editable answers, native radio controls, required-answer recovery, responsive layouts, and session-only state. Automated tests cover missing-answer recovery, Back navigation, keyboard selection, and the complete 16-question path.

### 4. Build the 16-type results page

**Produce:** One shared data-driven Personality Results screen for all 16 codes, accessible bipolar trait scales, qualitative interpretations, strengths, blind spots, and expandable calculation disclosure.

**Test:** Sample all families and controlled codes; confirm displayed totals and marker positions match domain output; verify balanced and tied explanations, calculation details, keyboard access, and text equivalents without prominent percentages.

**Status November 9, 2026:** Implemented the shared result screen using the scoring engine's actual question text, selected labels, contributions, totals, interpretations, code, and profile. Four bipolar scales expose qualitative text alternatives. Direct result routes without session data show a recovery action.

### 5. Build recommendations, Academy, and the First Paycheck lesson

**Produce:** A separate deterministic recommendations screen, three-lesson Academy catalog, source-reviewed First Paycheck lesson, fictional assumptions, calculation rules, rounding rules, and pure paycheck/employer-match function. Upcoming lessons must not appear functional.

**Test:** Compare hand calculations with function output for zero, typical, and boundary contribution values. Verify that no input requests real personal data and no output claims to be a real paycheck estimate or personal recommendation. The Developer reviews every factual claim against its recorded source.

**Status November 9, 2026:** Implemented two-or-three lesson recommendations from dimension thresholds, the complete catalog, and a functional First Paycheck lesson with Understand, Example, Interact, and Reflect stages. Retirement Accounts and Compound Growth are labeled upcoming and have no functional action. The calculator covers 0%, 3%, 6%, and 10% contributions and rejects invalid input.

### 6. Verify the complete journey and document remaining issues

**Produce:** Landing, assessment, separate Personality Results and Personalized Learning Recommendations screens, Academy catalog shell, complete First Paycheck lesson, reflection, restart, hash navigation, and a concise record of known limitations. Deploy to GitHub Pages only when separately authorized.

**Test:** Complete the flow with mouse, keyboard, and touch-sized controls; revise an earlier answer; distinguish unanswered from `Not sure yet`; verify an unanswered question blocks submission with a clear recovery message; sample all families and trigger known codes and recommendations; confirm balanced and nearly balanced visuals have text equivalents and no percentages; open Academy without an assessment; use browser back; recover from an unknown route; restart; and test narrow mobile and desktop widths. Confirm motion respects reduced-motion settings.

**Status November 9, 2026:** Automated integration and production checks pass. The session-only result state intentionally recovers to an assessment-start prompt after a result or recommendation page refresh. The Developer still needs direct visual review at mobile and desktop widths, browser Back/refresh usability review, manual touch testing, a screen-reader pass, and participant usability testing.

### Phase 2 completion checklist

- [x] Studio director approved `pitch.md` during the November 2, 2026, class meeting; the Developer recorded confirmation on November 9, 2026.
- [x] All 16 working questions, ordinary and anchor response states, score mapping, reverse-score flags, balance bands, and tie rules are approved for Phase 2 implementation in `spec.md`.
- [x] Missing, directional, and `Not sure yet` states remain distinct from input through scoring results.
- [x] All 16 codes resolve to complete shared-structure content records; wording still requires Developer usability review.
- [x] Personality Results and Personalized Learning Recommendations are separate screens with a clear transition between them.
- [x] Controlled fixtures reach all 16 codes and cover both anchor directions for all four exact-tie paths.
- [x] Reverse-score, qualitative-band boundary, neutral-response, and limited-response cases pass.
- [x] Recommendation rules are deterministic, tested, and documented; Developer content review remains.
- [x] Financial claims and fictional assumptions are sourced in `research.md`; Developer source review remains.
- [x] Scoring, recommendation, and lesson calculations pass automated checks.
- [x] The approved end-to-end journey passes local automated integration checks.
- [ ] GitHub Pages deployment remains unauthorized and untested.
- [ ] Automated keyboard, chart-text, and reduced-motion structure checks pass; manual responsive, touch, and browser checks remain.
- [ ] The Developer has directly reviewed the result language and financial explanation.
- [x] Known defects and deferred scope are recorded before the milestone snapshot.

## Testing and evidence

Record what you tested and what happened. For peer testing, note what people did or said separately from your interpretation, keep it non-identifying, and record the revisions you made and how you verified them.

### Phase 1 evidence

- **November 2, 2026:** Reviewed the Project 5 brief and the unchanged course templates before documentation edits.
- **November 2, 2026:** Verified the financial references listed in `research.md` on official IRS, Investor.gov, CFPB, and FDIC domains. No annual contribution amount has been adopted as a Moneywise requirement.
- **November 2, 2026:** Confirmed the repository contains documentation only; no application dependencies or implementation files have been created.
- **Not yet tested:** Provisionally approved assessment wording, interpretation bands, neutral-response comprehension, personality profiles, recommendations, financial calculations, interface behavior, accessibility, responsive behavior, and deployment. These remain planned work, not completed results.

### Phase 2 Checkpoint 1 evidence

- **November 9, 2026 — Environment:** Node 22.23.2 and npm 10.9.8 on the Developer's Windows workspace.
- **November 9, 2026 — Dependency install:** Direct runtime, build, and test dependencies installed; npm audited 100 packages and reported 0 vulnerabilities.
- **November 9, 2026 — Automated test:** `npm.cmd test` passed 1 test file and 2 tests covering the landing hash route and unknown-route recovery.
- **November 9, 2026 — Production build:** `npm.cmd run build` completed successfully with TypeScript project validation and Vite 8.3.7; 27 modules transformed and `dist/` produced.
- **November 9, 2026 — Local server:** `npm.cmd run dev -- --host 127.0.0.1` reported ready in 579 ms at `http://127.0.0.1:5173/`. An HTTP request returned status 200 and confirmed the `Moneywise` page title. The temporary server was stopped after verification.
- **Verification boundary:** No interactive browser or device review was performed in this environment. The Developer still needs to inspect the rendered shell directly; scoring, assessment, results, recommendations, Academy content, and deployment remain intentionally unimplemented.

### Phase 2 Checkpoint 2 evidence

- **November 9, 2026 — Structured content:** Implemented all 16 interleaved assessment questions with stable IDs, exact working wording, dimension, directional key, reverse flag, anchor flag, and valid response options. Implemented four family records and all 16 personality records from `spec.md`.
- **November 9, 2026 — Scoring architecture:** Implemented pure TypeScript validation, per-question contribution scoring, independent dimension totals, qualitative bands, neutral counts, limited-response notices, deterministic anchor tiebreaks, four-letter code construction, and profile lookup. Each result retains the data needed to explain its calculation.
- **November 9, 2026 — Automated test:** `npm.cmd test` passed 3 test files and 90 tests. Coverage includes all 16 codes; both anchor directions for all four dimensions; reverse scoring; positive and negative totals; missing, invalid, unknown, neutral, and anchor-zero inputs; limited-response notices; all qualitative boundaries; deterministic repeat results; data cardinality; and every profile lookup.
- **November 9, 2026 — Production build:** `npm.cmd run build` completed successfully with TypeScript project validation and Vite 8.3.7; 27 modules transformed and `dist/` produced.
- **Controlled example — SAPC / The Method Maker:** Agreeing strongly with first-pole statements and disagreeing strongly with second-pole statements produces `-8` on S/E, A/I, P/F, and C/O, selecting S, A, P, and C.
- **Controlled example — EIFO / The Catalyst:** Disagreeing strongly with first-pole statements and agreeing strongly with second-pole statements produces `+8` on all four dimensions, selecting E, I, F, and O.
- **Verification boundary:** Question wording, family identities, profile tone, and limited-response language still need direct Developer usability review. Recommendation rules and all Checkpoint 3+ interface and Academy work remain unimplemented.

### Phase 2 Checkpoints 3—6 evidence

- **November 9, 2026 — Revised assessment:** Implemented eight agreement questions and eight scenarios, including four direct-scored non-anchor scenarios with neutral responses and four scenario anchors without neutral responses. All 16 codes and eight anchor-tie directions remain reachable in automated fixtures.
- **November 9, 2026 — Complete journey:** Automated interaction testing completes all 16 questions, reaches the detailed shared result, and continues to the separate recommendation screen. Additional tests cover missing-answer recovery, answer preservation through Back navigation, keyboard radio selection, unknown-route recovery, and direct-route recovery without a result.
- **November 9, 2026 — Results and recommendations:** Four accessible trait visuals render from actual totals; calculation details use the scoring output's exact question and selected-answer text. Recommendation tests cover triggered and balanced fallback paths and repeat determinism.
- **November 9, 2026 — Academy lesson:** Implemented and tested a fictional `$3,000` monthly paycheck with fixed illustrative deductions, employee contribution, capped employer match, total retirement contribution, take-home trade-off, and reflection.
- **November 9, 2026 — Automated test:** `npm.cmd test` passed 7 test files and 107 tests.
- **November 9, 2026 — Production build:** `npm.cmd run build` passed with TypeScript validation and Vite 8.3.7; 46 modules transformed and `dist/` produced.
- **November 9, 2026 — Local runtime:** Vite served the completed MVP at `http://127.0.0.1:5174/` after the default port was already occupied. The root returned HTTP 200 and the Moneywise document title. Both owned local preview processes were stopped after verification.
- **November 9, 2026 — Final rerun:** `npm.cmd test` again passed all 7 files and 107 tests. `npm.cmd run build` again passed TypeScript validation and the Vite production build with 46 transformed modules. This rerun did not add manual usability evidence.
- **Academy scope at snapshot:** Your First Paycheck & Employer Match is implemented and available. Retirement Accounts Explained and The Power of Compound Growth remain visible as upcoming and are planned for Phase 3.
- **Known refresh behavior:** Assessment answers and the derived result are held only in React memory. Refreshing or directly loading Results or Recommendations loses the active result and shows a recovery action to restart the assessment. Local persistence is deferred rather than silently manufacturing a result.
- **Verification boundary:** No interactive browser automation, screenshot comparison, screen-reader session, physical-device test, or participant usability test was available. CSS includes narrow-width layouts, visible focus, text equivalents, native controls, and reduced-motion overrides, but the Developer must directly inspect mobile and desktop rendering and complete manual browser, touch, assistive-technology, content-comprehension, and financial-explanation checks. GitHub Pages remains undeployed by instruction.

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
