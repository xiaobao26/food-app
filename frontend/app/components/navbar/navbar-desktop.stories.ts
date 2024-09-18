import type { Meta, StoryObj } from "@storybook/react";
import { NavbarDesktop } from ".";

const meta: Meta<typeof NavbarDesktop> = {
  component: NavbarDesktop,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
