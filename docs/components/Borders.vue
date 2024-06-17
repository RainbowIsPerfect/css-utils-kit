<script setup lang="ts">
import { borders } from "../../src/style.borders";
</script>

<template>
  <div>
    <div
      v-for="(width, name) in borders.borderWidth"
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
      v-for="(r, name) in borders.borderRadius"
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
