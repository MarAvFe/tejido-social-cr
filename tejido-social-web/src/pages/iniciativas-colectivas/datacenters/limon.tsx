import type {ReactNode} from 'react';
import {PortalLayout, ResourceSection, ResourceLink} from '@site/src/components/IniciativasColectivas';

export default function DatacentersLimon(): ReactNode {
  return (
    <PortalLayout
      title="Data centers en Limón"
      description="Enlaces y recursos comunitarios sobre proyectos de centros de datos en Limón."
      tagline="Enlaces y recursos sobre el proyecto de centro de datos en Limón. Página en construcción — el contexto local todavía no está redactado."
      backTo={{to: '/iniciativas-colectivas/datacenters/', label: 'Data centers en Costa Rica'}}>
      <ResourceSection title="Redes sociales">
        <ResourceLink href="#" label="Instagram" placeholder />
        <ResourceLink href="#" label="X / Twitter" placeholder />
      </ResourceSection>
      <ResourceSection title="Documentos y recursos">
        <ResourceLink href="#" label="Carpeta de documentos (Mega)" placeholder />
      </ResourceSection>
      <ResourceSection title="Cobertura de prensa">
        <ResourceLink href="#" label="Artículo de referencia" placeholder />
      </ResourceSection>
    </PortalLayout>
  );
}
