<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { data } from "../styles.data";
const borders = data.borders;

const { copy } = useClipboard();
</script>

<template>
  <div>
    <h2>Border Width</h2>
    <div class="app-container">
      <button
        v-for="{name, value} in borders['border-width']"
        :style="{
          'border-width': value,
        }"
        class="example"
        @click="copy(name)"
      >
        {{ name }}
      </button>
    </div>
    <h2>Border Radius</h2>
    <div class="app-container">
      <button
        v-for="{name, value} in borders['border-radius']"
        :style="{
          'border-radius': value,
        }"
        class="example"
        @click="copy(name)"
      >
        {{ name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.example {
  display: flex;
  align-items: center;
  text-align: center;

  border: 2px solid var(--vp-c-default-1);
  padding: 5px;
  width: 7rem;
  height: 7rem;
}
</style>
