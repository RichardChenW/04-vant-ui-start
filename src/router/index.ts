import { createRouter, createWebHistory } from 'vue-router';
import TabViews from '@/views/tabs/TabView.vue';
import HomeView from '@/views/tabs/HomeView/index.vue';
import SearchView from '@/views/tabs/SearchView/index.vue';
import SettingView from '@/views/tabs/SettingView/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tabs',
      name: 'tabs',
      component: TabViews,
      children: [
        { path: 'home', name: 'home', component: HomeView },
        { path: 'search', name: 'search', component: SearchView },
        { path: 'setting', name: 'setting', component: SettingView },
      ],
    },
  ],
});

export default router;
