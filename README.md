# Spirit-Smoke Repository

## Разработка

### Быстрый старт

Для выполнения всех команд для запуска проекта достаточно в корне выполнить:

```bash
docker-compose -f docker-compose.admin.dev.yml -f docker-compose.apollo.dev.yml build # один раз и потом только после изменений конфигов докера
sudo ./start.dev.server.sh
```

### Docker-Compose

Для запуска докера в режмие разработки нужно в корне проекта ввести команду:

```bash
docker-compose -f docker-compose.admin.dev.yml -f docker-compose.apollo.dev.yml build
docker-compose -f docker-compose.admin.dev.yml -f docker-compose.apollo.dev.yml up
```

После этого запустятся сервера с базой данных. Порты смотреть в конфигах docker-compose.

### Используем bash

Подключение к контейнеру для выполнения команд (например установка пакетов):

```bash
docker container ps # находим нужный id
./exec.docker.sh <container id>
yarn add ...
```

## Проблемы

### WSL

* При разработке с использованием WSL 2, вместо localhost нужно использовать ip адрес WSL, т.к. WSL является hyper-v контейнером. Получить его можно так (внутри WSL):

```bash
ip addr | grep eth0
```

* Для разработки с использованием докера в vscode нужно подключать проект через WSL-extension, чтобы не было проблем с чувствительностью к регистру.
