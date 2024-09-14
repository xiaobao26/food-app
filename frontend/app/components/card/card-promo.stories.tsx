import type { Meta, StoryObj } from "@storybook/react";
import CardPromo, { CardPromoProps } from "./card-promo";

const meta: Meta<typeof CardPromo> = {
  title: "Components/Card/Promos And Rewards",
  component: CardPromo,
};

export default meta;

type Story = StoryObj<typeof meta>;

const promo: CardPromoProps = {
  title: "$6.95 double slider & chips",
  imgSrc: "/PROMO_DOUBLE_SLIDER_CHIPS.png",
  detail: "Double the Sliders, double the fun! Untile 4pm.",
  detailLink: "#",
  redeemLink: "#",
};

export const Default: Story = {
  args: {
    ...promo,
  },
};
