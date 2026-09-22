import type {ReactNode} from 'react';
import {CarsLayout, Section, StatusNotice, NavCard} from '@site/src/components/Cars';

/**
 * The collective hasn't defined its principles yet. Rather than publish a
 * plausible-sounding list — principles are identity, and an invented one gets
 * quoted back as if the collective had agreed to it — this page says plainly
 * that they're pending and points at what *is* already settled.
 *
 * TODO: reemplazar toda esta página por los principios que el colectivo
 * acuerde. Al hacerlo, quitar el StatusNotice y la sección "Mientras tanto",
 * y usar los componentes PrincipleList/Principle (ya existen en
 * src/components/Cars) para la lista numerada.
 */
export default function Principios(): ReactNode {
  return (
    <CarsLayout
      title="Principios"
      description="Los principios de la Colectiva Autónoma por la Resistencia Social (CARS) están en proceso de definición."
      tagline="Todavía no los hemos definido. Esta página existe para decirlo, no para llenar el espacio
        mientras tanto."
      backTo={{to: '/cars/quienes-somos/', label: 'Quiénes somos'}}>
      <StatusNotice label="Pendiente">
        La colectiva todavía no ha acordado sus principios. Cuando los defina, se publican aquí.
      </StatusNotice>

      <Section title="Por qué esta página está vacía">
        <p>
          Unos principios son lo que una organización acepta que se le exija. No los puede redactar
          una persona por su cuenta ni deducirse de cómo se ha venido trabajando: tienen que
          discutirse y acordarse, o no obligan a nadie.
        </p>
        <p>
          Preferimos dejar esto en blanco antes que publicar una lista razonable que después se cite
          como si la colectiva se hubiera comprometido a ella.
        </p>
      </Section>

      <Section
        title="Mientras tanto"
        intro="Lo que sí está definido y se puede leer hoy:">
        <NavCard
          to="/cars/quienes-somos/mision-vision"
          title="Misión y visión"
          description="Para qué existe la colectiva y hacia dónde apunta el trabajo."
        />
        <NavCard
          to="/cars/como-nos-organizamos/modelo-hub"
          title="El modelo: una colectiva que acompaña"
          description="Por qué no encabezamos las causas que acompañamos."
        />
        <NavCard
          to="/cars/como-nos-organizamos/como-decidimos"
          title="Cómo decidimos"
          description="La propuesta de toma de decisiones por consentimiento, también pendiente de
            aprobación."
        />
      </Section>
    </CarsLayout>
  );
}
