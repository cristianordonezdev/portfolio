<script setup lang="ts">
// declare var require: any
import { ref  } from 'vue';
// declare var require: any
// import image from '@/assets/img/OLC.jpeg';

const props = defineProps({
  data: Object,
})
</script>

<template>
 <div>
    <img :src="props.data?.image" alt="" class="imga">
    <p class="text-white">{{ }}</p>
 </div>
</template>
<style lang="scss" scoped>
.imga {
  width: 200px;
  height: 200px;
}
</style>
