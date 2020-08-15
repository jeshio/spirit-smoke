# Spirit-Smoke Apollo

## Запуск

Используем docker и docker-compose для запуска и разработки.

## Разработка

Запуск сервера  с базой данных:

```bash
docker-compose -f docker-compose.dev.yml up
```

Для работы с БД можно открыть web-интерфейс:

```bash
http://localhost:8090
```

Подключение к контейнеру для выполнения команд (например установка пакетов):

```bash
docker container ps # находим нужный id
docker exec -it --user node <container id> /bin/sh
yarn add ...
```

### База данных

В качеству СУБД используется PostgreSQL, а в качестве ORM - [https://sequelize.org](sequelize).

* [https://sequelize.org/master/manual/migrations.html](Документация по миграциям)

## TODO

* В production нужно будет [https://babeljs.io/docs/en/babel-node](убрать использование babel)

## Проблемы

### WSL

* При разработке с использование WSL 2, вместо localhost нужно использовать ip адрес WSL, т.к. WSL является hyper-v контейнером. Получить его можно так (внутри WSL):

```bash
ip addr | grep eth0
```

* Для разработки с использованием докера в vscode нужно подключать проект через WSL-extension, чтобы не было проблем с чувствительностью к регистру.
