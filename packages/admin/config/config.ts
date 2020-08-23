// https://umijs.org/config/
import { defineConfig, IConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  alias: {
    '@@utils': __dirname + '/../../utils',
  },
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  define: {
    APOLLO_URI: 'http://localhost:4000/graphql',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    // {
    //   path: '/user',
    //   component: '../layouts/UserLayout',
    //   routes: [
    //     {
    //       name: 'login',
    //       path: '/user/login',
    //       component: './user/login',
    //     },
    //   ],
    // },
    {
      path: '/',
      component: '../layouts/ProvidersLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
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
                  component: './Products',
                },
                {
                  path: '/products/add',
                  name: 'Добавить продукт',
                  component: './Products/Add',
                },
                {
                  path: '/products/:id',
                  name: 'Продукт',
                  hideInMenu: true,
                  component: './Products/[id]',
                },
              ],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  cssModulesTypescriptLoader: {
    mode: 'emit',
  },
  chainWebpack: (config, { webpack }) => {
    config.resolve.extensions.add('.gql');
    config.resolve.extensions.add('.graphql');
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .exclude.add(/node_modules/)
      .end()
      .use('graphql')
      .loader('graphql-tag/loader');
  },
} as IConfig);
