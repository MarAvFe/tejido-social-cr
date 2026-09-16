import DOMPurify from 'dompurify';
import {findUrls} from '@site/src/utils/linkify';

/**
 * Google Calendar's description field comes back as real HTML (its own web
 * editor writes it that way — e.g. "<span><br>texto<br></span>"), not
 * escaped entities and not plain text with "\n"s. It's still
 * externally-sourced content edited by people outside this repo, so it's
 * sanitized rather than trusted outright: a small allowlist covering what
 * that editor actually produces (line breaks, bold/italic, links, lists),
 * links forced to open safely in a new tab, everything else stripped.
 */

const ALLOWED_TAGS = ['br', 'b', 'strong', 'i', 'em', 'u', 'span', 'a', 'p', 'ul', 'ol', 'li'];
const ALLOWED_ATTR = ['href'];

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
  }
});

/** A plain-text description (no rich formatting available yet) may still use real newlines. */
function newlinesToBreaks(text: string): string {
  return text.replace(/\r\n|\r|\n/g, '<br>');
}

/** Safe HTML for on-page rendering via dangerouslySetInnerHTML. */
export function sanitizeDescriptionHtml(rawDescription: string): string {
  return DOMPurify.sanitize(newlinesToBreaks(rawDescription), {ALLOWED_TAGS, ALLOWED_ATTR});
}

/**
 * Plain-text URLs (Zoom, Meet, a Google Form, a second Instagram link —
 * anything a manager pastes without using Google Calendar's own "insert
 * link" formatting) show up as inert text otherwise. Walks the already-
 * sanitized HTML's text nodes and wraps any URL found in a real <a>,
 * skipping text that's already inside a link so an existing one is never
 * double-wrapped.
 */
export function linkifyUrls(html: string): string {
  const container = document.createElement('div');
  container.innerHTML = html;

  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (!node.parentElement?.closest('a')) {
      textNodes.push(node as Text);
    }
  }

  for (const textNode of textNodes) {
    const text = textNode.textContent || '';
    const matches = findUrls(text);
    if (matches.length === 0) continue;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    for (const {start, end, url} of matches) {
      if (start > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, start)));
      }
      const a = document.createElement('a');
      a.href = url;
      a.textContent = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      fragment.appendChild(a);
      lastIndex = end;
    }
    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }
    textNode.parentNode?.replaceChild(fragment, textNode);
  }

  return container.innerHTML;
}

/** Plain text for contexts that can't render HTML (the .ics file, the Google "add event" link). */
export function descriptionToPlainText(rawDescription: string): string {
  const withBreaksAsNewlines = rawDescription.replace(/<br\s*\/?>/gi, '\n');
  const stripped = DOMPurify.sanitize(withBreaksAsNewlines, {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
  // DOMPurify's stripped output can still contain HTML entities (e.g. "&nbsp;"
  // for Google's literal non-breaking spaces) rather than the real character —
  // it sanitizes markup, it doesn't decode text. Re-parse through the DOM
  // (safe: no tags survived the strip above) and read textContent to decode them.
  const container = document.createElement('div');
  container.innerHTML = stripped;
  return (container.textContent || '').trim();
}
