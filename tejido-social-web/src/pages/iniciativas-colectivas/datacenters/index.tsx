import type {ReactNode} from 'react';
import {
  PortalLayout,
  NavCard,
  ResourceSection,
  ResourceLink,
  ArticleSummary,
} from '@site/src/components/IniciativasColectivas';

export default function Datacenters(): ReactNode {
  return (
    <PortalLayout
      title="Data centers en Costa Rica"
      description="Recursos comunitarios sobre proyectos de centros de datos en Costa Rica, por localidad."
      tagline="Proyectos de centros de datos plantean preguntas sobre uso de suelo, agua y energía, y participación comunitaria en su aprobación. Este espacio reúne recursos y enlaces por localidad."
      backTo={{to: '/iniciativas-colectivas/', label: 'Iniciativas Colectivas'}}>
      <ResourceSection title="Redes sociales">
        <ResourceLink href="https://www.instagram.com/crsin_datacenters" label="Instagram (@crsin_datacenters)" />
      </ResourceSection>
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
      <NavCard
        to="/iniciativas-colectivas/datacenters/mapa-regional"
        title="Mapa: data centers en Centroamérica"
        description="Ocho proyectos identificados en cinco países, con una estimación de consumo de agua en millones de litros desde enero de 2026 donde la capacidad publicada lo permite."
      />
      <ResourceSection title="Cobertura de prensa internacional">
        <ArticleSummary
          source="WRI (World Resources Institute)"
          logo="/img/press-sources/wri.png"
          title="Del consumo de energía a la calidad del aire: las múltiples formas en que los centros de datos afectan a las comunidades en EE. UU."
          summary="El crecimiento acelerado de los centros de datos en Estados Unidos, impulsado por la demanda de inteligencia artificial y por incentivos federales, genera impactos comunitarios que van más allá del alza en las tarifas eléctricas: consumo intensivo de agua y electricidad, contaminación del aire por turbinas de gas y generadores de respaldo, ruido y ocupación de tierra agrícola, con frecuencia en comunidades ya vulnerables. El artículo plantea que estos efectos no son inevitables y propone medidas de gobernanza —tarifas eléctricas diferenciadas, monitoreo del agua, evaluación de emisiones, protecciones de uso de suelo y acuerdos de beneficios comunitarios— para que el desarrollo de centros de datos beneficie, en vez de perjudicar, a las comunidades locales."
          href="https://www.wri.org/insights/us-data-center-growth-impacts"
        />
        <ArticleSummary
          source="CNN Business"
          logo="/img/press-sources/cnn.png"
          title="Los estadounidenses se movilizan contra los centros de datos. Sorprendentemente, pocos se están construyendo en realidad."
          summary="Aunque el 71% de las personas en Estados Unidos se opone a los centros de datos de IA y varios estados han propuesto prohibiciones, la construcción de estas instalaciones enfrenta obstáculos que limitan su avance real: solo cerca de la mitad de la capacidad de cómputo de IA programada para 2028 llegaría a tiempo, y alrededor del 60% de la capacidad planeada para 2027 ni siquiera ha iniciado obras. Entre los principales cuellos de botella están la escasez de materiales y de mano de obra especializada, la saturación de la red eléctrica y las demoras en los permisos. Pese a que el gasto en construcción alcanzó los 68 300 millones de dólares en junio de 2026, se estima que solo un tercio de los proyectos anunciados llegará a concretarse."
          href="https://edition.cnn.com/2026/08/06/business/ai-data-center-construction"
        />
        <ArticleSummary
          source="CBS News (Nueva York)"
          logo="/img/press-sources/cbsnews.png"
          title="Miles de galones de diésel se derraman desde un centro de datos de IA en Secaucus, Nueva Jersey"
          summary="Se estima que 5000 galones de combustible diésel se filtraron de un tanque de almacenamiento en el centro de datos de Equinix en Secaucus, Nueva Jersey, y contratistas debieron retirar el hidrocarburo del arroyo Anderson Creek, afluente del río Hackensack. Según Bill Sheehan, de Hackensack Riverkeeper, todo indica que una falla informática originó la fuga. El Departamento de Protección Ambiental de Nueva Jersey confirmó que el derrame fue contenido y que no se reportó impacto en el río ni en la fauna, aunque grupos ambientalistas piden una moratoria estatal a la construcción de centros de datos en la región."
          href="https://www.cbsnews.com/newyork/news/secaucus-nj-data-center-fuel-spill/"
        />
      </ResourceSection>
    </PortalLayout>
  );
}
