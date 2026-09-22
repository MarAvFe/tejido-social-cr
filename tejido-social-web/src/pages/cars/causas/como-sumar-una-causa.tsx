import type {ReactNode} from 'react';
import {
  CarsLayout,
  Section,
  Step,
  StepList,
  JoinCta,
  StatusNotice,
} from '@site/src/components/Cars';

/**
 * Causes come in through the collective's public channels — there's no separate
 * intake form, and the sign-up form is for people joining a comisión, not for
 * bringing a cause.
 */
const CONTACTO_URL = 'https://www.facebook.com/profile.php?id=61593522393613';

export default function ComoSumarUnaCausa(): ReactNode {
  return (
    <CarsLayout
      title="Cómo sumar una causa"
      description="Qué necesita una causa para que la Colectiva Autónoma por la Resistencia Social (CARS) la acompañe, y qué aporta la colectiva."
      tagline="Si hay algo que le preocupa y quiere organizarse alrededor de eso, esto es lo que la
        colectiva puede aportar y lo que se espera de quien lidera."
      backTo={{to: '/cars/causas/', label: 'Causas activas'}}>
      <StatusNotice label="Propuesta">
        Este proceso es un borrador pendiente de aprobación del colectivo. Sirve para orientarse,
        pero los pasos y los criterios pueden cambiar.
        {/* TODO: confirmar el proceso real de ingreso de causas una vez que el
            colectivo lo acuerde, y sustituir el canal de contacto si se abre
            un formulario propio. */}
      </StatusNotice>

      <Section
        title="Lo primero: la causa sigue siendo suya"
        intro="CARS no adopta causas para volverlas propias.">
        <p>
          Quien lidera la causa sigue liderándola. La colectiva aporta capacidad — manos, formación,
          difusión, contactos con otras organizaciones — pero no toma las decisiones de esa lucha ni
          habla en su nombre. Si en algún momento la causa quiere caminar sola, camina sola.
        </p>
      </Section>

      <Section title="Qué aporta la colectiva">
        <p>Según lo que la causa necesite y lo que la colectiva pueda sostener en ese momento:</p>
        <ul>
          <li>
            <strong>Conexión</strong> con otras organizaciones y sindicatos que ya enfrentan algo
            parecido.
          </li>
          <li>
            <strong>Formación</strong> en organización de base, vocería y trabajo con medios.
          </li>
          <li>
            <strong>Difusión</strong> por los canales de la colectiva y apoyo en materiales gráficos.
          </li>
          <li>
            <strong>Acompañamiento</strong> en actividades públicas: logística, cuidados y apoyo en
            el terreno.
          </li>
        </ul>
      </Section>

      <Section title="Qué se espera de la causa">
        <ul>
          <li>Que haya gente real organizándose alrededor de ella, no solo una idea.</li>
          <li>Que se sostenga en acción pacífica y dentro de la ley.</li>
          <li>Que exista alguien que la lidere y responda por ella.</li>
          <li>Que no sea la plataforma de una candidatura o de un partido.</li>
        </ul>
      </Section>

      <Section title="Cómo es el proceso">
        <StepList>
          <Step number={1} title="Escribanos">
            Cuente de qué se trata, quiénes están organizándose ya y qué hace falta. No se necesita
            un documento formal.
          </Step>
          <Step number={2} title="Conversamos">
            Una conversación para entender la causa y ser honestos sobre qué puede y qué no puede
            aportar la colectiva en este momento.
          </Step>
          <Step number={3} title="Lo lleva a la colectiva">
            La propuesta se discute en el espacio de decisión de CARS, con el proceso de consentimiento
            que se describe en «cómo decidimos».
          </Step>
          <Step number={4} title="Se define el acompañamiento">
            Si se acuerda acompañar, se define qué comisiones se involucran, con qué alcance y por cuánto
            tiempo — para que nadie quede esperando algo que no se ofreció.
          </Step>
        </StepList>
      </Section>

      <Section title="Escribanos">
        <JoinCta
          href={CONTACTO_URL}
          label="Escribir por Facebook"
          note="También estamos en Instagram, como @colectivaautonoma.rs."
        />
      </Section>
    </CarsLayout>
  );
}
