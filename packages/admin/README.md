# Spirit-Smoke Apollo

В качестве базы (роутинг, стили и прочая основа) для админки используются [https://pro.ant.design/](Ant Design Pro) и [https://umijs.org/](UmiJS). Примеры кода [https://github.com/ant-design/v2.preview.pro.ant.design](тут)

Для реализации контента страниц и прочих элементов используется [https://ant.design/](Ant Design).

Для работы с бэкэндом и [https://www.apollographql.com/docs/react/local-state/local-state-management/](локальным стейтом) используется [https://www.apollographql.com/docs/react/](Apollo Client).

[https://ant.design/components/overview/](Спецификация компонентов)

## Запуск и разработка

Перед началом работы нужно создать файл `./config/config.local.ts` (`./config/config.prod.ts` для прода) со следующим содержимым (актуальная версия находится в `./config/config.example.ts`):

```js
import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    APOLLO_URI: 'http://wsl.ru:4000/graphql',
  },
});
```

и заполнить константы необходимыми значениями.

## Добавление алиасов

Алиасы нужно добавлять в 3-х местах:

1. `./tsconfig.json`. Параметр `paths`

2. `./jsconfig.json`. Параметр `paths`

3. `./config/config.ts`. Параметр `alias`
