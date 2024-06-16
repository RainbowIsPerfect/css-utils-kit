<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps<{ breakpoint: string; name: string }>();
const media = window.matchMedia(`(min-width: ${props.breakpoint})`);
const isMatched = ref(media.matches);
const fn = () => (isMatched.value = media.matches);

onMounted(() => {
  media.addEventListener("change", fn);
});

onUnmounted(() => {
  media.removeEventListener("change", fn);
});
</script>

<template>
  <div :style="{ color: isMatched ? 'green' : 'red' }">
    {{ name + ": " + breakpoint }}
  </div>
</template>

<style scoped></style>
