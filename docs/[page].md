---
outline: deep
---

<script setup>
import AnimationsDemo from  "./components/AnimationsDemo.vue"
import Breakpoint from "/components/Breakpoint.vue"
import Borders from  "./components/Borders.vue"
import Colors from  "./components/Colors.vue"
import FontsDemo from "./components/FontsDemo.vue"
import SizingsDemo from "./components/SizingsDemo.vue"
import { useData } from "vitepress"
const { params } = useData();

const component = {
  animations: AnimationsDemo,
  breakpoints: Breakpoint,
  borders: Borders,
  colors: Colors,
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
