import * as React from "react";
import type { Preview } from "@storybook/react";
import "../app/components/global.css";
import { DocsContainer } from "@storybook/blocks";
import { fontN2C, fontN2R, fontN2M } from "../app/components/font";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import BREAKPOINT_VIEWPORT from "./breakpoint-viewport";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: (props: any) => (
        <DocsContainer {...props}>
          <div
            className={`${fontN2C.variable} ${fontN2M.variable} ${fontN2R.variable}`}
          >
            {props.children}
          </div>
        </DocsContainer>
      ),
    },
    viewport: {
      viewports: {
        ...BREAKPOINT_VIEWPORT,
        ...INITIAL_VIEWPORTS,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${fontN2C.variable} ${fontN2M.variable} ${fontN2R.variable}`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
