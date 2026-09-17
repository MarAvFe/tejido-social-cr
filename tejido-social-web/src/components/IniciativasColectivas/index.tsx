import type {ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import {extractInstagramEmbedUrl} from '@site/src/utils/instagramEmbed';
import styles from './styles.module.css';

interface PortalLayoutProps {
  title: string;
  tagline: ReactNode;
  /** SEO / browser-tab description — plain text, no markup. */
  description: string;
  /** Breadcrumb back-link, e.g. {to: '/iniciativas-colectivas/', label: 'Iniciativas Colectivas'}. Omit on the root page. */
  backTo?: {to: string; label: string};
  children: ReactNode;
}

/**
 * Shared shell for the Iniciativas Colectivas section. Deliberately skips
 * the site's Docusaurus Layout (no navbar, no footer, no FA branding) —
 * this is a separate initiative that only happens to share the domain.
 * `Head` sets the tab title/description directly instead, so it never
 * inherits the " | Aprendé sobre el FA" suffix Layout would otherwise add.
 */
export function PortalLayout({title, tagline, description, backTo, children}: PortalLayoutProps): ReactNode {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Docusaurus's site-wide favicon tag stays in the document (Head
            doesn't dedupe by rel), but the last <link rel="icon"> in the
            head wins in browsers — no dedicated icon exists yet for this
            initiative, so this suppresses the inherited FA one rather than
            show the wrong brand. Once there's a real one (e.g.
            static/img/iniciativas-colectivas-favicon.ico), point this href
            at that instead of 'data:,'. */}
        <link rel="icon" href="data:," />
      </Head>
      <div className={styles.portal}>
        <header className={styles.header}>
          <div className="container">
            {backTo && (
              <Link to={backTo.to} className={styles.backLink}>
                ← {backTo.label}
              </Link>
            )}
            <Heading as="h1">{title}</Heading>
            <p className={styles.tagline}>{tagline}</p>
          </div>
        </header>
        <main className="container">{children}</main>
      </div>
    </>
  );
}

interface NavCardProps {
  to: string;
  title: string;
  description: ReactNode;
  /** Renders as a non-clickable card with a "pausado" flag instead of a link — for a child page that's temporarily not meant to be reached from here. */
  disabled?: boolean;
}

/** A card linking to a child page (initiative → location, portal → initiative). */
export function NavCard({to, title, description, disabled}: NavCardProps): ReactNode {
  const content = (
    <>
      <Heading as="h3" className={styles.navCardTitle}>
        {title} {disabled ? '' : '→'}
        {disabled && <span className={styles.placeholderBadge}>pausado</span>}
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

interface ResourceLinkProps {
  href: string;
  label: string;
  /** True while this is example content waiting on the real URL — renders a visible "pendiente" flag instead of shipping a dead link silently. */
  placeholder?: boolean;
}

/** One external link in a resource/linktree list — social media, a Mega.io folder, a press article, etc. */
export function ResourceLink({href, label, placeholder}: ResourceLinkProps): ReactNode {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.resourceLink, placeholder && styles.resourceLinkPlaceholder)}>
      {label}
      {placeholder && <span className={styles.placeholderBadge}>pendiente</span>}
    </a>
  );
}

interface ArticleSummaryProps {
  /** Outlet name shown as a small label above the title, e.g. "CNN", "CBS News". */
  source: string;
  /** Path under static/, e.g. "/img/press-sources/cnn.png" — the outlet's own logo/favicon, not an article photo (those are copyrighted press/wire photos, not licensed for reuse here). */
  logo: string;
  /** Spanish translation of the original (foreign-language) headline. */
  title: string;
  /** Summary paragraph in Spanish — not a translation of the lede, a plain restatement of the article's content. */
  summary: string;
  href: string;
}

/** A press article referenced in translation: outlet logo, translated title, summary paragraph, then a link to the original. Richer than ResourceLink because the source isn't in Spanish and readers need the gist before deciding to click through. */
export function ArticleSummary({source, logo, title, summary, href}: ArticleSummaryProps): ReactNode {
  const logoUrl = useBaseUrl(logo);
  return (
    <article className={styles.articleCard}>
      <div className={styles.articleSourceRow}>
        <img src={logoUrl} alt="" className={styles.articleSourceLogo} />
        <p className={styles.articleSource}>{source}</p>
      </div>
      <Heading as="h3" className={styles.articleTitle}>
        {title}
      </Heading>
      <p className={styles.articleSummary}>{summary}</p>
      <a href={href} target="_blank" rel="noreferrer" className={styles.articleLink}>
        Leer el artículo original →
      </a>
    </article>
  );
}

interface ResourceSectionProps {
  title: string;
  children: ReactNode;
}

/** Groups ResourceLinks under a heading, e.g. "Redes sociales", "Documentos". */
export function ResourceSection({title, children}: ResourceSectionProps): ReactNode {
  return (
    <section className={styles.resourceSection}>
      <Heading as="h2">{title}</Heading>
      <div className={styles.resourceList}>{children}</div>
    </section>
  );
}

/**
 * Renders `**bold**` spans in an otherwise plain string as <strong>. Lets
 * long-form article content be authored as near-verbatim strings (matching
 * how the source drafts in `raw data/` are written) instead of hand-built
 * JSX per sentence.
 */
export function renderInlineMarkdown(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

interface ProseProps {
  children: ReactNode;
}

/** Wraps long-form article body content (headings, paragraphs, lists) with readable measure and spacing. */
export function Prose({children}: ProseProps): ReactNode {
  return <div className={styles.prose}>{children}</div>;
}

interface ArticleMetaProps {
  children: ReactNode;
}

/** An italic byline/context line under an article's title, e.g. naming the source project or a "tono satírico" note. */
export function ArticleMeta({children}: ArticleMetaProps): ReactNode {
  return <p className={styles.articleMeta}>{children}</p>;
}

interface CalloutProps {
  title: string;
  children: ReactNode;
}

/** A bordered aside for caveats/disclaimers within an article — data-quality warnings, "this is satire" notes. Reuses the placeholder/pending color language since both signal "read this before trusting the rest." */
export function Callout({title, children}: CalloutProps): ReactNode {
  return (
    <aside className={styles.callout}>
      <p className={styles.calloutTitle}>{title}</p>
      <div className={styles.calloutBody}>{children}</div>
    </aside>
  );
}

interface SourcesNoteProps {
  children: ReactNode;
}

/** Closing "Fuentes" line for an article — small, muted, set off by a rule. */
export function SourcesNote({children}: SourcesNoteProps): ReactNode {
  return <p className={styles.sourcesNote}>{children}</p>;
}

interface InstagramPostEmbedProps {
  /** Full post URL, e.g. https://www.instagram.com/p/ABC123/ */
  url: string;
}

/** Renders a post as Instagram's own thumbnail-card embed (no API key needed) instead of a bare text link — reuses the same no-auth iframe trick EventCalendar uses for flyers. */
export function InstagramPostEmbed({url}: InstagramPostEmbedProps): ReactNode {
  const embedUrl = extractInstagramEmbedUrl(url);
  if (!embedUrl) return null;
  return (
    <iframe
      src={embedUrl}
      className={styles.instagramThumb}
      loading="lazy"
      title="Publicación de Instagram"
    />
  );
}

interface MapEmbedProps {
  title: string;
  lat: number;
  lng: number;
  /** Standard Google Maps zoom level (integer). The classic embed URL has no way to request an exact ground distance — pick the level that shows roughly the intended span. */
  zoom: number;
  satellite?: boolean;
}

/** A Google Maps embed (no API key needed — the classic `output=embed` URL), for pinning a location like a project site. */
export function MapEmbed({title, lat, lng, zoom, satellite}: MapEmbedProps): ReactNode {
  const mapType = satellite ? 'k' : 'm';
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&t=${mapType}&output=embed`;
  return (
    <section className={styles.resourceSection}>
      <Heading as="h2">{title}</Heading>
      <iframe src={src} className={styles.mapEmbed} loading="lazy" title={title} />
    </section>
  );
}
