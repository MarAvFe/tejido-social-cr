import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function PadronPage(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  // Empty → demo mode: fake data kept in this browser's localStorage.
  const apiUrl = (siteConfig.customFields?.padronApiUrl as string) || '';

  return (
    <Layout title="Padrón" description="Registro interno de personas por distrito.">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="container margin-vert--lg">
        <h1>Padrón</h1>
        <p>Registro interno de personas por distrito.</p>
        <BrowserOnly fallback={<div>Cargando…</div>}>
          {() => {
            const Padron = require('@site/src/components/Padron').default;
            return <Padron apiUrl={apiUrl} />;
          }}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
