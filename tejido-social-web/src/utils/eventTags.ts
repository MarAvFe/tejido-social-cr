/**
 * Modality tagging convention: whoever manages a calendar's events prefixes
 * an event's title with "[Virtual]", "[Presencial]", or "[Híbrida]" in the
 * normal Google Calendar editor — no custom fields needed, since the public
 * web UI doesn't expose any. An untagged event has unknown modality: it
 * always stays visible regardless of the modality filter, so a manager who
 * forgets the tag never loses visibility of their event.
 */

export type EventModality = 'virtual' | 'presencial' | 'hibrida';

const TAG_PATTERN = /^\s*\[(virtual|presencial|h[ií]brida)\]\s*/i;

export interface ParsedEventTitle {
  modality: EventModality | null;
  cleanTitle: string;
}

export function parseEventTitle(rawTitle: string): ParsedEventTitle {
  const match = rawTitle.match(TAG_PATTERN);
  if (!match) {
    return {modality: null, cleanTitle: rawTitle};
  }
  const raw = match[1].toLowerCase();
  const modality: EventModality = raw.startsWith('h') ? 'hibrida' : (raw as EventModality);
  return {
    modality,
    cleanTitle: rawTitle.slice(match[0].length),
  };
}

export const MODALITY_LABELS: Record<EventModality, string> = {
  virtual: 'Virtual',
  presencial: 'Presencial',
  hibrida: 'Híbrida',
};

export const MODALITY_ICONS: Record<EventModality, string> = {
  virtual: '💻',
  presencial: '📍',
  hibrida: '🔀',
};
