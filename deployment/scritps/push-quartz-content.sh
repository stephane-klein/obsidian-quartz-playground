#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

rsync -vrz ../public/ root@triton:/var/lib/notes.sklein.xyz/
