<script setup lang="ts">
import { ref } from 'vue';
declare var require: any
// import images from '@/images/index'
import CardProjects from '@/components/CardProjects.vue';

const profesional_projects: any = ref(
  [
    {
      name: 'BrandMe',
      image: new URL('@/assets/img/OLC.jpeg', import.meta.url), 
      url: '',
      is_in_progress: false,
    },
  ]
)  
const image = "@/assets/img/OLC.jpeg"
</script>

<template>
  <main class="text-white main-container-home">
    <h1 class="mb-3">Portafolio</h1>
    
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Proyectos Profesionales</button>
        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Proyectos Personales</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
        <card-projects :data="profesional_projects[0]" :image="image"></card-projects>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
    </div>

  </main>
</template>
<style lang="scss" scoped>
.main-container-home {
  .active {
    color: black !important;
  }
  .nav-link {
    color: white;
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
}
</style>
