#!/bin/bash

echo "Запускаем docker..."

service docker start

ourip=`ip addr show eth0 | grep "inet\b" | awk '{print $2}' | cut -d/ -f1`

echo -e "IP-адрес для доступа (скопирован в буфер обмена): \e[34m\e[4m$ourip\e[0m"

printf "$ourip" | /mnt/c/Windows/System32/clip.exe # WSL версия для копирования в буфер обмена

echo "Запускаем docker-compose..."

docker-compose -f docker-compose.admin.dev.yml -f docker-compose.apollo.dev.yml -f docker-compose.portal.dev.yml up

exit 0