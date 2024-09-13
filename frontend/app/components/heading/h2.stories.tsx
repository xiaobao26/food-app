import type { Meta, StoryObj } from "@storybook/react";
import H2 from "./h2";

const meta: Meta<typeof H2> = {
  title: "Components/Heading/H2",
  component: H2,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Promos & Rewards",
  },
};
