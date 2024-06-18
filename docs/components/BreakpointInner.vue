<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
const props = defineProps<{ breakpoint: string; name: string }>();
const isMatch = useMediaQuery(`(min-width: ${props.breakpoint})`);
</script>

<template>
  <button
    :style="{ color: isMatch ? 'green' : 'red' }"
    class="example"
  >
    {{ name + ": " + breakpoint }}
  </button>
</template>

<style scoped>
.example {
  border: 2px solid var(--vp-c-default-1);
  width: 100%;
  padding: 5px;
  text-align: center;
}
</style>
