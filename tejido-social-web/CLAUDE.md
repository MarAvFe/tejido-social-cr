# CLAUDE.md

Instructions for Claude Code when working in this directory (`tejido-social-web/`).

## Changelog discipline

Before creating a commit that changes anything under `tejido-social-web/`
(content, code, config), update `CHANGELOG.md`:

1. Check whether an `## [Unreleased]` section exists at the top (below the
   header). If not, add one.
2. Add a bullet describing the change under `### Added` / `### Changed` /
   `### Fixed` / `### Removed` as appropriate, following the existing style
   in the file (short, specific, links to the relevant path when useful).
3. Decide the version bump for that Unreleased section using semver, but
   with these project-specific rules:
   - **Patch** (0.x.Y): content edits, copy fixes, single-article
     additions, small bug fixes, dependency bumps.
   - **Minor** (0.X.0): new features (a new interactive component, search,
     a new content category/type), structural additions, anything a
     reader would notice as "the site can now do X".
   - **Major** (X.0.0): reserved for a real-world adoption milestone —
     the site gets a real party domain, or is adopted by a canton/national
     structure beyond Sabanilla. Not triggered by code changes alone, ever.
     Do not bump to major on your own judgment — ask first if unsure.
4. When the user asks to "release" or "cut a version" (or when a session
   naturally wraps up a batch of related work), rename `[Unreleased]` to
   the decided version + today's date, update `package.json`'s `version`
   field to match, and add a fresh empty `[Unreleased]` section above it.
   Until then, keep accumulating entries under `[Unreleased]` rather than
   creating a new version per commit — the user prefers reviewing a batch
   before it's "official," not a version bump every commit.

If a change is trivial and purely internal (refactor with no user-visible
effect, fixing a typo in a code comment, adjusting test/tooling config),
it's fine to skip the changelog — use judgment, don't pad it.

## Other context

- `PROJECT.md` — background on the project's purpose and philosophy
  (written for the earlier generic "Tejido Social" framework; treat as
  historical context, not a live description of this site).
- `CONTENT-TODO.md` — content backlog and sourcing conventions.
