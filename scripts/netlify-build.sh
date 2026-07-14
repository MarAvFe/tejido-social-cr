#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REAL_APP="$REPO_ROOT/tejido-social-web"
DEMO_APP="$REPO_ROOT/tejido-social-web-demo"

echo "==> Building real app (Frente Amplio)"
cd "$REAL_APP"
npm ci || npm install
npm run build

echo "==> Building demo app (served at /demo/)"
cd "$DEMO_APP"
npm ci || npm install
npm run build

echo "==> Merging demo build into real build at /demo/"
rm -rf "$REAL_APP/build/demo"
mkdir -p "$REAL_APP/build/demo"
cp -R "$DEMO_APP/build/." "$REAL_APP/build/demo/"

echo "==> Done. Publish dir: $REAL_APP/build"
