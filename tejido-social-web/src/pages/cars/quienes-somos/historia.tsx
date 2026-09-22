import type {ReactNode} from 'react';
import {CarsLayout, Section, Timeline, TimelineItem, Callout} from '@site/src/components/Cars';

/** Press sources, kept together so each mention below links to the original. */
const SOURCES = {
  delfinoPlanton:
    'https://delfino.cr/2026/08/organizaciones-sociales-convocan-planton-en-defensa-de-la-independencia-judicial',
  nacionPlanton:
    'https://www.nacion.com/el-pais/planton-en-defensa-del-poder-judicial-siga-aqui/PPST4XXPQZEDPP3FQGODGCXR3I/story/',
  financieroPlanton:
    'https://www.elfinancierocr.com/economia-y-politica/lo-inusual-es-que-costa-rica-marche-por-defender/ZKOYLZIFLNHCRPVKL7N4UJBWNQ/story/',
  teleticaFaroleada:
    'https://www.teletica.com/politica/colectivo-que-organizo-planton-convoca-a-faroleada-por-la-democracia-en-setiembre_415871',
  acontecerFaroleada:
    'https://acontecer.co.cr/nacionales/faroleada-democracia-costa-rica-14-setiembre',
  monumentalIce:
    'https://www.monumental.co.cr/2026/05/26/sindicatos-del-ice-convocan-a-manifestacion-en-congreso-este-martes-ante-posible-votacion-de-plan-sobre-mercado-electrico/',
  nacionIce:
    'https://www.nacion.com/el-pais/universitarios-sindicatos-y-organizaciones/2ZWEFURHENDBNKJTACPIWQ5TQU/story/',
};

function Fuente({href, children}: {href: string; children: ReactNode}): ReactNode {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Historia(): ReactNode {
  return (
    <CarsLayout
      title="Historia"
      description="De dónde viene la Colectiva Autónoma por la Resistencia Social (CARS): de un chat que quedó de la defensa del ICE al Plantón por la Justicia Democrática y la Faroleada por la Democracia de 2026."
      tagline="La colectiva no nació de una asamblea fundacional, sino de un chat que quedó de una pelea
        concreta en la que todavía no existía. En seis meses pasó de ser ese chat a convocar dos de
        las movilizaciones ciudadanas más grandes del año."
      backTo={{to: '/cars/quienes-somos/', label: 'Quiénes somos'}}>
      <Section title="Línea de tiempo">
        <Timeline>
          {/* TODO: confirmar la fecha exacta en que surgió el chat de coordinación
              y en qué momento, meses después, ese chat se convirtió en la colectiva. */}
          <TimelineItem date="Marzo de 2026" dateUnconfirmed title="El chat que la precede: la defensa del ICE">
            <p>
              La colectiva todavía no existía. El proyecto de armonización del sistema eléctrico
              nacional (expediente 23.414) — que sindicatos y organizaciones sociales señalaron como
              una puerta a la privatización del servicio eléctrico — provocó ese año{' '}
              <Fuente href={SOURCES.nacionIce}>
                movilizaciones frente a la Asamblea Legislativa
              </Fuente>{' '}
              impulsadas sobre todo por el movimiento estudiantil autónomo, con presencia puntual de
              la ANEP y de los <Fuente href={SOURCES.monumentalIce}>sindicatos del ICE</Fuente>.
            </p>
            <p>
              Algunas de las personas que hoy integran la colectiva estuvieron ahí — pero no como
              colectiva, porque todavía no existía: participaron a título individual, cada una desde
              su propia organización. De esa articulación nació un chat de coordinación, y solo meses
              después, de ese chat, surgió la colectiva, que heredó el espacio y lo sigue usando.
            </p>
            <p>
              Ese trabajo de coordinación se organizó primero como una comisión de comunicación, que
              más adelante se convirtió en el grupo de logística del Plantón por la Justicia
              Democrática.
            </p>
          </TimelineItem>

          <TimelineItem date="6 de agosto de 2026" title="Plantón por la Justicia Democrática">
            <p>
              La colectiva convocó el{' '}
              <Fuente href={SOURCES.delfinoPlanton}>Plantón por la Justicia Democrática</Fuente> en
              la Plaza de la Democracia, de 4:00 p. m. a 8:00 p. m., en defensa de la independencia
              judicial y la separación de poderes — en respuesta a la acusación del Ejecutivo de que
              cuatro magistrados de la Sala Constitucional habían orquestado un «golpe de Estado», y
              a los recortes presupuestarios al Poder Judicial.
            </p>
            <p>
              Participaron <strong>más de 20 000 personas</strong>. La Plaza de la Democracia quedó
              desbordada y la Avenida Segunda tuvo que cerrarse;{' '}
              <Fuente href={SOURCES.nacionPlanton}>la prensa reportó</Fuente> estudiantes,
              académicos, docentes, personas pensionadas, funcionariado público, sindicatos y
              familias, con banderas blancas y la bandera nacional en vez de banderas de partido.
            </p>
            <p>
              Hubo <Fuente href={SOURCES.financieroPlanton}>plantones simultáneos</Fuente> frente a
              tribunales y parques en Cartago, Limón, Heredia, Ciudad Quesada, Atenas, San Ramón,
              Turrialba, Puntarenas, Pérez Zeledón, Liberia, Nicoya, Quepos y San Carlos.
            </p>
          </TimelineItem>

          <TimelineItem date="14 de setiembre de 2026" title="Faroleada por la Democracia">
            <p>
              Convocatoria a la{' '}
              <Fuente href={SOURCES.teleticaFaroleada}>Faroleada por la Democracia</Fuente> en la
              víspera del 15 de setiembre: sacar el farol a la calle como acto de protesta pacífica
              en defensa de la separación de poderes, retomando una tradición que ya convoca a todo
              el país. Respaldada por cerca de 40 organizaciones — sindicatos, asociaciones y
              federaciones estudiantiles.
            </p>
            <p>
              Se realizó en <strong>31 cantones</strong> además del punto central en San José, con{' '}
              <Fuente href={SOURCES.acontecerFaroleada}>miles de personas</Fuente> marchando con
              faroles encendidos. La organización aclaró que era una iniciativa ciudadana, sin
              transporte organizado ni respaldo de ningún partido.
            </p>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section title="Lo que quedó del camino">
        <p>
          Entre marzo y setiembre, ese espacio pasó de ser un chat de coordinación entre personas de
          distintas organizaciones a convocar, ya como colectiva, dos de las movilizaciones ciudadanas
          más grandes del año. La defensa del ICE y la defensa de la independencia judicial parecen
          temas distintos, y lo son — pero la gente que coordinó la primera desde sus propias
          organizaciones descubrió que la segunda la interpelaba igual, y que las organizaciones que
          enfrentaban una y otra necesitaban exactamente lo mismo: coordinación, formación y difusión.
        </p>
        <p>
          Nadie estaba sosteniendo ese trabajo común. Por eso nació la colectiva, y esa es la razón de
          ser del modelo actual.
        </p>
      </Section>

      <Callout title="Sobre estos datos">
        <p>
          Las fechas y los hechos de agosto y setiembre están respaldados por la cobertura de prensa
          enlazada en cada entrada. La fecha de marzo — cuándo surgió el chat de coordinación del que
          más tarde nació la colectiva — todavía está por confirmar y aparece marcada como tal.
        </p>
      </Callout>
    </CarsLayout>
  );
}
