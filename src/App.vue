<script setup lang="ts">
import { RouterView } from 'vue-router';
import LeftSideProfile from './components/LeftSideProfile.vue'
import RouterMenu from './components/RouterMenu.vue';

</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center hvh-100">
    <router-menu></router-menu>
    <div class="main-container row m-0">
      <div class="col-12 col-xl-3 p-0">
        <left-side-profile></left-side-profile>
      </div>
      <RouterView class="col-12 col-xl-9"/>
  
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hvh-100 {
  height: 100vh;
  padding: 3em 7em 5em 7em;
}
.main-container {
  background-color: rgba(255, 255, 255, 0.164);
  width: 100%;
  min-height: 80vh;

  // height: 100%;
  backdrop-filter: blur(30px);
  border-radius: 2em;
}
@media(max-width: 1200px) {
  .hvh-100 {
    padding: 1em 5em 1em 5em;
    padding-top: 7em;
    height: 100%;
  }
}
@media(max-width: 1000px) {
  .hvh-100 {
    padding: 1em;
    padding-top: 7em;
    height: 100%;
  }
  .main-container {
    // overflow-y: scroll;
    height: auto;
    min-height: 80vh;
  }
}
</style>