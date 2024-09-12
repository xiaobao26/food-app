import type { Meta, StoryObj } from "@storybook/react";
import { NavbarMobile } from ".";

const meta: Meta<typeof NavbarMobile> = {
  title: "Components/Navbar",
  component: NavbarMobile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
