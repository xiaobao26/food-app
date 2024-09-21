import type { Meta, StoryObj } from "@storybook/react";

import ButtonMedium from "./button-medium";

const meta: Meta<typeof ButtonMedium> = {
  title: "Components/Button",
  component: ButtonMedium,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonMobileSmall: Story = {
  args: {
    children: "Label",
    size: "sm",
    radius: "full",
  },
};

export const ButtonMobileMedium: Story = {
  args: {
    children: "Label",
    size: "md",
    radius: "full",
    className: "px-6",
  },
};

export const ButtonMobileFilled: Story = {
  args: {
    children: "Label",
    size: "md",
    variant: "solid",
    radius: "full",
    className: "px-6 bg-[#E4002B] text-white",
  },
};

export const ButtonMobileOutlined: Story = {
  args: {
    children: "Label",
    size: "md",
    radius: "full",
    className:
      "px-6 bg-white border text-black border-black hover:bg-black hover:text-white",
  },
};
