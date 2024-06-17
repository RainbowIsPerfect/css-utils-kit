---
outline: deep
---

<script setup>
import Breakpoint from '/components/Breakpoint.vue'
import Borders from  './components/Borders.vue'
import Colors from  './components/Colors.vue'
import { useData } from 'vitepress'
const { params } = useData();

const component = {
  breakpoints: Breakpoint,
  borders: Borders,
  colors: Colors,
}[params.value.page];


</script>

# {{$params.feature}}

{{$params.description}}

<component :is="component"></component>

## Usage

```css-vue
{{ params.usage }}
```
