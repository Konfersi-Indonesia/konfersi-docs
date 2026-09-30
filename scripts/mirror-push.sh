#!/usr/bin/env bash
# Push one refspec to the public GitHub mirror over SSH with the repo-scoped deploy key.
#   scripts/mirror-push.sh [--force] <refspec>
# Env: GH_MIRROR_DEPLOY_KEY (private key), DOCS_GITHUB_MIRROR (owner/repo). Used by CI (publish + release).
set -euo pipefail

force=()
if [ "${1:-}" = "--force" ]; then force=(--force); shift; fi
refspec="${1:?usage: mirror-push.sh [--force] <refspec>}"
: "${GH_MIRROR_DEPLOY_KEY:?GH_MIRROR_DEPLOY_KEY is not set}"
: "${DOCS_GITHUB_MIRROR:?DOCS_GITHUB_MIRROR is not set}"

command -v ssh >/dev/null || { (apt-get update -qq && apt-get install -y -qq openssh-client) || apk add --no-cache openssh-client; }
KEYDIR="$(mktemp -d)"
trap 'rm -rf "$KEYDIR"' EXIT
printf '%s\n' "$GH_MIRROR_DEPLOY_KEY" > "$KEYDIR/id"
chmod 600 "$KEYDIR/id"
# Pinned GitHub host key (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints).
echo "github.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl" > "$KEYDIR/known_hosts"
export GIT_SSH_COMMAND="ssh -i $KEYDIR/id -o IdentitiesOnly=yes -o UserKnownHostsFile=$KEYDIR/known_hosts -o StrictHostKeyChecking=yes"
git push ${force[@]+"${force[@]}"} "git@github.com:${DOCS_GITHUB_MIRROR}.git" "$refspec"
echo "mirrored ${refspec} → github.com/${DOCS_GITHUB_MIRROR}"
