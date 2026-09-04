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
import {parseEventMetadata, ESTADO_LABELS, ESTADO_ICONS, type EventMetadata} from '@site/src/utils/eventMetadata';
import styles from './styles.module.css';

interface Props {
  apiKey: string;
}

interface SelectedEvent extends CalendarEventInfo {
  modality: EventModality | null;
  /** Sanitized HTML for on-page rendering; `description` stays plain text for the .ics/Google-link exports. */
  descriptionHtml?: string;
  metadata: EventMetadata;
}

const ALL_MODALITIES: EventModality[] = ['presencial', 'virtual', 'hibrida'];

export default function EventCalendar({apiKey}: Props): React.ReactElement {
  const [enabledIds, setEnabledIds] = useState<Set<string>>(
    () => new Set(EVENT_CALENDARS.map((cal) => cal.id)),
  );
  const [enabledModalities, setEnabledModalities] = useState<Set<EventModality>>(
    () => new Set(ALL_MODALITIES),
  );
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(null);

  const eventSources = useMemo(
    () =>
      EVENT_CALENDARS.filter((cal) => enabledIds.has(cal.id)).map((cal) => ({
        googleCalendarId: cal.id,
        color: cal.color,
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

  function toggleModality(modality: EventModality): void {
    setEnabledModalities((prev) => {
      const next = new Set(prev);
      if (next.has(modality)) {
        next.delete(modality);
      } else {
        next.add(modality);
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
    setSelectedEvent({
      title: cleanTitle,
      start: event.start as Date,
      end: event.end,
      allDay: event.allDay,
      location: event.extendedProps.location as string | undefined,
      description: rawDescription ? descriptionToPlainText(rawDescription) : undefined,
      descriptionHtml: rawDescription ? sanitizeDescriptionHtml(rawDescription) : undefined,
      modality,
      metadata: parseEventMetadata(rawDescription),
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

      <fieldset className={styles.filters}>
        <legend>Filtrar por modalidad</legend>
        {ALL_MODALITIES.map((modality) => (
          <label key={modality} className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={enabledModalities.has(modality)}
              onChange={() => toggleModality(modality)}
            />
            {MODALITY_ICONS[modality]} {MODALITY_LABELS[modality]}
          </label>
        ))}
      </fieldset>

      <p className={styles.legend}>
        {ESTADO_ICONS.cancelada} Los eventos en <s>gris y tachados</s> están cancelados.
      </p>

      <div
        className={styles.calendarWrapper}
        data-hide-virtual={enabledModalities.has('virtual') ? undefined : ''}
        data-hide-presencial={enabledModalities.has('presencial') ? undefined : ''}
        data-hide-hibrida={enabledModalities.has('hibrida') ? undefined : ''}>
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
          eventContent={renderEventContent}
          eventClassNames={(arg) => {
            const {modality} = parseEventTitle(arg.event.title);
            const description = arg.event.extendedProps.description as string | undefined;
            const {estado} = parseEventMetadata(description);
            const classes: string[] = [];
            if (modality) classes.push(`tejido-modality-${modality}`);
            // Cancelled events are hidden from the calendar entirely, not just badged.
            if (estado === 'cancelada') classes.push('tejido-estado-cancelada');
            return classes;
          }}
          eventClick={handleEventClick}
          height="auto"
        />
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
            {selectedEvent.metadata.estado !== 'confirmada' && (
              <p>
                <strong>
                  {ESTADO_ICONS[selectedEvent.metadata.estado]} {ESTADO_LABELS[selectedEvent.metadata.estado]}
                </strong>
              </p>
            )}
            {selectedEvent.modality && (
              <p>
                {MODALITY_ICONS[selectedEvent.modality]} {MODALITY_LABELS[selectedEvent.modality]}
              </p>
            )}
            {selectedEvent.location && <p>📍 {selectedEvent.location}</p>}
            {selectedEvent.metadata.responsable && <p>A cargo de: {selectedEvent.metadata.responsable}</p>}
            {selectedEvent.metadata.sector && <p>Sector: {selectedEvent.metadata.sector}</p>}
            {selectedEvent.metadata.requiereInscripcion !== undefined && (
              <p>{selectedEvent.metadata.requiereInscripcion ? '📝 Requiere inscripción' : 'No requiere inscripción'}</p>
            )}
            {selectedEvent.metadata.contacto && <p>Contacto: {selectedEvent.metadata.contacto}</p>}
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
