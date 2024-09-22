import type { Meta, StoryObj } from "@storybook/react";
import { NavbarMobile } from ".";

const meta: Meta<typeof NavbarMobile> = {
  component: NavbarMobile,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "sm" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
