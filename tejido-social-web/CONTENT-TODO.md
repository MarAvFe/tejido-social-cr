# CONTENT-TODO.md — Árbol de contenido para "Aprende sobre el FA"

Backlog de artículos organizado según [Diátaxis](https://diataxis.fr): Tutoriales, Guías Prácticas, Explicación y Referencia. Cada entrada indica carpeta/archivo, una línea de descripción, la fuente (si aplica) y si es contenido nuevo (NUEVO), reutilizado de un stub existente (REUSE) o un renombre/reemplazo conceptual de contenido heredado del demo (RENOMBRAR).

> **Privacidad:** las fuentes (`unstructured_knowledge.md`, `raw data/directrices-capb.md`, `raw data/minuta-12jul26.md`) contienen nombres reales de personas privadas. Ningún nombre real debe aparecer en los artículos generados a partir de este TODO — usar solo roles/estructuras genéricas (p. ej. "Coordinación", "representante del TEFA"). Datos de titulares actuales, si hacen falta, van únicamente en una página de instancia distrital (ver sección de arquitectura al final), nunca en contenido genérico.

Fuentes: `U` = `unstructured_knowledge.md`, `D` = `raw data/directrices-capb.md`, `M` = `raw data/minuta-12jul26.md`.
Prioridad: **Alta** = referencia que rige la existencia/funcionamiento del comité o desbloquea trabajo inmediato · **Media** = explicación/how-to de apoyo · **Baja** = enriquecimiento futuro o pendiente de decisión.

```
docs/
│
├── intro.md                                          [REUSE · Alta] [x] HECHO
│   Punto de entrada del sitio: qué es, para quién, cómo navegar. — (sin fuente específica)
│
├── principios.md                                     [REUSE · Alta] [x] HECHO
│   Los 5 principios del distrito: participación activa, solidaridad y confianza,
│   transparencia y diálogo, inclusión y equidad, cuidado de la vida y el territorio. — U
│
├── tutorials/                                         « TUTORIALES — aprender haciendo »
│   └── unirse-a-un-organismo.md                       [REUSE · Alta] [x] HECHO
│       Primer lección guiada: de afiliado a solicitar inclusión en el padrón del comité. — D, U
│       (primera-accion-digital.md y primera-protesta.md ELIMINADOS: eran stubs sin
│       contenido y sin respaldo en las fuentes — las ideas se conservan en el demo.)
│
├── guias/                                              « GUÍAS PRÁCTICAS — cómo lograr una tarea »
│   ├── conformar-comite-distrital.md                  [NUEVO · Alta] [x] HECHO
│   │   Proceso completo para constituir un comité: ≥3 afiliados, solicitud formal al CEC,
│   │   asamblea fundacional, fiscalización del TEFA, reporte de resultados. — D
│   ├── organizar-asamblea-constitutiva.md             [NUEVO · Alta] [x] HECHO
│   │   Plantilla de facilitación con la metodología de 7 pasos: bienvenida → lectura de
│   │   la realidad → visión compartida → priorización → organización → compromisos → cierre. — M
│   ├── disenar-encuesta-plan-accion.md                [NUEVO · Media] [x] HECHO
│   │   Cómo diseñar la encuesta previa a la asamblea (interés, coordinación, experiencia,
│   │   solicitudes de información) y leer resultados como base organizativa, no muestra. — M
│   ├── ampliar-alcance-encuesta.md                     [NUEVO · Media] [x] HECHO
│   │   Cómo pasar de pocas respuestas a cobertura real del distrito (canales, barrios,
│   │   cadencia de difusión). — U, M
│   ├── convocar-reunion-bimestral.md                  [NUEVO · Media] [x] HECHO — breve, falta info oficial de formato
│   │   Para Presidencia: convocar la reunión mínima bimestral. Para Secretaría: llevar
│   │   minutas y registro de comunicaciones. — D
│   (como-hablar-con-medios.md, manejo-redes-sociales.md, derechos-legales.md,
│    seguridad-en-protestas.md, prevencion-agotamiento.md, como-organizar-protesta.md
│    ELIMINADOS: stubs sin contenido, sin respaldo en las fuentes. Ideas conservadas en el demo.)
│
├── explicacion/                                        « EXPLICACIÓN — entender el porqué »
│   ├── por-que-comites-de-base.md                     [NUEVO · Alta] [x] HECHO
│   │   Por qué existen los comités distritales ahora: crecimiento del partido, llamado
│   │   del TEFA, vacío tras eliminación de asambleas distritales, Art. 31 del Estatuto. — D
│   ├── por-que-descentralizar.md                       [REUSE · Media] [x] HECHO
│   │   Repropósito: razón de ser de la organización territorial y su vínculo con lo
│   │   cantonal/provincial/nacional. — D, U
│   ├── como-se-priorizan-necesidades.md                [NUEVO · Media] [x] HECHO — breve, falta metodología nacional oficial
│   │   Cómo se identifican y priorizan necesidades comunitarias: impacto, urgencia,
│   │   viabilidad, capacidad de involucrar a más personas. — M
│   ├── vision-compartida-distrito.md                   [NUEVO · Baja] [x] HECHO — breve, falta texto exacto de la visión de Sabanilla
│   │   Qué significa la "visión compartida a 4 años" y por qué ancla el trabajo del comité. — U, M
│   ├── fundamentalismo-religioso-control-politico.md   [NUEVO · Baja] [x] PLACEHOLDER
│   │   Placeholder del taller pendiente sobre fundamentalismo religioso y control político. — U
│   └── vision-ambiental-fa.md                          [NUEVO · Baja] [x] PLACEHOLDER — taller pendiente de realizar
│       Placeholder del taller pendiente sobre visión ambiental del FA. — U, M
│       (por-que-principios-escritos.md, modelos-de-referencia.md, historia-tejido-social.md,
│        economia-solidaria.md ELIMINADOS: stubs sin contenido, sin respaldo en las fuentes.)
│
├── organismos/                                         « REFERENCIA — estructura orgánica »
│   ├── index.md                                        [REUSE · Media] [x] HECHO
│   │   Mapa orgánico del distrito: Asamblea → Mesa de Coordinación → 6 comisiones. — U
│   ├── directrices-capb.md                             [NUEVO · Alta] [x] HECHO
│   │   Resumen fiel de la directriz oficial (oficio FA-SG-018-2026 / FA-SG-021-2026):
│   │   base legal, mínimo de afiliados, objetivos, cargos, deberes, fiscalización TEFA. — D
│   ├── estructura-distrital.md                         [NUEVO · Alta] [x] HECHO
│   │   Asamblea Distrital y Mesa de Coordinación Distrital como órganos; roles abstractos
│   │   (Coordinación, Subcoordinación, Vocalía y suplencias), términos de 2 años, ad-honorem. — U, M
│   ├── roles-y-responsabilidades.md                    [NUEVO · Alta] [x] HECHO
│   │   Tabla de deberes por rol, incluyendo funciones específicas de Presidencia y
│   │   Secretaría según la directriz. — U, D
│   ├── comisiones-tematicas.md                         [NUEVO · Alta] [x] HECHO
│   │   Índice de las 6 comisiones temáticas del distrito. — U
│   ├── ambientes-espacios-publicos.md                  [RENOMBRAR · Media] [x] HECHO
│   │   Mandato de la comisión de ambientes saludables y espacios públicos. — U, M
│   ├── participacion-organizacion.md                   [RENOMBRAR · Media] [x] HECHO
│   │   Mandato de la comisión de participación y organización comunitaria. — U
│   ├── cultura-deporte-recreacion.md                   [RENOMBRAR · Media] [x] HECHO
│   │   Mandato de la comisión de cultura, deporte y recreación. — U
│   ├── movilidad-ciudad.md                             [RENOMBRAR · Media] [x] HECHO
│   │   Mandato de la comisión de movilidad y derecho a la ciudad. — U
│   ├── cuidados-inclusion.md                           [RENOMBRAR · Media] [x] HECHO
│   │   Mandato de la comisión de cuidados e inclusión. — U
│   └── educacion-formacion-empleo.md                   [RENOMBRAR · Media] [x] HECHO
│       Mandato de la comisión de educación, formación y empleo. — U
│       (Los 8 stubs heredados del demo —educacion.md, seguridad-cuidado.md,
│       presion-politica.md, medios-comunicacion.md, economia-solidaria.md,
│       accion-callejera.md, bienestar.md, apoyo-legal.md— fueron ELIMINADOS:
│       ninguno mapeaba limpio a las 6 comisiones y estaban vacíos.)
│
├── niveles/                                             « REFERENCIA — niveles de participación » [x] HECHO
│   │   (Reemplazo conceptual completado: participante→afiliado, miembro-activo→integrante-comite,
│   │   coordinador→coordinacion-distrital; observador.md/formador.md eliminados. Se amplió el
│   │   espectro con simpatizante (debajo) y coordinación cantonal/provincial/nacional (arriba),
│   │   estas tres últimas marcadas explícitamente como placeholders sin fuente documentada.)
│   ├── index.md                                        [NUEVO · Media] [x] HECHO — mapa del espectro completo
│   ├── simpatizante.md                                 [NUEVO · Baja] [x] HECHO — apoya sin afiliarse
│   ├── afiliado.md                                     [RENOMBRAR · Media] [x] HECHO
│   │   Afiliado con domicilio electoral en el distrito. — D
│   ├── integrante-comite.md                            [RENOMBRAR · Media] [x] HECHO
│   │   Integrante incluido en el padrón del comité. — D
│   ├── coordinacion-distrital.md                       [RENOMBRAR · Media] [x] HECHO
│   │   Presidencia y Secretaría como cargos electos de coordinación. — D, U
│   ├── coordinacion-cantonal.md                        [NUEVO · Baja] [x] PLACEHOLDER — CEC, sin fuente detallada
│   ├── coordinacion-provincial.md                      [NUEVO · Baja] [x] PLACEHOLDER — CEP, sin fuente detallada
│   └── coordinacion-nacional.md                        [NUEVO · Baja] [x] PLACEHOLDER — CEN/TEFA/Secretaría General, sin fuente detallada
│
└── recursos/                                            « REFERENCIA — consulta rápida »
    ├── glosario.md                                     [REUSE · Alta] [x] HECHO
    │   Siglas y términos: FA, CAPB, CEC, CEP, CEN, TEFA, TSE, Secretaría General, padrón,
    │   asamblea fundacional/constitutiva, bimestre, ad-honorem, domicilio electoral, FAMO. — D, U, M
    ├── preguntas-frecuentes.md                         [REUSE · Media] [x] HECHO
    │   FAQ: mínimo de personas, duración de cargos, remuneración, fiscalización,
    │   registro, frecuencia de reuniones. — D, U
    ├── plantilla-minuta.md                             [NUEVO · Media] [x] HECHO — breve, falta formato oficial confirmado
    │   Plantilla para minutas y registro de comunicaciones que debe llevar la Secretaría. — D
    ├── acuerdo-constitutivo-modelo.md                  [NUEVO · Baja] [x] HECHO — breve, falta texto real de un acuerdo aprobado
    │   Plantilla/placeholder para el texto del acuerdo constitutivo (pendiente). — M
    └── mapa-canton-distritos.md                        [NUEVO · Baja]
        Mapa/índice del cantón Montes de Oca y sus distritos (Sabanilla, San Rafael,
        San Pedro, +1). — U
        (canticos.md, plantillas-pancartas.md ELIMINADOS: stubs sin contenido,
         sin respaldo en las fuentes.)
```

## Placeholders pendientes de decisión

Del acta de la asamblea del 12 de julio de 2026 (`M`, §8), estos temas aún no tienen contenido definitivo y dependen de que el comité los resuelva primero:

- Texto exacto del acuerdo constitutivo → alimentará `recursos/acuerdo-constitutivo-modelo.md`
- Prioridades finales aprobadas → alimentará `explicacion/como-se-priorizan-necesidades.md` y `organismos/comisiones-tematicas.md`
- Conformación definitiva de comisiones → alimentará las 6 páginas de comisión en `organismos/`
- Tareas inmediatas con responsables y plazos → futuro artículo, sin ubicación asignada aún
- Fecha/lugar de la próxima reunión → contenido operativo, probablemente en zona de instancia (ver abajo), no genérico

## Arquitectura de contenido: distrito / cantón / nacional

**Principio:** separar contenido **genérico** (reutilizable por cualquier distrito — roles, procesos, la directriz oficial) de contenido de **instancia** (propio de Sabanilla en un momento dado — quién coordina hoy, qué priorizó su asamblea).

- **Zona genérica** — las carpetas actuales (`organismos/`, `guias/`, `explicacion/`, `recursos/`, `tutorials/`, `principios.md`, `niveles/`) permanecen distrito-agnósticas. Todo lo derivado de `directrices-capb.md`, la metodología de asamblea, el glosario y las 6 comisiones vive aquí, redactado en términos de "el distrito" / "el Comité", nunca "Sabanilla".
- **Zona de instancia** — nueva carpeta `docs/distritos/<slug>/` con un subconjunto por distrito, p. ej. `docs/distritos/sabanilla/{index,mesa-de-coordinacion,prioridades,asambleas}.md`. Un futuro distrito (`san-rafael/`, etc.) replica la misma forma sin tocar la zona genérica. Un índice `docs/distritos/index.md` sirve de mapa cantonal (aquí encaja `mapa-canton-distritos.md`).
- **Nombres de titulares actuales**: solo en `distritos/<slug>/mesa-de-coordinacion.md`, mantenida operativamente por el propio comité — nunca en páginas genéricas.
- **Convención**: páginas de instancia siempre bajo `distritos/<slug>/`, enlazando hacia la referencia genérica (p. ej. la Mesa de Sabanilla enlaza a `organismos/roles-y-responsabilidades.md`) en lugar de repetir contenido.
- **Camino a cantón/nacional**: el índice de `distritos/` se convierte naturalmente en el rollup cantonal (Montes de Oca). Para escala nacional, evaluar más adelante una jerarquía `territorios/<provincia>/<canton>/<distrito>/` — no construir esto todavía; la convención plana `distritos/<slug>/` ya escala bien a nivel cantonal y la decisión nacional se difiere hasta que haya demanda real.
