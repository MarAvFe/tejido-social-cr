import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import {PortalLayout, Prose, ArticleMeta, Callout, SourcesNote, renderInlineMarkdown} from '@site/src/components/IniciativasColectivas';
import {RegionalDataCenterMap} from '@site/src/components/IniciativasColectivas/RegionalDataCenterMap';
import {CENTROAMERICA_DATA_CENTERS} from '@site/src/data/centroamericaDataCenters';
import styles from '@site/src/components/IniciativasColectivas/styles.module.css';

const rm = renderInlineMarkdown;

export default function MapaRegionalDataCenters(): ReactNode {
  const withEstimate = CENTROAMERICA_DATA_CENTERS.filter((e) => e.capacityMW && e.wueLPerKWh);
  const withoutEstimate = CENTROAMERICA_DATA_CENTERS.filter((e) => !(e.capacityMW && e.wueLPerKWh));

  return (
    <PortalLayout
      title="Mapa: data centers en Centroamérica"
      description="Mapa de proyectos de centros de datos en Centroamérica, con una estimación de consumo de agua en millones de litros desde enero de 2026, cuando la capacidad publicada lo permite."
      tagline="Centros de datos identificados en Centroamérica, con una estimación de consumo de agua en millones de litros desde enero de 2026 — solo donde hay una capacidad (MW) publicada y comparable."
      backTo={{to: '/iniciativas-colectivas/datacenters/', label: 'Data centers en Costa Rica'}}>
      <ArticleMeta>
        Ocho proyectos identificados en cinco países (Costa Rica, El Salvador, Guatemala, Honduras, Panamá), a
        partir de directorios de la industria (DatacenterMap) y cobertura de prensa. No es un listado exhaustivo —
        ver las advertencias sobre los datos más abajo.
      </ArticleMeta>

      <Prose>
        <Heading as="h2">Cómo leer el mapa</Heading>
        <div className={styles.mapLegend}>
          <span className={styles.mapLegendItem}>
            <span className={styles.mapLegendDot} style={{background: '#0f766e'}} /> Operativo
          </span>
          <span className={styles.mapLegendItem}>
            <span className={styles.mapLegendDot} style={{background: '#b45309'}} /> En construcción
          </span>
          <span className={styles.mapLegendItem}>
            <span className={styles.mapLegendDot} style={{background: '#b91c1c'}} /> Proyectado (sin obras)
          </span>
        </div>
        <p>
          {rm(
            'Cada marcador muestra operador, ubicación, estado y —solo cuando hay una capacidad en MW publicada que representa carga sostenida de TI (no capacidad de respaldo) y una tecnología de enfriamiento comparable a la de un data center convencional— un estimado de litros de agua consumidos desde el 1 de enero de 2026. De los ocho proyectos, solo **dos** cumplen esa condición: Quantum (Limón) y Navegalo (Tegucigalpa). Los otros seis se muestran igual, sin número, para no inventar una cifra que no está respaldada.',
          )}
        </p>
        <RegionalDataCenterMap entries={CENTROAMERICA_DATA_CENTERS} />

        <Heading as="h2">Metodología del estimado de agua</Heading>
        <p>
          {rm(
            '**litros ≈ capacidad (MW) × 1000 × horas transcurridas × WUE (litros/kWh).** WUE (Water Usage Effectiveness) es la métrica estándar de la industria para agua de enfriamiento por kWh de TI; el promedio citado en la literatura —incluyendo un estudio del Lawrence Berkeley National Laboratory— es de **1.8 a 1.9 L/kWh**, con un rango de 1 a 9 L/kWh según clima y tecnología de enfriamiento. Este informe usa **1.8 L/kWh** como estimado central donde aplica.',
          )}
        </p>
        <p>
          Esto trata la capacidad publicada como una carga sostenida y continua, la misma simplificación que ya usa
          el{' '}
          <a href="/iniciativas-colectivas/datacenters/limon-informe-empleos">informe de empleo e inversión de Quantum</a>{' '}
          al equiparar los 200 MW de Quantum con "13.5% del consumo eléctrico de Costa Rica". Es una forma razonable
          de dar una magnitud comparable, no una medición real del operador —de ahí las advertencias específicas en
          cada marcador.
        </p>

        <Heading as="h2">Proyectos con estimado de agua</Heading>
        <ul>
          {withEstimate.map((e) => (
            <li key={e.id}>
              {rm(`**${e.name}** (${e.location}, ${e.country}) — ${e.capacityMW} MW.`)} {e.waterNote}
            </li>
          ))}
        </ul>

        <Heading as="h2">Proyectos sin estimado de agua (y por qué)</Heading>
        <ul>
          {withoutEstimate.map((e) => (
            <li key={e.id}>
              {rm(`**${e.name}** (${e.location}, ${e.country}).`)} {e.waterNote}
            </li>
          ))}
        </ul>
      </Prose>

      <Callout title="Advertencias sobre los datos">
        <ul>
          <li>
            {rm(
              'Este mapa **no es exhaustivo**. Se construyó a partir de directorios de la industria (DatacenterMap, Baxtel, DatacenterHawk) y cobertura de prensa especializada, no de un censo oficial. Es probable que existan más facilidades pequeñas de colocación no listadas en esas fuentes, y no se incluyeron Nicaragua ni Belice por no encontrarse ahí proyectos con suficiente detalle público para ubicarlos y describirlos con responsabilidad.',
            )}
          </li>
          <li>
            {rm(
              'Las coordenadas son **aproximaciones a nivel de ciudad o cantón**, salvo la de Quantum en Limón (ya marcada como "extraoficial" en la página de ese proyecto). Ninguna es una dirección de parcela verificada de forma independiente.',
            )}
          </li>
          <li>
            {rm(
              'El estimado de litros es un **cálculo, no una medición**: asume capacidad publicada como carga constante desde la fecha de inicio indicada. Para Quantum, que no ha iniciado construcción, el número es explícitamente **hipotético** ("si ya estuviera operando a plena capacidad"), no consumo real.',
            )}
          </li>
          <li>
            {rm(
              'El WUE de 1.8 L/kWh aplica a enfriamiento evaporativo típico de data centers convencionales. **No se aplicó a Volcano Energy** (minería de Bitcoin, típicamente enfriada por aire o inmersión) porque haría suponer una tecnología de enfriamiento que no está confirmada públicamente para ese sitio.',
            )}
          </li>
        </ul>
      </Callout>

      <SourcesNote>
        Fuentes por proyecto listadas en cada marcador del mapa y en las secciones anteriores. Ver también el{' '}
        <a href="/iniciativas-colectivas/datacenters/limon-informe-empleos">informe de empleo e inversión de Quantum</a>{' '}
        y{' '}
        <a href="/iniciativas-colectivas/datacenters/limon-quantum-quienes-son">
          la investigación sobre quién está detrás de Quantum
        </a>
        .
      </SourcesNote>
    </PortalLayout>
  );
}
