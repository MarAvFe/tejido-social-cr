import {descriptionToPlainText} from '@site/src/utils/richText';

/**
 * Optional structured fields a calendar manager can add to an event's
 * Description box as plain "Etiqueta: valor" lines, anywhere in the text —
 * same trick as the [Virtual]/[Presencial]/[Híbrida] title tag, since
 * Google Calendar's web UI has no custom fields. Every field is optional
 * with a stated default, so an event with none of these lines behaves
 * exactly as before. Lines are read from the plain-text rendering of the
 * description (tags stripped, line breaks kept) — the full rich-text
 * description is still shown separately, untouched; these are just also
 * surfaced as scannable rows.
 */

export type EventStatus = 'confirmada' | 'pendiente' | 'disponible' | 'cancelada';

export interface EventMetadata {
  /** "Organiza:" / "A cargo de:" / "Responsable:" — the specific body running it, distinct from which calendar (municipality/Nacional) it lives in. */
  responsable?: string;
  /** "Sector:" / "Espacio:" — free-text topic or area. */
  sector?: string;
  /** "Inscripción:" — undefined (not stated) is distinct from false (stated "No"). */
  requiereInscripcion?: boolean;
  /** "Contacto:" / "Enlace:" — a person, phone, email, or URL. */
  contacto?: string;
  /** "Estado:" — defaults to "confirmada" when not stated, since an event on a public calendar is assumed to be happening unless said otherwise. A "cancelada" event is hidden from the calendar entirely, not just badged — see EventCalendar's eventClassNames. */
  estado: EventStatus;
  /** "Título corto:" — used only in month view, where a long title wraps awkwardly in a narrow day cell; week/day/agenda and the popup always show the real title. */
  tituloCorto?: string;
}

// Shared with stripRecognizedLines below, so the description prose shown
// alongside these badges doesn't just repeat the same lines verbatim.
const FIELD_PATTERNS: RegExp[] = [
  /^\s*(?:organiza(?:dor)?|a\s*cargo(?:\s*de)?|responsable)\s*:\s*(.+)$/i,
  /^\s*(?:sector|espacio)\s*:\s*(.+)$/i,
  /^\s*(?:requiere\s*)?inscripci[oó]n\s*:\s*(.+)$/i,
  /^\s*(?:contacto|enlace)\s*:\s*(.+)$/i,
  /^\s*estado\s*:\s*(.+)$/i,
  /^\s*t[ií]tulo\s*corto\s*:\s*(.+)$/i,
];

function extractField(lines: string[], keyPattern: RegExp): string | undefined {
  for (const line of lines) {
    const match = line.match(keyPattern);
    if (match) {
      return match[1].trim();
    }
  }
  return undefined;
}

function parseBoolean(value: string | undefined): boolean | undefined {
  if (!value) return undefined;
  // Prefix match, not exact — "Sí, hasta las 5pm" should still count as yes.
  // Not `\b`: JS's word-boundary is ASCII-only and doesn't count "í" as a
  // word character, so `\b` right after "Sí" silently fails to match at
  // all. A negative lookahead for "another letter follows" gets the same
  // "whole word, not a prefix of a longer word" effect without that gap.
  if (/^(s[ií]|true|yes)(?![a-záéíóúñ])/i.test(value.trim())) return true;
  if (/^(no|false)(?![a-záéíóúñ])/i.test(value.trim())) return false;
  return undefined;
}

function parseEstado(value: string | undefined): EventStatus {
  // "tentativ*"/"por confirmar" accepted as synonyms for "pendiente".
  if (value && /^(pendient|tentativ|por\s*confirmar)/i.test(value.trim())) return 'pendiente';
  if (value && /^disponible/i.test(value.trim())) return 'disponible';
  if (value && /^cancelad/i.test(value.trim())) return 'cancelada';
  return 'confirmada';
}

export function parseEventMetadata(rawDescription: string | undefined): EventMetadata {
  const lines = rawDescription ? descriptionToPlainText(rawDescription).split('\n') : [];
  const [organiza, sector, inscripcion, contacto, estado, tituloCorto] = FIELD_PATTERNS.map(
    (pattern) => extractField(lines, pattern),
  );

  return {
    responsable: organiza,
    sector,
    requiereInscripcion: parseBoolean(inscripcion),
    contacto,
    estado: parseEstado(estado),
    tituloCorto,
  };
}

/**
 * Removes lines recognized as one of the tags above from an already-
 * sanitized HTML description, so the prose shown alongside the structured
 * badges doesn't just repeat them verbatim — which, for an event whose
 * description is *entirely* tag lines, otherwise reads as the same
 * information printed twice. Google's editor keeps each line's own
 * formatting self-contained between `<br>`s (each line is its own complete
 * `<span>`/etc., never one tag spanning several lines), so splitting on
 * `<br>` and testing each fragment's text content is safe — it can't leave
 * a dangling unclosed tag behind.
 */
export function stripRecognizedLines(sanitizedHtml: string): string {
  const fragments = sanitizedHtml.split(/<br\s*\/?>/i);
  const kept = fragments.filter((fragment) => {
    const container = document.createElement('div');
    container.innerHTML = fragment;
    const text = (container.textContent || '').trim();
    return !FIELD_PATTERNS.some((pattern) => pattern.test(text));
  });
  return kept.join('<br>');
}

export const ESTADO_LABELS: Record<EventStatus, string> = {
  confirmada: 'Confirmada',
  pendiente: 'Pendiente',
  disponible: 'Disponible',
  cancelada: 'Cancelada',
};

export const ESTADO_ICONS: Record<EventStatus, string> = {
  confirmada: '✅',
  pendiente: '🕓',
  disponible: '🟢',
  cancelada: '❌',
};
