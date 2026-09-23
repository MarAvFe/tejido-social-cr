/// <reference path="../pb_data/types.d.ts" />

// Keep DISTRITOS in sync with tejido-social-web/src/config/padron.ts.
const DISTRITOS = ['San Pedro', 'Mercedes', 'San Rafael', 'Sabanilla', 'Mata de Plátano', 'El Alto'];

const EDITORS_ONLY = '@request.auth.collectionName = "users"';

migrate(
  (app) => {
    // Editor accounts are created by a superuser only; the default `users`
    // collection otherwise allows public sign-up.
    const users = app.findCollectionByNameOrId('users');
    users.createRule = null;
    users.deleteRule = null;
    app.save(users);

    const personas = new Collection({
      type: 'base',
      name: 'personas',
      listRule: EDITORS_ONLY,
      viewRule: EDITORS_ONLY,
      createRule: EDITORS_ONLY,
      updateRule: EDITORS_ONLY,
      deleteRule: EDITORS_ONLY,
      fields: [
        {name: 'nombre', type: 'text', required: true, max: 120},
        {name: 'telefono', type: 'text', required: true, max: 20, pattern: '^[0-9+ ()-]{8,20}$'},
        {name: 'distrito', type: 'select', required: true, maxSelect: 1, values: DISTRITOS},
        {name: 'fecha_ingreso', type: 'date'},
        {name: 'created', type: 'autodate', onCreate: true},
        {name: 'updated', type: 'autodate', onCreate: true, onUpdate: true},
      ],
      indexes: ['CREATE INDEX idx_personas_nombre ON personas (nombre)'],
    });
    app.save(personas);

    const settings = app.settings();
    settings.rateLimits.enabled = true;
    app.save(settings);
  },
  (app) => {
    app.delete(app.findCollectionByNameOrId('personas'));

    const users = app.findCollectionByNameOrId('users');
    users.createRule = '';
    users.deleteRule = 'id = @request.auth.id';
    app.save(users);
  },
);
