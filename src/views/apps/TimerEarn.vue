<script setup lang="ts">
import { ref } from 'vue';

const seconds = ref(0);
const minutes = ref(0);
const hours = ref(0);
const is_not_paused = ref(true)
const interval = ref(null)
const earned = ref(0)
const per_minute = ref(0)

const cronometre = () =>  {
  if (is_not_paused.value) {
    start();
    interval.value = setInterval(start, 1000);
  }
  is_not_paused.value = true;
}

const checkCeroz = (number: number): number | string => {
  if (number === 0) return "00";
  if (number > 0 && number < 10) return "0" + number;
  else return number;
}

const start = () => {
  
  if (is_not_paused.value) {
    const per_second = per_minute.value / 60;
    earned.value += per_second

    const title = `$${earned.value.toFixed(2)} -- ${hours.value > 0 ? `${checkCeroz(hours.value)} :` : ''} ${checkCeroz(minutes.value)} : ${checkCeroz(seconds.value)}`;
    document.title = title;

    seconds.value += 1;
    if (seconds.value > 59) {
      minutes.value++;
      seconds.value = 0;
    }
    if (minutes.value > 59) {
      hours.value++;
      minutes.value = 0;
    }
    if (hours.value > 24) hours.value = 0;
  }
}

const pause = (): void => {
  is_not_paused.value = false;
}

const stop = (): void => {
  clearInterval(interval);
  is_not_paused.value = false;
  seconds.value = 0;
  minutes.value = 0;
  hours.value = 0;
  earned.value = 0;
  document.title = '$0.00 -- 00:00'
}

</script>

<template>
  <main class="text-white main-container-home d-flex flex-column flex-wrap justify-content-center align-items-center">
    <h1 class="earned text">$ {{earned.toFixed(2)}}</h1>
    <h1 class="timer"><span v-if="hours > 0">{{ checkCeroz(hours) }} :</span> {{ checkCeroz(minutes) }} : {{ checkCeroz(seconds) }} </h1>
    <div>
      <button type="button" class="btn btn-primary me-2" @click="cronometre" v-if="(minutes === 0 && seconds === 0 && hours === 0) || !is_not_paused">Start </button>
      <button type="button" class="btn btn-danger me-2" @click="pause" v-if="is_not_paused">Stop</button>
      <button type="button" class="btn btn-warning" @click="stop" v-else>Reiniciar</button>

    </div>
    <div class="mb-3 mt-5">
      <label for="exampleFormControlInput1" class="form-label">Per minute</label>
      <input type="number" v-model="per_minute" class="form-control" id="exampleFormControlInput1" placeholder="Per minute price">
    </div>

  </main>
</template>
<style lang="scss" scoped>
.main-container-home {
  height: 100%;
  padding: 2em;
  .timer {
    font-size: 50px;
  }
  .earned {
    font-size: 80px;
    margin-bottom: 100px;
  }
}
@media(max-width: 1000px) {
 .main-container-home {
    padding: 1em;
 }
}

</style>
