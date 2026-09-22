import type {ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

interface CarsLayoutProps {
  title: string;
  tagline: ReactNode;
  /** SEO / browser-tab description — plain text, no markup. */
  description: string;
  /** Small uppercase line above the title. Defaults to the collective's full name; pass `null` on the home page, where the title already spells it out. */
  eyebrow?: ReactNode;
  /** Breadcrumb back-link, e.g. {to: '/cars/', label: 'CARS'}. Omit on the root page. */
  backTo?: {to: string; label: string};
  children: ReactNode;
}

/**
 * Shared shell for the CARS section. Like the Iniciativas Colectivas portal,
 * it deliberately skips the site's Docusaurus Layout (no navbar, no footer,
 * no FA branding) — CARS is an independent collective that only shares the
 * domain. `Head` sets the tab title/description directly so it never inherits
 * the " | Aprendé sobre el FA" suffix Layout would otherwise add, and points
 * the favicon at the collective's own mark.
 */
export function CarsLayout({
  title,
  tagline,
  description,
  eyebrow = 'Colectiva Autónoma por la Resistencia Social',
  backTo,
  children,
}: CarsLayoutProps): ReactNode {
  const faviconUrl = useBaseUrl('/img/cars-favicon.ico');
  const logoUrl = useBaseUrl('/img/cars-logo-mark.png');
  // `absolute` so this resolves to a full https:// URL — Facebook and other
  // scrapers won't fetch a root-relative og:image, they just show no preview.
  const socialImageUrl = useBaseUrl('/img/cars-social-card.png', {absolute: true});
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Docusaurus's site-wide favicon tag stays in the document (Head
            doesn't dedupe by rel), but the last <link rel="icon"> in the head
            wins in browsers — so this overrides the inherited FA one with the
            collective's own seal. */}
        <link rel="icon" href={faviconUrl} />
        {/* Without these, the site-wide og:* tags apply and a link shared to
            the collective's own Facebook page previews as "Aprendé sobre el
            FA" with the party's social card. These are keyed by `property`,
            which react-helmet does dedupe, so they replace rather than stack. */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialImageUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImageUrl} />
      </Head>
      <div className={styles.portal}>
        <header className={styles.header}>
          <div className="container">
            {backTo && (
              <Link to={backTo.to} className={styles.backLink}>
                ← {backTo.label}
              </Link>
            )}
            <div className={styles.headerInner}>
              <img src={logoUrl} alt="" className={styles.headerLogo} />
              <div className={styles.headerText}>
                {eyebrow && <p className={styles.headerEyebrow}>{eyebrow}</p>}
                <Heading as="h1">{title}</Heading>
                <p className={styles.tagline}>{tagline}</p>
              </div>
            </div>
          </div>
        </header>
        <main className="container">{children}</main>
      </div>
    </>
  );
}

interface StatementProps {
  /** Short uppercase label, e.g. "Misión", "Visión". */
  label: string;
  children: ReactNode;
}

/** One mission/vision statement, shown as a flag-red-edged card. */
export function Statement({label, children}: StatementProps): ReactNode {
  return (
    <div className={styles.statement}>
      <p className={styles.statementLabel}>{label}</p>
      <p className={styles.statementBody}>{children}</p>
    </div>
  );
}

interface StatementGridProps {
  children: ReactNode;
}

/** Lays out the mission/vision statements side by side, stacking on narrow screens. */
export function StatementGrid({children}: StatementGridProps): ReactNode {
  return <div className={styles.statementGrid}>{children}</div>;
}

interface SectionProps {
  title: string;
  /** Optional lead paragraph under the heading, before `children`. */
  intro?: ReactNode;
  children?: ReactNode;
}

/** A titled prose section with a readable measure — "cómo nos organizamos", "comisiones", etc. */
export function Section({title, intro, children}: SectionProps): ReactNode {
  return (
    <section className={styles.section}>
      <Heading as="h2">{title}</Heading>
      {intro && <p className={styles.sectionIntro}>{intro}</p>}
      {children}
    </section>
  );
}

interface CommitteeProps {
  name: string;
  children: ReactNode;
}

/** One committee card: name plus a one-line description of what it does. */
export function Committee({name, children}: CommitteeProps): ReactNode {
  return (
    <div className={styles.committeeCard}>
      <Heading as="h3" className={styles.committeeName}>
        {name}
      </Heading>
      <p className={styles.committeeDescription}>{children}</p>
    </div>
  );
}

interface CommitteeGridProps {
  children: ReactNode;
}

/** Grid wrapper for `Committee` cards. */
export function CommitteeGrid({children}: CommitteeGridProps): ReactNode {
  return <div className={styles.committeeGrid}>{children}</div>;
}

interface JoinCtaProps {
  href: string;
  label: string;
  /** Small line under the button — what happens after someone signs up. */
  note?: ReactNode;
  /** True when `href` points at a page on this same site — routes through Link instead of opening a new tab. */
  internal?: boolean;
  /** True while the real form URL is still pending — renders the pending visual language instead of shipping a dead link silently. */
  placeholder?: boolean;
}

/** The "sumate" call to action: a single prominent link to the join form. */
export function JoinCta({href, label, note, internal, placeholder}: JoinCtaProps): ReactNode {
  const className = clsx(styles.ctaButton, placeholder && styles.resourceLinkPlaceholder);
  const body = (
    <>
      {label}
      {placeholder && <span className={clsx(styles.badge, styles.badgePending)}>pendiente</span>}
    </>
  );
  return (
    <div>
      {internal ? (
        <Link to={href} className={className}>
          {body}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {body}
        </a>
      )}
      {note && <p className={styles.ctaNote}>{note}</p>}
    </div>
  );
}

interface NavCardProps {
  to: string;
  title: string;
  description: ReactNode;
  /** Renders as a non-clickable card with a "pendiente" flag instead of a link — for a page that doesn't exist yet. */
  disabled?: boolean;
}

/** A card linking to another page inside this site. */
export function NavCard({to, title, description, disabled}: NavCardProps): ReactNode {
  const content = (
    <>
      <Heading as="h3" className={styles.navCardTitle}>
        {title} {disabled ? '' : '→'}
        {disabled && <span className={clsx(styles.badge, styles.badgePending)}>pendiente</span>}
      </Heading>
      <p className={styles.navCardDescription}>{description}</p>
    </>
  );
  if (disabled) {
    return (
      <div className={clsx(styles.navCard, styles.navCardDisabled)} aria-disabled="true">
        {content}
      </div>
    );
  }
  return (
    <Link to={to} className={styles.navCard}>
      {content}
    </Link>
  );
}

interface InitiativeCardProps {
  title: string;
  description: ReactNode;
  /**
   * Where the initiative actually lives. An initiative is not documented here —
   * CARS accompanies work that each struggle hosts on its own site or page, so
   * this card is a signpost outward, not a container.
   *
   * Omit while the destination doesn't exist yet: the card then renders as a
   * visible "pendiente" placeholder rather than a dead link.
   */
  href?: string;
  /** Where the link goes, shown under the description, e.g. "tejidosocialcr.netlify.app" or "Instagram". */
  host?: string;
  /** True when `href` points at a page on this same domain — skips the new-tab/external treatment. */
  internal?: boolean;
}

/**
 * One active initiative. Initiatives are always *external* to CARS: each one
 * is organized by the people in that struggle and documented wherever they
 * already publish, so these cards send the reader there instead of restating
 * the content — that's the whole point of "tender puentes."
 */
export function InitiativeCard({
  title,
  description,
  href,
  host,
  internal,
}: InitiativeCardProps): ReactNode {
  const body = (
    <>
      <Heading as="h3" className={styles.navCardTitle}>
        {title} {href ? '→' : ''}
        {!href && <span className={clsx(styles.badge, styles.badgePending)}>pendiente</span>}
        {href && !internal && <span className={clsx(styles.badge, styles.badgeExternal)}>enlace externo</span>}
      </Heading>
      <p className={styles.navCardDescription}>{description}</p>
      {host && <span className={styles.navCardHost}>{host}</span>}
    </>
  );

  if (!href) {
    return (
      <div className={clsx(styles.navCard, styles.navCardDisabled)} aria-disabled="true">
        {body}
      </div>
    );
  }

  if (internal) {
    return (
      <Link to={href} className={styles.navCard}>
        {body}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.navCard}>
      {body}
    </a>
  );
}

interface ResourceLinkProps {
  href: string;
  label: string;
  /** True while this is example content waiting on the real URL — renders a visible "pendiente" flag instead of shipping a dead link silently. */
  placeholder?: boolean;
}

/** One external link in a resource/social-media list. */
export function ResourceLink({href, label, placeholder}: ResourceLinkProps): ReactNode {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.resourceLink, placeholder && styles.resourceLinkPlaceholder)}>
      {label}
      {placeholder && <span className={clsx(styles.badge, styles.badgePending)}>pendiente</span>}
    </a>
  );
}

interface ResourceSectionProps {
  title: string;
  children: ReactNode;
}

/** Groups `ResourceLink`s under a heading, e.g. "Redes sociales". */
export function ResourceSection({title, children}: ResourceSectionProps): ReactNode {
  return (
    <section className={styles.resourceSection}>
      <Heading as="h2">{title}</Heading>
      <div className={styles.resourceList}>{children}</div>
    </section>
  );
}

interface CauseMetaProps {
  /** Where the cause stands right now. */
  estado: 'activa' | 'en pausa' | 'cerrada';
  /** The organization or group that leads it — CARS accompanies, it does not lead. */
  organizacionLider: string;
  /** A public channel only: a page, a published address. Never a personal number or a private group invite. */
  contactoPublico: string;
  /** Concrete asks, one per line. */
  comoAyudar: string[];
  /** ISO date (YYYY-MM-DD) of the last update to the cause's page. */
  ultimaActualizacion: string;
  etiquetas: string[];
}

/**
 * The fixed descriptive header shared by every cause page: who leads it, how
 * to reach them, what it needs, and when this was last true. Cause bodies are
 * free-form — this block is the one part that stays the same across all of
 * them, so a reader always finds the same facts in the same place.
 */
export function CauseMeta({
  estado,
  organizacionLider,
  contactoPublico,
  comoAyudar,
  ultimaActualizacion,
  etiquetas,
}: CauseMetaProps): ReactNode {
  const estadoClass =
    estado === 'activa'
      ? styles.estadoActiva
      : estado === 'en pausa'
        ? styles.estadoPausa
        : styles.estadoCerrada;
  return (
    <section className={styles.causeMeta}>
      <div className={styles.causeMetaHeader}>
        <span className={clsx(styles.estadoBadge, estadoClass)}>{estado}</span>
        <div className={styles.causeTags}>
          {etiquetas.map((tag) => (
            <span key={tag} className={styles.causeTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <dl className={styles.causeMetaList}>
        <dt>Organización líder</dt>
        <dd>{organizacionLider}</dd>
        <dt>Contacto público</dt>
        <dd>{contactoPublico}</dd>
        <dt>Cómo ayudar</dt>
        <dd>
          <ul className={styles.causeHelpList}>
            {comoAyudar.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </dd>
        <dt>Última actualización</dt>
        <dd>{ultimaActualizacion}</dd>
      </dl>
    </section>
  );
}

interface PathCardProps {
  to: string;
  /** The reader's own words for why they're here, e.g. "Tengo una causa". */
  title: string;
  children: ReactNode;
}

/**
 * One of the three entry points on the landing page. People arrive here
 * wanting different things — to bring a struggle, to join the work, or just
 * to understand what this is — and each needs a different first page.
 */
export function PathCard({to, title, children}: PathCardProps): ReactNode {
  return (
    <Link to={to} className={styles.pathCard}>
      <Heading as="h3" className={styles.pathCardTitle}>
        {title}
      </Heading>
      <p className={styles.pathCardDescription}>{children}</p>
      <span className={styles.pathCardArrow}>Empezar aquí →</span>
    </Link>
  );
}

interface PathGridProps {
  children: ReactNode;
}

/** Lays the three `PathCard`s side by side, stacking on narrow screens. */
export function PathGrid({children}: PathGridProps): ReactNode {
  return <div className={styles.pathGrid}>{children}</div>;
}

interface TimelineItemProps {
  /** When it happened. Pass `null` while the real date is still unknown — the entry then shows "fecha pendiente" rather than an invented one. */
  date: string | null;
  /**
   * True when `date` is what someone remembers rather than something checked
   * against a record. Renders with a visible "por confirmar" mark, so a
   * half-remembered date is never read as an established one — this is the
   * organization's own history, and a wrong date here gets quoted back later.
   */
  dateUnconfirmed?: boolean;
  title: string;
  children: ReactNode;
}

/** One entry in the history timeline. */
export function TimelineItem({
  date,
  dateUnconfirmed,
  title,
  children,
}: TimelineItemProps): ReactNode {
  return (
    <li className={styles.timelineItem}>
      <p className={clsx(styles.timelineDate, !date && styles.timelineDatePending)}>
        {date ?? 'fecha pendiente'}
        {date && dateUnconfirmed && (
          <span className={styles.timelineDateUnconfirmed}>por confirmar</span>
        )}
      </p>
      <Heading as="h3" className={styles.timelineTitle}>
        {title}
      </Heading>
      <div className={styles.timelineBody}>{children}</div>
    </li>
  );
}

interface TimelineProps {
  children: ReactNode;
}

/** Vertical rule with dated entries, for the collective's history. */
export function Timeline({children}: TimelineProps): ReactNode {
  return <ol className={styles.timeline}>{children}</ol>;
}

interface PrincipleProps {
  /** 1-based position, shown as a large numeral. */
  number: number;
  title: string;
  children: ReactNode;
}

/** One numbered principle — the movement-principles format (XR/Sunrise style). */
export function Principle({number, title, children}: PrincipleProps): ReactNode {
  return (
    <li className={styles.principle}>
      <span className={styles.principleNumber} aria-hidden="true">
        {number}
      </span>
      <div>
        <Heading as="h3" className={styles.principleTitle}>
          {title}
        </Heading>
        <p className={styles.principleBody}>{children}</p>
      </div>
    </li>
  );
}

interface PrincipleListProps {
  children: ReactNode;
}

/** Ordered wrapper for `Principle` items. */
export function PrincipleList({children}: PrincipleListProps): ReactNode {
  return <ol className={styles.principleList}>{children}</ol>;
}

interface StatusNoticeProps {
  /** Short status word, e.g. "Propuesta". */
  label: string;
  children: ReactNode;
}

/**
 * Banner marking a page as not-yet-ratified. Used on pages describing
 * processes the collective has drafted but not formally approved, so nobody
 * reads a proposal as settled policy.
 */
export function StatusNotice({label, children}: StatusNoticeProps): ReactNode {
  return (
    <aside className={styles.statusNotice}>
      <span className={clsx(styles.badge, styles.badgePending)}>{label}</span>
      <p className={styles.statusNoticeBody}>{children}</p>
    </aside>
  );
}

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

/** One step in a numbered process (how to bring a cause, how a decision moves). */
export function Step({number, title, children}: StepProps): ReactNode {
  return (
    <li className={styles.step}>
      <span className={styles.stepNumber} aria-hidden="true">
        {number}
      </span>
      <div>
        <Heading as="h3" className={styles.stepTitle}>
          {title}
        </Heading>
        <div className={styles.stepBody}>{children}</div>
      </div>
    </li>
  );
}

interface StepListProps {
  children: ReactNode;
}

/** Ordered wrapper for `Step` items. */
export function StepList({children}: StepListProps): ReactNode {
  return <ol className={styles.stepList}>{children}</ol>;
}

interface CalloutProps {
  title: string;
  children: ReactNode;
}

/** A bordered aside for caveats — "this page is still being built", etc. */
export function Callout({title, children}: CalloutProps): ReactNode {
  return (
    <aside className={styles.callout}>
      <p className={styles.calloutTitle}>{title}</p>
      <div className={styles.calloutBody}>{children}</div>
    </aside>
  );
}
