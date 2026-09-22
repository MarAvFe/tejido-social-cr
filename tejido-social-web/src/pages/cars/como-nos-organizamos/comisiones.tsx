import type {ReactNode} from 'react';
import {
  CarsLayout,
  Section,
  Committee,
  CommitteeGrid,
  JoinCta,
} from '@site/src/components/Cars';

export default function Comisiones(): ReactNode {
  return (
    <CarsLayout
      title="Comisiones"
      description="Las cinco comisiones que organizan el trabajo de la Colectiva Autónoma por la Resistencia Social (CARS), descritas por función."
      tagline="El trabajo de la colectiva se reparte en cinco comisiones. Son puertas de entrada, no
        compartimentos: se entra por donde uno tenga algo que aportar."
      backTo={{to: '/cars/', label: 'CARS'}}>
      <Section title="Cómo funcionan">
        <p>
          Nuestra colectiva trabaja de forma horizontal. Por cuestiones prácticas cada comisión tiene
          una persona encargada, quien tiene la función de orientar y activar los espacios de
          trabajo. También funciona como enlace con las demás comisiones.
        </p>
        <p>
          Sin embargo, esto no significa que haya algún tipo de jerarquía o que esté permitido
          ejercer ningún tipo de poder dentro del espacio. La escucha activa y el trabajo en equipo
          son las bases de la Colectiva.
        </p>
        <p>
          Aquí las describimos por función — qué hace cada una. Quiénes las integran no es
          información pública, por seguridad de las personas que participan.
        </p>
      </Section>

      <Section title="Las cinco comisiones">
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
            Este espacio es para las personas que no puedan comprometerse de lleno con alguna de las
            comisiones, pero que sí pueden colaborar de vez en cuando en cosas puntuales.
          </Committee>
        </CommitteeGrid>
      </Section>

      <Section title="Sumarse a una comisión">
        <JoinCta
          href="/cars/participa/sumate"
          label="Cómo sumarse"
          internal
          note="No hace falta experiencia previa ni saber de antemano a cuál comisión entrar."
        />
      </Section>
    </CarsLayout>
  );
}
