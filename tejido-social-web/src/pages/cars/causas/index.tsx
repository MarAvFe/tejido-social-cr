import type {ReactNode} from 'react';
import {CarsLayout, InitiativeCard, Section, NavCard, Callout} from '@site/src/components/Cars';

export default function Causas(): ReactNode {
  return (
    <CarsLayout
      title="Causas activas"
      description="Las causas que la Colectiva Autónoma por la Resistencia Social (CARS) acompaña actualmente en Costa Rica."
      tagline="Las luchas que acompañamos en este momento. Ninguna es nuestra: cada una la lidera la gente
        que la vive y quienes saben del tema, y se documenta en el espacio que esa causa ya tiene.
        Desde aquí se llega a ellas."
      backTo={{to: '/cars/', label: 'CARS'}}>
      <Callout title="Página en construcción">
        <p>
          Varias de estas causas todavía no tienen un espacio propio publicado. Las marcadas como{' '}
          <strong>pendiente</strong> están activas, pero su enlace todavía no existe — se agregará
          apenas esté.
        </p>
      </Callout>

      {/* TODO: enlace público de la causa (sitio, página o publicación donde
          la organización líder documenta su trabajo), y el nombre de esa
          organización si decide aparecer públicamente. */}
      <InitiativeCard
        title="Jornadas 4x3"
        description="Contra la imposición de la jornada laboral de cuatro días de doce horas: qué significa
          para la salud, el tiempo de cuidados y el poder de negociación de quien trabaja, y quién la
          está empujando."
      />

      {/* TODO: enlace público de la causa y organización líder. Esta es la
          causa que convocó el plantón del 6 de agosto y la faroleada del 14
          de setiembre; cuando tenga espacio propio, enlazarlo aquí. */}
      <InitiativeCard
        title="Independencia judicial y separación de poderes"
        description="La causa que convocó el Plantón por la Justicia Democrática y la Faroleada por la
          Democracia: los recortes presupuestarios al Poder Judicial, las presiones sobre la Sala
          Constitucional y los intentos de intervenir nombramientos."
      />

      <InitiativeCard
        title="Data centers en Costa Rica"
        description="Monitoreo comunitario de los proyectos de centros de datos y sus efectos sobre agua,
          energía, uso de suelo y participación local. Organizado por localidad — Limón, Bagaces — con
          cobertura de prensa y un mapa regional."
        href="/iniciativas-colectivas/datacenters/"
        host="Iniciativas Colectivas"
        internal
      />

      <Section title="¿Tiene una causa?">
        <NavCard
          to="/cars/causas/como-sumar-una-causa"
          title="Cómo sumar una causa"
          description="Qué necesita una causa para que la colectiva la acompañe, qué aporta CARS y qué
            se espera de quien la lidera."
        />
      </Section>
    </CarsLayout>
  );
}
