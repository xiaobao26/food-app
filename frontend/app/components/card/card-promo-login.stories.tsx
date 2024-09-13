import type { Meta, StoryObj } from "@storybook/react";
import CardPromoLogin from "./card-promo-login";

const meta: Meta<typeof CardPromoLogin> = {
  title: "Components/Card/Promos Login",
  component: CardPromoLogin,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
