import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';

import styles from './styles.module.css';

type EntryLink = {
  title: string;
  description: string;
  to: string;
};

const ENTRY_LINKS: EntryLink[] = [
  {
    title: 'Introducción',
    description: 'Para quién es este sitio y por dónde empezar.',
    to: '/docs/intro',
  },
  {
    title: 'Organismos',
    description: 'Cómo se organiza el partido y el gobierno municipal.',
    to: '/docs/organismos/',
  },
  {
    title: 'Guías Prácticas',
    description: 'Pasos concretos para tareas frecuentes del trabajo distrital.',
    to: '/docs/guias/',
  },
  {
    title: 'Glosario',
    description: 'Términos y siglas usados en el sitio, si buscabas algo puntual.',
    to: '/docs/recursos/glosario',
  },
];

function PinIcon() {
  return (
    <svg
      className={styles.pin}
      width="56"
      height="56"
      viewBox="0 0 24 24"
      aria-hidden="true">
      <path
        d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z"
        fill="currentColor"
      />
      <circle cx="12" cy="10" r="3" fill="var(--fa-brand-yellow)" />
    </svg>
  );
}

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className={clsx('col col--10 col--offset-1', styles.wrapper)}>
          <PinIcon />
          <Heading as="h1" className="hero__title">
            404 - Seguiste un enlace equivocado
          </Heading>
          <p className={styles.lead}>
            Este enlace ya no existe o nunca estuvo acá. Lo que buscabas probablemente sigue en
            el sitio, solo que en otra dirección. Te dejamos otros enlaces acá abajo:
          </p>

          <div className={clsx('row', styles.grid)}>
            {ENTRY_LINKS.map(({title, description, to}) => (
              <div key={to} className="col col--6">
                <Link to={to} className={styles.card}>
                  <strong>{title}</strong>
                  <span className={styles.cardDescription}>{description}</span>
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.footer}>
            También podés usar el buscador en la parte superior de la
            página, o{' '}
            <Link to="/contacto">escribirnos</Link> si creés que un enlace
            está roto.
          </p>
        </div>
      </div>
    </main>
  );
}
