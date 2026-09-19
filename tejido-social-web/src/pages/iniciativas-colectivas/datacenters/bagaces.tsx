import type {ReactNode} from 'react';
import {PortalLayout, ResourceSection, ResourceLink, InstagramPostEmbed} from '@site/src/components/IniciativasColectivas';

export default function DatacentersBagaces(): ReactNode {
  return (
    <PortalLayout
      title="Data centers en Bagaces"
      description="Enlaces y recursos comunitarios sobre proyectos de centros de datos en Bagaces."
      tagline="Enlaces y recursos sobre el proyecto de centro de datos en Bagaces. Página en construcción — el contexto local todavía no está redactado."
      backTo={{to: '/iniciativas-colectivas/datacenters/', label: 'Data centers en Costa Rica'}}>
      <ResourceSection title="Redes sociales">
        <InstagramPostEmbed url="https://www.instagram.com/p/DdU5Cuvlp0W/" />
        <InstagramPostEmbed url="https://www.instagram.com/p/DdR2RzNCiwb/" />
      </ResourceSection>
      <ResourceSection title="Documentos y recursos">
        <ResourceLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSc9_9ZZ8anwzzv2Tg3x5DK-oGl9CExUB3SApfEmUpgBZb7tUQ/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
          label="Quiero colaborar"
        />
      </ResourceSection>
    </PortalLayout>
  );
}
