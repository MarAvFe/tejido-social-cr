import type {ReactNode} from 'react';
import {
  CarsLayout,
  Section,
  ResourceSection,
  ResourceLink,
  NavCard,
  Callout,
} from '@site/src/components/Cars';

export default function Contacto(): ReactNode {
  return (
    <CarsLayout
      title="Contacto"
      description="Cómo contactar a la Colectiva Autónoma por la Resistencia Social (CARS)."
      tagline="Las redes públicas de la colectiva, atendidas por la comisión de comunicación y prensa."
      backTo={{to: '/cars/', label: 'CARS'}}>
      <ResourceSection title="Canales públicos">
        <ResourceLink
          href="https://www.facebook.com/profile.php?id=61593522393613"
          label="Facebook"
        />
        <ResourceLink
          href="https://www.instagram.com/colectivaautonoma.rs"
          label="Instagram (@colectivaautonoma.rs)"
        />
      </ResourceSection>

      <Section title="Sobre estos canales">
        <p>
          Las redes de la colectiva las atiende la comisión de comunicación y prensa, así que una
          respuesta puede tardar — no es un chat de atención inmediata.
        </p>
        <p>
          No publicamos números personales, direcciones ni enlaces a los espacios internos de
          organización. Es una decisión de seguridad de las personas que participan, no una forma de
          poner distancia.
        </p>
      </Section>

      <Callout title="Antes de escribir">
        <p>
          Si lo que busca es <strong>sumarse a trabajar</strong> o <strong>traer una causa</strong>,
          hay páginas específicas para eso — ahí está explicado qué información hace falta, y así la
          conversación empieza más adelantada.
        </p>
      </Callout>

      <Section title="Otras vías">
        <NavCard
          to="/cars/participa/sumate"
          title="Quiero sumarme a la colectiva"
          description="Cómo entrar a una comisión y qué implica."
        />
        <NavCard
          to="/cars/causas/como-sumar-una-causa"
          title="Tengo una causa"
          description="Qué aporta la colectiva y cómo se acuerda un acompañamiento."
        />
      </Section>
    </CarsLayout>
  );
}
