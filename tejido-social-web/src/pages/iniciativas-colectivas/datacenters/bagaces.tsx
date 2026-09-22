import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import {
  PortalLayout,
  ResourceSection,
  ResourceLink,
  InstagramPostEmbed,
  NavCard,
  FlyerImage,
  Prose,
  ArticleMeta,
  renderInlineMarkdown,
} from '@site/src/components/IniciativasColectivas';

const rm = renderInlineMarkdown;

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

      <ResourceSection title="Volante: «Bagaces Alerta» — Centro de Datos Palo Negro IA &amp; HPC Campus">
        <FlyerImage
          src="/img/datacenters/bagaces-volante-1.jpg"
          alt="Volante Bagaces Alerta, página 1: riesgos a estudiar de un centro de datos de IA."
        />
        <FlyerImage
          src="/img/datacenters/bagaces-volante-2.jpg"
          alt="Volante Bagaces Alerta, página 2: qué es y qué no es un centro de datos de IA, y preguntas sobre el consumo de agua del proyecto Palo Negro."
        />
      </ResourceSection>

      <ArticleMeta>
        Preguntas y datos tomados tal cual del volante, organizados por tema para que se puedan reutilizar en otros
        materiales.
      </ArticleMeta>
      <Prose>
        <Heading as="h3">Riesgos ambientales que deben estudiarse</Heading>
        <ul>
          <li>{rm('**Electricidad:** demanda, red, respaldo.')}</li>
          <li>{rm('**Sustancias:** identificación y manejo.')}</li>
          <li>{rm('**Calor:** carga térmica y propagación.')}</li>
          <li>{rm('**Residuos:** mantenimiento y fin de vida.')}</li>
          <li>{rm('**Agua:** huella directa e indirecta.')}</li>
          <li>{rm('**Ruido:** construcción y operación.')}</li>
          <li>{rm('**Baterías:** química, capacidad, incendios.')}</li>
        </ul>

        <Heading as="h3">¿Qué NO es / qué SÍ es un centro de datos de IA?</Heading>
        <p>{rm('**No es:** centro de datos para internet, centro de datos corporativo, fábrica de manufactura de semiconductores, call center.')}</p>
        <p>
          {rm(
            '**Sí es:** GPU/aceleradores, almacenamiento, electricidad 24/7, fibra/telecom, refrigeración, subestación/red — infraestructura física para cargas de trabajo intensivas en GPU/aceleradores.',
          )}
        </p>

        <Heading as="h3">Sobre el "cero consumo de agua" de Palo Negro</Heading>
        <p>
          {rm(
            'El desarrollador señaló que el sistema de enfriamiento geotérmico de circuito cerrado garantiza ausencia de consumo de agua. El volante responde: "Circuito Cerrado" no significa que el calor desaparezca — el sistema debe demostrar cómo se comportará la carga térmica a lo largo del tiempo. Si continuamente se introduce calor en una zona determinada (servidores → fluido → tuberías → roca), la temperatura alrededor del sistema aumenta.',
          )}
        </p>

        <Heading as="h3">Generación en el sitio, según lo presentado</Heading>
        <p>
          {rm(
            'Infraestructura de alta tensión, telecomunicaciones y capacidad de cómputo para cargas de IA/HPC. Generación renovable en el sitio: **≈40 MW eólica y ≈80 MW solar**, ambas variables. Respaldo con geotermia y baterías BESS.',
          )}
        </p>

        <Heading as="h3">Preguntas planteadas por la comunidad</Heading>
        <p>
          <strong>Sobre el Sistema Eléctrico Nacional (SEN):</strong>{' '}
          {rm(
            '¿Qué infraestructura del ICE o de transmisión sería necesaria? ¿Quién la construye y quién la paga? ¿Qué capacidad adicional debe reservarse para el proyecto? ¿Cómo podría afectar a otros usuarios o a la planificación del sistema?',
          )}
        </p>
        <p>
          <strong>Sobre el enfriamiento geotérmico:</strong>{' '}
          {rm(
            '¿Aumentan las temperaturas alrededor de los pozos? ¿Se propaga el calor por conducción o por movimiento de agua subterránea? ¿Se necesitaría ampliar el sistema o incorporar refrigeración suplementaria? ¿Qué mantenimiento, monitoreo y mitigación serían necesarios?',
          )}
        </p>
        <p>
          <strong>Sobre la generación renovable:</strong>{' '}
          {rm('¿Cuál es la producción esperada y la capacidad firme disponible cuando el centro la necesita?')}
        </p>
        <p>
          <strong>Sobre las baterías de respaldo:</strong> {rm('¿La química de las baterías es crucial para determinar los riesgos?')}
        </p>

        <Heading as="h3">Escenarios de riesgo señalados</Heading>
        <p>
          {rm(
            'En caso de fuga térmica: incendio y explosión, gases tóxicos, riesgos eléctricos convencionales y de alta tensión, fallas de aislamiento.',
          )}
        </p>
      </Prose>

      <NavCard
        to="/iniciativas-colectivas/datacenters/pueblos-indigenas-consulta"
        title="Data centers y consulta a pueblos indígenas"
        description="El Convenio 169 de la OIT exige consultar a los pueblos indígenas ante medidas que puedan afectarles directamente. Marco legal y un precedente en Estados Unidos."
      />
    </PortalLayout>
  );
}
