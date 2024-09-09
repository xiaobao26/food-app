import type { Meta, StoryObj } from "@storybook/react";

import { button, Button } from "@nextui-org/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

const defaultProps = {
  children: "Button",
  // spinnerPlacement: "start",
  ...button.defaultVariants,
};

type Story = StoryObj<typeof meta>;

export const ReviewOrder: Story = {
  args: {
    ...defaultProps,
    children: "Review Order",
    radius: "full",
    className: "bg-[#e4002b] text-white px-10",
  },
};

export const OrderNow: Story = {
  args: {
    ...defaultProps,
    children: "Order Now",
    radius: "full",
    className: "bg-[#e4002b] text-white px-10 w-44 h-10",
  },
};