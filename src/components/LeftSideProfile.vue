<script setup lang="ts">
import { ref } from 'vue'

const social_networks = ref([
  {icon: 'bi bi-linkedin icon', url: 'https://www.linkedin.com/in/cristianordonezdev/'},
  {icon: 'bi bi-github icon ms-3', url: 'https://github.com/cristianordonezdev'},
  {icon: 'bi bi-instagram icon ms-3', url: 'https://www.instagram.com/naitsirc_nomar/'}
])
const openCV = (): void => {
  window.open('https://drive.google.com/drive/folders/1GNSo15QDaBpClCRMtk8PAwECZKgIeFXv?usp=drive_link', '_blank');
}

</script>

<template>
  <main class="main-profile">
    <img src="./../assets/img/profile_image.png" alt="" class="profile">

    <h1 class="mt-5 text-center">Cristian Ordoñez</h1>
    <p class="main-dedicate">Full-Stack Developer</p>
    <div class="d-flex mb-5">
      <a :href="i.url"  target="_blank" v-for="i in social_networks" :key="i.icon" class="text-white">
        <i :class="i.icon"></i>
      </a>

    </div>
    <button type="button" class="btn btn-outline-light button-download" @click="openCV()">Descargar CV</button>

    <small>&copy; {{ new Date().getFullYear() }} Cristian Ordoñez </small>
  </main>
</template>
<style lang="scss" scoped>
.main-profile {
  background-color: $primary-color;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  color: rgba(255, 255, 255, 0.863);
  .profile {
    height: 200px;
    width: 200px;
    border-radius: 100%;
  }
  .main-dedicate {
    font-size: 20px;
  }
  .icon {
    display: block;
    font-size: 20px;

    &:hover {
      transition: all 300ms;
      scale: (1.15);
      cursor: pointer;
      color: $secondary-color;
    }
    &:not(:hover) {
      transition: all 300ms;
    }
  }
  .button-download {
    margin-bottom: 2em;
    &:hover {
      background-color: $secondary-color;
      color: white;
      
    }
  }
}
@media(max-width: 1200px) {
 .main-profile {
    border-bottom-left-radius: 0;
    border-top-right-radius: 2em;
    border-top-left-radius: 2em;
 }
}
@media(max-width: 1000px) {
  .main-profile {
    justify-content: start;
    height: auto;
   
    .profile {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
