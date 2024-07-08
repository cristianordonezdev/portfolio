<script setup lang="ts">
import { ref } from 'vue';

const lines: any = ref(
  [
    {
      name: 'Formación',
      line: [
          {
          year: '2017', 
          year_description: 'Universidad Autonoma del Estado de México',
          title: 'Fundamentos de Programación',
          title_description: 'Empecé la carrera de Ingeniería en Sistemas Inteligentes. Se empezo a tener  mucho interes en el mundo de la programación.'
        },
        {
          year: '2020', 
          year_description: 'Universidad Autonoma del Estado de México',
          title: 'Desarrollo Web',
          title_description: 'Empecé a dedicarme al desarrollo web y a enlistarme en cursos del tipo.'
        },
      ]
    },
    {
      name: 'Experiencia',
      line: [
        {
          year: '2023', 
          year_description: 'Palacio de Hierro',
          title: 'Desarrollador Back End',
          title_description: 'Desarrollo de software de transacciones y gestión de restaurantes Palacio de Hierro, en sistemas Micros POS de Oracle.'
        },
        {
          year: '2023', 
          year_description: 'Baacanda',
          title: 'Desarrollador Freelancer Front End',
          title_description: 'Se trabajo en un software de pólizas de seguros para inmigrantes.'
        },
        {
          year: '2023', 
          year_description: 'Proyecto',
          title: 'Desarrollador Freelancer Front End',
          title_description: 'Se desarrollo un software para impulsar redes sociales de Influencers.'
        },
        {
          year: '2021', 
          year_description: 'BrandMe CrowMarketing',
          title: 'Desarrollador Front End JR',
          title_description: 'Se buscaba crear la mejor plataforma latinoaméricana que conectara Influencers con Marcas.'
        },
      ]
    }
  ]
)
const habilities: any = ref([
  {
    about: 'Front End',
    techs: [
      {icon: new URL('@/assets/icons/js.svg', import.meta.url), label: 'JavaScript'},
      {icon: new URL('@/assets/icons/html.svg', import.meta.url), label: 'HTML'},
      {icon: new URL('@/assets/icons/css.svg', import.meta.url), label: 'CSS'},
      {icon: new URL('@/assets/icons/vue.svg', import.meta.url), label: 'VueJS'},
      {icon: new URL('@/assets/icons/angular.svg', import.meta.url), label: 'Angular'},
      {icon: new URL('@/assets/icons/bootstrap.svg', import.meta.url), label: 'BootStrap'},
      {icon: new URL('@/assets/icons/tailwindcss.svg', import.meta.url), label: 'TailwindCSS'},
      {icon: new URL('@/assets/icons/typescript.svg', import.meta.url), label: 'TypeScript'},
    ]
  },
  {
    about: 'Back End',
    techs: [
      {icon: new URL('@/assets/icons/dotnet.svg', import.meta.url), label: 'ASP.NET Core'},
      {icon: new URL('@/assets/icons/java.svg', import.meta.url), label: 'Java', class: 'bg-white border-100'},
      {icon: new URL('@/assets/icons/nodejs.svg', import.meta.url), label: 'NodeJS'},
    ]
  },
  {
    about: 'Bases de datos',
    techs: [
      {icon: new URL('@/assets/icons/mysql.svg', import.meta.url), label: 'MySQL', class: 'bg-white border-100'},
      {icon: new URL('@/assets/icons/postgresql.svg', import.meta.url), label: 'PostgreSQL'},
      {icon: new URL('@/assets/icons/mongodb.svg', import.meta.url), label: 'MongoDB'},
    ]
  },
  {
    about: 'DevOps',
    techs: [
      {icon: new URL('@/assets/icons/docker.svg', import.meta.url), label: 'Docker'},
      {icon: new URL('@/assets/icons/jenkins.svg', import.meta.url), label: 'Jenkins'},
      {icon: new URL('@/assets/icons/cicd.svg', import.meta.url), label: 'CI/CD Pipelines', class: 'bg-white border-100'},
    ]
  }
])

</script>

<template>
  <main class="text-white main-container-home">    
    <div class="mb-5 overflow-scrols row">
      <div class="flex-column col-12 col-md-6">
        <div class="mb-5 lines-container" v-for="line in lines" :key="line.name">
          <h3 class="mb-4">{{ line.name }}</h3>
          <div class="linea-tiempo">
            <div class="d-flex mb-3 time-line" v-for="(i, index) in line.line" :key="index">
              <div class="momento text-end">
                <div>
                  <h5>{{i.year}}</h5>
                  <div class="descripcion">
                    {{ i.year_description }}
                  </div>
                </div>
              </div>
              <div class="momento">
                <h5>{{ i.title }}</h5>
                <div class="descripcion"> 
                  {{ i.title_description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-md-6 mb-5 ps-md-5">
        <h3 class="mb-4">Habilidades de código</h3>
        <div class="d-flex flex-wrap mb-4 habilities" v-for="(i, index) in habilities" :key="index">
          <h5 class="w-100 mb-2">{{ i.about }}</h5>
          <div v-for="tech in i.techs" :key="tech.label" class="me-3 mb-2 container-img-tech">
            <img :src="tech.icon" :alt="tech.label" class="img-tech" :class="`${tech.class ? tech.class : ''}`"/>
            <div class="container-label-icon">{{ tech.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.habilities {
  .container-img-tech {
    position: relative;


    .img-tech {
      width: 50px;
      height: 50px;
      padding: 0.2em;
  
      &:hover {
        transform: scale(1.2);
        transition: all 350ms;
      }
      &:not(:hover) {
        transition: all 350ms;
      }
    }
    .border-100 {
      border-radius: 100%;
    }
    .container-label-icon {
      background-color: #20BA73;
      position: absolute;
      top: 6px;
      left: 3.3em;
      font-size: 20px;
      // opacity: 0;
      z-index: 100;
      transform: translateX(4em);
      padding: 0.3em;
      border-radius: 0.2em;
      white-space: nowrap;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%) rotate(90deg);
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent transparent #20BA73;
      }
    }

    &:hover {
      .container-label-icon {
        opacity: 1;
        visibility: visible;
        transition: all 350ms;
        transform: translateX(0px);
      }
    }
    &:not(:hover) {
      .container-label-icon {
        z-index: -1;
        opacity: 0;
        transform: translateX(3em);
        transition: all 200ms;
      }
    }
  }
}
.main-container-home {
  padding: 2em;
  height: 100%;
  .overflow-scrols {
    height: 100%;
    overflow-y: scroll;
  }
  .progress {
    border: 2px solid #20BA73;
    padding: 2px;
    .background-progress {
      background-color: #20BA73;
    }
  }
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
.linea-tiempo {
  position: relative;
  // width: 500px;
  max-width: 95vw;
  height: 100%;
  .momento {
    position: relative;
    width: 45%;
    box-sizing: border-box;
  }
}


.momento:nth-child(even) {
  left: 10%;
}

.linea-tiempo::before {
  content: '';
  position: absolute;
  width: 3px;
  background-color: white;
  left: 50%;
  height: 100%;
  // border-radius: 10px;
}

.momento::after {
  content: '';
  position: absolute;
  top: 10px;
  right: calc(-11.11% - 11.5px);
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
}

.momento:nth-child(even)::after {
  left: calc(-11.11% - 8.5px);
}
@media(max-width: 1000px) {
  .main-container-home {
    padding: 1em;
  }
}
</style>
