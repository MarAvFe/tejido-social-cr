import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {PortalLayout, Prose, ArticleMeta, SourcesNote, renderInlineMarkdown} from '@site/src/components/IniciativasColectivas';

const rm = renderInlineMarkdown;

export default function LimonVolanteEmpleos(): ReactNode {
  return (
    <PortalLayout
      title="¡Bienvenidos al data center!"
      description="Volante comunitario de tono satírico sobre las promesas de empleo del proyecto de centro de datos en Limón, basado en el informe de investigación del mismo proyecto."
      tagline='Sí, va a generar empleos. La pregunta es: ¿va a ser el tuyo?'
      backTo={{to: '/iniciativas-colectivas/datacenters/limon', label: 'Data centers en Limón'}}>
      <ArticleMeta>
        Volante comunitario de tono satírico, pensado para compartir. Los números y las fuentes vienen del{' '}
        <Link to="/iniciativas-colectivas/datacenters/limon-informe-empleos">informe de investigación completo</Link>
        .
      </ArticleMeta>

      <Prose>
        <p>
          Nos prometen cientos de empleos para Limón.
          <br />
          Lo que no nos dicen es que esos son los empleos de construcción — los que se van en 2 a 4 años, cuando
          termine la obra.
        </p>
        <p>Los empleos que se quedan para siempre, según investigación internacional citada por La Nación:</p>
        <p>
          <strong>Entre 30 y 70 puestos.</strong>
        </p>
        <p>
          {rm(
            'Eso es todo. Para un proyecto de 200 MW (el 13.5% de toda la electricidad de Costa Rica), 350 litros de agua por segundo del Río Bananito, y una inversión de cientos de millones — hasta miles de millones — de dólares.',
          )}
        </p>
        <p>
          <strong>Traducción: entre $32 y $75 millones de dólares invertidos... por cada empleo permanente.</strong>
        </p>

        <Heading as="h2">La parte divertida: "requisitos del puesto"</Heading>
        <p>
          ¿Vos o alguien que conocés quiere ser parte de esos 30 a 70 afortunados? Genial. Solo asegurate de cumplir
          con algunos "pequeños" requisitos:
        </p>

        <Heading as="h3">🔌 Técnico de infraestructura crítica</Heading>
        <ul>
          <li>Certificación NFPA 70E (seguridad contra arco eléctrico)</li>
          <li>Licencia de electricista o HVAC (o sacarla en 90 días)</li>
          <li>Certificación EPA 608 de refrigerantes</li>
          <li>6+ años de experiencia con UPS, generadores, chillers y tableros eléctricos</li>
        </ul>
        <p>¿Tenés eso a la mano? Nosotros tampoco.</p>

        <Heading as="h3">💻 Ingeniero de redes/sistemas</Heading>
        <ul>
          <li>Licenciatura en ingeniería o ciencias de la computación</li>
          <li>Certificación Cisco CCNP (3–5 años de experiencia mínima)</li>
          <li>Inglés fluido, hablado y escrito</li>
          <li>Disponibilidad para guardias 24/7</li>
        </ul>
        <p>(El colegio técnico más cercano queda... bueno, ustedes saben dónde queda.)</p>

        <Heading as="h3">🛠 Técnico de data center</Heading>
        <ul>
          <li>CompTIA A+/Network+, idealmente Cisco CCNA</li>
          <li>2 años de experiencia práctica con servidores</li>
          <li>Inglés funcional para documentación técnica</li>
        </ul>

        <Heading as="h3">🔒 Oficial de seguridad</Heading>
        <p>Este sí califica casi cualquiera. ¡Al fin, uno que sí!</p>

        <p>
          {rm(
            '**Dato curioso:** en Estados Unidos —donde sí hay universidades técnicas por todos lados— solo el 15% de los candidatos cumple los requisitos mínimos para estos puestos (JLL, 2024).',
          )}
        </p>
        <p>La escolaridad promedio en los cantones de Limón es de 6.5 a 7.7 años.</p>
        <p>Ustedes hagan la cuenta.</p>

        <Heading as="h2">El remate</Heading>
        <p>
          No es que no queramos desarrollo.
          <br />
          Es que este "desarrollo" nos pide:
        </p>
        <ul>
          <li>42 hectáreas de terreno con humedales</li>
          <li>El 13.5% de la electricidad nacional</li>
          <li>El agua del Río Bananito</li>
          <li>Cientos de millones de dólares en incentivos</li>
        </ul>
        <p>...a cambio de menos empleos permanentes de los que tiene un Olive Garden.</p>
        <p>¿Vos vas a ser el técnico eléctrico certificado con inglés fluido y 6 años de experiencia en UPS industriales?</p>
        <p>
          No. Y está bien. El problema no sos vos.
          <br />
          El problema es que nos están vendiendo humo con la palabra "empleo."
        </p>
      </Prose>

      <SourcesNote>
        Fuentes: La Nación, Diario Extra, DPL News, JLL Global Data Center Outlook 2026, Food & Water Watch, Ohio
        River Valley Institute, Brookings, Hamm Institute, Uptime Institute, Quartz, Estado de la Nación, UCR. Ver el{' '}
        <Link to="/iniciativas-colectivas/datacenters/limon-informe-empleos">informe completo</Link> para el detalle
        de cada cifra.
      </SourcesNote>
    </PortalLayout>
  );
}
