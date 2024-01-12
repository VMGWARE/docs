import { themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import * as path from "path";

const config: Config = {
  title: "VMG Ware",
  tagline: "Crafting exceptional open-source software for the community. ",
  url: "https://vmgware.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onDuplicateRoutes: "throw",
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "VMG Ware",
      logo: {
        alt: "VMG Ware Logo",
        src: "img/logo.svg",
      },
      items: [
        // Camphouse
        {
          to: "/camphouse/intro",
          position: "left",
          label: "Camphouse",
        },
        // vATC Suite
        {
          to: "/vatcsuite/intro",
          position: "left",
          label: "vATC Suite",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} VMG Ware. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: [
        "diff",
        "json",
        "docker",
        "javascript",
        "css",
        "bash",
        "nginx",
        "apacheconf",
        "ini",
        "nix",
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    colorMode: {
      respectPrefersColorScheme: false,
      defaultMode: "dark",
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    () => ({
      name: "docusaurus-plugin-favicon",
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: "link",
              attributes: {
                rel: "icon",
                href: "/img/favicon.ico",
                sizes: "any",
              },
            },
            {
              tagName: "link",
              attributes: {
                rel: "icon",
                href: "/img/favicon.svg",
                type: "image/svg+xml",
              },
            },
          ],
        };
      },
    }),
    () => ({
      name: "webpack-config",
      configureWebpack() {
        return {
          devServer: {
            client: {
              webSocketURL: "auto://0.0.0.0:0/ws",
            },
          },
        };
      },
    }),
    [
      "content-docs",
      {
        id: "camphouse",
        path: "camphouse",
        routeBasePath: "camphouse",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "content-docs",
      {
        id: "vatcsuite",
        path: "vatcsuite",
        routeBasePath: "vatcsuite",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        target: isServer ? "node12" : "es2017",
      },
    }),
  },
  markdown: {
    format: "detect",
  },
};

export default config;
