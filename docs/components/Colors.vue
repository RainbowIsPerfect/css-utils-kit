<script setup lang="ts">
defineProps<{ colors: any[] }>();

const fn = (data) => window.navigator.clipboard.writeText(data);
</script>

<template>
  <div>
    <div
      v-for="(color, name) in colors"
      :key="name"
      style="display: flex; gap: 5px; margin-bottom: 5px"
    >
      <div
        v-for="(tone, name) in color"
        :style="{
          'background-color': tone,
          width: '1.5rem',
          height: '1.5rem',
          cursor: 'pointer',
          'border-radius': '5px',
        }"
        @click="() => fn(tone)"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
