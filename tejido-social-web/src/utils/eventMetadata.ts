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
  // "tentativ*" accepted as a synonym for "pendiente" in case it's already in use somewhere.
  if (value && /^(pendient|tentativ)/i.test(value.trim())) return 'pendiente';
  if (value && /^disponible/i.test(value.trim())) return 'disponible';
  if (value && /^cancelad/i.test(value.trim())) return 'cancelada';
  return 'confirmada';
}

export function parseEventMetadata(rawDescription: string | undefined): EventMetadata {
  const lines = rawDescription ? descriptionToPlainText(rawDescription).split('\n') : [];

  return {
    responsable: extractField(
      lines,
      /^\s*(?:organiza(?:dor)?|a\s*cargo(?:\s*de)?|responsable)\s*:\s*(.+)$/i,
    ),
    sector: extractField(lines, /^\s*(?:sector|espacio)\s*:\s*(.+)$/i),
    requiereInscripcion: parseBoolean(
      extractField(lines, /^\s*(?:requiere\s*)?inscripci[oó]n\s*:\s*(.+)$/i),
    ),
    contacto: extractField(lines, /^\s*(?:contacto|enlace)\s*:\s*(.+)$/i),
    estado: parseEstado(extractField(lines, /^\s*estado\s*:\s*(.+)$/i)),
    tituloCorto: extractField(lines, /^\s*t[ií]tulo\s*corto\s*:\s*(.+)$/i),
  };
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
