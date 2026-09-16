import type {ReactNode} from 'react';
import {PortalLayout, NavCard} from '@site/src/components/IniciativasColectivas';

export default function Datacenters(): ReactNode {
  return (
    <PortalLayout
      title="Data centers en Costa Rica"
      description="Recursos comunitarios sobre proyectos de centros de datos en Costa Rica, por localidad."
      tagline="Proyectos de centros de datos plantean preguntas sobre uso de suelo, agua y energía, y participación comunitaria en su aprobación. Este espacio reúne recursos y enlaces por localidad."
      backTo={{to: '/iniciativas-colectivas/', label: 'Iniciativas Colectivas'}}>
      <NavCard
        to="/iniciativas-colectivas/datacenters/limon"
        title="Limón"
        description="Recursos y enlaces sobre proyectos de centros de datos en Limón."
      />
      <NavCard
        to="/iniciativas-colectivas/datacenters/bagaces"
        title="Bagaces"
        description="Recursos y enlaces sobre proyectos de centros de datos en Bagaces."
      />
    </PortalLayout>
  );
}
