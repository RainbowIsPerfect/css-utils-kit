<script setup lang="ts">
import { ref } from "vue";
import { data } from "../styles.data";
const animations = data.animations;

const currentAnimation = ref(animations[0]);
</script>

<template>
  <select
    class="select"
    @input="currentAnimation = ($event.target as HTMLSelectElement).value"
  >
    <option
      v-for="animation in animations"
      :value="animation"
    >
      {{ animation }}
    </option>
  </select>
  <div
    :style="{
      'animation-name': currentAnimation,
      opacity: currentAnimation === 'fade-in' ? 0 : 1,
    }"
    class="example"
  ></div>
</template>

<style scoped>
.select {
  padding: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  width: 100%;
}
.example {
  width: 10rem;
  height: 10rem;
  border: 2px solid var(--vp-c-default-1);
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>
