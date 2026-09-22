import type {ReactNode} from 'react';
import {CarsLayout, Section, Step, StepList, StatusNotice} from '@site/src/components/Cars';

export default function ComoDecidimos(): ReactNode {
  return (
    <CarsLayout
      title="Cómo decidimos"
      description="El proceso de toma de decisiones por consentimiento de la Colectiva Autónoma por la Resistencia Social (CARS)."
      tagline="Cómo se toma una decisión en una organización sin jefaturas: por consentimiento, no por
        unanimidad, y con reglas claras sobre qué cuenta como objeción."
      backTo={{to: '/cars/', label: 'CARS'}}>
      <StatusNotice label="Propuesta">
        Este proceso es una <strong>propuesta pendiente de aprobación del colectivo</strong>. Se
        publica para que se pueda discutir, no porque ya esté en vigencia.
        {/* TODO: actualizar el estado de esta página (y quitar este aviso)
            cuando el colectivo apruebe o modifique el proceso. */}
      </StatusNotice>

      <Section
        title="Consentimiento, no unanimidad"
        intro="La diferencia es más importante de lo que parece.">
        <p>
          Unanimidad significa que todo el mundo tiene que estar de acuerdo. En la práctica eso
          paraliza: basta que a una persona no le entusiasme algo para que no se haga nada, y las
          decisiones terminan tomándolas quienes tienen más aguante para discutir.
        </p>
        <p>
          Consentimiento significa otra cosa: la pregunta no es «¿le parece la mejor idea?», sino{' '}
          <strong>«¿tiene alguna objeción de fondo para que esto se haga?»</strong>. Se puede estar
          poco convencido y aun así dar consentimiento. Lo que detiene una propuesta no es la falta
          de entusiasmo, sino una objeción con razón dicha.
        </p>
      </Section>

      <Section title="Qué cuenta como objeción">
        <p>
          Una objeción tiene que venir <strong>con una razón explícita</strong> — por qué esta
          propuesta le haría daño a la colectiva o a la causa, o por qué no se puede sostener. «No
          me gusta» no es una objeción; «esto nos expone a un riesgo que no podemos cubrir» sí lo es.
        </p>
        <p>
          Y toda objeción <strong>tiene que recibir respuesta</strong>. No se puede ignorar ni
          archivar: o se modifica la propuesta para resolverla, o se explica por qué no procede. Una
          objeción sin respuesta mantiene la decisión detenida.
        </p>
      </Section>

      <Section title="Cómo avanza una decisión">
        <StepList>
          <Step number={1} title="Se presenta la propuesta">
            Quien propone explica qué se quiere hacer, por qué y qué implica en trabajo o en riesgo.
          </Step>
          <Step number={2} title="Se abre la ventana de respuesta">
            Hay entre <strong>24 y 48 horas</strong> para plantear objeciones. El plazo existe para
            que quien no pudo estar presente alcance a pronunciarse, y para que nadie decida por
            cansancio a medianoche.
          </Step>
          <Step number={3} title="Se atienden las objeciones">
            Cada objeción se responde: se ajusta la propuesta, o se argumenta por qué no procede. Si
            se ajusta, la versión modificada vuelve a la ventana de respuesta.
          </Step>
          <Step number={4} title="Se toma la decisión">
            Sin objeciones pendientes, la propuesta queda aprobada y se registra qué se decidió y
            quién queda a cargo.
          </Step>
        </StepList>
      </Section>

      <Section
        title="Decisiones urgentes: la prueba de 30 días"
        intro="No todo aguanta una ventana de 48 horas, y no todo desacuerdo se resuelve discutiendo.">
        <p>
          Cuando hay urgencia real, o cuando una discusión se traba sin que nadie logre convencer al
          resto, la propuesta puede aprobarse <strong>a prueba por 30 días</strong>. Se hace, se ve
          qué pasa, y al cumplirse el plazo se revisa con evidencia en vez de con pronósticos.
        </p>
        <p>
          Al final de los 30 días la decisión no continúa por inercia: hay que confirmarla, ajustarla
          o dejarla sin efecto. Esto permite que la colectiva actúe rápido sin que una decisión
          apresurada se vuelva permanente por descuido.
        </p>
      </Section>
    </CarsLayout>
  );
}
