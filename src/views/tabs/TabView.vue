<script setup lang="ts">
  import { ref } from 'vue';
  import { Tabbar, TabbarItem, Button } from 'vant';
  const active = ref('search');
</script>

<template>
  <div>{{ active }}</div>
  <Button type="danger">危险按钮</Button>
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">标签</TabbarItem>
    <TabbarItem name="search" icon="search">标签</TabbarItem>
    <TabbarItem name="friends" icon="friends-o">标签</TabbarItem>
    <TabbarItem name="setting" icon="setting-o">标签</TabbarItem>
  </Tabbar>
</template>

<style></style>
