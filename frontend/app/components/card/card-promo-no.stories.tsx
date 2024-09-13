import type { Meta, StoryObj } from "@storybook/react";
import CardPromoNo from "./card-promo-no";

const meta: Meta<typeof CardPromoNo> = {
  title: "Components/Card/Promos No",
  component: CardPromoNo,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
