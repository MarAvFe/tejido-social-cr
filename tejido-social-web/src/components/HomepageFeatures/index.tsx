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
        Sin aprobación central. Actúa bajo los principios documentados.
      </>
    ),
  },
  {
    title: 'Documentado',
    emoji: '📚',
    description: (
      <>
        Todo está escrito. Lee, aprende, actúa.
      </>
    ),
  },
  {
    title: 'Causa-Neutral',
    emoji: '⚖️',
    description: (
      <>
        Para cualquier movimiento. Forkea y adapta.
      </>
    ),
  },
  {
    title: 'Principios Claros',
    emoji: '✊',
    description: (
      <>
        No-violencia, dignidad, horizontalidad, inclusión.
      </>
    ),
  },
  {
    title: 'Niveles de Participación',
    emoji: '📈',
    description: (
      <>
        Observador → Participante → Activo → Coordinador → Formador.
      </>
    ),
  },
  {
    title: 'Organismos Autónomos',
    emoji: '⚙️',
    description: (
      <>
        8 áreas de trabajo. Actúan independientes, coordinan cuando necesitan.
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
