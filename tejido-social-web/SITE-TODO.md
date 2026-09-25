# SITE-TODO.md — Engineering, config, and process backlog

Purpose: track work that isn't a missing article — site configuration,
tooling, one-off audits/sweeps across already-published content, and process
gaps. This is distinct from:

- `CONTENT-TODO.md` — missing **articles** (content that doesn't exist yet).
- `CONTENT-FRAMEWORK.md` — where new content goes and what it links to.
- `VOICE.md` — the tone/quality standard itself (this file tracks *checking*
  existing content against it, not the standard).

Meta doc — English throughout, per `CLAUDE.md`'s language rule.

---

## Open items

- [ ] **`/calendar` needs its API key set in Netlify before it's live** — the
  real Sabanilla Calendar ID is already in `src/config/calendars.ts` and a
  restricted (HTTP-referrer + API-scope) API key has been confirmed working
  locally against it (events render correctly in month/week/agenda views).
  The one remaining step is setting `GOOGLE_CALENDAR_API_KEY` in Netlify's
  build environment variables — and adding the production domain to that
  key's allowed HTTP referrers in Google Cloud Console if not already
  there — so the deployed site can fetch events too. Additional
  municipalities: create their public Google Calendar, share edit access,
  add one entry to `src/config/calendars.ts`.
- [ ] **Legal review of content licensing** — the site's written content is
  currently under CC BY-NC-ND 4.0 (see `LICENSE-CONTENT` in the repo root)
  as a deliberately conservative placeholder, because parts of the content
  closely follow or paraphrase the party's own official directives/statute
  and this project may not own the right to license that material
  permissively (or at all) on its own. Needs review by someone with real
  party legal authority to determine: (1) what content, if any, this
  project can license under CC0/MIT-equivalent terms, (2) what must stay
  restricted or be replaced with a link to the party's own official
  source instead of paraphrase, (3) whether the NC/ND terms can loosen.
  Until resolved, do not change the content license without this review.
- [ ] **`showLastUpdateTime: true`** — add to the Docusaurus config (or to
  each article's frontmatter, whichever applies) so every page shows when
  it was last updated. Site-wide effect — do it in one pass when reviewing
  `docusaurus.config.ts`, not article by article.
- [ ] **VOICE.md compliance audit** — re-read the ~40+ published articles
  against `VOICE.md` (register, honesty-about-incompleteness, sourcing
  discipline, genericity vs. instance, privacy) now that the standard is
  written down explicitly. VOICE.md was inferred *from* the existing
  articles, so most should already pass — but it was written after the
  bulk of content, so treat this as verification, not an assumption of
  compliance. Flag anything that reads as overconfident about a thin/new
  structure, leaks instance content into a generic page, or is missing a
  source label.
- [ ] **CONTENT-FRAMEWORK.md registry audit** — the concept-thread registry
  was populated once, in one pass, against the site as it existed on
  2026-07-25. Confirm it still matches reality after a few more batches of
  content land (new threads not yet registered, or registered threads whose
  articles moved).

## Agent tooling evaluation (2026-09-25)

Four third-party agent add-ons were evaluated against this repo: cloned and
read, and Graphify was run on a copy of `src/` + `docs/`. Commits reviewed:
Ponytail `e3ba2aa` (v4.10.0), OmniRoute `4b9388a1`, Graphify `4000de1`
(0.9.68), Agent Skills `bcab6a1` (v0.6.10). All MIT except Graphify
(Apache-2.0).

### What this repo actually needs (the baseline the tools were judged against)

- The work is almost entirely agent-written content (Spanish articles, CARS
  and Iniciativas Colectivas pages) with one human maintainer, usually
  pushed straight to `main`. **There is no CI, no test, no lint.** The only
  gate is the Netlify build, which catches broken internal doc links and
  TypeScript errors, nothing else.
- The rules that matter live as prose in `CLAUDE.md`, `VOICE.md` and
  `CONTENT-FRAMEWORK.md` and are enforced only by an agent reading them.
  The recurring defects in `CHANGELOG.md` are all of that kind: a wrong
  factual claim about a real organization (CARS/ICE founding), a wrong legal
  claim (dietas), citation links written as `[text](url)` inside TSX
  strings that `renderInlineMarkdown` doesn't parse, a leaked internal-doc
  filename, shipped placeholder links, a real first name on an initiative
  page, the Spanish/English split slipping twice, one site-wide broken build.
  Most are mechanically detectable; the factual ones need a review step.
- **Process docs contradict the site.** `.github/pull_request_template.md`,
  `.github/ISSUE_TEMPLATE/correccion.md` and `CONTRIBUTE.md` require
  *ustedeo*, "causa-neutral" content and Diataxis, inherited from the old
  generic Tejido Social framework. Published pages use *voseo* (~26 voseo
  forms vs. ~3 ustedeo in `docs/` + `src/pages/`), are FA/CARS-specific, and
  `VOICE.md` line 153 explicitly declines to rule on voseo vs. usted. An
  agent following the PR template could "correct" correct pages.
- There is no `.claude/` directory, so cloud sessions get no project skills.
  Anything installed as a user-level plugin on a laptop never reaches them.

### Verdict per tool

| Tool | What it is | Fit here | Decision |
| --- | --- | --- | --- |
| **Agent Skills** (addyosmani) | 25 Markdown workflow skills (spec, plan, review, security, constraints, doubt-driven review, interview) + 9 commands, installable per skill | High, for 4–5 of the 25 | **Adopt selectively**, vendored into the repo (P3) |
| **Ponytail** | Always-on "minimum code that works" ruleset via lifecycle hooks, plus `/ponytail-review` and `/ponytail-audit` | Low: `src/` is ~1,900 lines of components; the defects here are content, not over-built code. Overlaps the built-in `/simplify` | **One-off audit only** (P5); do not install permanently |
| **Graphify** | Builds a knowledge graph of code (local, tree-sitter) and docs (needs an LLM backend) | Low. Trial run: `--code-only` skipped all 74 docs and mapped only the TSX (340 nodes), which grep already covers. The docs graph, the only valuable part, needs an API key and per-run LLM spend | **Not now.** A deterministic link-graph script covers the need (P4) |
| **OmniRoute** | Self-hosted gateway routing LLM calls across ~350 providers and free tiers | None for the site: it has no runtime LLM calls. Would add a server to run, and would send prompts (political/organizational context) to free-tier providers with unknown retention. Its "TLS stealth / AI blocked → proxy" features exist to get around provider restrictions | **Do not adopt** for this repo. At most a personal cost tool outside it, never with `padron-backend/` data or `raw data/` |

### Prioritized execution

- [ ] **P1 — Mechanical content gates + CI.** Add `scripts/check-content.mjs`
  (Node, no deps) and a GitHub Actions workflow on push/PR to `main` that
  runs `npm ci`, `npm run typecheck` and `npm run build` for both apps
  (mirroring `scripts/netlify-build.sh`), then the check script. The script
  fails on:
  1. internal-doc filenames (`CONTENT-TODO.md`, `CLAUDE.md`, `VOICE.md`,
     `PROJECT.md`, `DESIGN-SPEC.md`, `SITE-TODO.md`, `CONTENT-FRAMEWORK.md`)
     in `docs/` or `src/pages/`;
  2. `[text](http…)` markdown link syntax inside `.tsx` string literals
     (the `renderInlineMarkdown` dead-link bug);
  3. placeholder markers in reader-facing files (`placeholder`, `TODO`,
     `lorem`, `example.com`, bare `href="#"`), outside code comments;
  4. a `docs/**/*.md` file without `source_label` in its frontmatter;
  5. on PRs only: a change under `tejido-social-web/` without a
     `CHANGELOG.md` change (warning, not failure; the changelog rule allows
     skipping trivial internal edits).

  Real names can't be checked generically; leave that to review (P3).
  Because work usually lands directly on `main`, CI is a detector there,
  not a gate; Netlify's failed build still blocks a broken deploy. Method:
  Agent Skills' `constraint-driven-development` + `ci-cd-and-automation`.
  Done when the workflow is green on current `main` and each rule has been
  shown to fail on a planted example.
- [ ] **P2 — Resolve the address-form and framework contradiction.** Owner
  decision first: voseo (what the site uses) or ustedeo (what the PR
  template demands). Then write the answer into `VOICE.md` (replacing the
  line-153 non-rule) and bring `pull_request_template.md`,
  `ISSUE_TEMPLATE/correccion.md` and `CONTRIBUTE.md` in line, dropping the
  "causa-neutral" item and the Diataxis requirement if they no longer
  apply. Blocks P1's review checklist from encoding the wrong rule.
- [ ] **P3 — Vendor a small set of skills into `.claude/skills/`.** Copy
  (pinned to `bcab6a1`, with the MIT notice) only:
  `doubt-driven-development` (fresh-context review of factual claims about
  real organizations, laws and people before publishing, which is what
  would have caught the CARS/ICE error), `interview-me` (requirements
  discovery before building, as the padrón needed),
  `constraint-driven-development` (keeps P1's bar from being quietly
  lowered), and `security-and-hardening` (only when `padron-backend/` goes
  live). Trim each to what applies to a static Docusaurus site; they assume
  a test suite this repo doesn't have. Add one project skill of our own,
  `content-article`, that turns the existing prose into a checklist: the
  `CONTENT-FRAMEWORK.md` placement test, `VOICE.md` checks, no names, the
  language split, and the changelog. Project-level so cloud sessions load
  them; no marketplace plugin, since plugin hooks run shell commands on
  every session.
- [ ] **P4 — Docs link graph (instead of Graphify).** `scripts/link-graph.mjs`
  builds the doc→doc graph from the ~330 relative `.md` links in `docs/`,
  reports orphans (no inbound links) and dead ends, and checks each thread
  in `CONTENT-FRAMEWORK.md`'s registry against its "must stay linked"
  list. That turns the open **registry audit** item above into a
  repeatable check that can join P1. Deterministic, offline, no API key.
- [ ] **P5 — Optional one-off `/ponytail-audit` over `src/`.** Run it once from a
  local checkout, after P1 exists so the build catches regressions, and
  triage its delete-list by hand. The likely candidates are the four
  `src/components/*/index.tsx` files over 300 lines (`Cars` 570, `Padron`
  349, `EventCalendar` 312, `IniciativasColectivas` 310). Don't install
  the plugin permanently: its always-on hooks inject rules into every
  prompt, including content work where they add nothing.

**Revisit conditions.** Graphify: if the corpus grows past a few hundred
pages or meeting transcripts need cross-referencing, and only with an
approved LLM backend and `raw data/` excluded (it holds real names).
OmniRoute: only if the site ever makes LLM calls at runtime, which would
itself need a privacy review first.

## Completed

_(move items here with the date closed, instead of deleting them, so there's
a record of what's already been done — mirrors `CONTENT-TODO.md`'s HECHO
convention, but kept minimal: one line, no need to preserve full detail once
it's done and reflected in `CHANGELOG.md`.)_
