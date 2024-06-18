<script setup lang="ts">
import { borderRadius, borderWidth } from "../../src/borders";
import { useClipboard } from "@vueuse/core";

const { copy } = useClipboard();
</script>

<template>
  <div>
    <h2>Border Width</h2>
    <div class="app-container">
      <button
        v-for="(width, name) in borderWidth"
        :style="{
          'border-width': width,
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
        v-for="(r, name) in borderRadius"
        :style="{
          'border-radius': r,
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
