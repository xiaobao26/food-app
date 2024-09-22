import type { Meta, StoryObj } from "@storybook/react";
import CarouselHero from "./carousel-hero";
import { FAKE_SLIDES_HERO } from "@/app/data/data-fake";

const meta: Meta<typeof CarouselHero> = {
  component: CarouselHero,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides: FAKE_SLIDES_HERO,
  },
};
