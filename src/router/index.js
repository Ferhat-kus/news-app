import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'politics',
    component: () => import('../pages/politics/index.vue'),
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../pages/business/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
// const app = createApp(App);
// app.use(router);
// app.mount('#app');
