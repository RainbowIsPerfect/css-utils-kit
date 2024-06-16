---
outline: deep
---

<script setup>
import breakpoints from '../src/style.breakpoints.js';
import Breakpoint from '/components/Breakpoint.vue'
</script>

# Breakpoints

Breakpoints.

<Breakpoint :breakpoints />

## Usage

```css
@media (min-width: var(--breakpoint-2)) {
  /* */
}
```