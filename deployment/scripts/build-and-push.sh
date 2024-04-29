#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

./scripts/build-quartz.sh
./scripts/push-quartz-content.sh
