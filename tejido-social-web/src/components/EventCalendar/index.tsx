import React, {useMemo, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import esLocale from '@fullcalendar/core/locales/es';
import type {EventClickArg, EventContentArg} from '@fullcalendar/core';
import {EVENT_CALENDARS} from '@site/src/config/calendars';
import {buildGoogleAddUrl, downloadIcs, type CalendarEventInfo} from '@site/src/utils/addToCalendar';
import {
  parseEventTitle,
  MODALITY_LABELS,
  MODALITY_ICONS,
  type EventModality,
} from '@site/src/utils/eventTags';
import {sanitizeDescriptionHtml, descriptionToPlainText} from '@site/src/utils/richText';
import {
  parseEventMetadata,
  stripRecognizedLines,
  ESTADO_LABELS,
  ESTADO_ICONS,
  type EventMetadata,
} from '@site/src/utils/eventMetadata';
import {extractInstagramEmbedUrl} from '@site/src/utils/instagramEmbed';
import styles from './styles.module.css';

interface Props {
  apiKey: string;
}

interface SelectedEvent extends CalendarEventInfo {
  modality: EventModality | null;
  /** Sanitized HTML for on-page rendering; `description` stays plain text for the .ics/Google-link exports. */
  descriptionHtml?: string;
  metadata: EventMetadata;
  instagramEmbedUrl: string | null;
}

const ALL_MODALITIES: EventModality[] = ['presencial', 'virtual', 'hibrida'];

export default function EventCalendar({apiKey}: Props): React.ReactElement {
  const [enabledIds, setEnabledIds] = useState<Set<string>>(
    () => new Set(EVENT_CALENDARS.map((cal) => cal.id)),
  );
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(null);

  const eventSources = useMemo(
    () =>
      EVENT_CALENDARS.filter((cal) => enabledIds.has(cal.id)).map((cal) => ({
        googleCalendarId: cal.id,
        color: cal.color,
        // Strip the URL the google-calendar plugin sets to each event's own
        // Google Calendar page (from the API's htmlLink) — we always want
        // our own dialog, never a navigation away from the site. Leaving it
        // in actively crashes list/agenda view: FullCalendar marks any
        // event with a url as "fc-event-forced-url", and its click handler
        // does `container.querySelector('a[href]').href` *before* calling
        // our eventClick, assuming its own default rendering (an <a> tag)
        // is still there. Our custom eventContent renders plain <div>s
        // instead, so that querySelector returns null and reading .href
        // throws. Month/week don't hit this because FullCalendar wraps
        // those events in its own <a> regardless of eventContent; list
        // view delegates that entirely to the content it's given.
        // `url: ''`, not `undefined` — FullCalendar's refiner checks
        // `'url' in input` (key existence, not truthiness) then coerces
        // with `String(...)`, and `String(undefined)` is the truthy string
        // "undefined", which would make things worse, not better.
        eventDataTransform: (raw: Record<string, unknown>) => ({...raw, url: ''}),
      })),
    [enabledIds],
  );

  function toggleCalendar(id: string): void {
    setEnabledIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function renderEventContent(arg: EventContentArg): React.ReactElement {
    const {modality, cleanTitle} = parseEventTitle(arg.event.title);
    const description = arg.event.extendedProps.description as string | undefined;
    const {tituloCorto} = parseEventMetadata(description);
    // "Título corto" only applies in month view — week/day/agenda have room for the real title.
    const displayTitle = arg.view.type === 'dayGridMonth' && tituloCorto ? tituloCorto : cleanTitle;
    return (
      <>
        {arg.timeText && <div className="fc-event-time">{arg.timeText}</div>}
        <div className="fc-event-title">
          {modality && <span aria-hidden="true">{MODALITY_ICONS[modality]} </span>}
          {displayTitle}
        </div>
      </>
    );
  }

  function handleEventClick(arg: EventClickArg): void {
    arg.jsEvent.preventDefault();
    const {event} = arg;
    const {modality, cleanTitle} = parseEventTitle(event.title);
    const rawDescription = event.extendedProps.description as string | undefined;
    // The tag lines (Sector:, Organiza:, etc.) are already shown as their
    // own badges below — leaving them in the prose too just repeats the
    // same information a second time, which for a description that's
    // *entirely* tag lines reads as a duplicated description.
    const strippedHtml = rawDescription ? stripRecognizedLines(sanitizeDescriptionHtml(rawDescription)) : '';
    setSelectedEvent({
      title: cleanTitle,
      start: event.start as Date,
      end: event.end,
      allDay: event.allDay,
      location: event.extendedProps.location as string | undefined,
      description: rawDescription ? descriptionToPlainText(rawDescription) : undefined,
      descriptionHtml: strippedHtml || undefined,
      modality,
      metadata: parseEventMetadata(rawDescription),
      instagramEmbedUrl: extractInstagramEmbedUrl(rawDescription),
    });
  }

  return (
    <div>
      <fieldset className={styles.filters}>
        <legend>Filtrar por organizador</legend>
        {EVENT_CALENDARS.map((cal) => (
          <label key={cal.id} className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={enabledIds.has(cal.id)}
              onChange={() => toggleCalendar(cal.id)}
            />
            <span className={styles.swatch} style={{backgroundColor: cal.color}} aria-hidden="true" />
            {cal.label}
          </label>
        ))}
      </fieldset>

      <div className={styles.calendarWrapper}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          googleCalendarApiKey={apiKey}
          eventSources={eventSources}
          locale={esLocale}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listMonth',
          }}
          slotMinTime="05:00:00"
          slotMaxTime="22:00:00"
          // Default 'auto' renders timed events in month view as a small
          // dot + text ("fc-daygrid-dot-event") with a transparent
          // background — the status color is set correctly either way (it's
          // a CSS custom property either way), but a dot never actually
          // paints it. Force full colored blocks so status is visible at a
          // glance, not just readable in the popup.
          eventDisplay="block"
          eventContent={renderEventContent}
          eventClassNames={(arg) => {
            const {modality} = parseEventTitle(arg.event.title);
            const description = arg.event.extendedProps.description as string | undefined;
            const {estado} = parseEventMetadata(description);
            // Event color reflects status (see the estado rules in
            // custom.css); modality no longer has a filter, but still gets
            // its own icon in renderEventContent.
            const classes: string[] = [`tejido-estado-${estado}`];
            if (modality) classes.push(`tejido-modality-${modality}`);
            return classes;
          }}
          eventClick={handleEventClick}
          height="auto"
        />
      </div>

      <div className={styles.legend}>
        <p className={styles.legendTitle}>Referencia</p>
        <ul className={styles.legendList}>
          <li>{MODALITY_ICONS.presencial} {MODALITY_LABELS.presencial}</li>
          <li>{MODALITY_ICONS.virtual} {MODALITY_LABELS.virtual}</li>
          <li>{MODALITY_ICONS.hibrida} {MODALITY_LABELS.hibrida}</li>
          <li>
            <span
              className={styles.legendSwatch}
              style={{backgroundColor: 'var(--tejido-estado-confirmada-color)'}}
              aria-hidden="true"
            />{' '}
            {ESTADO_LABELS.confirmada}
          </li>
          <li>
            <span
              className={styles.legendSwatch}
              style={{backgroundColor: 'var(--tejido-estado-pendiente-color)'}}
              aria-hidden="true"
            />{' '}
            {ESTADO_LABELS.pendiente}
          </li>
          <li>{ESTADO_ICONS.disponible} {ESTADO_LABELS.disponible}</li>
          <li>
            <s>{ESTADO_LABELS.cancelada}</s> (gris y tachado)
          </li>
        </ul>
      </div>

      {selectedEvent && (
        <div className={styles.eventDialog} role="dialog" aria-modal="true" aria-label={selectedEvent.title}>
          <div className={styles.eventDialogContent}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedEvent(null)}
              aria-label="Cerrar">
              ×
            </button>
            <h3>{selectedEvent.title}</h3>
            <div className={styles.badgeRow}>
              {selectedEvent.metadata.estado !== 'confirmada' && (
                <span
                  className={`${styles.badge} ${
                    selectedEvent.metadata.estado === 'pendiente'
                      ? styles.badgePendiente
                      : selectedEvent.metadata.estado === 'cancelada'
                        ? styles.badgeCancelada
                        : ''
                  }`}>
                  {ESTADO_ICONS[selectedEvent.metadata.estado]} {ESTADO_LABELS[selectedEvent.metadata.estado]}
                </span>
              )}
              {selectedEvent.modality && (
                <span className={styles.badge}>
                  {MODALITY_ICONS[selectedEvent.modality]} {MODALITY_LABELS[selectedEvent.modality]}
                </span>
              )}
              {selectedEvent.metadata.responsable && (
                <span className={styles.badge}>A cargo de: {selectedEvent.metadata.responsable}</span>
              )}
              {selectedEvent.metadata.sector && <span className={styles.badge}>Sector: {selectedEvent.metadata.sector}</span>}
              {selectedEvent.metadata.requiereInscripcion !== undefined && (
                <span className={styles.badge}>
                  {selectedEvent.metadata.requiereInscripcion ? '📝 Requiere inscripción' : 'No requiere inscripción'}
                </span>
              )}
              {selectedEvent.metadata.contacto && (
                <span className={styles.badge}>Contacto: {selectedEvent.metadata.contacto}</span>
              )}
            </div>
            {selectedEvent.location && <p>📍 {selectedEvent.location}</p>}
            {selectedEvent.instagramEmbedUrl && (
              <iframe
                key={selectedEvent.instagramEmbedUrl}
                src={selectedEvent.instagramEmbedUrl}
                className={styles.instagramEmbed}
                scrolling="no"
                title="Publicación de Instagram"
              />
            )}
            {selectedEvent.descriptionHtml && (
              <div dangerouslySetInnerHTML={{__html: selectedEvent.descriptionHtml}} />
            )}
            <div className={styles.actions}>
              <a
                className="button button--primary"
                href={buildGoogleAddUrl(selectedEvent)}
                target="_blank"
                rel="noreferrer">
                Agregar a Google Calendar
              </a>
              <button
                type="button"
                className="button button--secondary"
                onClick={() => downloadIcs(selectedEvent)}>
                Descargar .ics
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
