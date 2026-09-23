// Loads the 30 fake people the site's demo mode uses into `personas`.
// Usage: PB_URL=http://127.0.0.1:8090 PB_SUPERUSER_EMAIL=... PB_SUPERUSER_PASSWORD=... node seed-demo.mjs

import {readFileSync} from 'node:fs';

const DEMO = JSON.parse(
  readFileSync(new URL('../tejido-social-web/src/data/padron-demo.json', import.meta.url), 'utf8'),
);

const {PB_URL = 'http://127.0.0.1:8090', PB_SUPERUSER_EMAIL, PB_SUPERUSER_PASSWORD} = process.env;
if (!PB_SUPERUSER_EMAIL || !PB_SUPERUSER_PASSWORD) {
  console.error('Set PB_SUPERUSER_EMAIL and PB_SUPERUSER_PASSWORD.');
  process.exit(1);
}

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

for (const persona of DEMO) {
  await api('/api/collections/personas/records', {token, method: 'POST', body: JSON.stringify(persona)});
}
console.log(`Added ${DEMO.length} demo records.`);
