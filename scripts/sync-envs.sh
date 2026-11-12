#!/usr/bin/env bash
# Signed sync + API smoke on every backend env listed in the variable named by $1.
#   scripts/sync-envs.sh DOCS_SYNC_ENVS_STG      (with DOCS_SYNC_BRANCH + DOCS_SYNC_COMMIT: commit-pinned)
#   scripts/sync-envs.sh DOCS_SYNC_ENVS_RELEASE  (with DOCS_SYNC_TAG: pinned to the release tag)
# For each env <e> in that list: DOCS_API_BASE_<E> (var) and DOCS_WEBHOOK_SECRET_<E> (secret) must be set.
# An unset/empty list is a notice, not a failure: the ref is mirrored, no backend follows it yet.
set -euo pipefail

envs_var="${1:?usage: sync-envs.sh <DOCS_SYNC_ENVS_* variable name>}"
if [ -z "${!envs_var:-}" ]; then
  echo "::notice::${envs_var} is not set: mirrored only, no backend follows it yet"
  exit 0
fi
for env in ${!envs_var}; do
  key=$(echo "$env" | tr '[:lower:]' '[:upper:]')
  base_var="DOCS_API_BASE_${key}"
  secret_var="DOCS_WEBHOOK_SECRET_${key}"
  if [ -z "${!base_var:-}" ] || [ -z "${!secret_var:-}" ]; then
    echo "env '${env}' is in ${envs_var} but var ${base_var} and/or secret ${secret_var} is missing" >&2
    exit 1
  fi
  echo "── ${env}"
  DOCS_API_BASE="${!base_var}" DOCS_WEBHOOK_SECRET="${!secret_var}" node "$(dirname "$0")/trigger-sync.mjs"
done
