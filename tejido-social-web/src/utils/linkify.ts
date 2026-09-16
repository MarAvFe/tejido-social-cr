/**
 * Plain-text URLs (Zoom, Meet, Google Forms, a second Instagram link,
 * anything) should be clickable wherever they show up — not just the one
 * Instagram link that gets special embed treatment. Pure text-matching
 * logic shared by richText.ts (for HTML descriptions, via the DOM) and
 * EventCalendar (for plain-text fields like location/contacto, via JSX).
 */

const URL_PATTERN = /https?:\/\/[^\s<>"']+/gi;
const TRAILING_PUNCTUATION = /[.,;:!?)\]}]+$/;

export interface UrlMatch {
  start: number;
  end: number;
  url: string;
}

export function findUrls(text: string): UrlMatch[] {
  const matches: UrlMatch[] = [];
  const pattern = new RegExp(URL_PATTERN);
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    let url = match[0];
    let end = match.index + url.length;
    // A URL at the end of a sentence shouldn't swallow the period/comma/etc.
    const trailing = url.match(TRAILING_PUNCTUATION);
    if (trailing) {
      url = url.slice(0, -trailing[0].length);
      end -= trailing[0].length;
    }
    if (url) {
      matches.push({start: match.index, end, url});
    }
  }
  return matches;
}
