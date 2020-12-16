export const baseRoutes = [
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
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   component: './Admin',
  //   authority: ['admin'],
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //       authority: ['admin'],
  //     },
  //   ],
  // },
  {
    path: '/procurements',
    redirect: '/procurements/list',
    exact: true,
  },
  {
    name: 'Поставки',
    icon: 'CrownOutlined',
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
    icon: 'CrownOutlined',
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
    path: '/companies',
    redirect: '/companies/list',
    exact: true,
  },
  {
    name: 'Производители',
    icon: 'deploymentUnit',
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
        name: 'Добавить производителя',
        component: './Company/Add',
        hideInMenu: true,
      },
      {
        path: '/companies/:id/edit',
        name: 'Редактирование производителя',
        hideInMenu: true,
        component: './Company/Update',
      },
      {
        path: '/companies/:id',
        name: 'Производитель',
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
    icon: 'infoCircle',
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
    component: './404',
  },
]
