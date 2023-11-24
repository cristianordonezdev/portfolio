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
    <h1 class="mb-3">Sobre Mi</h1>
    
    <div class="row mb-5">
      <div class="col-6">
        <p class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro dolor quos provident impedit possimus reiciendis quis, alias at nisi illum minus magnam itaque recusandae sunt dolorum repellat accusantium unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat alias odit soluta dolores tempore ad sed voluptate repellendus harum ab similique molestias, totam porro sunt cupiditate eveniet hic. Corporis.</p>
      </div>
      <div class="col-6">
        <ul>
          <li v-for="(li, index) in list_data" :key="index" class="mb-2">
            <strong>{{ li.strong }}</strong> <span>{{ li.value }}</span>
          </li>
        </ul>
      </div>
    </div>

    <h1 class="mb-3">Lo que Hago</h1>
    <div class="row mb-5">
      <div class="col-6">
        <h3>Programación</h3>
        <p class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro dolor quos provident impedit possimus reiciendis quis, alias at nisi illum minus magnam itaque recusandae sunt dolorum repellat accusantium unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat alias odit soluta dolores tempore ad sed voluptate repellendus harum ab similique molestias, totam porro sunt cupiditate eveniet hic. Corporis.</p>
      </div>
      <div class="col-6">
        <h3>Formación</h3>
        <p class="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro dolor quos provident impedit possimus reiciendis quis, alias at nisi illum minus magnam itaque recusandae sunt dolorum repellat accusantium unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat alias odit soluta dolores tempore ad sed voluptate repellendus harum ab similique molestias, totam porro sunt cupiditate eveniet hic. Corporis.</p>
      </div>
    </div>

    <!-- <h1 class="mb-3">Clientes</h1>
    <div class="row mb-5">
      <div class="col-12">
        <img src="./../assets/img/brandme_logo_gray.png" alt="" class="logo-clients">
      </div>
    </div> -->
  </main>
</template>
<style lang="scss" scoped>
.main-container-home {
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
