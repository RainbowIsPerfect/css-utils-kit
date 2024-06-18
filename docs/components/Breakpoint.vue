<script setup lang="ts">
import BreakpointInner from "./BreakpointInner.vue";
import { breakpoints } from "../../src/breakpoints";
import { useWindowSize, useClipboard } from "@vueuse/core";

const { width } = useWindowSize();
const { copy } = useClipboard();
</script>

<template>
  <div class="container">
    <p>Window width: {{ width }}</p>
    <BreakpointInner
      v-for="(breakpoint, name) in breakpoints"
      :breakpoint
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
