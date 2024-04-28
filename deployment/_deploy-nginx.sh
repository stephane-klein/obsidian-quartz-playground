#!/usr/bin/env bash
set -e

cd $(dirname "$0")

mkdir -p /srv/notes.sklein.xyz/

cat <<EOF > /srv/notes.sklein.xyz/docker-compose.yml
services:
  nginx:
    image: nginx:stable-alpine-slim
    environment:
      VIRTUAL_HOST: "notes.sklein.xyz"
      LETSENCRYPT_HOST: "notes.sklein.xyz"
    restart: unless-stopped
    volumes:
      - /var/lib/notes.sklein.xyz/:/usr/share/nginx/html/
EOF

cd /srv/notes.sklein.xyz/
docker-compose pull
docker-compose up -d
