# Spirit-Smoke Apollo

## Запуск

Используем docker и docker-compose для запуска и разработки.

Перед запуском нужно создать файл `.env` на основе `.env.example` и заполнить его.

## Разработка

Запуск сервера  с базой данных:

```bash
docker-compose -f docker-compose.dev.yml up
```

Для работы с БД можно открыть web-интерфейс:

```bash
http://localhost:8090
```

### База данных

В качеству СУБД используется PostgreSQL, а в качестве ORM - [https://sequelize.org](sequelize).

* [https://sequelize.org/master/manual/migrations.html](Документация по миграциям)

## TODO

* В production нужно будет [https://babeljs.io/docs/en/babel-node](убрать использование babel)
