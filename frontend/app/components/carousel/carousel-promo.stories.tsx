import type { Meta, StoryObj } from "@storybook/react";
import { FAKE_SLIDES_PROMO } from "@/app/data/data-fake";
import CarouselPromo from "./carousel-promo";

const meta: Meta<typeof CarouselPromo> = {
  component: CarouselPromo,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides: FAKE_SLIDES_PROMO,
  },
};
