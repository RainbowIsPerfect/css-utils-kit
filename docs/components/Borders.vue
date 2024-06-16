<script setup lang="ts">
import BreakpointInner from "./BreakpointInner.vue";
defineProps<{
  borderWidth: Record<string, string>;
  borderRadius: Record<string, string>;
}>();
</script>

<template>
  <div>
    <div
      v-for="(width, name) in borderWidth"
      :style="{
        border: width + ' solid black',
        'margin-bottom': '10px',
        padding: '5px',
        'text-align': 'center',
      }"
    >
      {{ name }}
    </div>
    <div
      v-for="(r, name) in borderRadius"
      :style="{
        'border-radius': r,
        border: '1px solid black',
        'margin-bottom': '10px',
        padding: '5px',
        'text-align': 'center',
      }"
    >
      {{ name }}
    </div>
  </div>
</template>

<style scoped></style>
