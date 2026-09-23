import type PocketBase from 'pocketbase';
import DEMO from '@site/src/data/padron-demo.json';

export interface Persona {
  id: string;
  nombre: string;
  telefono: string;
  distrito: string;
  /** PocketBase datetime, e.g. "2025-03-14 12:00:00.000Z", or "". */
  fecha_ingreso: string;
}

export type DatosPersona = Omit<Persona, 'id'>;

export interface PadronStore {
  listar(): Promise<Persona[]>;
  crear(datos: DatosPersona): Promise<void>;
  actualizar(id: string, datos: DatosPersona): Promise<void>;
  eliminar(id: string): Promise<void>;
}

export function pocketBaseStore(pb: PocketBase): PadronStore {
  const col = pb.collection('personas');
  return {
    listar: () => col.getFullList<Persona>({sort: 'nombre'}),
    crear: async (datos) => void (await col.create(datos)),
    actualizar: async (id, datos) => void (await col.update(id, datos)),
    eliminar: async (id) => void (await col.delete(id)),
  };
}

const CLAVE = 'padron-demo-v1';

export function datosDemo(): Persona[] {
  return DEMO.map((p, i) => ({id: `demo-${i + 1}`, ...p}));
}

/**
 * Demo mode, used when no backend is configured: data lives only in this
 * browser's localStorage. Falls back to memory if storage is unavailable.
 */
export function localStore(): PadronStore & {restablecer(): void} {
  let memoria: Persona[] | null = null;

  const leer = (): Persona[] => {
    try {
      const guardado = window.localStorage.getItem(CLAVE);
      if (guardado) return JSON.parse(guardado);
    } catch {
      // private mode or corrupted value: use memory/demo data
    }
    return memoria ?? datosDemo();
  };
  const escribir = (personas: Persona[]) => {
    memoria = personas;
    try {
      window.localStorage.setItem(CLAVE, JSON.stringify(personas));
    } catch {
      // keep working in memory
    }
  };

  return {
    listar: async () =>
      [...leer()].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es')),
    crear: async (datos) => escribir([...leer(), {id: crypto.randomUUID(), ...datos}]),
    actualizar: async (id, datos) =>
      escribir(leer().map((p) => (p.id === id ? {id, ...datos} : p))),
    eliminar: async (id) => escribir(leer().filter((p) => p.id !== id)),
    restablecer: () => {
      memoria = null;
      try {
        window.localStorage.removeItem(CLAVE);
      } catch {
        // nothing stored
      }
    },
  };
}
