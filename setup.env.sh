#!/bin/sh
# Подготовка для запуска с помощью CI/CD

ENV_FILE=.env

if [ ! -f "$ENV_FILE" ]; then
  echo PG_USERNAME="$PG_USERNAME" >> "$ENV_FILE"
  echo PG_PASSWORD="$PG_PASSWORD" >> "$ENV_FILE"
  echo PG_HOSTNAME="$PG_HOSTNAME" >> "$ENV_FILE"
  echo PG_PORT=$PG_PORT >> "$ENV_FILE"
  echo PG_DB="$PG_DB" >> "$ENV_FILE"
  echo PGADMIN_PORT=$PGADMIN_PORT >> "$ENV_FILE"
  echo PGADMIN_EMAIL="$PGADMIN_EMAIL" >> "$ENV_FILE"
  echo PGADMIN_PASSWORD="$PGADMIN_PASSWORD" >> "$ENV_FILE"
  echo APOLLO_URI="$APOLLO_URI" >> "$ENV_FILE"
fi
