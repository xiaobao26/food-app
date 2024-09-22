import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../app/**/*.mdx",
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  // https://storybook.js.org/docs/get-started/frameworks/nextjs?renderer=react#nextjs-font-optimization
  staticDirs: [
    "../public",
    {
      from: "../public/fonts",
      to: "public/fonts",
    },
  ],

  // svgr config for typescript + storybook + next.js + webpack https://github.com/storybookjs/storybook/issues/18557#issuecomment-2179530837
  webpackFinal: async (config) => {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module?.rules?.find((rule) =>
      (rule as { test?: RegExp })?.test?.test(".svg")
    ) as { [key: string]: any };

    config.module?.rules?.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule?.resourceQuery?.not || []), /url/],
        }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
export default config;
