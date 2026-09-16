import type {ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
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
