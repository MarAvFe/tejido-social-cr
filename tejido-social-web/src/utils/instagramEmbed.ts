/**
 * Flyers usually already live as a public Instagram post — managers paste
 * that link into the description the way anyone naturally would, no tag
 * to learn. If one is found anywhere in the raw text, it's rendered as
 * Instagram's own no-auth iframe embed (the classic "Embed" button
 * format — needs no API access token, unlike the Graph API oEmbed
 * endpoint) instead of asking for the flyer to be re-uploaded somewhere
 * with a public link just for this site's benefit.
 */

const INSTAGRAM_URL_PATTERN = /https?:\/\/(?:www\.)?instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]+)/i;

export function extractInstagramEmbedUrl(rawDescription: string | undefined): string | null {
  if (!rawDescription) return null;
  const match = rawDescription.match(INSTAGRAM_URL_PATTERN);
  if (!match) return null;
  const [, type, shortcode] = match;
  return `https://www.instagram.com/${type.toLowerCase()}/${shortcode}/embed`;
}
