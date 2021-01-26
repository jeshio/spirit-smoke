#!/bin/sh

echo "waiting for database ($PG_HOSTNAME:$PG_PORT) starting"

# waiting for database
while ! nc -z $PG_HOSTNAME 5432; do sleep 1; done;

if [ "$NODE_ENV" = "production" ] ; then
  yarn run start
else
  yarn run start:dev
fi

exit 0
