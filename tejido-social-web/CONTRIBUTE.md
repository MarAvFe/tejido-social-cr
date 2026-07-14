# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Contributing to Tejido Social

Thank you for your interest in contributing to Tejido Social! This document provides guidelines for contributing content and code.

## Code of Conduct

Tejido Social operates under the principles documented in `docs/principios.md`:
- **Dignity** - Treat all contributors with respect
- **Non-violence** - Avoid hostile or aggressive communication
- **Horizontality** - All voices matter; no permanent hierarchies
- **Inclusion** - Welcome contributors of all backgrounds and experience levels
- **Accountability** - Take responsibility for your contributions
- **Community Care** - Support each other's wellbeing

Violations of these principles may result in removal from the project.

## How to Contribute

### Before You Start

1. **Read the PROJECT.md** - Understand the project's purpose, architecture, and design philosophy
2. **Review CHANGELOG.md** - See what's already been done
3. **Check open issues** - Your idea might already be in progress

### Types of Contributions

#### Content Contributions (Spanish documentation)

All Spanish content should follow the **Diataxis framework** and **ustedeo** (formal address):

**1. Tutorials** (Learning by doing)
- Step-by-step lessons that teach through experience
- Use imperative voice: "Haga esto", "Lea aquello"
- Include outcomes: "At the end, you will have..."
- Start with Observadores/beginners

**2. How-To Guides** (Task-oriented)
- Solve specific, practical problems
- Assume the reader has basic knowledge
- Be concise and direct
- Example: "Cómo organizar una protesta en 48 horas"

**3. Reference** (Information)
- Neutral, accurate, complete information
- No narrative or teaching
- Factual and consistent
- Example: Chant repository, legal rights card

**4. Explanation** (Understanding)
- Answer "why" not just "how"
- Provide context and background
- Can be longer and more theoretical
- Example: Why decentralization works

**Language Rules:**
- Primary language: **Spanish**
- Use **ustedeo** (formal address) - "usted", "su", not "tú", "tu"
- Keep sentences short and clear
- Define terms in `docs/recursos/glosario.md`

#### Code Contributions

- Fix bugs or improve technical infrastructure
- Update Docusaurus configuration
- Improve build/deployment processes
- Create tools or scripts for contributors

#### Documentation (English/Technical)

- PROJECT.md - Architecture and design decisions
- CONTRIBUTING.md - This file
- Docstrings and code comments
- GitHub issue descriptions

---

## Development Workflow

### Setup

```bash
cd tejido-social-web
yarn install
```

### Local Development

```bash
yarn start
```

This starts a local server at `http://localhost:3000` with hot-reload.

### Build

```bash
yarn build
```

Generates static content in `build/` directory.

### Deployment

Using SSH (if configured):
```bash
USE_SSH=true yarn deploy
```

Without SSH:
```bash
GIT_USER=<your-github-username> yarn deploy
```

---

## Making Changes

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

**Branch naming:**
- `feature/` - New content or features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `chore/` - Maintenance, no content change

### 2. Make Your Changes

**For content:**
- Create new `.md` files in appropriate folders (`docs/tutorials/`, `docs/guias/`, etc.)
- Follow the Diataxis type guidelines above
- Use ustedeo (formal address) in Spanish
- Link to related content using relative paths: `[Link Text](../path/to/file.md)`

**For code:**
- Follow existing code style
- Update TypeScript types if needed
- Test locally before committing

### 3. Update Documentation

If your changes affect how the site works or is organized:
- Update `sidebars.ts` if adding new pages or restructuring
- Update `docusaurus.config.ts` if changing site metadata
- Update PROJECT.md if changing architecture

### 4. Update CHANGELOG.md

Add your changes under the "Unreleased" section, following the format:

```markdown
### Added
- Feature description
- Another feature

### Changed
- What was modified

### Fixed
- Bug that was fixed
```

### 5. Create a Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a PR on GitHub with:
- **Title**: Clear, descriptive (e.g., "Add tutorial: first protest")
- **Description**: What changes, why, and any notes for reviewers
- **Reference issues**: Link to related issues (#123)

### 6. Code Review & Merge

- Maintainers will review for:
  - Content accuracy and alignment with Tejido Social principles
  - Diataxis framework adherence
  - Language consistency (ustedeo, Spanish/English split)
  - Links and cross-references
- Make requested changes
- Once approved, your PR will be merged

---

## Version Management

Tejido Social follows **Semantic Versioning** (MAJOR.MINOR.PATCH):

- **MAJOR** (1.0.0) - Large architectural changes, breaking changes
- **MINOR** (0.1.0) - New features, significant content additions
- **PATCH** (0.1.1) - Bug fixes, small improvements, typo corrections

### Updating Version

When merging a significant PR, update the version in `package.json`:

```json
{
  "version": "0.2.0"
}
```

Then create a release section in CHANGELOG.md:

```markdown
## [0.2.0] - 2026-03-01

### Added
- New tutorial: ...

### Changed
- Updated ...

### Fixed
- Fixed ...
```

---

## Quality Checklist

Before submitting a PR, verify:

- [ ] Content follows Diataxis framework (Tutorial/Guide/Reference/Explanation)
- [ ] Spanish content uses **ustedeo** (formal address)
- [ ] All links are relative and working (`../path/to/file.md`)
- [ ] No broken image links or references
- [ ] Code builds without errors (`yarn build`)
- [ ] Changes are documented in CHANGELOG.md
- [ ] No spelling or grammar errors
- [ ] Aligns with Tejido Social principles (dignity, non-violence, etc.)

---

## Content Guidelines

### Spanish Documentation Standards

#### Ustedeo (Formal Address) Examples

✅ Correct:
```markdown
Lea los principios.
Escriba su nombre.
¿Dónde va usted?
```

❌ Incorrect (tú/voseo):
```markdown
Lee los principios.
Escribe tu nombre.
¿Dónde vas?
```

#### Structure Template

```markdown
# [Title]

## What This Is
Brief one-line description

## Why It Matters
Context and importance

## How To Do It
1. Step one
2. Step two
3. Step three

## What You Need
- Resource 1
- Resource 2

## Next Steps
Links to related content
```

#### Cross-References

Link to other content using relative paths:
```markdown
Read **[Principios del Movimiento](./principios.md)** for context.
See **[Acción Callejera Organismo](../organismos/accion-callejera.md)**.
```

---

## Getting Help

- **Questions about content?** - Check PROJECT.md for philosophy and design decisions
- **Technical questions?** - See Docusaurus docs: https://docusaurus.io/
- **Questions about Spanish/ustedeo?** - Email or open an issue
- **Issues or bugs?** - Create a GitHub issue with clear description

---

## Recognition

Contributors are recognized in:
- GitHub contribution graph
- Project README (coming soon)
- Community celebrations and shout-outs

Thank you for making Tejido Social better! 🧵
