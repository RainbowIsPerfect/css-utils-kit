import { defineLoader } from "vitepress";
import { getStylesDeclarations, propertyNames } from "./getStylesDeclarations";

export interface Data {
  // WIP
}

declare const data: Data;
export { data };

export default defineLoader({
  load() {
    const data = {};
    propertyNames.forEach((v) => (data[v] = getStylesDeclarations(v)));

    return data;
  },
});
