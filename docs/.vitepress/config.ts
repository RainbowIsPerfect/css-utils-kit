import { defineConfig } from "vitepress";
import { propertyNames } from "../getStylesDeclarations";

const paths = propertyNames.map((file) => ({
  text: file.charAt(0).toUpperCase() + file.slice(1),
  link: `/${file}`,
}));

export default defineConfig({
  title: "CSS Utils Kit",
  description: "A VitePress Site",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>",
      },
    ],
  ],
  transformPageData(pageData) {
    if (pageData?.params?.page) {
      pageData.title = pageData.params.page;
    }
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/getting-started" },
    ],

    sidebar: [
      {
        text: "Features",
        items: [...paths],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/RainbowIsPerfect/css-utils-kit",
      },
    ],
  },
});

