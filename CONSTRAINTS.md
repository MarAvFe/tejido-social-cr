# Constraints

The quality bar for this repository: each rule, the command that checks it,
and where it runs. Do not weaken it to make a change pass; see
`.claude/skills/constraint-driven-development/`.

Last reviewed: 2026-09-25.

## Enforced (CI fails)

| Rule | Checked by | Runs |
| --- | --- | --- |
| Internal doc links resolve | Docusaurus build (`onBrokenLinks: 'throw'`) via `scripts/netlify-build.sh` | CI, Netlify |
| Both apps build | `scripts/netlify-build.sh` | CI, Netlify |
| Zero type errors in both apps | `npm run typecheck` | CI |
| No internal file names (`CLAUDE.md`, `CONTENT-TODO.md`, ...) in reader-facing text | `scripts/check-content.mjs` (`internal-doc`) | CI |
| No `[text](url)` markdown inside TSX (renders as dead text) | `scripts/check-content.mjs` (`md-link-in-tsx`) | CI |
| No placeholder artifacts in rendered text: bare `href="#"`, lorem ipsum, example.com, TODO/FIXME | `scripts/check-content.mjs` (`placeholder`) | CI |
| Every `docs/` page has a `source_label` | `scripts/check-content.mjs` (`source-label`) | CI |
| No broken relative `.md` links in `docs/` | `scripts/link-graph.mjs --check` | CI |
| Every path in the `CONTENT-FRAMEWORK.md` thread registry exists | `scripts/link-graph.mjs --check` | CI |
| The checkers themselves still catch planted violations | `node --test scripts/*.test.mjs` | CI |

## Reported, not enforced

| Rule | Checked by | Why not enforced |
| --- | --- | --- |
| Site changes come with a `CHANGELOG.md` entry | `scripts/check-content.mjs --base` (PRs) | Trivial internal edits may skip it (`tejido-social-web/CLAUDE.md`) |
| Each registered thread member links to its thread | `scripts/link-graph.mjs` | Which link to add is an editorial call |

## Review only (no mechanical check possible)

- Factual claims about real organizations, people, laws and events are
  sourced and reviewed (`doubt-driven-development`).
- No private individuals' names or contacts on any page.
- Voseo, Spanish for published content, English for meta docs (`VOICE.md`,
  `tejido-social-web/CLAUDE.md`).
- Nothing from `raw data/` or `padron-backend/` data is committed.
