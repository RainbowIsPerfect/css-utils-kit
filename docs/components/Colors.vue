<script setup lang="ts">
import { colors } from "../../src/colors";
import { useClipboard } from "@vueuse/core";
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
        v-for="tone in color"
        :style="{
          'background-color': tone,
        }"
        class="color"
        @click="copy(tone)"
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
