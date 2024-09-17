import CarouselHero from "@/app/components/carousel/carousel-hero";
import H2 from "@/app/components/heading/h2";
import { fakeSlidesHero } from "@/app/data/data-fake";

export default async function Page() {
  return (
    <>
      <CarouselHero slides={fakeSlidesHero} />
      <H2>Promos & Rewards</H2>
    </>
  );
}
