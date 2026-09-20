import type {ReactNode} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import type {DataCenterEntry} from '@site/src/data/centroamericaDataCenters';
import {estimateLiters, formatMillionLiters} from '@site/src/utils/dataCenterWaterEstimate';
import styles from './styles.module.css';

const STATUS_LABEL: Record<DataCenterEntry['status'], string> = {
  operativo: 'Operativo',
  en_construccion: 'En construcción',
  proyectado: 'Proyectado (sin obras)',
};

const STATUS_COLOR: Record<DataCenterEntry['status'], string> = {
  operativo: '#0f766e',
  en_construccion: '#b45309',
  proyectado: '#b91c1c',
};

interface RegionalDataCenterMapProps {
  entries: DataCenterEntry[];
}

/**
 * Multi-marker map of Central American data centers, colored by build
 * status. Uses Leaflet (OpenStreetMap tiles, no API key) instead of the
 * single-pin Google Maps embed (`MapEmbed`) since that one can't place
 * more than one marker without a paid API/My Maps setup. Loaded only in
 * the browser via `BrowserOnly` — Leaflet touches `window`/`document` at
 * import time and would crash Docusaurus's SSR build otherwise.
 */
export function RegionalDataCenterMap({entries}: RegionalDataCenterMapProps): ReactNode {
  return (
    <BrowserOnly fallback={<div className={styles.mapEmbed}>Cargando mapa…</div>}>
      {() => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const {MapContainer, TileLayer, Marker, Popup} = require('react-leaflet');
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const L = require('leaflet');
        require('leaflet/dist/leaflet.css');

        const iconFor = (status: DataCenterEntry['status']) =>
          L.divIcon({
            className: styles.mapMarker,
            html: `<span style="background:${STATUS_COLOR[status]}"></span>`,
            iconSize: [18, 18],
            iconAnchor: [9, 9],
            popupAnchor: [0, -9],
          });

        return (
          <MapContainer center={[11.5, -85.5]} zoom={6} className={styles.regionalMap} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {entries.map((entry) => {
              const liters =
                entry.capacityMW && entry.wueLPerKWh
                  ? estimateLiters({
                      capacityMW: entry.capacityMW,
                      wueLPerKWh: entry.wueLPerKWh,
                      since: new Date(entry.since ?? '2026-01-01T00:00:00Z'),
                    })
                  : null;
              return (
                <Marker key={entry.id} position={[entry.lat, entry.lng]} icon={iconFor(entry.status)}>
                  <Popup>
                    <div className={styles.mapPopup}>
                      <p className={styles.mapPopupTitle}>{entry.name}</p>
                      <p className={styles.mapPopupMeta}>
                        {entry.operator} — {entry.location}, {entry.country}
                      </p>
                      <p className={styles.mapPopupMeta}>
                        <strong>{STATUS_LABEL[entry.status]}</strong>
                        {entry.capacityMW ? ` · ${entry.capacityMW} MW` : ''}
                      </p>
                      {liters !== null && (
                        <p className={styles.mapPopupLiters}>
                          ≈ {formatMillionLiters(liters)} millones de litros estimados desde enero 2026
                        </p>
                      )}
                      <p className={styles.mapPopupNote}>{entry.waterNote}</p>
                      <a href={entry.sourceUrl} target="_blank" rel="noreferrer">
                        Fuente: {entry.sourceLabel}
                      </a>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        );
      }}
    </BrowserOnly>
  );
}
