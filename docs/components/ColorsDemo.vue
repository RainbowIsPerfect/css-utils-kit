<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { data } from "../styles.data";
const colors = data.colors;

const { copy } = useClipboard();
</script>

<template>
  <div
    v-for="(color, name) in colors"
    :key="name"
  >
    <p>{{ name }}</p>
    <div class="container">
      <button
        v-for="{ value } in color"
        :style="{
          'background-color': value,
        }"
        class="color"
        @click="copy(value)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.color {
  min-width: 1.5rem;
  min-height: 1.5rem;
  border-radius: 2px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}
</style>
