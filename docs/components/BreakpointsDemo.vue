<script setup lang="ts">
import { useWindowSize, useClipboard } from "@vueuse/core";
import BreakpointInner from "./BreakpointInner.vue";
import { data } from "../styles.data";
const breakpoints = data.breakpoints.breakpoint;

const { width } = useWindowSize();
const { copy } = useClipboard();
</script>

<template>
  <div class="container">
    <p>Window width: {{ width }}</p>
    <BreakpointInner
      v-for="{value, name} in breakpoints"
      :breakpoint="value"
      :name
      @click="copy(name)"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
