#!/bin/sh
# Подготовка для запуска с помощью CI/CD

ENV_FILE=.env

if [ ! -f "$ENV_FILE" ]; then
  echo APOLLO_URI="$APOLLO_URI" >> "$ENV_FILE"
fi
