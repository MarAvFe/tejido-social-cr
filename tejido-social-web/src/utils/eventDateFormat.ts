const WEEKDAY_FORMATTER = new Intl.DateTimeFormat('es-CR', {weekday: 'long'});
const DAY_MONTH_FORMATTER = new Intl.DateTimeFormat('es-CR', {day: 'numeric', month: 'long'});

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * "Miércoles 13 de agosto, 3:30pm" — long weekday + day/month (Spanish
 * Intl formatting already inserts "de"), no year (the popup is always
 * about a specific upcoming event, not a historical record), and a
 * 12h time built by hand rather than via Intl: Spanish locale renders
 * am/pm as "a. m."/"p. m." with a space and periods, not the compact
 * "am"/"pm" wanted here. All-day events omit the time entirely.
 */
export function formatEventDateTime(date: Date, allDay: boolean): string {
  const datePart = `${capitalize(WEEKDAY_FORMATTER.format(date))} ${DAY_MONTH_FORMATTER.format(date)}`;
  if (allDay) return datePart;

  const hours24 = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const suffix = hours24 >= 12 ? 'pm' : 'am';
  const hours12 = hours24 % 12 || 12;
  return `${datePart}, ${hours12}:${minutes}${suffix}`;
}
