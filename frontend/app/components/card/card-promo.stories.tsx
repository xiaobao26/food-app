import type { Meta, StoryObj } from "@storybook/react";
import { CardPromo, TypePromo } from "./card-promo";

const meta: Meta<typeof CardPromo> = {
  component: CardPromo,
};

export default meta;

type Story = StoryObj<typeof meta>;

const promo: TypePromo = {
  title: "Cheap as chips Cheap as chips Cheap as chips",
  imgSrc: "/images/PROMO_CHEAP_AS_CHIPS.png",
  detail:
    "That's 8 delicious pieces of Original Recipe with a bunch of classics.",
  detailLink: "#",
  redeemLink: "#",
};

export const Default: Story = {
  args: {
    promo,
  },
};
