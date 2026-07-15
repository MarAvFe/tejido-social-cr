import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/DocItem/Content';

import styles from './styles.module.css';

// Título sintético: ver comentario original en el tema base
// (facebook/docusaurus#4882) — se mantiene igual, solo se añade la
// insignia de fuente después del contenido.
function useSyntheticTitle(): string | null {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

type SourceFrontMatter = {
  source_label?: string;
  source_note?: string;
  source_url?: string;
};

function SourceBadge() {
  const {frontMatter} = useDoc();
  const {source_label: label, source_note: note, source_url: url} =
    frontMatter as SourceFrontMatter;
  if (!label) {
    return null;
  }

  return (
    <p className={styles.sourceBadge}>
      <span className={styles.sourceLabel}>Fuente: {label}.</span>
      {note && url && (
        <>
          {' '}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {note}
          </a>
          .
        </>
      )}
      {note && !url && <> {note}.</>}
    </p>
  );
}

export default function DocItemContent({children}: Props): ReactNode {
  const syntheticTitle = useSyntheticTitle();
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
      <SourceBadge />
    </div>
  );
}
