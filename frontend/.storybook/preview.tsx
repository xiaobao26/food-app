import React from "react";
import type { Preview } from "@storybook/react";
import "../app/components/global.css";
import localFont from "next/font/local";

export const fontN2C = localFont({
  src: "../fonts/National2_Condensed_Bold.otf",
  display: "swap",
  variable: "--font-n2c",
});

export const FontN2R = localFont({
  src: "../fonts/National2_Regular.otf",
  display: "swap",
  variable: "--font-n2r",
});

export const fontN2M = localFont({
  src: "../fonts/National2_Medium.otf",
  display: "swap",
  variable: "--font-n2m",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${fontN2C.variable} ${fontN2M.variable} ${FontN2R.variable}`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
