import type { Meta, StoryObj } from "@storybook/react";
import { CardPromoNo } from "./card-promo";

const meta: Meta<typeof CardPromoNo> = {
  component: CardPromoNo,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
