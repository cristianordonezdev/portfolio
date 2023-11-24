<script setup lang="ts">
import navigation_items from '../navigation/dashboard';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
  <main class="main-router">
    <router-link 
      v-for="item in navigation_items" 
      :key="item.route_name" 
      class="px-3 mx-1 item-navigation" 
      :to="{name: item.route_name}"
    >
      <i :class="`icon-router-menu ${item.icon} ${route.name === item.route_name ? 'active' : ''}`"></i>
    </router-link>
  </main>
</template>
<style lang="scss" scoped>
.main-router {
  background-color: rgba(255, 255, 255, 0.164);
  padding: 1em;
  width: auto;
  border-top-right-radius: 1em;
  border-top-left-radius: 1em;
  display: flex;
  .item-navigation {
    cursor: pointer;
  }
  .icon-router-menu {
    font-size: 35px;
    color: white;
  }
  .active {
    color: $secondary-color;
  }
}
</style>
