# Spirit-Smoke Apollo

## Запуск

Используем docker и docker-compose для запуска и разработки.

### Разработка

Запуск сервера  с базой данных:

```bash
docker-compose -f docker-compose.dev.yml up
```

Подключение к БД:

```
mongodb://admin:password@localhost:27017
```

Подключение к контейнеру для выполнения команд (например установка пакетов):

```
docker container ps # находим нужный id
docker exec -it <container id> /bin/bash
yarn add ...
```

## TODO

- В production нужно будет [https://babeljs.io/docs/en/babel-node](убрать использование babel)
