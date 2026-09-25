---
name: constraint-driven-development
description: Keep the project's written quality bar (CONSTRAINTS.md at the repo root) from being quietly lowered. Use before finishing any change that touches scripts/check-content.mjs, scripts/link-graph.mjs, their tests, .github/workflows/, CONSTRAINTS.md or the rules in tejido-social-web/CLAUDE.md or VOICE.md; when a check fails and the tempting fix is to loosen the check instead of the content; or when the user asks to add or change a quality gate.
---

<!-- Adapted from addyosmani/agent-skills@bcab6a1, skills/constraint-driven-development (MIT, see ../THIRD_PARTY_NOTICES.md). Reduced to the guard and ratchet parts; the intake interview and tool catalog assume a tested app, which this static site isn't. -->

# Constraint-Driven Development

`CONSTRAINTS.md` is this project's bar: each rule, the command that checks
it, and where it runs. It outlives any session. The failure it prevents is
not clever cheating; it's an agent hitting a red check and taking the
cheapest road to green.

## When a check fails

Fix the content or code, not the check. The check is wrong only if you can
name the false positive precisely (for example, "`placeholder` matched the
Spanish word used honestly in `niveles/index.md`"). Then narrow the rule
for that case, add a test proving the real violation still fails, and say
so in the commit message.

## Watch the diff for a weakened bar

Before finishing, run `git diff` against the branch point and look for:

1. **A rule removed or narrowed** in `scripts/check-content.mjs` or
   `scripts/link-graph.mjs` (a regex loosened, a file type or folder
   dropped from the scan, an error demoted to a warning).
2. **A test made easier or deleted** in `scripts/*.test.mjs`.
3. **A CI step removed or made non-blocking** in `.github/workflows/`
   (`continue-on-error`, a step commented out, `|| true`).
4. **An exception added**: a new skip pattern, allowlist entry or `_`
   prefix used to hide a real page from the scan.
5. **The written bar changed**: a row removed from `CONSTRAINTS.md` or a
   rule softened in `CLAUDE.md` / `VOICE.md`.

Tightening is silent. Loosening is loud: name it to the user, with the
reason, before pushing.

## Changing the bar on purpose

When the user wants a new gate or a changed one:

1. Write the rule in `CONSTRAINTS.md` with the command that checks it. A
   rule with no command is an aspiration, not a constraint.
2. Implement it, with a test that plants a violation and sees it fail.
3. Run it on the current tree. If it's red for reasons the change didn't
   cause, record today's state and hold that line (a ratchet) rather than
   shipping a gate everyone learns to ignore.

## Circularity

Checks the agent also wrote prove less than external ones. The Docusaurus
build (broken internal links) and `tsc` are external; the content checker
and link graph are project rules a human should own. Keep at least one
external check in CI.
