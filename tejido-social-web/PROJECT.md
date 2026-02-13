# Tejido Social — Project Description & Context

> This file exists to provide AI assistants (GitHub Copilot, etc.) with full context about the project's purpose, architecture, content decisions, and design philosophy. Read this before generating any code or content.

---

## What Is Tejido Social?

Tejido Social is an open-source, neutral framework for decentralized community organizing. It is a documentation platform — built with Docusaurus — that provides structured knowledge, role definitions, and practical toolkits so that any community or movement can organize effectively without reinventing the wheel.

It is NOT tied to any specific political movement, ideology, or organization. It is a reusable infrastructure that any cause can fork, adopt, and adapt.

The name "Tejido Social" is Spanish for "social fabric." A fabric is woven thread by thread. A movement is built person by person.

---

## Why It Exists (The Problem)

Most grassroots movements face the same structural problems:

1. **No onboarding** — New people arrive motivated but don't know what to do
2. **Knowledge hoarding** — Critical knowledge lives in the heads of a few founders who are often older, less tech-savvy, or burned out
3. **No role clarity** — People don't know what's expected of them or how to grow
4. **Centralized bottleneck** — Everything requires approval from a small group, making scaling impossible
5. **No documentation** — Nothing is written down, so everything depends on word of mouth
6. **Fragmentation** — Multiple disconnected groups doing similar things with no coordination
7. **Burnout** — Organizers have no support system, wellbeing is ignored
8. **Shallow engagement** — People come to one protest, don't know what's next, and disappear

Tejido Social solves all of these by providing a pre-built organizational architecture that movements can adopt.

---

## Core Design Philosophy

### 1. Autonomy Over Approval
Anyone can organize an action, anywhere, at any time — as long as they follow the documented principles. No central authority needs to approve anything. This is the BDS model: define the principles, let people act independently under them.

### 2. Documentation Over Memory
Everything must be written down. The goal is that a brand new person can read the documentation and take meaningful action without asking anyone for help.

### 3. Platform Over Organization
Tejido Social is not an organization that does things. It is a platform that enables others to do things. Like BDS globally, or Extinction Rebellion locally — the "center" defines principles and provides resources; the "nodes" act autonomously.

### 4. Community Over Protest
The movement must be more than resistance. It must also build alternatives. This includes solidarity economy, mutual aid, cultural events, mental health support — not just street protests. People stay when there is something to belong to, not just something to fight against.

### 5. Progression Over Gatekeeping
Participation is a curriculum. People move through levels naturally based on interest and capacity. There is no gatekeeping — just increasing depth of engagement.

### 6. Neutral Infrastructure
The repo itself is cause-neutral. A Palestine solidarity group, a climate movement, a housing rights campaign — all can fork and use this. The content structure is universal. Only the specific content (chants, talking points, political context) changes per cause.

---

## Technology Stack

- **Framework:** Docusaurus (React + Markdown)
- **Language:** Spanish (primary), English (secondary/documentation)
- **Hosting:** GitHub Pages (free)
- **Content format:** Markdown (.md) and MDX where needed
- **Version control:** Git / GitHub
- **License:** CC0 1.0 Universal (Public Domain — no restrictions)

### Why Docusaurus?
- Native Markdown support
- Auto-generates sidebar navigation from folder structure
- Built for structured knowledge (documentation, guides, wikis)
- Easy for non-developers to contribute (just edit .md files)
- Free hosting via GitHub Pages
- Supports versioning for future content updates

---

## Content Architecture

```
tejido-social/
├── docs/
│   ├── intro.md                        # What is Tejido Social, how to use it
│   ├── principios.md                   # Ethical framework and red lines
│   ├── niveles/                        # Participation pathway
│   │   ├── observador.md               # Level 0: Bystander
│   │   ├── participante.md             # Level 1: Regular protester
│   │   ├── miembro-activo.md           # Level 2: Active member (choose organism)
│   │   ├── coordinador.md              # Level 3: Coordinator
│   │   └── formador.md                 # Level 4: Trainer/multiplier
│   ├── organismos/                     # Autonomous working groups
│   │   ├── accion-callejera.md         # Street action and direct action
│   │   ├── seguridad-cuidado.md        # Security and first aid
│   │   ├── medios-comunicacion.md      # Media, social media, narrative
│   │   ├── educacion.md                # Workshops, training, political education
│   │   ├── presion-politica.md         # Lobbying, petitions, policy campaigns
│   │   ├── bienestar.md                # Mental health, culture, art
│   │   ├── economia-solidaria.md       # Boycott, local alternatives, mutual aid
│   │   └── apoyo-legal.md              # Legal rights, documentation, lawyers
│   ├── guias/                          # Practical how-to manuals
│   │   ├── como-organizar-protesta.md  # Step-by-step protest organization
│   │   ├── seguridad-en-protestas.md   # Safety protocols for protesters
│   │   ├── derechos-legales.md         # Know your rights
│   │   ├── manejo-redes-sociales.md    # Social media strategy
│   │   ├── como-hablar-con-medios.md   # Media relations
│   │   ├── identificar-provocadores.md # How to spot infiltrators/provocateurs
│   │   └── prevencion-agotamiento.md   # Burnout prevention
│   └── recursos/                       # Ready-to-use materials
│       ├── canticos.md                 # Chant repository
│       ├── plantillas-pancartas.md     # Sign/banner templates
│       ├── resumen-conflicto-15seg.md  # How to explain a cause in 15 seconds
│       ├── preguntas-frecuentes.md     # FAQ / counter-arguments
│       └── glosario.md                 # Key terms and definitions
├── static/
│   └── img/                            # Logos, icons, diagrams
├── src/
│   └── pages/
│       └── index.tsx                   # Landing page
├── PROJECT.md                          # This file — full project context
├── README.md                           # Public-facing repo description
├── CONTRIBUTING.md                     # How to contribute
└── docusaurus.config.js                # Site configuration
```

---

## Participation Levels (The Curriculum)

This is the core of Tejido Social. Engagement is a progression, not a binary. Each level has clear expectations, resources, and a path forward.

### Level 0: Observador (Bystander)
**Who:** Someone attending their first action, curious but uncommitted
**Expectations:**
- Do not be disrespectful
- Do not be violent
- Listen and observe
**Resources:** FAQ, "why we protest" explainer, what to expect guide
**Next step:** If they return → become Participante

### Level 1: Participante (Participant)
**Who:** Someone who attends protests regularly
**Expectations:**
- Know 3-5 chants
- Bring water, sun protection, basic face covering
- Follow security team guidance
- Understand basic nonviolence principles
**Resources:** Protest survival guide, legal rights card, chant repository
**Next step:** Choose an Organismo

### Level 2: Miembro Activo (Active Member)
**Who:** Someone ready to contribute beyond attending
**Expectations:** Contribute regularly to at least one Organismo
**Key principle:** People choose their lane based on skills and interest
**Resources:** Organismo-specific guides and tools
**Next step:** Become a Coordinador within their Organismo

### Level 3: Coordinador (Coordinator)
**Who:** Someone who facilitates an Organismo
**Expectations:**
- Keep Organismo documentation updated
- Onboard new members to the Organismo
- Coordinate with other Organismos when needed
- No gatekeeping — enable, don't control
**Resources:** Facilitation guides, inter-organismo coordination protocols

### Level 4: Formador (Trainer/Multiplier)
**Who:** Someone who trains others and helps new groups adopt the framework
**Expectations:**
- Run workshops using Tejido Social materials
- Help new communities fork and adapt the framework
- Contribute improvements back to the repo
**Resources:** Workshop curricula, train-the-trainer guides

---

## The Organismos (Working Groups)

Each Organismo is an autonomous working group. They operate independently but coordinate when needed. No Organismo needs permission from another to act — they only need to stay within the movement's principles.

Each Organismo document includes:
- Purpose statement
- Specific activities
- Tools and resources needed
- How to join
- How to coordinate with other Organismos

### 1. Acción Callejera (Street Action)
Organize and execute public demonstrations. Protests, flash mobs, banner drops, public installations.

### 2. Seguridad y Cuidado (Security & Care)
Protect people at actions. De-escalation, first aid, monitoring for provocateurs, legal observers.

### 3. Medios y Comunicación (Media & Communications)
Control the narrative. Social media, press releases, photography, video, counter-disinformation, graphic design.

### 4. Educación (Education)
Build knowledge and skills. History workshops, political education, protest training, material development.

### 5. Presión Política (Political Pressure)
Change policy. Lobbying, petitions, legislative analysis, coalition building, campaign strategy.

### 6. Bienestar (Wellbeing)
Sustain the movement emotionally. Mental health support, decompression circles, art, music, cultural events, celebration.

### 7. Economía Solidaria (Solidarity Economy)
Build alternatives. Boycott education and tracking, local product directories, community hubs, mutual aid networks, alternative supply chains.

### 8. Apoyo Legal (Legal Support)
Protect people legally. Know Your Rights training, legal observer program, lawyer networks, documentation of violations.

---

## Communication Architecture (3-Tier Model)

Tejido Social recommends a 3-tier communication structure for any movement that adopts this framework:

### Tier 1: Public Discovery (Instagram Group Chat)
- **Purpose:** Onboarding, announcements, general mobilization
- **Who:** Anyone who shows interest
- **Privacy:** Username-based, no phone numbers exposed
- **Goal:** Cast a wide net, identify committed people

### Tier 2: Active Members (WhatsApp Community)
- **Purpose:** Coordinate active participants
- **Who:** People who have shown up 2-3 times
- **Structure:** Main announcement channel + sub-chats per Organismo
- **Key benefit:** People join only the chats relevant to their work

### Tier 3: Core Team (Private WhatsApp Group)
- **Purpose:** Rapid coordination for sensitive or urgent decisions
- **Who:** 10-20 people maximum, personally known and trusted
- **Rule:** Only add people you have met in person at least twice
- **Policy:** Members can be removed without warning for disruptive behavior; can request re-entry

---

## Ethical Framework (Principles)

Any movement adopting Tejido Social should define their own principles. The framework suggests these categories:

### What We Stand For
- Human rights and human dignity
- Nonviolent direct action
- Horizontal organizing (no permanent hierarchies)
- Inclusion and accessibility
- Accountability and transparency

### What We Don't Do (Red Lines)
- Physical violence against people
- Property destruction unless explicitly agreed by consensus
- Harassment of individuals online or offline
- Actions that could harm the movement's reputation without consensus
- Discrimination of any kind within the movement

### Why Written Principles Matter (Protection Function)
Written principles serve a critical protective function: if someone acts in the movement's name but violates the principles, the movement can publicly and immediately disavow the action. Without written principles, there is no defense. With them, the response is simple: "Whoever did that is not acting under our principles. They do not represent us."

Example: If someone spray-paints a church and claims to be from the movement, the written principle against property destruction allows the movement to say clearly: "That person violated our published principles. They do not represent us."

---

## Content Writing Guidelines

When writing content for Tejido Social docs:

### Tone
- Clear and direct — avoid academic or overly formal language
- Practical — every section should answer "what do I actually do?"
- Empowering — readers should feel capable, not overwhelmed
- Neutral — content should be adaptable to any cause

### Structure for Each Doc
1. **What this is** (1-2 sentences)
2. **Why it matters** (context, not too long)
3. **How to do it** (practical steps, numbered or bulleted)
4. **What you need** (resources, tools, materials)
5. **Next steps** (where to go from here)

### Language
- Primary language: Spanish
- Keep sentences short
- Use headers and bullets generously
- Avoid jargon without explanation
- Define terms in the glosario

---

## Key Design Decisions

### Why Neutral?
The framework itself is cause-neutral so it can be forked and reused by any movement. Palestine solidarity in Costa Rica was the origin use case, but the architecture should work equally for climate, housing, labor, or any other community organizing effort.

### Why CC0 (Public Domain)?
Knowledge for organizing should be free. No attribution required. No restrictions. Anyone can copy, modify, distribute without asking permission.

### Why Spanish First?
The origin community is Costa Rica. Spanish is the primary language. English documentation (like this file) is secondary and used mainly for technical/developer context.

### Why Docusaurus Over a CMS?
- Git-based workflow means anyone can contribute via pull request
- No database, no server costs, no maintenance overhead
- Markdown is accessible to non-developers
- Version history is built in
- Free forever on GitHub Pages

### Why Autonomous Organismos?
Centralized approval is a bottleneck that kills movements. The organismo model allows parallel workstreams to operate simultaneously without waiting for each other. Coordination happens at the edges (when needed) not at the center (always).

---

## Origin Story & Use Cases

### Origin
This framework was designed by a Costa Rica-based Palestine solidarity activist who noticed that:
- Their existing network (Red Costa Rica-Palestina) had deep knowledge but no capacity to scale
- New, energetic members had no clear path to contribution
- There was no documentation of tactics, protocols, or principles
- Multiple groups were doing redundant work with no coordination
- The movement was growing but not deepening

The solution was to redesign the network as a platform (authority + resources) rather than an organization (centralized action group) — inspired by the BDS movement's global scalability model.

### Primary Use Case
Palestine solidarity movement in Costa Rica:
- Weekly public protests (sustained for 3+ months)
- TLC (Free Trade Agreement with Israel) opposition campaign
- Educational actions at public events (e.g. FIFA World Cup matches)
- Community installations (symbolic baby shrouds, LED flags, framed photos)
- Media engagement and social media campaigns

### Secondary Use Cases (Any movement can use this)
- Environmental activism
- Housing rights campaigns
- Labor organizing
- Anti-corruption movements
- Democracy defense campaigns

---

## What This Project Is NOT

- Not a social network or app
- Not a platform for posting content (use Instagram/WhatsApp for that)
- Not a news site or blog (though a blog can be added)
- Not affiliated with any specific political party or NGO
- Not a fundraising platform
- Not a replacement for human relationships and trust

---

## Future Features (Potential Roadmap)

These are not commitments — just ideas for where the project could grow:

- [ ] Interactive participation pathway (visual, clickable diagram)
- [ ] Printable PDF versions of all guides
- [ ] Event calendar integration
- [ ] Protest map (where actions are happening)
- [ ] Multilingual support (English, Portuguese, Arabic)
- [ ] Community forum or discussion section
- [ ] Template gallery (downloadable signs, social media templates)
- [ ] Video guides embedded in documentation
- [ ] "Fork this for your cause" one-click setup

---

## Contributing

See `CONTRIBUTING.md` for full guidelines.

Short version:
- Fork → Branch → Pull Request
- Content in Spanish
- Practical over theoretical
- No cause-specific content in the main repo (create a fork for that)
- Be kind, be clear, be useful

---

*This document should be updated whenever significant architectural or content decisions are made. It is the source of truth for anyone (human or AI) working on this project.*

## Documentation Framework: Diátaxis

Content in this project is organized following the **Diátaxis framework**
(https://diataxis.fr) by Daniele Procida.

Diátaxis proposes that documentation serves 4 distinct user needs,
and mixing them creates confusion. Each type must be kept separate:

| Type | Oriented toward | User is... | Tejido Social example |
|------|----------------|------------|----------------------|
| **Tutorial** | Learning | Studying | "Asiste a tu primera protesta" |
| **How-to Guide** | Tasks | Working | "Cómo organizar una protesta en 48 horas" |
| **Reference** | Information | Working | Chant repository, legal rights card |
| **Explanation** | Understanding | Studying | Why decentralized organizing works |

### The key distinctions:

- A **tutorial** is a lesson — it takes the user through an experience
  and teaches by doing. Success = the user learned something.
- A **how-to guide** solves a specific problem. It assumes competence.
  Success = the task is done.
- **Reference** is neutral, complete, and consistent. No teaching,
  no narrative. Just accurate information.
- **Explanation** provides context, background, and reasoning.
  It answers "why" not "how".

### Why this matters for Tejido Social:

Most activist documentation mixes all 4 types in a single document.
This makes it hard to find what you need depending on where you are.
A first-timer needs a tutorial. An organizer mid-action needs a
how-to guide. A researcher needs reference. A curious newcomer needs
explanation.

Keep them separate. When writing any doc, ask: **what type is this?**