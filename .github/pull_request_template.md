## Descripción

¿Qué cambios hace este PR?

**Tipo de cambio:**
- [ ] 📝 Contenido nuevo (tutorial, guía, explicación, recurso)
- [ ] ✏️ Corrección de contenido existente
- [ ] 🔧 Mejora técnica (código, configuración, estructura)
- [ ] 📚 Mejora de documentación técnica
- [ ] 🔗 Actualización de enlaces o referencias

---

## Checklist de Calidad

### Contenido
- [ ] Sigue el **framework Diataxis** (Tutorial/Guía/Referencia/Explicación)
- [ ] Contenido en **español** con **ustedeo** (formal address "usted", "su")
- [ ] Ejemplo correcto: "Lea esto" no "Lee esto"
- [ ] Todos los enlaces son **relativos** y válidos (`../path/to/file.md`)
- [ ] Sin enlaces rotos a imágenes o archivos
- [ ] Sin errores ortográficos ni gramaticales
- [ ] Alineado con los **Principios** de Tejido Social (dignidad, no-violencia, horizontalidad, inclusión)
- [ ] Causa-neutral (aplicable a cualquier movimiento)

### Técnico
- [ ] Código compila sin errores (`npm build`)
- [ ] Sin warnings en la compilación
- [ ] Cambios en `sidebars.ts` si se agregó/movió contenido
- [ ] Cambios en `docusaurus.config.ts` si se modificó metadata
- [ ] TypeScript types actualizados (si aplica)

### Documentación
- [ ] **CHANGELOG.md** actualizado con los cambios bajo "Unreleased"
- [ ] **PROJECT.md** actualizado si hay cambios arquitectónicos
- [ ] Links en `intro.md` actualizados (si aplica)
- [ ] Cross-references correctas a otros documentos

### Antes de Merging
- [ ] Revisor ha verificado exactitud de contenido
- [ ] Revisor ha confirmado alineación con Tejido Social
- [ ] Sin conflictos de merge
- [ ] Rama actualizada con main

---

## Detalles del Cambio

### Archivos Modificados/Creados
- `docs/[path]/[file].md` - [Descripción breve]
- `[otros archivos...]`

### Cambios en CHANGELOG.md
```markdown
### Added
- [Descripción del contenido nuevo]

### Changed
- [Cambios a contenido existente]

### Fixed
- [Correcciones realizadas]
```

### Conexiones con Contenido Existente
¿Qué documentos se relacionan con esto?
- Enlace a `docs/[related]/[file].md`
- Enlace a `docs/[related]/[file].md`

---

## Notas para Revisores

¿Hay algo especial que los revisores deben saber?

- Contexto de por qué se hizo
- Decisiones de diseño explicadas
- Feedback específico que busca

---

## Tipo de PR

- [ ] Contenido nuevo
- [ ] Corrección de contenido
- [ ] Mejora técnica
- [ ] Mantenimiento

---

## Quién debería revisar esto?

@maravfe

---

## Descripción Antes/Después (si aplica)

### Antes
```markdown
[Contenido anterior]
```

### Después
```markdown
[Contenido nuevo]
```

---

## Referencias

- Cierra issue: #[número]
- Relacionado a: #[número]
- Depende de: #[número]

---

## Checklist Final

- [ ] He leído `CONTRIBUTE.md`
- [ ] He actualizado `CHANGELOG.md`
- [ ] He probado localmente (`npm start`, `npm build`)
- [ ] He verificado que ustedeo es consistente
- [ ] He verificado que todos los enlaces funcionan
- [ ] Este PR está listo para revisión