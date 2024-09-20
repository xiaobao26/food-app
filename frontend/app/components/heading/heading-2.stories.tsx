import type { Meta, StoryObj } from "@storybook/react";
import H2 from "./heading-2";

const meta: Meta<typeof H2> = {
  component: H2,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Promos & Rewards",
  },
};
