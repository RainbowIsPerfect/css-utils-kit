---
outline: deep
---

<script setup>
import AnimationsDemo from  "./components/AnimationsDemo.vue"
import BreakpointsDemo from "/components/BreakpointsDemo.vue"
import BordersDemo from  "./components/BordersDemo.vue"
import ColorsDemo from  "./components/ColorsDemo.vue"
import FontsDemo from "./components/FontsDemo.vue"
import SizingsDemo from "./components/SizingsDemo.vue"
import { useData } from "vitepress"
const { params } = useData();


const component = {
  animations: AnimationsDemo,
  breakpoints: BreakpointsDemo,
  borders: BordersDemo,
  colors: ColorsDemo,
  fonts: FontsDemo,
  sizings: SizingsDemo,
}[params.value.page];


</script>

# {{$params.feature}}

{{$params.description}}

<component :is="component"></component>

## Usage

```css-vue
{{ params.usage }}
```
