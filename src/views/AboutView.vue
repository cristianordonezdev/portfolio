<script setup lang="ts">
import { ref } from 'vue';

const age = (): number => {
  const today = new Date();
  const birthday = new Date('12/15/1998');
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}
const list_data = ref([
  {strong: 'Edad', value: age()},
  {strong: 'Pais', value: 'México'},
  {strong: 'Correo', value: 'cristian.her.ord@gmail.com'},
  {strong: 'Teléfono', value: '5513040652'},
])

</script>

<template>
  <main class="text-white main-container-home">
    <div class="scroll">
      <h1 class="mb-3">Sobre Mi</h1>
      
      <div class="row mb-5">
        <div class="col-12 col-md-6">
          <p class="about">Hola, soy Cristian Ramón Hernández Ordoñez y soy un desarrollador web Full-Stack mexicano.
            Soy apasionado con la programación, autodidacta, con mucha tolerancia y con gran capacidad para trabajar en equipo.
          </p>
          <p class="about">
            Me encantan los retos y los problemas difíciles, siempre estoy buscando la forma de superarme a mí mismo.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <ul>
            <li v-for="(li, index) in list_data" :key="index" class="mb-2">
              <strong>{{ li.strong }}</strong> <span>{{ li.value }}</span>
            </li>
          </ul>
        </div>
      </div>
  
      <h1 class="mb-3">Lo que Hago</h1>
      <div class="row mb-5">
        <div class="col-12 col-md-6">
          <h3>Programación</h3>
          <p class="about">
            Soy apasionado de la programación, constantemente me gusta ver las nuevas tecnologías y probarlas en proyectos personales a fin de aprenderlas. Siempre me encantó resolver problemas y algoritmos. <br/>          
  
          </p>
          <p class="about">El primer Lenguaje de programación que aprendí fue Java. Con Java fui capaz de entender muy bien los fundamentos, el orientado a objetos y la estructura de datos de la programación. 
            <br/>
            Después intenté aprender otros lenguajes de programación para encontrar mi favorito (Python, PHP, JavaScript, C#). Sin embargo, tuve una gran inmersión en JavaScript. 
          </p>
          <p class="about">Actualmente la mayoría de los Frameworks con los que trabajo son de JavaScript.
            Concluí que JavaScript al final siempre lo tendría que manejar por el Front End y sería mi favorito para esa parte, no obstante el favorito para hacer Back End ha sido C# con la tecnología ASP.NET Core.</p>
        </div>
        <div class="col-12 col-md-6">
          <h3>Formación</h3>
          <p class="about">Me formé en la Universidad Autónoma del Estado de México (UAEMex), donde estudié la carrera de Ingeniería en Sistemas Inteligentes.
            Siempre fui un estudiante destacado en las clases de programación. Más tarde tomé decisión de dedicarme al desarrollo web y formarme por mi cuenta. <br/>
            A pesar de que concluí mis estudios universitarios exitosamente, yo seguí formándome con cursos que compraba en plataformas Curseras.
          </p>
          <p class="about">
            Estudié Ingles por 2 años y medio en el Centro de Educación de Lenguas Extranjeras de la Dirección de Formación en Lenguas Extranjeras del Instituto Politécnico Nacional (IPN) - (CELEX). Donde alcancé a obtener
            un nivel de inglés conversacional.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.main-container-home {
  height: 100%;
  padding: 2em;
  .scroll {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
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
</style>
