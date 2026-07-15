/**
 * Registro de siglas para el resaltado automático en el contenido (ver
 * remark/acronyms.mjs). Mantener sincronizado a mano con
 * docs/recursos/glosario.md — este archivo es la fuente para el plugin de
 * build, el glosario es la fuente de lectura para las personas.
 */
export const ACRONYMS: Record<string, string> = {
  FA: 'Frente Amplio',
  CAPB: 'Comité de Acción Política de Base',
  CEC: 'Comité Ejecutivo Cantonal',
  CEP: 'Comité Ejecutivo Provincial',
  CEN: 'Comité Ejecutivo Nacional',
  TEFA: 'Tribunal Electoral del Frente Amplio',
  TSE: 'Tribunal Supremo de Elecciones',
  FAMO: 'Frente Amplio Montes de Oca',
};
