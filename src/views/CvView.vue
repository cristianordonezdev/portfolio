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
  {number: 90, label: 'JavaScript'},
  {number: 95, label: 'HTML / CSS'},
  {number: 85, label: 'VueJS'},
  {number: 70, label: 'Angular'},
  {number: 95, label: 'BootStrap'},
  {number: 90, label: 'TailwindCSS'},
  {number: 90, label: 'TypeScript'},
  {number: 70, label: 'NodeJS'},
  {number: 70, label: 'ASP.NET core'},
  {number: 60, label: 'Java'},
  {number: 75, label: 'MySQL'}
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
        <div class="d-flex flex-wrap mb-3 habilities" v-for="(i, index) in habilities" :key="index">
          <div class="d-flex justify-content-between w-100">
            <p class="m-0">{{ i.label }}</p>
            <p class="m-0">{{ i.number }}%</p>
          </div>
          <div class="progress w-100" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar background-progress" :style="`width: ${i.number}%`"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
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
