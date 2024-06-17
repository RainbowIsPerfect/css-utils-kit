<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
const props = defineProps<{ breakpoint: string; name: string }>();
const isMatch = useMediaQuery(`(min-width: ${props.breakpoint})`);
</script>

<template>
  <div :style="{ color: isMatch ? 'green' : 'red' }">
    {{ name + ": " + breakpoint }}
  </div>
</template>

<style scoped></style>
