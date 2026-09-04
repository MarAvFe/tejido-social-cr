/** Building "add to your calendar" links/files from a calendar event, without any extra dependency. */

export interface CalendarEventInfo {
  title: string;
  start: Date;
  end: Date | null;
  allDay: boolean;
  location?: string;
  description?: string;
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function formatUtc(date: Date): string {
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  );
}

function formatDateOnly(date: Date): string {
  return date.getUTCFullYear().toString() + pad(date.getUTCMonth() + 1) + pad(date.getUTCDate());
}

function resolveEnd(event: CalendarEventInfo): Date {
  if (event.end) return event.end;
  const fallbackMs = event.allDay ? 24 * 60 * 60 * 1000 : 60 * 60 * 1000;
  return new Date(event.start.getTime() + fallbackMs);
}

export function buildGoogleAddUrl(event: CalendarEventInfo): string {
  const end = resolveEnd(event);
  const dates = event.allDay
    ? `${formatDateOnly(event.start)}/${formatDateOnly(end)}`
    : `${formatUtc(event.start)}/${formatUtc(end)}`;

  const params = new URLSearchParams({action: 'TEMPLATE', text: event.title, dates});
  if (event.description) params.set('details', event.description);
  if (event.location) params.set('location', event.location);

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function escapeIcsText(text: string): string {
  return text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

export function buildIcsContent(event: CalendarEventInfo): string {
  const end = resolveEnd(event);
  const dtStart = event.allDay
    ? `DTSTART;VALUE=DATE:${formatDateOnly(event.start)}`
    : `DTSTART:${formatUtc(event.start)}`;
  const dtEnd = event.allDay ? `DTEND;VALUE=DATE:${formatDateOnly(end)}` : `DTEND:${formatUtc(end)}`;

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Tejido Social CR//Calendario//ES',
    'BEGIN:VEVENT',
    `UID:${Date.now()}-${Math.random().toString(36).slice(2)}@tejidosocialcr.netlify.app`,
    `DTSTAMP:${formatUtc(new Date())}`,
    dtStart,
    dtEnd,
    `SUMMARY:${escapeIcsText(event.title)}`,
  ];
  if (event.description) lines.push(`DESCRIPTION:${escapeIcsText(event.description)}`);
  if (event.location) lines.push(`LOCATION:${escapeIcsText(event.location)}`);
  lines.push('END:VEVENT', 'END:VCALENDAR');

  return lines.join('\r\n');
}

export function downloadIcs(event: CalendarEventInfo): void {
  const blob = new Blob([buildIcsContent(event)], {type: 'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase() || 'evento'}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
