import type {ReactNode} from 'react';
import {
  CarsLayout,
  Section,
  Step,
  StepList,
  JoinCta,
  Committee,
  CommitteeGrid,
} from '@site/src/components/Cars';

/** The collective's sign-up form. */
const FORMULARIO_URL = 'https://forms.gle/pxx85jVHHHJPVjdr9';

export default function Sumate(): ReactNode {
  return (
    <CarsLayout
      title="Sumate"
      description="Cómo sumarse a la Colectiva Autónoma por la Resistencia Social (CARS) y a alguna de sus cinco comisiones de trabajo."
      tagline="No hace falta experiencia previa, ni tiempo ilimitado, ni saber de antemano a cuál comisión
        entrar. Hace falta querer aportar algo concreto."
      backTo={{to: '/cars/', label: 'CARS'}}>
      <Section title="Qué implica sumarse">
        <p>
          Sumarse a CARS es sumarse a trabajo concreto, no a una lista de correo. La colectiva se
          sostiene porque la gente hace cosas: prepara materiales, sostiene redes, arma talleres,
          acompaña actividades.
        </p>
        <p>
          Cada quien aporta según lo que puede. Si en este momento no da para comprometerse de lleno
          con una comisión, existe el equipo de apoyo justamente para eso. La escucha activa y el
          trabajo en equipo son las bases de la Colectiva.
        </p>
      </Section>

      <Section
        title="Por dónde entrar"
        intro="El trabajo se organiza en cinco comisiones. Se puede entrar a más de una, y se puede
          cambiar.">
        <CommitteeGrid>
          <Committee name="Comunicación y Prensa">
            Se encarga de crear escritos para volantes, mensajes de difusión, comunicados, pliegos y
            demás.
          </Committee>
          <Committee name="Arte y Cultura">
            Proponer, organizar y fomentar actividades para el desarrollo y la preservación de la
            expresión artística y el desarrollo cultural.
          </Committee>
          <Committee name="Educación Popular">
            Promueve procesos de formación crítica, diálogo de saberes y transformación desde las
            comunidades y organizaciones de base.
          </Committee>
          <Committee name="Diseño y Edición">
            Encargada de planificar, crear y supervisar todo el material visual y editorial de la
            Colectiva.
          </Committee>
          <Committee name="Equipo de Apoyo">
            Para quienes no puedan comprometerse de lleno con alguna de las comisiones, pero sí
            pueden colaborar de vez en cuando en cosas puntuales.
          </Committee>
        </CommitteeGrid>
      </Section>

      <Section title="Cómo es el proceso">
        <StepList>
          <Step number={1} title="Llene el formulario">
            Cuéntenos qué le interesa y cuánto tiempo puede aportar.
          </Step>
          <Step number={2} title="Conversamos">
            Alguien de la colectiva le escribe para conversar y resolver dudas.
          </Step>
          <Step number={3} title="Entra a una comisión">
            Se define con cuál empezar según lo que quiera aportar y lo que haga falta en ese
            momento. Cada comisión tiene una persona encargada de orientar y activar el trabajo.
          </Step>
        </StepList>
      </Section>

      <Section title="Empezá aquí">
        <JoinCta
          href={FORMULARIO_URL}
          label="Quiero sumarme"
          note="El formulario toma unos minutos. También se puede escribir por las redes de la
            colectiva."
        />
      </Section>
    </CarsLayout>
  );
}
