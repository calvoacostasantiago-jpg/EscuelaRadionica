#!/bin/bash
# Script para aplicar el fix directamente a la rama main
# Run this script to apply the fix to the main branch

echo "🔧 Aplicando fix a la rama main..."

# Checkout main branch
git checkout main || git checkout -b main origin/main

# Apply the fix to vite.config.ts
echo "📝 Corrigiendo vite.config.ts..."
sed -i "s|base: '/landingpageescuela/'|base: '/ladingpageescuela/'|g" vite.config.ts

# Add React dependencies to package.json
echo "📝 Agregando dependencias de React..."
# This is a simple approach - for production you might want to use jq or npm
if ! grep -q '"react": "18.3.1"' package.json; then
    sed -i '/"dependencies": {/a\    "react": "18.3.1",\n    "react-dom": "18.3.1",' package.json
fi

# Install dependencies
echo "📦 Instalando dependencias..."
npm install

# Build the project
echo "🔨 Construyendo el proyecto..."
npm run build

# Verify the fix
echo "✅ Verificando el fix..."
if grep -q '/ladingpageescuela/assets/' dist/index.html; then
    echo "✅ ¡Fix aplicado correctamente!"
    echo ""
    echo "Ahora ejecuta:"
    echo "  git add ."
    echo "  git commit -m 'Fix base URL para GitHub Pages'"
    echo "  git push origin main"
else
    echo "❌ Error: El fix no se aplicó correctamente"
    exit 1
fi
