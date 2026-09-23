// Loads 30 fake people into `personas` for the demo.
// Usage: PB_URL=http://127.0.0.1:8090 PB_SUPERUSER_EMAIL=... PB_SUPERUSER_PASSWORD=... node seed-demo.mjs

const {PB_URL = 'http://127.0.0.1:8090', PB_SUPERUSER_EMAIL, PB_SUPERUSER_PASSWORD} = process.env;
if (!PB_SUPERUSER_EMAIL || !PB_SUPERUSER_PASSWORD) {
  console.error('Set PB_SUPERUSER_EMAIL and PB_SUPERUSER_PASSWORD.');
  process.exit(1);
}

const NOMBRES = ['Ana', 'Luis', 'María', 'José', 'Carmen', 'Diego', 'Lucía', 'Andrés', 'Sofía', 'Pablo'];
const APELLIDOS = ['Rojas', 'Mora', 'Jiménez', 'Vargas', 'Solís', 'Castro', 'Araya', 'Quesada', 'Chaves', 'Brenes'];
const DISTRITOS = ['San Pedro', 'Mercedes', 'San Rafael', 'Sabanilla', 'Mata de Plátano', 'El Alto'];

async function api(path, {token, ...init} = {}) {
  const res = await fetch(`${PB_URL}${path}`, {
    ...init,
    headers: {'Content-Type': 'application/json', ...(token ? {Authorization: token} : {})},
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`${init.method ?? 'GET'} ${path} → ${res.status}: ${JSON.stringify(body)}`);
  return body;
}

const {token} = await api('/api/collections/_superusers/auth-with-password', {
  method: 'POST',
  body: JSON.stringify({identity: PB_SUPERUSER_EMAIL, password: PB_SUPERUSER_PASSWORD}),
});

// Never mix demo rows into a table that already holds data.
const {totalItems} = await api('/api/collections/personas/records?perPage=1', {token});
if (totalItems > 0) {
  console.error(`personas already has ${totalItems} records; refusing to add demo data.`);
  process.exit(1);
}

for (let i = 0; i < 30; i++) {
  const vuelta = Math.floor(i / 10);
  const nombre = `${NOMBRES[i % 10]} ${APELLIDOS[(i * 3 + vuelta) % 10]} ${APELLIDOS[(i * 7 + 1 + vuelta * 3) % 10]}`;
  const mes = String((i % 12) + 1).padStart(2, '0');
  const dia = String((i % 27) + 1).padStart(2, '0');
  await api('/api/collections/personas/records', {
    token,
    method: 'POST',
    body: JSON.stringify({
      nombre,
      // 0000-00NN can't be a real Costa Rican number.
      telefono: `0000-00${String(i + 1).padStart(2, '0')}`,
      distrito: DISTRITOS[i % DISTRITOS.length],
      fecha_ingreso: `${2024 + (i % 3)}-${mes}-${dia} 12:00:00.000Z`,
    }),
  });
}
console.log('Added 30 demo records.');
