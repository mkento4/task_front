#!/bin/sh
set -e

chown node:node /app/.nuxt

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"
