import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';

import styles from './styles.module.css';

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className={clsx('col col--8 col--offset-2', styles.wrapper)}>
          <Heading as="h1" className="hero__title">
            Página no encontrada
          </Heading>
          <p>
            El enlace que seguiste no existe, o esta página cambió de
            dirección — pasa cuando reorganizamos el sitio. Probá alguna de
            estas rutas:
          </p>
          <ul className={styles.list}>
            <li>
              <Link to="/docs/intro">Introducción</Link> — para quién es
              este sitio y por dónde empezar.
            </li>
            <li>
              <Link to="/docs/organismos/">Organismos</Link> — la estructura
              del partido y el gobierno municipal.
            </li>
            <li>
              <Link to="/docs/guias/">Guías Prácticas</Link> — pasos
              concretos para tareas frecuentes.
            </li>
            <li>
              <Link to="/docs/recursos/glosario">Glosario</Link> — términos
              y siglas usados en el sitio.
            </li>
          </ul>
          <p>
            También podés usar el buscador en la parte superior de la
            página, o <Link to="/contacto">escribirnos</Link> si creés que
            un enlace está roto.
          </p>
        </div>
      </div>
    </main>
  );
}
