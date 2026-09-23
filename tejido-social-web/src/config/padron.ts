/**
 * Districts available on /padron. The canton is derived from here, never
 * stored per person. Adding a district also requires adding it to the
 * `distrito` select values in padron-backend/pb_migrations/.
 */
export const DISTRITOS: {nombre: string; canton: string}[] = [
  {nombre: 'San Pedro', canton: 'Montes de Oca'},
  {nombre: 'Mercedes', canton: 'Montes de Oca'},
  {nombre: 'San Rafael', canton: 'Montes de Oca'},
  {nombre: 'Sabanilla', canton: 'Montes de Oca'},
  {nombre: 'Mata de Plátano', canton: 'Goicoechea'},
  {nombre: 'El Alto', canton: 'Goicoechea'},
];

export function cantonDe(distrito: string): string {
  return DISTRITOS.find((d) => d.nombre === distrito)?.canton ?? '';
}
