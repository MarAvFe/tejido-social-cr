import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import {PortalLayout, Prose, ArticleMeta, Callout, SourcesNote, renderInlineMarkdown} from '@site/src/components/IniciativasColectivas';

const rm = renderInlineMarkdown;

export default function DatacentersPueblosIndigenas(): ReactNode {
  return (
    <PortalLayout
      title="Data centers y consulta a pueblos indígenas"
      description="El Convenio 169 de la OIT, ratificado por Costa Rica, exige consultar a los pueblos indígenas ante medidas que puedan afectarles directamente. Qué dice la ley y qué precedente dejan las Tribus Shoshone-Bannock frente a data centers en Idaho."
      tagline="El Convenio 169 de la OIT y el mecanismo de consulta indígena de Costa Rica, aplicados a la pregunta de qué pasa si un proyecto de data center afecta agua, energía o territorio de un pueblo indígena. No es específico de una sola localidad: aplica a cualquier proyecto de este tipo en el país."
      backTo={{to: '/iniciativas-colectivas/datacenters/', label: 'Data centers en Costa Rica'}}>
      <ArticleMeta>
        Recurso general, no atado a un proyecto concreto: reúne el marco legal costarricense de consulta a pueblos
        indígenas y un precedente reciente en Estados Unidos, como herramienta para cualquier comunidad —incluidas
        Bagaces y Limón— que quiera hacer esta pregunta sobre un proyecto de centro de datos cercano.
      </ArticleMeta>

      <Prose>
        <Heading as="h2">El Convenio 169 de la OIT</Heading>
        <p>
          {rm(
            'Costa Rica ratificó el **Convenio 169 sobre Pueblos Indígenas y Tribales** de la Organización Internacional del Trabajo (OIT) mediante la [Ley N.º 7316](https://www.asamblea.go.cr/sd/SiteAssets/Lists/Consultas%20Biblioteca/EditForm/Ley%207316.pdf), aprobada por la Asamblea Legislativa. El Convenio establece que los gobiernos deben **consultar a los pueblos indígenas** mediante procedimientos apropiados, y en particular a través de sus instituciones representativas, **cada vez que se prevean medidas legislativas o administrativas susceptibles de afectarles directamente**.',
          )}
        </p>
        <p>
          {rm(
            'Esa obligación no está limitada a un tipo de proyecto. Cubre cualquier medida —incluida una autorización administrativa o un permiso— que pueda afectar a un pueblo indígena en su territorio, su acceso a agua o recursos naturales, o sus sitios de importancia cultural.',
          )}
        </p>

        <Heading as="h2">El mecanismo de consulta en Costa Rica</Heading>
        <p>
          {rm(
            'Costa Rica cuenta además con un procedimiento reglamentado para aplicar esa obligación: el [Mecanismo General de Consulta a los Pueblos Indígenas](https://defensapublica.poder-judicial.go.cr/index.php/normativa-indigena?download=514%3Adecreto-ejecutivo-40932-mp-mjp), aprobado mediante el Decreto Ejecutivo N.º 40932-MP-MJP. Define cómo debe activarse, documentarse y llevarse a cabo una consulta indígena cuando una medida administrativa o legislativa puede afectarles directamente —el paso siguiente, en la práctica, a lo que establece el Convenio 169.',
          )}
        </p>

        <Heading as="h2">Un precedente: las Tribus Shoshone-Bannock frente a los data centers en Idaho</Heading>
        <p>
          {rm(
            'En 2026, la **Junta de Negocios de Fort Hall** (Fort Hall Business Council), gobierno de las **Tribus Shoshone-Bannock** en Idaho, Estados Unidos, [tomó una posición formal de oposición al desarrollo de data centers](https://www.sbtribes.com/fhbc-issues-formal-opposition-to-data-center-development/) dentro de su reserva, en tierras cedidas por tratado y en otras zonas donde este tipo de proyectos pudiera afectar a su pueblo.',
          )}
        </p>
        <p>
          {rm(
            'Entre las razones citadas en su comunicado oficial están el **impacto potencial sobre el agua y la energía**, los recursos naturales, la **integridad cultural**, los **derechos derivados de tratados** y la **soberanía tribal**. Según reportes conocidos por comunidades organizadas contra data centers, la Junta reafirmó después esa posición frente a un proyecto específico de data center de IA propuesto en Pocatello, por considerar insuficiente la información pública disponible sobre sus impactos en agua, electricidad y ambiente —ese comunicado adicional no se identificó aquí con un enlace verificable propio, así que se cita con esa salvedad.',
          )}
        </p>

        <Heading as="h2">La pregunta para Costa Rica</Heading>
        <p>
          {rm(
            'Costa Rica tiene ocho territorios indígenas reconocidos y varios pueblos —entre ellos el **Maleku**, el **Bribri** y el **Cabécar**— con derechos reconocidos por el Convenio 169. Los proyectos de data centers en evaluación en el país, incluidos los de Bagaces y Limón, plantean el mismo tipo de impacto que motivó la posición de las Tribus Shoshone-Bannock: uso intensivo de agua y energía, y presión sobre recursos naturales y territorio.',
          )}
        </p>
        <p>
          {rm(
            'La pregunta que se desprende de la ley, no solo de la analogía, es directa: **si un proyecto de data center puede afectar cuencas, aguas, territorio o recursos naturales de los que depende un pueblo indígena, ¿se activó el mecanismo de consulta que exige la Ley 7316?** Esta página no responde esa pregunta para ningún proyecto en particular —no se documentó aquí si ha habido o no un proceso de consulta para los proyectos de Bagaces o Limón—; la comparte como una pregunta que cualquier comunidad puede exigir que se responda antes de que un proyecto sea aprobado, no después.',
          )}
        </p>
      </Prose>

      <Callout title="Alcance de este recurso">
        <ul>
          <li>
            {rm(
              'Esta página no afirma que el Convenio 169 se aplique automáticamente a los proyectos de Bagaces o Limón específicamente —eso depende de si esos proyectos afectan directamente a un pueblo indígena, algo que no se documentó aquí—. La comparte como **marco legal y pregunta a exigir**, no como una conclusión ya verificada sobre un proyecto concreto.',
            )}
          </li>
          <li>
            {rm(
              'El precedente de las Tribus Shoshone-Bannock es de **Estados Unidos**, bajo su propio marco legal de tratados y soberanía tribal, distinto al costarricense. Se cita como ejemplo de una comunidad indígena organizándose formalmente frente a data centers, no como derecho aplicable en Costa Rica.',
            )}
          </li>
        </ul>
      </Callout>

      <SourcesNote>
        Fuentes: Ley N.º 7316 (Asamblea Legislativa de Costa Rica), Decreto Ejecutivo N.º 40932-MP-MJP, comunicado
        oficial de las Tribus Shoshone-Bannock (sbtribes.com).
      </SourcesNote>
    </PortalLayout>
  );
}
