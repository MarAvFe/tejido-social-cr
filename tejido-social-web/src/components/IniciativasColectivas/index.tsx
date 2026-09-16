import type {ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
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
}

/** A card linking to a child page (initiative → location, portal → initiative). */
export function NavCard({to, title, description}: NavCardProps): ReactNode {
  return (
    <Link to={to} className={styles.navCard}>
      <Heading as="h3" className={styles.navCardTitle}>
        {title} →
      </Heading>
      <p className={styles.navCardDescription}>{description}</p>
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
