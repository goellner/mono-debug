#!/bin/bash

# https://vercel.com/docs/concepts/deployments/build-step
# https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel
echo "going to sleep for a minute, to let the backend finish it's deployment"
sleep 1m
echo "ALLOW_BUILD: $ALLOW_BUILD"
if [[ "$ALLOW_BUILD" == "allow" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi