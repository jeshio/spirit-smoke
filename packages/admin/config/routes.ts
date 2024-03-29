import { IRoute } from 'umi'

export const baseRoutes: IRoute[] = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'Центр управления',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/barcode-search',
    name: 'Поиск по штрихкоду',
    icon: 'search',
    component: './BarcodeSearch',
  },
  {
    path: '/mashagosha/:pass',
    name: 'Hey',
    icon: 'smile',
    component: './MashaGosha/CookieSetter.tsx',
    hideInMenu: true,
  },
  {
    path: '/procurements',
    redirect: '/procurements/list',
    exact: true,
  },
  {
    name: 'Поставки',
    icon: 'insertRowBelow',
    path: '/procurements',
    routes: [
      {
        path: '/procurements/list',
        name: 'Список',
        component: './Procurement/List',
        hideInMenu: true,
      },
      {
        path: '/procurements/add',
        name: 'Добавить поставку',
        component: './Procurement/Add',
        hideInMenu: true,
      },
      {
        path: '/procurements/:id/edit',
        name: 'Редактирование поставки',
        hideInMenu: true,
        component: './Procurement/Update',
      },
      {
        path: '/procurements/:id/check',
        name: 'Приём поставки',
        hideInMenu: true,
        component: './Procurement/Check',
      },
      {
        path: '/procurements/:id',
        name: 'Поставка',
        hideInMenu: true,
        component: './Procurement/Item',
      },
    ],
  },
  {
    path: '/orders',
    redirect: '/orders/list',
    exact: true,
  },
  {
    name: 'Заказы',
    icon: 'dollar',
    path: '/orders',
    routes: [
      {
        path: '/orders/list',
        name: 'Список',
        component: './Order/List',
        hideInMenu: true,
      },
      {
        path: '/orders/add',
        name: 'Добавить заказ',
        component: './Order/Add',
        hideInMenu: true,
      },
      {
        path: '/orders/:id/edit',
        name: 'Редактирование заказа',
        hideInMenu: true,
        component: './Order/Update',
      },
      {
        path: '/orders/:id',
        name: 'Заказ',
        hideInMenu: true,
        component: './Order/Item',
      },
    ],
  },
  {
    path: '/products',
    redirect: '/products/list',
    exact: true,
  },
  {
    name: 'Продукты',
    icon: 'appstore',
    path: '/products',
    routes: [
      {
        path: '/products/list',
        name: 'Список',
        hideInMenu: true,
        component: './Product/List',
      },
      {
        path: '/products/add',
        name: 'Добавить продукт',
        hideInMenu: true,
        component: './Product/Add',
      },
      {
        path: '/products/:id/edit',
        name: 'Редактирование продукта',
        hideInMenu: true,
        component: './Product/Update',
      },
      {
        path: '/products/:id',
        name: 'Продукт',
        hideInMenu: true,
        component: './Product/Item',
      },
    ],
  },
  {
    path: '/product-lines',
    redirect: '/product-lines/list',
    exact: true,
  },
  {
    name: 'Линейки продуктов',
    icon: 'deploymentUnit',
    path: '/product-lines',
    routes: [
      {
        path: '/product-lines/list',
        name: 'Список',
        component: './ProductLine/List',
        hideInMenu: true,
      },
      {
        path: '/product-lines/add',
        name: 'Добавить линейку продуктов',
        component: './ProductLine/Add',
        hideInMenu: true,
      },
      {
        path: '/product-lines/:id/edit',
        name: 'Редактирование линейку продуктов',
        hideInMenu: true,
        component: './ProductLine/Update',
      },
      {
        path: '/product-lines/:id',
        name: 'Линейка продуктов',
        hideInMenu: true,
        component: './ProductLine/Item',
      },
    ],
  },
  {
    path: '/companies',
    redirect: '/companies/list',
    exact: true,
  },
  {
    name: 'Компании',
    icon: 'border',
    path: '/companies',
    routes: [
      {
        path: '/companies/list',
        name: 'Список',
        component: './Company/List',
        hideInMenu: true,
      },
      {
        path: '/companies/add',
        name: 'Добавить компанию',
        component: './Company/Add',
        hideInMenu: true,
      },
      {
        path: '/companies/:id/edit',
        name: 'Редактирование компании',
        hideInMenu: true,
        component: './Company/Update',
      },
      {
        path: '/companies/:id',
        name: 'Компания',
        hideInMenu: true,
        component: './Company/Item',
      },
    ],
  },
  {
    path: '/product-categories',
    redirect: '/product-categories/list',
    exact: true,
  },
  {
    name: 'Категории продуктов',
    icon: 'group',
    path: '/product-categories',
    routes: [
      {
        path: '/product-categories/list',
        name: 'Список',
        component: './ProductCategory/List',
        hideInMenu: true,
      },
      {
        path: '/product-categories/add',
        name: 'Добавить категорию продуктов',
        component: './ProductCategory/Add',
        hideInMenu: true,
      },
      {
        path: '/product-categories/:id/edit',
        name: 'Редактирование категории продуктов',
        hideInMenu: true,
        component: './ProductCategory/Update',
      },
      {
        path: '/product-categories/:id',
        name: 'Категория продуктов',
        hideInMenu: true,
        component: './ProductCategory/Item',
      },
    ],
  },
  {
    path: '/features',
    redirect: '/features/list',
    exact: true,
  },
  {
    name: 'Особенности',
    icon: 'tags',
    path: '/features',
    routes: [
      {
        path: '/features/list',
        name: 'Список',
        component: './Feature/List',
        hideInMenu: true,
      },
      {
        path: '/features/add',
        name: 'Добавить особенность',
        component: './Feature/Add',
        hideInMenu: true,
      },
      {
        path: '/features/:id/edit',
        name: 'Редактирование особенности',
        hideInMenu: true,
        component: './Feature/Update',
      },
      {
        path: '/features/:id',
        name: 'Особенность',
        hideInMenu: true,
        component: './Feature/Item',
      },
    ],
  },
  {
    path: '/discounts',
    redirect: '/discounts/list',
    exact: true,
  },
  {
    name: 'Скидки',
    icon: 'scissor',
    path: '/discounts',
    routes: [
      {
        path: '/discounts/list',
        name: 'Список',
        component: './Discount/List',
        hideInMenu: true,
      },
      {
        path: '/discounts/add',
        name: 'Добавить скидку',
        component: './Discount/Add',
        hideInMenu: true,
      },
      {
        path: '/discounts/:id',
        name: 'Скидка',
        hideInMenu: true,
        component: './Discount/Item',
      },
    ],
  },
  {
    component: './404',
  },
]
