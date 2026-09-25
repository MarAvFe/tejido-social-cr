/**
 * Data centers / large computing-power projects across Central America,
 * for the regional map. Deliberately mixes verified-operational colocation
 * facilities (mostly small, capacity rarely disclosed) with the handful of
 * large, publicly contested projects (Quantum, Volcano Energy). Coordinates
 * are city/canton-level approximations unless noted otherwise — none of
 * these are exact parcel locations except Quantum's (itself already
 * "extraoficial", reused from the Limón page's own map).
 *
 * `capacityMW` + `wueLPerKWh` together drive the liters estimate in
 * `dataCenterWaterEstimate.ts`. Leaving `wueLPerKWh` unset means "don't
 * compute a number" — used whenever the known capacity figure isn't a
 * sustained IT load (e.g. backup/generator capacity) or the facility's
 * cooling technology isn't the evaporative kind WUE studies measure
 * (e.g. air/immersion-cooled Bitcoin mining rigs).
 */

export type DataCenterStatus = 'operativo' | 'en_construccion' | 'proyectado';

export interface DataCenterEntry {
  id: string;
  name: string;
  operator: string;
  country: string;
  location: string;
  lat: number;
  lng: number;
  /** Whether the coordinate is a real site pin or just a city/canton-center approximation. */
  coordsPrecision: 'exacta_extraoficial' | 'aproximada_ciudad';
  status: DataCenterStatus;
  capacityMW?: number;
  capacityNote?: string;
  /** Date to start counting from for the water estimate — defaults to 2026-01-01 when operational already covers that whole span. */
  since?: string;
  wueLPerKWh?: number;
  waterNote: string;
  sourceUrl: string;
  sourceLabel: string;
}

/** Central estimate from the Lawrence Berkeley National Laboratory-cited industry average; see the article's methodology callout for the full range (1–9 L/kWh) and caveats. */
export const DEFAULT_WUE_L_PER_KWH = 1.8;

export const CENTROAMERICA_DATA_CENTERS: DataCenterEntry[] = [
  {
    id: 'quantum-limon',
    name: 'Quantum AI Free Zone Campus',
    operator: 'Quantum Development Inc.',
    country: 'Costa Rica',
    location: 'Limón',
    lat: 9.964433307590527,
    lng: -83.06379142703821,
    coordsPrecision: 'exacta_extraoficial',
    status: 'proyectado',
    capacityMW: 200,
    capacityNote: 'Capacidad anunciada por el desarrollador; construcción no ha iniciado.',
    wueLPerKWh: DEFAULT_WUE_L_PER_KWH,
    waterNote:
      'El proyecto sigue en fase de socialización, sin obras iniciadas — el número mostrado es un cálculo hipotético ("qué pasaría si ya estuviera operando a plena capacidad desde enero 2026"), no consumo real. Además perdió su régimen de zona franca ante COMEX en mayo de 2026.',
    sourceUrl: '/iniciativas-colectivas/datacenters/limon-quantum-quienes-son',
    sourceLabel: 'Investigación propia + La Nación',
  },
  {
    id: 'volcano-energy-metapan',
    name: 'Volcano Energy (parque solar-eólico + minería de Bitcoin)',
    operator: 'Volcano Energy / Lava Pool (con Luxor Technology y Tether)',
    country: 'El Salvador',
    location: 'El Shiste, Metapán, Santa Ana',
    lat: 14.3319,
    lng: -89.4419,
    coordsPrecision: 'aproximada_ciudad',
    status: 'en_construccion',
    capacityMW: 241,
    capacityNote: 'Fase 1: 169 MW solar + 72 MW eólico, con meta declarada de escalar a 20,000 MW en ~5 años.',
    waterNote:
      'No se calcula un estimado de litros: es una granja de minería de Bitcoin (ASICs), típicamente enfriada por aire o inmersión, no por torres de enfriamiento evaporativo — el WUE de data centers de este informe no aplica de la misma forma y no hay cifra de consumo de agua publicada para el sitio. El patrón regional de conflicto por agua ligado a minería de Bitcoin en El Salvador sí está documentado por otras fuentes (ver Global Voices).',
    sourceUrl: 'https://bitcoinmagazine.com/el-salvador-bitcoin-news/el-salvador-plans-241-megawatt-renewable-plant-for-bitcoin-mining',
    sourceLabel: 'Bitcoin Magazine',
  },
  {
    id: 'ifx-orion-mixco',
    name: 'Orión Data Center',
    operator: 'IFX Networks',
    country: 'Guatemala',
    location: 'Naranjo, Mixco (área metropolitana de Ciudad de Guatemala)',
    lat: 14.6349,
    lng: -90.6065,
    coordsPrecision: 'aproximada_ciudad',
    status: 'operativo',
    capacityMW: 1,
    capacityNote: '"Más de 1 MW" es la capacidad de respaldo (UPS/generadores) declarada, no necesariamente la carga de TI sostenida.',
    waterNote:
      'No se calcula un estimado de litros: la única cifra pública es capacidad de respaldo (para cortes de electricidad), no consumo continuo — tratarla como carga sostenida sobreestimaría el consumo real.',
    sourceUrl: 'https://www.publinews.gt/business/2026/05/05/ifx-inaugura-orion-un-moderno-data-center-en-mixco-con-inversion-de-us25-millones/',
    sourceLabel: 'Publinews Guatemala',
  },
  {
    id: 'tigo-evolution-tegucigalpa',
    name: 'Data Center Evolution',
    operator: 'Tigo Business (Millicom)',
    country: 'Honduras',
    location: 'Tegucigalpa',
    lat: 14.0723,
    lng: -87.1921,
    coordsPrecision: 'aproximada_ciudad',
    status: 'operativo',
    waterNote: 'Sin capacidad de TI (MW) divulgada públicamente — no se calcula un estimado de litros.',
    sourceUrl: 'https://www.tigo.com.hn/cloud-partners/data-center-evolution',
    sourceLabel: 'Tigo Business Honduras',
  },
  {
    id: 'navegalo-tegucigalpa',
    name: 'Navegalo Honduras',
    operator: 'Navegalo',
    country: 'Honduras',
    location: 'Tegucigalpa',
    lat: 14.0803,
    lng: -87.2001,
    coordsPrecision: 'aproximada_ciudad',
    status: 'operativo',
    capacityMW: 1,
    since: '2026-01-01',
    wueLPerKWh: DEFAULT_WUE_L_PER_KWH,
    waterNote:
      'Capacidad de 1 MW según el directorio DatacenterMap; fecha de inicio de operación no confirmada, así que el estimado asume funcionamiento continuo durante todo 2026 (probablemente ya operaba antes) — es un cálculo, no una medición del operador.',
    sourceUrl: 'https://www.datacentermap.com/honduras/tegucigalpa/navegalo-honduras/',
    sourceLabel: 'DatacenterMap',
  },
  {
    id: 'cirion-pan1',
    name: 'PAN1',
    operator: 'Cirion Technologies',
    country: 'Panamá',
    location: 'Ciudad de Panamá',
    lat: 8.9824,
    lng: -79.5199,
    coordsPrecision: 'aproximada_ciudad',
    status: 'operativo',
    waterNote: 'Sin capacidad de TI (MW) divulgada públicamente — no se calcula un estimado de litros.',
    sourceUrl: 'https://www.datacentermap.com/panama/panama-city/cirion-pan1/',
    sourceLabel: 'DatacenterMap',
  },
  {
    id: 'cw-idc-pacifico',
    name: 'IDC Pacífico',
    operator: 'Cable & Wireless Panamá',
    country: 'Panamá',
    location: 'Arraiján',
    lat: 8.9524,
    lng: -79.6494,
    coordsPrecision: 'aproximada_ciudad',
    status: 'operativo',
    waterNote: 'Sin capacidad de TI (MW) divulgada públicamente — no se calcula un estimado de litros.',
    sourceUrl: 'https://www.datacentermap.com/panama/panama-city/cw-panama-idc-pacfico/',
    sourceLabel: 'DatacenterMap',
  },
  {
    id: 'navegalo-san-jose',
    name: 'Navegalo Costa Rica',
    operator: 'Navegalo',
    country: 'Costa Rica',
    location: 'San José',
    lat: 9.9281,
    lng: -84.0907,
    coordsPrecision: 'aproximada_ciudad',
    status: 'operativo',
    waterNote: 'Sin capacidad de TI (MW) divulgada públicamente — no se calcula un estimado de litros.',
    sourceUrl: 'https://www.datacentermap.com/costa-rica/san-jose-cr/',
    sourceLabel: 'DatacenterMap',
  },
];
