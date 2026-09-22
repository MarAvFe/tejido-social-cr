import type {ReactNode} from 'react';
import {
  CarsLayout,
  Section,
  PathCard,
  PathGrid,
  NavCard,
  ResourceSection,
  ResourceLink,
} from '@site/src/components/Cars';

export default function Cars(): ReactNode {
  return (
    <CarsLayout
      title="Colectiva Autónoma por la Resistencia Social"
      eyebrow="CARS"
      description="Colectiva Autónoma por la Resistencia Social (CARS): colectiva horizontal que acompaña, conecta y forma a organizaciones, sindicatos y personas organizadas en Costa Rica."
      tagline="Somos una colectiva autónoma y horizontal. No somos el centro de ninguna lucha: acompañamos,
        conectamos y formamos a quienes ya están luchando, para que el tejido social del país se sostenga
        entre sí.">
      <Section
        title="¿Qué le trae por aquí?"
        intro="La gente llega a CARS por razones distintas. Cada camino empieza en una página diferente.">
        <PathGrid>
          <PathCard to="/cars/causas/como-sumar-una-causa" title="Tengo una causa">
            Hay algo que le preocupa y quiere organizarse alrededor de eso. CARS no se la toma como
            propia: le ayuda a que salga adelante con quienes ya saben del tema.
          </PathCard>
          <PathCard to="/cars/participa/sumate" title="Quiero sumarme">
            Quiere aportar trabajo a lo que ya está caminando. Hay cinco comisiones y se entra por donde
            uno tenga algo que dar.
          </PathCard>
          <PathCard to="/cars/quienes-somos/" title="Solo quiero informarme">
            Quiere entender qué es esto antes de decidir cualquier cosa. Empiece por quiénes somos y
            cómo nos organizamos.
          </PathCard>
        </PathGrid>
      </Section>

      <Section
        title="Cómo funciona"
        intro="CARS trabaja como una estructura de soporte: sostiene el trabajo común que ninguna lucha
          por separado puede sostener sola — coordinación, formación, comunicación y acompañamiento.">
        <NavCard
          to="/cars/como-nos-organizamos/modelo-hub"
          title="El modelo: una colectiva que acompaña"
          description="Por qué CARS no encabeza las causas que acompaña, y qué hace en cambio."
        />
        <NavCard
          to="/cars/causas/"
          title="Causas activas"
          description="Las luchas que acompañamos en este momento. Cada una la lidera la gente que la vive
            y se documenta en su propio espacio."
        />
        <NavCard
          to="/cars/como-nos-organizamos/comisiones"
          title="Comisiones"
          description="Cinco comisiones organizan el trabajo de la colectiva: comunicación y prensa, arte y
            cultura, educación popular, diseño y edición, y equipo de apoyo."
        />
      </Section>

      <ResourceSection title="Redes sociales">
        <ResourceLink
          href="https://www.facebook.com/profile.php?id=61593522393613"
          label="Facebook"
        />
        <ResourceLink
          href="https://www.instagram.com/colectivaautonoma.rs"
          label="Instagram (@colectivaautonoma.rs)"
        />
      </ResourceSection>
    </CarsLayout>
  );
}
