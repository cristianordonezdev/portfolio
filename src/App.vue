<script setup lang="ts">
import { RouterView } from 'vue-router';
import LeftSideProfile from '@/components/LeftSideProfile.vue'
import RouterMenu from './components/RouterMenu.vue';

</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center hvh-100">
    <router-menu></router-menu>
    <div class="main-container row m-0">
      <div class="col-3 h-100 p-0">
        <left-side-profile></left-side-profile>
      </div>
      <RouterView class="col-9"/>
  
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hvh-100 {
  height: 100vh;
  padding: 3em 10em 5em 10em;
}
.main-container {
  background-color: rgba(255, 255, 255, 0.164);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(30px);
  border-radius: 2em;
  overflow: hidden;
}
</style>