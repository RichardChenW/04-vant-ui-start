<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';

  import { Tabbar, TabbarItem } from 'vant';
  const active = ref('search');
</script>

<template>
  <div>{{ active }}</div>
  <RouterView></RouterView>
  <!-- 路由显示的地方 -->
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">主页</TabbarItem>
    <TabbarItem name="search" icon="search">查找</TabbarItem>
    <TabbarItem name="setting" icon="setting-o">设置</TabbarItem>
  </Tabbar>
</template>

<style></style>
