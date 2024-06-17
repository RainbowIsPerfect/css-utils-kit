<script setup lang="ts">
import { colors } from "../../src/style.colors";
import { useClipboard } from "@vueuse/core";
const { copy } = useClipboard();
</script>

<template>
  <div>
    <div
      v-for="(color, name) in colors"
      :key="name"
      style="display: flex; gap: 5px; margin-bottom: 5px"
    >
      <div
        v-for="tone in color"
        :style="{
          'background-color': tone,
          width: '1.5rem',
          height: '1.5rem',
          cursor: 'pointer',
          'border-radius': '5px',
        }"
        @click="copy(tone)"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
