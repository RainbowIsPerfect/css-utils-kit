<script setup lang="ts">
import BreakpointInner from "./BreakpointInner.vue";
import { breakpoints } from "../../src/style.breakpoints";
</script>

<template>
  <div>
    <div
      v-for="(breakpoint, name) in breakpoints"
      style="display: flex; gap: 5px; margin-bottom: 5px"
    >
      <BreakpointInner
        :breakpoint
        :name
      />
    </div>
  </div>
</template>

<style scoped></style>
