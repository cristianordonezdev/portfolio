<script setup lang="ts">
</script>

<template>
  <main class="main-profile">
    <img src="./../assets/img/profile.jpg" alt="" class="profile">

    <h1 class="mt-5">Cristian Ordoñez</h1>
    <p class="main-dedicate">Full-Stack Developer</p>
    <div class="d-flex mb-5">
      <i class="bi bi-linkedin icon"></i>
      <i class="bi bi-github icon ms-3"></i>
      <i class="bi bi-instagram icon ms-3"></i>

    </div>
    <button type="button" class="btn btn-outline-light button-download">Descargar CV</button>

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
  color: rgba(255, 255, 255, 0.863);
  .profile {
    height: 200px;
    width: 200px;
    border-radius: 100%;
    object-fit: cover;
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
</style>
