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

## Completed

_(move items here with the date closed, instead of deleting them, so there's
a record of what's already been done — mirrors `CONTENT-TODO.md`'s HECHO
convention, but kept minimal: one line, no need to preserve full detail once
it's done and reflected in `CHANGELOG.md`.)_
