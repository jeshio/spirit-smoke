# Spirit-Smoke Portal

Клиент для пользователей проекта.

Поддерживает:

- SSR
- Apollo Graphql 3
- styled-components
- styled-system

## Запуск

Для первого запуска нужно сделать следующее:

1. Продублировать и заполнить файл `/.env.example > /.env`

2. Выполнить генерацию схемы GraphQL

   ```bash
   yarn generate:types
   ```

3. Запустить проект командой в зависимости от окружения

## Разработка

```bash
yarn dev
```

## Production

```bash
yarn build
yarn start
```
