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
      class="px-sm-3 px-2 mx-sm-1 item-navigation" 
      :to="item.params ? {name: item.route_name, params: {type: item.params?.type}} : {name: item.route_name}"
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
@media(max-width: 1200px) {
  .main-router {
    position: fixed !important;
    top: 0.7em;
    border-radius: 1em;
    z-index: 100;
    background-color: $primary-color;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;    // margin: 0  0 0.7em;
    // width: 100%;
  }
}
</style>
