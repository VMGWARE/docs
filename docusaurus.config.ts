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
        {
          type: "doc",
          docId: "intro",
          activeBaseRegex: "docs",
          position: "left",
          label: "Docs",
        },
        // Camphouse
        {
          to: "/docs/camphouse/intro",
          activeBaseRegex: "docs/camphouse",
          position: "left",
          label: "Camphouse",
        },
        // vATC Suite
        {
          to: "/docs/vatc-suite/intro",
          activeBaseRegex: "docs/vatc-suite",
          position: "left",
          label: "vATC Suite",
        },
        // JS Validator
        {
          to: "/docs/js-validator/intro",
          activeBaseRegex: "docs/js-validator",
          position: "left",
          label: "JS Validator",
        },
        // JS Logger
        {
          to: "/docs/js-logger/intro",
          activeBaseRegex: "docs/js-logger",
          position: "left",
          label: "JS Logger",
        },
        // GitHub
        {
          href: "https://github.com/vmgware",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub",
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
