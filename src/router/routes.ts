import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'one', component: () => import('pages/OnePage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'table', component: () => import('pages/TablePage.vue') },
      { path: 'users', component: () => import('pages/UsersPage.vue') },
      { path: 'inventory', component: () => import('pages/InventoryPage.vue') },
      { path: 'resize-observer', component: () => import('pages/ResizeObserverPage.vue') },
      { path: 'menu', component: () => import('pages/MenuPage.vue') },
      { path: 'various', component: () => import('pages/VariousPage.vue') },
    ],
  },
  {
    path: '/whatsapp',
    component: () => import('layouts/Gallery/WhatsApp.vue'),
    children: [
      { path: '', component: () => import('src/pages/WhatsAppPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
