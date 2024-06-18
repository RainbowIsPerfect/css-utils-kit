import cssnano from "cssnano";
import cssImports from "postcss-import";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [cssImports, cssnano],
};

export default config;
