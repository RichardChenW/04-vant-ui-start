import { createRouter, createWebHistory } from 'vue-router';
import TabViews from '@/views/tabs/TabView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', component: TabViews }]
});

export default router;
