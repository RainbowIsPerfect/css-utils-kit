<script setup lang="ts">
import {
  fontSizes,
  fontWeigh,
  letterSpacing,
  lineHeight,
} from "../../src/fonts";
import { useClipboard } from "@vueuse/core";

const { copy } = useClipboard();
</script>

<template>
  <div>
    <h2>Font sizes</h2>
    <div>
      <button
        v-for="(size, name) in fontSizes"
        :style="{ 'font-size': size, lineHeight: size }"
        class="example-size"
        @click="copy(name)"
      >
        {{ name }}
      </button>
    </div>

    <h2>Font weights</h2>
    <button
      v-for="(weight, name) in fontWeigh"
      :style="{ 'font-weight': weight }"
      class="example-size"
      @click="copy(name)"
    >
      {{ name }}
    </button>

    <h2>Line heights</h2>
    <button
      v-for="(height, name) in lineHeight"
      :style="{ 'line-height': height }"
      class="example-size"
      @click="copy(name)"
    >
      {{ name }}
    </button>

    <h2>Letter spacings</h2>
    <button
      v-for="(spacing, name) in letterSpacing"
      :style="{ 'letter-spacing': spacing }"
      class="example-size"
      @click="copy(name)"
    >
      {{ name }}
    </button>
  </div>
</template>

<style scoped>
.example-size {
  display: block;
  padding: 0.2rem;
  text-align: start;
  border: 2px solid var(--vp-c-default-1);
}
.example-size:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
