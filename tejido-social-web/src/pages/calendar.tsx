import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CalendarPage(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const apiKey = (siteConfig.customFields?.googleCalendarApiKey as string) || '';

  return (
    <Layout
      title="Calendario"
      description="Calendario de eventos municipales y cantonales del Frente Amplio.">
      <main className="container margin-vert--lg">
        <h1>Calendario de eventos</h1>
        <p>
          Eventos públicos organizados por municipalidad. Este calendario es de solo lectura desde
          el sitio: la programación la gestionan directamente las personas encargadas de cada
          calendario municipal en Google Calendar. Ver{' '}
          <Link to="/docs/guias/usar-calendario-actividades">
            cómo leer sus etiquetas e íconos, y cómo pedir que se agregue una actividad
          </Link>
          .
        </p>
        {apiKey ? (
          <BrowserOnly fallback={<div>Cargando calendario…</div>}>
            {() => {
              const EventCalendar = require('@site/src/components/EventCalendar').default;
              return <EventCalendar apiKey={apiKey} />;
            }}
          </BrowserOnly>
        ) : (
          <div className="alert alert--warning">
            Falta configurar la variable de entorno <code>GOOGLE_CALENDAR_API_KEY</code> para
            mostrar el calendario.
          </div>
        )}
      </main>
    </Layout>
  );
}
