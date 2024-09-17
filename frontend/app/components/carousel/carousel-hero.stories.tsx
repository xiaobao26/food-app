import type { Meta, StoryObj } from "@storybook/react";
import CarouselHero from "./carousel-hero";
import { fakeSlidesHero } from "@/app/data/data-fake";

const meta: Meta<typeof CarouselHero> = {
  title: "Components/Carousel/Hero",
  component: CarouselHero,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides: fakeSlidesHero,
  },
};
