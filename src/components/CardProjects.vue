<script setup lang="ts">

import { ref, watch, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'


const props = defineProps({
  data: Object,
})


const router = useRouter();

let main_interval = ref<any>(null)
let index_image = ref<number>(0)
let first_time_transition = ref<boolean>(false)
let show_animation = ref<boolean>(false)
let current_image = ref<string>()


watch(index_image, async (value) => {
  current_image.value = props.data?.images[value]
})


onBeforeMount(() => {
  current_image.value = props.data?.images[index_image.value]
});

const startInterval = (): void => {
  main_interval.value = setInterval(() => {
    index_image.value = (index_image.value + 1) % props.data?.images.length;
    first_time_transition.value = true;
  }, 4000);
}

const mouseHover = (): void => {
  if (!show_animation.value) {
    show_animation.value = true;
    startInterval();
  }
}
const mouseLeave = (): void => {
  show_animation.value = false;
  first_time_transition.value = false;
  index_image.value = 0;
  clearInterval(main_interval.value);
  main_interval.value = null;
  
}
// const redirect = (route: string): void => {
//   router.push({name: 'detail_project', params: { project: route}})
// }
</script>

<template>
 <div 
    class="main-container-card position-relative" 
    @mouseover="mouseHover" 
    @mouseleave="mouseLeave" 
  >
  <div class="container-coming-redirect" v-if="props.data?.is_in_progress">
    <h5 class="title-coming-soon">Próximamente</h5>
  </div>
  <div class="container-title-redirect">
    <h5>{{ props.data?.name }}</h5>
    <i class="bi bi-box-arrow-up-right ms-2"></i>
  </div>
  <div>
    <Transition :name="first_time_transition ? 'fade' : ''">
      <div :key="current_image">
        <img 
          class="container-img image-animation-zoom" 
          :src="current_image" 
        />
      </div>
    </Transition>
  </div>
 </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<style lang="scss" scoped>
.container-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 4s;
  transform-origin: center;
}
.image-animation-zoom:hover {
  transform: scale(1.2);
}

.main-container-card {
  aspect-ratio:  1 / 1;
  cursor: pointer;
  overflow: hidden;
  border-radius: 1em;
  .container-coming-redirect {
    background-color: red;
    color: white;
    padding: 0.5em;
    position: absolute;
    top: 0;
    z-index: 1;
    transform: translateX(-200px);
    border-bottom-right-radius: 1em;
    border-top-left-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  
  }
  .container-title-redirect {
    background-color: rgba(0, 0, 0, 0.712);
    color: white;
    padding: 1em;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 1;
    transform: translateY(100px);
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
  }
  &:hover {
    .container-title-redirect {
      transform: translateY(0px);
      transition: all 500ms;
    }
    .container-coming-redirect {
      transition: all 500ms;
      transform: translateY(0);
    }
  }
  &:not(:hover) .container-title-redirect {
    transition: all 500ms;
  }
}
</style>
