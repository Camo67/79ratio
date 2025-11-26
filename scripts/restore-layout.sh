#!/usr/bin/env bash

# Restore core layout/styling files from a specified git ref (defaults to origin/main)
# while leaving content pages intact.

set -euo pipefail

REF="${1:-origin/main}"

FILES=(
  "src/App.tsx"
  "src/AppRouter.tsx"
  "src/AppHashRouter.tsx"
  "src/AppFallback.tsx"
  "src/components"
  "src/index.html"
  "src/src/main.tsx"
  "src/styles"
  "src/tailwind.config.js"
  "vite.config.ts"
)

echo "Restoring layout files from ${REF}..."
git checkout "${REF}" -- "${FILES[@]}"
echo "Done. Review changes with 'git status' before committing."
