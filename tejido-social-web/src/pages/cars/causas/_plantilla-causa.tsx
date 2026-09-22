/**
 * TEMPLATE — not a published page.
 *
 * The leading underscore keeps Docusaurus from building this as a route, so it
 * ships in the repo without appearing on the site. To add a cause: copy this
 * file to `src/pages/cars/causas/<slug>.tsx`, drop the underscore, fill in the
 * `meta` block below, write the body, and link it from `causas/index.tsx`.
 *
 * Every cause carries different content — some are a single page of links,
 * others a dossier with maps and press coverage. Only the `meta` block is
 * fixed; below it, use whatever primitives the cause actually needs (see
 * `src/components/Cars` and the data centers pages under
 * `src/pages/iniciativas-colectivas/` for worked examples).
 */
import type {ReactNode} from 'react';
import {
  CarsLayout,
  Section,
  CauseMeta,
  ResourceSection,
  ResourceLink,
} from '@site/src/components/Cars';

/**
 * The fixed descriptive header every cause shares. Keep these field names as
 * they are — they're the common schema across causes, even though each cause's
 * body is free-form.
 *
 * - `estado`: 'activa' | 'en pausa' | 'cerrada'
 * - `organizacion_lider`: who leads it. CARS accompanies; it does not lead.
 *   Use 'Pendiente' if the organization hasn't agreed to appear publicly.
 * - `contacto_publico`: a public channel only — never a personal phone number,
 *   a private group invite, or an individual's name.
 * - `como_ayudar`: concrete asks, not "sumate".
 * - `ultima_actualizacion`: 'YYYY-MM-DD'. Update it whenever the page changes.
 * - `etiquetas`: short topic tags, lowercase.
 */
const meta = {
  title: 'Nombre de la causa',
  estado: 'activa' as const,
  organizacion_lider: 'Pendiente',
  contacto_publico: 'Pendiente',
  como_ayudar: ['Pendiente: qué necesita la causa en concreto.'],
  ultima_actualizacion: 'AAAA-MM-DD',
  etiquetas: ['pendiente'],
};

export default function PlantillaCausa(): ReactNode {
  return (
    <CarsLayout
      title={meta.title}
      description="Una línea para buscadores y para la vista previa al compartir el enlace."
      tagline="Un párrafo corto: de qué se trata la causa y por qué importa."
      backTo={{to: '/cars/causas/', label: 'Causas activas'}}>
      <CauseMeta
        estado={meta.estado}
        organizacionLider={meta.organizacion_lider}
        contactoPublico={meta.contacto_publico}
        comoAyudar={meta.como_ayudar}
        ultimaActualizacion={meta.ultima_actualizacion}
        etiquetas={meta.etiquetas}
      />

      <Section title="Qué está pasando">
        <p>El contexto de la causa, en lenguaje directo y verificable.</p>
      </Section>

      <Section title="Qué se está haciendo">
        <p>Quiénes se están organizando y qué acciones hay en curso.</p>
      </Section>

      <ResourceSection title="Enlaces">
        <ResourceLink href="#" label="Enlace pendiente" placeholder />
      </ResourceSection>
    </CarsLayout>
  );
}
