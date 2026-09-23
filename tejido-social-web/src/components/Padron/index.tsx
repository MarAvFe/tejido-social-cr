import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PocketBase, {ClientResponseError} from 'pocketbase';
import {DISTRITOS, cantonDe} from '@site/src/config/padron';
import {localStore, pocketBaseStore, type PadronStore, type Persona} from './store';
import styles from './styles.module.css';

type Borrador = Omit<Persona, 'id'> & {id?: string};

const VACIO: Borrador = {nombre: '', telefono: '', distrito: '', fecha_ingreso: ''};
const CANTONES = [...new Set(DISTRITOS.map((d) => d.canton))];

const normalizar = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const soloFecha = (pbDate: string) => pbDate.slice(0, 10);

function formatoFecha(pbDate: string): string {
  if (!pbDate) return '—';
  const [y, m, d] = soloFecha(pbDate).split('-');
  return `${d}/${m}/${y}`;
}

function mensajeDeError(err: unknown): string {
  if (err instanceof ClientResponseError) {
    if (err.status === 429) return 'Demasiados intentos. Esperá unos segundos y volvé a probar.';
    if (err.status === 0) return 'No se pudo conectar con el servidor del padrón.';
    const campos = Object.entries(err.response?.data ?? {}).map(
      ([campo, detalle]) => `${campo}: ${(detalle as {message?: string}).message ?? 'inválido'}`,
    );
    if (campos.length) return `Revisá los datos (${campos.join('; ')}).`;
  }
  return 'Algo salió mal. Volvé a intentarlo.';
}

export default function Padron({apiUrl}: {apiUrl: string}): React.ReactElement {
  return apiUrl ? <PadronPocketBase apiUrl={apiUrl} /> : <PadronDemo />;
}

function PadronPocketBase({apiUrl}: {apiUrl: string}): React.ReactElement {
  const pb = useMemo(() => new PocketBase(apiUrl), [apiUrl]);
  const store = useMemo(() => pocketBaseStore(pb), [pb]);
  const [autenticado, setAutenticado] = useState(pb.authStore.isValid);

  useEffect(() => pb.authStore.onChange(() => setAutenticado(pb.authStore.isValid)), [pb]);

  if (!autenticado) return <Ingreso pb={pb} />;
  return (
    <Tabla
      store={store}
      alExpirarSesion={() => pb.authStore.clear()}
      encabezado={
        <div className={styles.session}>
          <span>Sesión: {pb.authStore.record?.email}</span>
          <button type="button" className="button button--link button--sm"
            onClick={() => pb.authStore.clear()}>
            Cerrar sesión
          </button>
        </div>
      }
    />
  );
}

function PadronDemo(): React.ReactElement {
  const store = useMemo(() => localStore(), []);
  const [version, setVersion] = useState(0);

  function restablecer() {
    if (!window.confirm('¿Descartar tus cambios y volver a los 30 registros de demostración?')) return;
    store.restablecer();
    setVersion((v) => v + 1);
  }

  return (
    <Tabla
      key={version}
      store={store}
      encabezado={
        <div className="alert alert--info margin-bottom--md">
          <strong>Modo demostración.</strong> Todas las personas son ficticias. Los cambios se
          guardan solo en este navegador: nadie más los ve y se pierden si borrás los datos del
          sitio. No ingresés datos reales.{' '}
          <button type="button" className="button button--link button--sm" onClick={restablecer}>
            Restablecer demo
          </button>
        </div>
      }
    />
  );
}

function Ingreso({pb}: {pb: PocketBase}): React.ReactElement {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);

  async function ingresar(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setError('');
    try {
      await pb.collection('users').authWithPassword(correo, clave);
    } catch (err) {
      setError(
        err instanceof ClientResponseError && err.status === 400
          ? 'Correo o contraseña incorrectos.'
          : mensajeDeError(err),
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form className={styles.card} onSubmit={ingresar}>
      <h2 className={styles.cardTitle}>Ingresar</h2>
      <label className={styles.field}>
        Correo
        <input type="email" autoComplete="username" required value={correo}
          onChange={(e) => setCorreo(e.target.value)} />
      </label>
      <label className={styles.field}>
        Contraseña
        <input type="password" autoComplete="current-password" required value={clave}
          onChange={(e) => setClave(e.target.value)} />
      </label>
      {error && <div className="alert alert--danger margin-bottom--sm">{error}</div>}
      <button type="submit" className="button button--primary" disabled={enviando}>
        {enviando ? 'Ingresando…' : 'Ingresar'}
      </button>
    </form>
  );
}

function Tabla({store, encabezado, alExpirarSesion}: {
  store: PadronStore;
  encabezado: React.ReactNode;
  alExpirarSesion?: () => void;
}): React.ReactElement {
  const [personas, setPersonas] = useState<Persona[] | null>(null);
  const [busqueda, setBusqueda] = useState('');
  const [distrito, setDistrito] = useState('');
  const [borrador, setBorrador] = useState<Borrador | null>(null);
  const [error, setError] = useState('');

  const manejarError = useCallback(
    (err: unknown) => {
      if (err instanceof ClientResponseError && (err.status === 401 || err.status === 403)) {
        alExpirarSesion?.();
        return;
      }
      setError(mensajeDeError(err));
    },
    [alExpirarSesion],
  );

  const cargar = useCallback(async () => {
    try {
      setPersonas(await store.listar());
    } catch (err) {
      manejarError(err);
    }
  }, [store, manejarError]);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const visibles = useMemo(() => {
    const q = normalizar(busqueda.trim());
    return (personas ?? []).filter(
      (p) =>
        (!distrito || p.distrito === distrito) &&
        (!q || normalizar(p.nombre).includes(q) || p.telefono.includes(q)),
    );
  }, [personas, busqueda, distrito]);

  async function guardar(b: Borrador) {
    setError('');
    const {id, ...datos} = b;
    const cuerpo = {
      ...datos,
      nombre: datos.nombre.trim(),
      telefono: datos.telefono.trim(),
      fecha_ingreso: datos.fecha_ingreso ? `${soloFecha(datos.fecha_ingreso)} 12:00:00.000Z` : '',
    };
    try {
      if (id) await store.actualizar(id, cuerpo);
      else await store.crear(cuerpo);
      setBorrador(null);
      await cargar();
    } catch (err) {
      manejarError(err);
    }
  }

  async function eliminar(p: Persona) {
    if (!window.confirm(`¿Eliminar a ${p.nombre} del padrón? Esto no se puede deshacer.`)) return;
    setError('');
    try {
      await store.eliminar(p.id);
      await cargar();
    } catch (err) {
      manejarError(err);
    }
  }

  return (
    <>
      {encabezado}

      <div className={styles.toolbar}>
        <input type="search" className={styles.search} placeholder="Buscar por nombre o teléfono"
          aria-label="Buscar" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        <select aria-label="Filtrar por distrito" value={distrito}
          onChange={(e) => setDistrito(e.target.value)}>
          <option value="">Todos los distritos</option>
          {DISTRITOS.map((d) => (
            <option key={d.nombre} value={d.nombre}>{d.nombre}</option>
          ))}
        </select>
        <button type="button" className="button button--primary"
          onClick={() => setBorrador({...VACIO})}>
          Agregar persona
        </button>
      </div>

      {error && <div className="alert alert--danger margin-bottom--md">{error}</div>}

      {borrador && (
        <Formulario inicial={borrador} onGuardar={guardar} onCancelar={() => setBorrador(null)} />
      )}

      {personas === null ? (
        <p>Cargando…</p>
      ) : (
        <>
          <p className={styles.count}>
            {visibles.length === personas.length
              ? `${personas.length} personas`
              : `${visibles.length} de ${personas.length} personas`}
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>Distrito</th>
                  <th>Cantón</th>
                  <th>Ingreso</th>
                  <th aria-label="Acciones" />
                </tr>
              </thead>
              <tbody>
                {visibles.map((p) => (
                  <tr key={p.id}>
                    <td>{p.nombre}</td>
                    <td><a href={`tel:${p.telefono.replace(/[^0-9+]/g, '')}`}>{p.telefono}</a></td>
                    <td>{p.distrito}</td>
                    <td>{cantonDe(p.distrito)}</td>
                    <td>{formatoFecha(p.fecha_ingreso)}</td>
                    <td className={styles.actions}>
                      <button type="button" className="button button--secondary button--sm"
                        onClick={() => setBorrador({...p, fecha_ingreso: soloFecha(p.fecha_ingreso)})}>
                        Editar
                      </button>
                      <button type="button" className="button button--danger button--outline button--sm"
                        onClick={() => eliminar(p)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
                {visibles.length === 0 && (
                  <tr>
                    <td colSpan={6}>Nadie coincide con la búsqueda.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

function Formulario({inicial, onGuardar, onCancelar}: {
  inicial: Borrador;
  onGuardar: (b: Borrador) => Promise<void>;
  onCancelar: () => void;
}): React.ReactElement {
  const [b, setB] = useState(inicial);
  const [guardando, setGuardando] = useState(false);
  const set = (campo: keyof Borrador) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setB({...b, [campo]: e.target.value});

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setGuardando(true);
    await onGuardar(b);
    setGuardando(false);
  }

  return (
    <form className={styles.card} onSubmit={enviar}>
      <h2 className={styles.cardTitle}>{b.id ? 'Editar persona' : 'Agregar persona'}</h2>
      <div className={styles.grid}>
        <label className={styles.field}>
          Nombre
          <input required maxLength={120} value={b.nombre} onChange={set('nombre')} autoFocus />
        </label>
        <label className={styles.field}>
          Teléfono
          <input type="tel" required pattern="[0-9+ \(\)\-]{8,20}" title="Al menos 8 dígitos"
            placeholder="8888-8888" value={b.telefono} onChange={set('telefono')} />
        </label>
        <label className={styles.field}>
          Distrito
          <select required value={b.distrito} onChange={set('distrito')}>
            <option value="" disabled>Elegí un distrito</option>
            {CANTONES.map((c) => (
              <optgroup key={c} label={c}>
                {DISTRITOS.filter((d) => d.canton === c).map((d) => (
                  <option key={d.nombre} value={d.nombre}>{d.nombre}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          Fecha de ingreso
          <input type="date" value={b.fecha_ingreso} onChange={set('fecha_ingreso')} />
        </label>
      </div>
      <div className={styles.formActions}>
        <button type="submit" className="button button--primary" disabled={guardando}>
          {guardando ? 'Guardando…' : 'Guardar'}
        </button>
        <button type="button" className="button button--secondary" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
