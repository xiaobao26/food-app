import type { Meta, StoryObj } from "@storybook/react";

import { button, Button } from "@nextui-org/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonSmall: Story = {
  args: {
    children: "Small",
    size: "sm",
    radius: "full",
  },
};

export const ButtonMedium: Story = {
  args: {
    children: "Mediumd",
    size: "md",
    radius: "full",
    className: "px-10 w-44 h-10",
  },
};
