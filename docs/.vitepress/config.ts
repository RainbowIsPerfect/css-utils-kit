import { defineConfig } from "vitepress";
import { styles } from "../../src";

const paths = Object.keys(styles).map((key) => ({
  text: key.charAt(0).toUpperCase() + key.slice(1),
  link: `/${key}`,
}));

// https://vitepress.dev/reference/site-config
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
    // https://vitepress.dev/reference/default-theme-config
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

