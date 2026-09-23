import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function PadronPage(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  const apiUrl = (siteConfig.customFields?.padronApiUrl as string) || '';

  return (
    <Layout title="Padrón" description="Padrón interno. Acceso restringido.">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="container margin-vert--lg">
        <h1>Padrón</h1>
        <p>Acceso restringido a las personas encargadas del padrón.</p>
        {apiUrl ? (
          <BrowserOnly fallback={<div>Cargando…</div>}>
            {() => {
              const Padron = require('@site/src/components/Padron').default;
              return <Padron apiUrl={apiUrl} />;
            }}
          </BrowserOnly>
        ) : (
          <div className="alert alert--warning">
            Falta configurar la variable de entorno <code>PADRON_API_URL</code>.
          </div>
        )}
      </main>
    </Layout>
  );
}
