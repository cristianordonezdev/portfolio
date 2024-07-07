<script setup lang="ts">
import { ref } from 'vue';
import CardProjects from '../components/CardProjects.vue';

const profesional_projects: any = ref(
  [
    {
      name: 'BrandMe',
      images: [
        new URL('@/assets/img/OLC.jpeg', import.meta.url),
        new URL('@/assets/img/brandme1.png', import.meta.url),
        new URL('@/assets/img/brandme2.png', import.meta.url),
        new URL('@/assets/img/brandme3.png', import.meta.url),
      ],
      url: 'https://app.brandme.la/',
      is_in_progress: false,
    },
    {
      name: 'Bacaanda',
      images: [
        new URL('@/assets/img/ba1.png', import.meta.url),
        new URL('@/assets/img/ba2.png', import.meta.url),
        new URL('@/assets/img/ba3.png', import.meta.url),
      ],
      url: 'https://sandboxuser.saludaplus.com/beneficios',
    },
    {
      name: 'Crece tus redes',
      images: [
        new URL('@/assets/img/social.jpeg', import.meta.url),
        new URL('@/assets/img/social1.png', import.meta.url),
        new URL('@/assets/img/social2.png', import.meta.url),
      ],
      url: 'https://sandbox.social.crecetusredes.com',
      is_in_progress: true,
    },
  ]
)  
const image = "@/assets/img/OLC.jpeg"
</script>

<template>
  <main class="text-white main-container-home">
    <div class="overflow">
      <h1 class="mb-3">Portafolio</h1>
      
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active me-2" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Proyectos Profesionales</button>
          <button class="nav-link" id="nav-profile-tab" disabled data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Proyectos Personales</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <div class="mt-4 grid">
            <card-projects class="card-projects" :data="card" :image="image" v-for="card in profesional_projects" :key="card.name"></card-projects>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
      </div>
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
