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
    title: 'Aprende',
    emoji: '📚',
    description: (
      <>
        Documentación clara sobre cómo funcionamos, nuestros principios y las
        formas de participar. Empieza desde cero, a tu ritmo.
      </>
    ),
  },
  {
    title: 'Participa',
    emoji: '🤝',
    description: (
      <>
        Encuentra tu lugar según tu tiempo e intereses. Cada persona aporta, sin
        importar cuánto pueda dedicar.
      </>
    ),
  },
  {
    title: 'Organiza',
    emoji: '⚙️',
    description: (
      <>
        Guías y recursos prácticos para llevar los ideales a la acción concreta
        en tu comunidad.
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
