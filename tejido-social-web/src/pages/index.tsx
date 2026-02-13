import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '800px', margin: '1rem auto 2rem'}}>
          Un marco documentado, abierto y neutral para que cualquier movimiento se organice efectivamente sin reinventar la rueda.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{marginRight: '1rem'}}>
            🧵 Comenzar Aquí
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/tutorials/primera-protesta">
            📖 Tutoriales
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Organización Comunitaria Descentralizada`}
      description="Un marco abierto para la organización comunitaria descentralizada. Documentación, guías prácticas, y recursos para movimientos sociales.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
