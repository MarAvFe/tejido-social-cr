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

export type EventStatus = 'confirmada' | 'tentativa' | 'cancelada';

export interface EventMetadata {
  /** "Organiza:" / "A cargo de:" / "Responsable:" — the specific body running it, distinct from which calendar (municipality/Nacional) it lives in. */
  responsable?: string;
  /** "Sector:" / "Espacio:" — free-text topic or area. */
  sector?: string;
  /** "Inscripción:" — undefined (not stated) is distinct from false (stated "No"). */
  requiereInscripcion?: boolean;
  /** "Contacto:" / "Enlace:" — a person, phone, email, or URL. */
  contacto?: string;
  /** "Estado:" — defaults to "confirmada" when not stated, since an event on a public calendar is assumed to be happening unless said otherwise. */
  estado: EventStatus;
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
  if (/^(s[ií]|true|yes)$/i.test(value.trim())) return true;
  if (/^(no|false)$/i.test(value.trim())) return false;
  return undefined;
}

function parseEstado(value: string | undefined): EventStatus {
  if (value && /^tentativ/i.test(value.trim())) return 'tentativa';
  if (value && /^cancelad/i.test(value.trim())) return 'cancelada';
  return 'confirmada';
}

export function parseEventMetadata(rawDescription: string | undefined): EventMetadata {
  const lines = rawDescription ? descriptionToPlainText(rawDescription).split('\n') : [];

  return {
    responsable: extractField(lines, /^\s*(?:organiza|a\s*cargo(?:\s*de)?|responsable)\s*:\s*(.+)$/i),
    sector: extractField(lines, /^\s*(?:sector|espacio)\s*:\s*(.+)$/i),
    requiereInscripcion: parseBoolean(
      extractField(lines, /^\s*(?:requiere\s*)?inscripci[oó]n\s*:\s*(.+)$/i),
    ),
    contacto: extractField(lines, /^\s*(?:contacto|enlace)\s*:\s*(.+)$/i),
    estado: parseEstado(extractField(lines, /^\s*estado\s*:\s*(.+)$/i)),
  };
}

export const ESTADO_LABELS: Record<EventStatus, string> = {
  confirmada: 'Confirmada',
  tentativa: 'Tentativa',
  cancelada: 'Cancelada',
};

export const ESTADO_ICONS: Record<EventStatus, string> = {
  confirmada: '✅',
  tentativa: '❓',
  cancelada: '❌',
};
