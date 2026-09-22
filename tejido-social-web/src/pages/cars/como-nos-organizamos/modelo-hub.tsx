import type {ReactNode} from 'react';
import {CarsLayout, Section, NavCard} from '@site/src/components/Cars';

const CANVAS_URL = 'https://canvasopedia.org/who-we-are/';

export default function ModeloHub(): ReactNode {
  return (
    <CarsLayout
      title="El modelo: una colectiva que acompaña"
      description="Cómo funciona CARS como estructura de soporte para otras organizaciones, sindicatos y causas, en vez de encabezarlas."
      tagline="Por qué CARS no encabeza las causas que acompaña, y qué hace en cambio."
      backTo={{to: '/cars/', label: 'CARS'}}>
      <Section title="El problema que tratamos de resolver">
        <p>
          Lo aprendimos haciéndolo. En marzo de 2026, durante la respuesta ciudadana a un proyecto
          puntual — la «armonización» del ICE —, personas del movimiento estudiantil autónomo (MEA),
          el FNL y la red de solidaridad con Palestina se coordinaron en un chat compartido creado
          por el MEA, sin ser todavía una colectiva. CARS nació de ese chat meses después, y en el
          camino se topó con que el problema de fondo era otro: había mucha gente organizada que no
          se conocía entre sí.
        </p>
        <p>
          En Costa Rica hay sindicatos, asociaciones de desarrollo, colectivas de barrio, comités
          comunales y grupos que se formaron por una pelea específica. El problema casi nunca es
          falta de organización — es que cada quien pelea solo.
        </p>
        <p>
          Cuando una comunidad enfrenta un proyecto que le quita el agua, tiene que aprender desde
          cero cómo leer un expediente, cómo hablar con prensa y cómo convocar, aunque otra comunidad
          ya haya pasado por exactamente lo mismo dos años antes. Ese aprendizaje se pierde cada vez,
          y cada lucha vuelve a empezar de cero.
        </p>
      </Section>

      <Section title="Qué hace una estructura de soporte">
        <p>
          CARS existe para sostener el trabajo común que ninguna lucha por separado puede sostener
          sola. En vez de sumar una organización más que compite por la misma atención, hace lo que
          las demás no tienen tiempo de hacer:
        </p>
        <ul>
          <li>
            <strong>Conectar</strong> organizaciones que enfrentan lo mismo sin saberlo.
          </li>
          <li>
            <strong>Formar</strong>, para que lo que una aprendió no se pierda cuando su pelea
            termina.
          </li>
          <li>
            <strong>Comunicar</strong>, sosteniendo canales y relación con medios que una
            organización pequeña no puede mantener.
          </li>
          <li>
            <strong>Acompañar</strong> en el terreno: logística, cuidados y manos cuando hay
            actividad pública.
          </li>
        </ul>
      </Section>

      <Section title="Por qué no encabezamos">
        <p>
          Una causa la gana la gente que la vive. Quien enfrenta el problema todos los días sabe cosas
          que nadie de afuera sabe, y tiene una legitimidad para hablar que no se presta ni se delega.
          Cuando una organización externa llega a ponerse al frente, normalmente pasa lo mismo: la
          lucha gana visibilidad un rato y pierde a su propia gente.
        </p>
        <p>
          Por eso el acompañamiento tiene una regla simple: si la causa puede hacer algo sola, no lo
          hacemos por ella. Y el éxito se mide al revés de como se mide normalmente — no por cuánto
          creció CARS, sino por cuánta capacidad propia le quedó a quien acompañamos.
        </p>
      </Section>

      <Section
        title="No lo inventamos nosotros"
        intro="La idea de una organización que forma y acompaña a otras, en vez de encabezarlas, tiene
          antecedentes conocidos.">
        <p>
          El caso más estudiado es el de{' '}
          <a href={CANVAS_URL} target="_blank" rel="noreferrer">
            CANVAS
          </a>{' '}
          (Centro de Acción y Estrategias No Violentas Aplicadas), fundado en Belgrado en 2004 por
          integrantes de Otpor!, el movimiento estudiantil serbio que fue clave en la caída de
          Slobodan Milošević en el año 2000. En vez de convertirse en partido tras ganar, sus
          fundadores hicieron otra cosa: sistematizaron lo que habían aprendido y se dedicaron a
          formar a activistas de otros países. Han trabajado con movimientos de más de 50 países.
        </p>
        <p>
          Lo que nos interesa de ese ejemplo no es la escala ni el contexto — son muy distintos al
          nuestro — sino dos decisiones concretas: que el conocimiento de cómo organizarse{' '}
          <strong>se enseña en vez de acumularse</strong>, y que quien acompaña{' '}
          <strong>no se pone al frente de la lucha ajena</strong>. Esas dos cosas sí las tomamos
          prestadas.
        </p>
        <p>
          También es un ejemplo de los límites del modelo: una estructura de soporte puede formar y
          conectar, pero no puede sustituir a la gente que efectivamente tiene que dar la pelea. Si
          no hay nadie organizándose por una causa, no hay nada que acompañar.
        </p>
      </Section>

      <Section title="Seguí leyendo">
        <NavCard
          to="/cars/como-nos-organizamos/comisiones"
          title="Comisiones"
          description="Cómo se reparte el trabajo dentro de la colectiva."
        />
        <NavCard
          to="/cars/como-nos-organizamos/como-decidimos"
          title="Cómo decidimos"
          description="El proceso de consentimiento con el que la colectiva toma decisiones."
        />
      </Section>
    </CarsLayout>
  );
}
