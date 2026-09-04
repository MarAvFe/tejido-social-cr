/**
 * Modality tagging convention: whoever manages a calendar's events prefixes
 * an event's title with "[Virtual]" or "[Presencial]" in the normal Google
 * Calendar editor — no custom fields needed, since the public web UI
 * doesn't expose any. An untagged event has unknown modality: it always
 * stays visible regardless of the modality filter, so a manager who forgets
 * the tag never loses visibility of their event.
 */

export type EventModality = 'virtual' | 'presencial';

const TAG_PATTERN = /^\s*\[(virtual|presencial)\]\s*/i;

export interface ParsedEventTitle {
  modality: EventModality | null;
  cleanTitle: string;
}

export function parseEventTitle(rawTitle: string): ParsedEventTitle {
  const match = rawTitle.match(TAG_PATTERN);
  if (!match) {
    return {modality: null, cleanTitle: rawTitle};
  }
  return {
    modality: match[1].toLowerCase() as EventModality,
    cleanTitle: rawTitle.slice(match[0].length),
  };
}

export const MODALITY_LABELS: Record<EventModality, string> = {
  virtual: 'Virtual',
  presencial: 'Presencial',
};

export const MODALITY_ICONS: Record<EventModality, string> = {
  virtual: '💻',
  presencial: '📍',
};
