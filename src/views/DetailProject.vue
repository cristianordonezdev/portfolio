<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { projects } from '../libs/utils'
import { useRoute } from 'vue-router'


const route = useRoute()

const project = ref();

onMounted((): void => {
  project.value = projects.find((i: any) => i.slug === route.params.project)
})

</script>

<template>
  <main class="text-white main-container-home">
    <div class="overflow">
      <h1 class="mb-3">{{  }}</h1>
      

    </div>

  </main>
</template>
<style lang="scss" scoped>
.main-container-home {
  height: 100%;
  .overflow {
    height: 100%;
    overflow-y: scroll;
  }
  .active {
    color: black !important;
  }
  .nav-link {
    color: white;
    border-radius: 0.375rem;
  }
  padding: 2em;
  .about {
    text-align: justify;
  }
  ul {
    text-decoration: none;
    list-style: none;
  }
  .logo-clients {
    width: 200px;
  }
  nav, .nav-tabs{
    border: none;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
}
@media(max-width: 1000px) {
 .main-container-home {
  padding: 1em;
 }
}
@media(max-width: 750px) {
 .grid {
    grid-template-columns: repeat(2, 1fr) !important;
 }
}
@media(max-width: 500px) {
 .grid {
    grid-template-columns: repeat(1, 1fr) !important;
 }
}
</style>
