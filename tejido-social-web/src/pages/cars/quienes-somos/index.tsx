import type {ReactNode} from 'react';
import {CarsLayout, Section, NavCard, Callout} from '@site/src/components/Cars';

export default function QuienesSomos(): ReactNode {
  return (
    <CarsLayout
      title="Quiénes somos"
      description="Qué es la Colectiva Autónoma por la Resistencia Social (CARS), cómo se define y qué papel juega frente a otras organizaciones."
      tagline="Una colectiva autónoma y horizontal que acompaña luchas ajenas sin apropiárselas."
      backTo={{to: '/cars/', label: 'CARS'}}>
      <Section title="Qué es CARS">
        <p>
          La Colectiva Autónoma por la Resistencia Social (CARS) es una organización de base, horizontal
          y autónoma. No es un partido, no está inscrita legalmente y no responde a ninguna estructura
          institucional: existe por el trabajo de las personas que la sostienen.
        </p>
        <p>
          Trabajamos en un momento en que varias cosas se rompen a la vez — la crisis económica, el
          cuido, la seguridad social, la salud, la seguridad frente al crimen, y las presiones sobre
          el Poder Judicial y las instituciones democráticas. Ninguna de esas luchas se gana por
          separado, y ninguna organización puede con todas. Por eso existimos.
        </p>
      </Section>

      <Section
        title="De dónde venimos"
        intro="La colectiva no empezó como una idea sobre cómo debería organizarse la sociedad civil.
          Empezó por una pelea concreta.">
        <p>
          CARS se formó en marzo de 2026 para coordinar la respuesta ciudadana al proyecto de
          armonización del sistema eléctrico nacional. Hacía falta juntar a gente que ya estaba
          preocupada por lo mismo y no tenía dónde encontrarse — y eso, hacer que la gente organizada
          se encuentre, terminó siendo el trabajo permanente.
        </p>
        <p>
          De ahí salió el <strong>Plantón por la Justicia Democrática</strong> del 6 de agosto, con
          más de 20 000 personas en la Plaza de la Democracia y plantones simultáneos en catorce
          comunidades más, y la <strong>Faroleada por la Democracia</strong> del 14 de setiembre, en
          31 cantones. Para entonces la causa ya no era solo el ICE: era la independencia judicial y
          la separación de poderes.
        </p>
        <p>
          Ese salto enseñó lo que hoy define a la colectiva. Las organizaciones que enfrentaban temas
          distintos necesitaban exactamente lo mismo — coordinación, formación y difusión — y nadie
          estaba sosteniendo ese trabajo común.
        </p>
      </Section>

      <Section
        title="Lo que no somos"
        intro="Conviene decirlo antes que lo otro, porque es lo que más se malentiende.">
        <p>
          <strong>No somos dueños de las luchas que acompañamos.</strong> Cada causa la lidera la
          gente que la vive y quienes saben del tema. CARS no llega a encabezar una protesta ajena ni
          a ponerle su nombre: llega a que esa lucha tenga más capacidad de la que tenía sola.
        </p>
        <p>
          <strong>No somos una dirigencia.</strong> Cada comisión tiene una persona encargada de
          orientar y activar el trabajo, y de servir de enlace con las demás — pero eso no crea
          jerarquía ni habilita a nadie a ejercer poder dentro del espacio.
        </p>
        <p>
          <strong>No somos partidarios.</strong> No trabajamos para posicionar a ningún partido ni a
          ninguna candidatura, y lo que convocamos es siempre acción pacífica y dentro de la ley.
        </p>
      </Section>

      <Section title="Seguí leyendo">
        <NavCard
          to="/cars/quienes-somos/mision-vision"
          title="Misión y visión"
          description="Para qué existe la colectiva y hacia dónde apunta."
        />
        <NavCard
          to="/cars/quienes-somos/principios"
          title="Principios"
          description="Todavía en definición por la colectiva."
        />
        <NavCard
          to="/cars/quienes-somos/historia"
          title="Historia"
          description="De dónde viene la colectiva y qué ha hecho hasta ahora."
        />
        <NavCard
          to="/cars/como-nos-organizamos/modelo-hub"
          title="Cómo nos organizamos"
          description="El modelo de acompañamiento, las comisiones y cómo se toman las decisiones."
        />
      </Section>

      <Callout title="Página en construcción">
        <p>
          Esta descripción es un primer borrador y todavía no ha sido revisada por la colectiva.
          Puede cambiar.
        </p>
      </Callout>
    </CarsLayout>
  );
}
