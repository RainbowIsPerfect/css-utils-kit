<script setup lang="ts">
import { ref } from "vue";
import { useElementSize } from "@vueuse/core";
import { sizings } from "../../src/sizings";

const currentSizing = ref(sizings["--size-1"]);
const exampleRef = ref(null);
const { width } = useElementSize(
  exampleRef,
  { height: 0, width: 0 },
  { box: "border-box" },
);
</script>

<template>
  <select
    v-model="currentSizing"
    class="select"
  >
    <option
      v-for="(sizing, name) in sizings"
      :value="sizing"
    >
      {{ name }}
    </option>
  </select>
  <div class="overflow">
    <p>Width: {{ width }}</p>
    <div
      :style="{ width: currentSizing }"
      ref="exampleRef"
      class="example"
    ></div>
  </div>
</template>

<style scoped>
.example {
  height: 2rem;
  border: 1px solid var(--vp-c-default-1);
}

.overflow {
  padding: 0.5rem;
  overflow: auto;
}

.select {
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  width: 100%;
  cursor: pointer;
}
</style>
