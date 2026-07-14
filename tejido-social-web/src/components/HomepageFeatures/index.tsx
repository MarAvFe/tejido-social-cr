import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Descentralizado',
    emoji: '🌐',
    description: (
      <>
        Sin aprobación central. Cualquiera puede organizar una acción bajo los principios documentados. Inspirado en BDS global y Extinction Rebellion.
      </>
    ),
  },
  {
    title: 'Documentado',
    emoji: '📚',
    description: (
      <>
        Todo está escrito. Tutoriales, guías prácticas, explicaciones, y referencias. Una persona nueva puede leer la documentación y actuar sin pedir ayuda.
      </>
    ),
  },
  {
    title: 'Causa-Neutral',
    emoji: '⚖️',
    description: (
      <>
        Úsalo para clima, vivienda, derechos laborales, o cualquier causa. Forkea y adapta. Licencia CC0 (dominio público).
      </>
    ),
  },
  {
    title: 'Principios Claros',
    emoji: '✊',
    description: (
      <>
        No-violencia, dignidad, horizontalidad, inclusión. Principios publicados que protegen el movimiento de malos actores y atribución falsa.
      </>
    ),
  },
  {
    title: 'Niveles de Participación',
    emoji: '📈',
    description: (
      <>
        Un curriculum de participación. Observador → Participante → Miembro Activo → Coordinador → Formador. Cada persona elige su profundidad.
      </>
    ),
  },
  {
    title: 'Organismos Autónomos',
    emoji: '⚙️',
    description: (
      <>
        8 áreas de trabajo especializadas (Acción, Seguridad, Medios, Educación, Política, Bienestar, Economía, Legal). Actúan independientemente, coordinan cuando necesitan.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
