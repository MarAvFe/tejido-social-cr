# padron-backend

PocketBase backend for the site's `/padron` page. The page itself lives in
`tejido-social-web/src/pages/padron.tsx`; this directory only holds the
schema and the demo seed. Netlify can't run it: it needs a host with a
long-running process and a persistent disk (Fly.io with a volume,
PocketHost, a small VPS).

**Access is enforced here, not in the page.** Only accounts in the `users`
collection can list, view, create, edit or delete `personas`. Public sign-up
is disabled by the migration, so accounts can only be created by a
superuser. Login rate limiting is enabled.

## Run locally

Tested with PocketBase v0.40.4.

```sh
./pocketbase serve --dir=./pb_data --migrationsDir=./pb_migrations
./pocketbase superuser upsert you@example.com 'a-long-password' --dir=./pb_data
PB_SUPERUSER_EMAIL=you@example.com PB_SUPERUSER_PASSWORD='a-long-password' node seed-demo.mjs
```

Then set `PADRON_API_URL=http://127.0.0.1:8090` in `tejido-social-web/.env`
and run the site.

## Editor accounts

In the admin UI (`<PADRON_API_URL>/_/`) → `users` → New record: email,
password, `verified` on. To revoke access, delete the record.

## Going live

1. Deploy PocketBase over HTTPS with `pb_migrations/` alongside it.
2. Set `PADRON_API_URL` in Netlify's build environment and redeploy the site.
3. Load real data into a fresh instance, not the demo one. The seed script
   refuses to write into a non-empty table, but demo rows already in a
   table would be mixed with real ones.
4. Turn on scheduled backups (admin UI → Settings → Backups). `pb_data/`
   is the whole database; never commit it.

## Changing the district list

Update both `DISTRITOS` in `pb_migrations/` (as a new migration once the
live instance exists) and `tejido-social-web/src/config/padron.ts`.
