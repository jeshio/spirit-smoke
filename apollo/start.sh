#!/bin/sh

# waiting for database
while ! nc -z $PG_HOSTNAME $PG_PORT; do sleep 1; done;

if [ "$NODE_ENV" = "production" ] ; then
  yarn run start
else
  yarn run start:dev
fi