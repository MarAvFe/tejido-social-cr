/**
 * Event calendars shown on /calendar — this is the ONLY file you edit to
 * add a new one, whether it's a municipality or the national level.
 *
 * Every event here is open to everyone; this list just says who organizes
 * it. To add one: create its public Google Calendar, share edit access
 * with whoever manages it, then add an entry below with its Calendar ID
 * (Settings and sharing > Integrate calendar > Calendar ID). A country-level
 * calendar is added the exact same way, e.g. `{ ..., label: 'Nacional' }` —
 * it isn't a municipality, but it's still one more entry in this list.
 *
 * Virtual vs. presencial is a separate, per-event tag — see
 * `src/utils/eventTags.ts`.
 */

export interface EventCalendar {
  /** Google Calendar ID, e.g. "abc123@group.calendar.google.com". */
  id: string;
  /** Display name shown in the filter UI (municipality, or "Nacional"). */
  label: string;
  /** Hex color used for this calendar's events. */
  color: string;
}

export const EVENT_CALENDARS: EventCalendar[] = [
  {
    id: 'f4d369068d8171579b964caf9013291645707e1d8f3fe60a685c69b20eb0510b@group.calendar.google.com',
    label: 'Sabanilla',
    color: '#1a73e8',
  },
];
