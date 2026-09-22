import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import {PortalLayout, Prose, ArticleMeta, Callout, SourcesNote, renderInlineMarkdown} from '@site/src/components/IniciativasColectivas';

const rm = renderInlineMarkdown;

const SOURCES = {
  ley7316: 'https://www.asamblea.go.cr/sd/SiteAssets/Lists/Consultas%20Biblioteca/EditForm/Ley%207316.pdf',
  decreto40932:
    'https://defensapublica.poder-judicial.go.cr/index.php/normativa-indigena?download=514%3Adecreto-ejecutivo-40932-mp-mjp',
  sbtribes: 'https://www.sbtribes.com/fhbc-issues-formal-opposition-to-data-center-development/',
};

function ExternalLink({href, children}: {href: string; children: ReactNode}): ReactNode {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function DatacentersPueblosIndigenas(): ReactNode {
  return (
    <PortalLayout
      title="Data centers y consulta a pueblos indígenas"
      description="El Convenio 169 de la OIT, ratificado por Costa Rica, exige consultar a los pueblos indígenas ante medidas que puedan afectarles directamente. Qué dice la ley y qué precedente dejan las Tribus Shoshone-Bannock frente a data centers en Idaho."
      tagline="El Convenio 169 de la OIT y el mecanismo de consulta indígena de Costa Rica, aplicados a la pregunta de qué pasa si un proyecto de data center afecta agua, energía o territorio de un pueblo indígena. No es específico de una sola localidad: aplica a cualquier proyecto de este tipo en el país."
      backTo={{to: '/iniciativas-colectivas/datacenters/', label: 'Data centers en Costa Rica'}}>
      <ArticleMeta>
        Marco legal de consulta a pueblos indígenas en Costa Rica, más un precedente reciente en Estados Unidos:
        herramienta para cualquier comunidad —incluidas Bagaces y Limón— frente a un proyecto de centro de datos
        cercano.
      </ArticleMeta>

      <Prose>
        <Heading as="h2">El Convenio 169 de la OIT</Heading>
        <p>
          {rm('Costa Rica ratificó el **Convenio 169 sobre Pueblos Indígenas y Tribales** de la Organización Internacional del Trabajo (OIT) mediante la ')}
          <ExternalLink href={SOURCES.ley7316}>Ley N.º 7316</ExternalLink>
          {rm(', aprobada por la Asamblea Legislativa. El Convenio establece que los gobiernos deben **consultar a los pueblos indígenas** mediante procedimientos apropiados, y en particular a través de sus instituciones representativas, **cada vez que se prevean medidas legislativas o administrativas susceptibles de afectarles directamente**.')}
        </p>
        <p>
          {rm(
            'Esa obligación no está limitada a un tipo de proyecto. Cubre cualquier medida —incluida una autorización administrativa o un permiso— que pueda afectar a un pueblo indígena en su territorio, su acceso a agua o recursos naturales, o sus sitios de importancia cultural.',
          )}
        </p>

        <Heading as="h2">El mecanismo de consulta en Costa Rica</Heading>
        <p>
          {rm('Costa Rica cuenta además con un procedimiento reglamentado para aplicar esa obligación: el ')}
          <ExternalLink href={SOURCES.decreto40932}>Mecanismo General de Consulta a los Pueblos Indígenas</ExternalLink>
          {rm(', aprobado mediante el Decreto Ejecutivo N.º 40932-MP-MJP. Define cómo debe activarse, documentarse y llevarse a cabo una consulta indígena cuando una medida administrativa o legislativa puede afectarles directamente —el paso siguiente, en la práctica, a lo que establece el Convenio 169.')}
        </p>

        <Heading as="h2">Un precedente: las Tribus Shoshone-Bannock frente a los data centers en Idaho</Heading>
        <p>
          {rm('En 2026, la **Junta de Negocios de Fort Hall** (Fort Hall Business Council), gobierno de las **Tribus Shoshone-Bannock** en Idaho, Estados Unidos, ')}
          <ExternalLink href={SOURCES.sbtribes}>tomó una posición formal de oposición al desarrollo de data centers</ExternalLink>
          {rm(' dentro de su reserva, en tierras cedidas por tratado y en otras zonas donde este tipo de proyectos pudiera afectar a su pueblo.')}
        </p>
        <p>
          {rm(
            'Entre las razones citadas en su comunicado oficial están el **impacto potencial sobre el agua y la energía**, los recursos naturales, la **integridad cultural**, los **derechos derivados de tratados** y la **soberanía tribal**. La Junta reafirmó después esa posición frente a un proyecto específico de data center de IA propuesto en Pocatello, por considerar insuficiente la información pública disponible sobre sus impactos en agua, electricidad y ambiente.',
          )}
        </p>

        <Heading as="h2">Lo que esto significa para Costa Rica</Heading>
        <p>
          {rm(
            'Costa Rica reconoce **ocho pueblos indígenas** —entre ellos el **Maleku**, el **Bribri** y el **Cabécar**— distribuidos en 24 territorios, con derechos reconocidos por el Convenio 169. Los proyectos de data centers en evaluación en el país plantean el mismo tipo de impacto que motivó la posición de las Tribus Shoshone-Bannock: uso intensivo de agua y energía, y presión sobre recursos naturales y territorio.',
          )}
        </p>
        <p>
          {rm(
            'La ley da a cualquier comunidad una pregunta concreta que exigir antes de que un proyecto se apruebe, no después: **si un data center puede afectar cuencas, aguas, territorio o recursos naturales de los que depende un pueblo indígena, ¿se activó el mecanismo de consulta que exige la Ley 7316?** Es una pregunta con respuesta verificable —el Mecanismo General de Consulta documenta cada proceso que activa— y una autoridad concreta a quien planteársela: el Ministerio de Justicia y Paz, o la asociación de desarrollo del territorio indígena correspondiente.',
          )}
        </p>
      </Prose>

      <Callout title="Sobre el precedente de Idaho">
        {rm(
          'Es un caso de **Estados Unidos**, bajo su propio marco legal de tratados y soberanía tribal, distinto al costarricense. Se cita como ejemplo de un pueblo indígena organizándose formalmente frente a data centers, no como derecho aplicable en Costa Rica.',
        )}
      </Callout>

      <SourcesNote>
        Fuentes: Ley N.º 7316 (Asamblea Legislativa de Costa Rica), Decreto Ejecutivo N.º 40932-MP-MJP, comunicado
        oficial de las Tribus Shoshone-Bannock (sbtribes.com).
      </SourcesNote>
    </PortalLayout>
  );
}
