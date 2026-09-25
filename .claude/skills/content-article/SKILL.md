---
name: content-article
description: Checklist for creating, moving or correcting reader-facing content on this site, meaning anything under tejido-social-web/docs/, tejido-social-web/src/pages/ (CARS, Iniciativas Colectivas, FA pages) or tejido-social-web/static/. Use for a new article, a correction someone reported, promoting or moving a page, or rewording published text. Not for code-only or meta-doc changes.
---

# Content article

The rules live in `tejido-social-web/CLAUDE.md`, `VOICE.md` and
`CONTENT-FRAMEWORK.md`. Read the parts the change touches; this is the
order to apply them in and the things that have gone wrong before.

## Before writing

1. **Placement.** For a new or moved `docs/` article, run the 4-question test
   in `CONTENT-FRAMEWORK.md` Part 1 (category, generic or instance, thread,
   source) and find its thread in the Part 2 registry. CARS and Iniciativas
   Colectivas are separate sub-sites for unrelated organizations; they
   don't go in `docs/`.
2. **Underspecified request?** If who it's for or what it must say isn't
   clear, use `interview-me` first.

## While writing

3. **Spanish, voseo** ("consultá", "si querés"), sober register, no
   exclamation marks (`VOICE.md`). Meta docs stay in English.
4. **Source every substantive claim**, and set `source_label` in a docs
   page's frontmatter. Leave unknowns as visibly pending; never fill them
   with a plausible guess.
5. **No private individuals' names or contacts**, including first names
   and including people who own an initiative. Roles only ("persona
   afiliada de Sabanilla"). Elected public office is the one exception.
6. **No internal file names** (`CONTENT-TODO.md`, `CLAUDE.md`, ...) in
   reader-facing text.
7. **Links in TSX pages** use `<a>` or `ExternalLink` with a `SOURCES`
   map; `[text](url)` inside a TSX string renders as dead literal text.
8. **Claims about real organizations, people, laws or events**: run
   `doubt-driven-development` on the paragraph before it ships. That is
   the check that would have caught the CARS/ICE founding error.

## When moving or renaming a published page

9. `git mv` to keep history, update every inbound link, and add a 301 in
   the root `netlify.toml` (the old URL was public).
10. Update the thread's row in `CONTENT-FRAMEWORK.md`, and any
    `CONTENT-TODO.md` note that described the old placement.

## Before finishing

11. `node scripts/check-content.mjs` and `node scripts/link-graph.mjs`
    (read the warnings: a new thread member with no links to its thread
    usually needs a "Ver también").
12. `npm run build` in `tejido-social-web/`; it fails on broken internal
    links. A sidebar label shared by two categories also breaks it.
13. Add a `CHANGELOG.md` entry under `[Unreleased]`.
