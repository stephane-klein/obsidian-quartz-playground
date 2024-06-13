#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

cd ../content/

git add -A .
git commit -a -m "Update content"
git push
