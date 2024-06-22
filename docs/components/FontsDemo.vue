<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { data } from "../styles.data";
const fonts = data.fonts;

const { copy } = useClipboard();
</script>

<template>
  <div>
    <h2>Font sizes</h2>
    <div>
      <button
        v-for="{value, name} in fonts['text-size']"
        :style="{ 'font-size': value, lineHeight: value }"
        class="example-size"
        @click="copy(name)"
      >
        {{ name }}
      </button>
    </div>

    <h2>Font weights</h2>
    <button
      v-for="{value, name} in fonts['text-weight']"
      :style="{ 'font-weight': value }"
      class="example-size"
      @click="copy(name)"
    >
      {{ name }}
    </button>

    <h2>Line heights</h2>
    <button
      v-for="{value, name} in fonts['text-height']"
      :style="{ 'line-height': value }"
      class="example-size"
      @click="copy(name)"
    >
      {{ name }}
    </button>

    <h2>Letter spacings</h2>
    <button
      v-for="{value, name} in fonts['text-spacing']"
      :style="{ 'letter-spacing': value }"
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
