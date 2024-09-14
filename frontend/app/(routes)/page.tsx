import CarouselHero from "@/components/carousel/carousel-hero";
import H2 from "@/components/heading/h2";
import { fakeSlidesHero } from "@/data/data-fake";

export default async function Page() {
  return (
    <>
      <CarouselHero slides={fakeSlidesHero} />
      <H2>Promos & Rewards</H2>
    </>
  );
}
