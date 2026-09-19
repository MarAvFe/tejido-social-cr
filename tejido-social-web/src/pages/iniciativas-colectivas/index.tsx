import type {ReactNode} from 'react';
import {PortalLayout, NavCard} from '@site/src/components/IniciativasColectivas';

export default function IniciativasColectivas(): ReactNode {
  return (
    <PortalLayout
      title="Iniciativas Colectivas"
      description="Portal de recursos y enlaces para iniciativas comunitarias sobre temas de interés público."
      tagline="Un espacio para reunir enlaces y recursos de organización comunitaria sobre temas de interés público, más allá de la política partidaria.">
      <NavCard
        to="/iniciativas-colectivas/datacenters/"
        title="Data centers en Costa Rica"
        description="Monitoreo y recursos comunitarios sobre proyectos de centros de datos, organizados por localidad."
      />
      <NavCard
        to="/iniciativas-colectivas/consignas"
        title="Consignas"
        description="Consignas y cánticos para llevar a manifestaciones y actividades de organización comunitaria, etiquetadas por tema."
      />
    </PortalLayout>
  );
}
