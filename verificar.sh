#!/bin/sh
# Verifica que ningún archivo del sitio haya sido modificado.
cd "$(dirname "$0")"
if command -v sha256sum >/dev/null 2>&1; then sha256sum -c MANIFIESTO.sha256
else shasum -a 256 -c MANIFIESTO.sha256; fi
