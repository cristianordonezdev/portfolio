<script setup lang="ts">
</script>

<template>
  <main class="text-white main-container-home">
    <div class="main-title">Cristian Ordoñez</div>
    <p class="main-dedicate">Full-Stack Developer</p>
  </main>
</template>
<style lang="scss" scoped>
.main-container-home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  .main-title {
    font-size: 4vw;
  }
  .main-dedicate {
    font-size: 1.5vw;
  }
}
@media(max-width: 1000px) {
  .main-container-home {
    justify-content: start;
  }
  .main-title {
    font-size: 4vh !important;
  }
  .main-dedicate {
    font-size: 1.5vh !important;
  }
}
</style>
