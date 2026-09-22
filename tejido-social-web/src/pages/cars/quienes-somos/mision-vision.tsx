import type {ReactNode} from 'react';
import {CarsLayout, Statement, StatementGrid, Section} from '@site/src/components/Cars';

export default function MisionVision(): ReactNode {
  return (
    <CarsLayout
      title="Misión y visión"
      description="La misión y la visión de la Colectiva Autónoma por la Resistencia Social (CARS): reconstruir el tejido social costarricense y tender puentes, hacia un país justo."
      tagline="Para qué existe la colectiva, y hacia dónde apunta el trabajo."
      backTo={{to: '/cars/quienes-somos/', label: 'Quiénes somos'}}>
      <StatementGrid>
        <Statement label="Misión">
          Reconstruir el tejido social costarricense y tender puentes entre organizaciones,
          sindicatos, colectivas y la ciudadanía, para que las luchas que hoy caminan por separado
          se encuentren y se sostengan entre sí.
        </Statement>
        <Statement label="Visión">
          Un país justo: una Costa Rica donde la dignidad no dependa del apellido, del salario ni
          del cantón en que se nació, y donde la gente organizada tenga poder real sobre las
          decisiones que le afectan.
        </Statement>
      </StatementGrid>

      <Section title="Qué significa «tender puentes»">
        <p>
          Hay mucha gente organizada en Costa Rica y buena parte no se conoce entre sí. Un sindicato
          que pelea por la seguridad social y una comunidad que defiende su agua suelen enfrentar a
          los mismos actores con los mismos argumentos, sin cruzarse nunca.
        </p>
        <p>
          Tender puentes es trabajo concreto, no una figura retórica: presentar organizaciones que se
          necesitan, compartir lo que una aprendió con la que apenas empieza, y armar espacios donde
          gente que no se conocía termine sosteniendo la misma pelea.
        </p>
      </Section>

      <Section title="Qué significa «un país justo»">
        <p>
          No hablamos de un país donde todos piensen igual, sino de uno donde las decisiones que
          afectan a la gente no se tomen a sus espaldas — donde la seguridad social, la salud, el
          cuido y el trabajo digno no dependan de la suerte, y donde las instituciones que deberían
          proteger a la población efectivamente lo hagan.
        </p>
      </Section>
    </CarsLayout>
  );
}
