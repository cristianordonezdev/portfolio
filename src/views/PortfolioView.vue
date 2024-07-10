<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import CardProjects from '../components/CardProjects.vue';
import { useRoute, useRouter } from 'vue-router';
import { profesional_projects, personal_projects } from '../libs/utils';
import { Tab } from 'bootstrap';

const route = useRoute();
const router = useRouter();
const view_projects = ref<boolean>(true);
const project_selected: any = ref({});

const getProject = (slug: string) => {
  const projects = [...profesional_projects, ...personal_projects]
  const project = projects.find((project: any) => project.slug === slug);
  if (!project) {
    router.push(`/portfolio/${route.params.type}`);
    view_projects.value = true;
    return;
  };
  
  return project;
}
const handleClick = (slug: string, view_pro = false) => {
  router.push({ name: 'portfolio', params: { type: route.params.type, slug_project: slug}});
  project_selected.value = getProject(slug);
  view_projects.value = view_pro;
}

const handleSection = (type: string) => {
  router.push(`/portfolio/${type}`);
  if (type === 'professional') {
    const homeTab = document.getElementById('nav-home-tab');
    if (homeTab) {
      const tabTrigger = new Tab(homeTab);
      tabTrigger.show();
    }
  } else if (type === 'personal') {
    const profileTab = document.getElementById('nav-profile-tab');
    if (profileTab) {
      const tabTrigger = new Tab(profileTab);
      tabTrigger.show();
    }
  }
  view_projects.value = true;
}
onMounted(() => {
  const slug = route.params.slug_project;
  if (slug && typeof slug === 'string') {
    view_projects.value = false;
    project_selected.value = getProject(slug);
  } else {
    const route_type = route.params.type || 'professional'
    handleSection(typeof route_type === 'string' ? route_type : 'professional');
  }
});
const redirectToGitHub = (url: string) => {
  window.open(url, '_blank');
}

watch(() => route.params.slug_project, (new_slug) => {
  if (!new_slug) {
    handleClick('', true)
    const route_type = route.params.type || 'professional'
    handleSection(typeof route_type === 'string' ? route_type : 'professional');
  }
});

</script>

<template>
  <main class="text-white main-container-home">
    <div class="overflow" v-if="view_projects">
      <h1 class="mb-3">Portafolio</h1>
      
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active me-2" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" @click="handleSection('professional')">Proyectos Profesionales</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" @click="handleSection('personal')">Proyectos Personales</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <div class="mt-4 grid">
            <card-projects 
              class="card-projects" 
              :data="card" 
              v-for="card in profesional_projects" 
              :key="card.name"
              @click="handleClick(card.slug)"
            ></card-projects>
          </div>
        </div>
        <div class="tab-pane fade show" id="nav-profile" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="1">
          <div class="mt-4 grid">
            <card-projects 
              class="card-projects" 
              :data="card" 
              v-for="card in personal_projects" 
              :key="card.name"
              @click="handleClick(card.slug)"
            ></card-projects>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow detail" v-else>
      <div class="d-flex justify-content-between mb-3">
        <h5 class="d-flex"> <span @click="handleClick('', true)" class="d-block me-2 back-action">Regresar</span> | <a :href="project_selected.url" target="_blank" class="main-title"> {{ project_selected.name }} </a></h5>

        <button type="button" class="btn btn-primary" @click="redirectToGitHub(project_selected.github)" v-if="project_selected.github?.length === 1">
          <i class="bi bi-github icon me-1"></i>
          Ver código en GitHub
        </button>

        <div class="dropdown" v-else-if="project_selected.github?.length > 1">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Ver código en GitHub
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="i in project_selected.github" :key="i.url" @click="redirectToGitHub(i.url)"><a class="dropdown-item" href="#">{{i.name}}</a></li>
          </ul>
        </div>
      </div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" v-if="project_selected.images.length > 0">
        <div class="carousel-inner">
          <div class="carousel-item" :class="{'active': index === 0}" v-for="(image, index) in project_selected.images" :key="index">
            <img :src="image" class="d-block w-100 image-carousel" :alt="image">
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row mt-4">
        <div v-html="project_selected.description" class="col-9 text-justify"></div>
        <div class="col-3">
          <h5>Tecnologías</h5>
          <span class="badge rounded-pill bg-light text-dark me-1" v-for="tech in project_selected.techs" :key="tech">{{ tech}}</span>

        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.detail {
  .back-action {
    cursor: pointer;

    &:hover {
      text-decoration: underline
    }
  }
  .main-title {
    color: white;
    display: block;
    margin-left: 0.3em;
  }
  .carousel {
    background-color: #170F12;
    border-radius: 1em;
    .image-carousel {
      max-height: 45vh;
      object-fit: contain;
    }
  }
}
.main-container-home {
  height: 100%;
  .overflow {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
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
