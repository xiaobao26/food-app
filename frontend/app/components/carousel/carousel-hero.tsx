"use client";

import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./carousel-hero-dot-button";
import CarouselSlideHero, { TypeSlideHero } from "./carousel-slide-hero";

export default function CarouselHero({ slides }: { slides: TypeSlideHero[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    ClassNames(),
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    () => {}
  );

  return (
    <div className="embla w-full relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              key={slide.title}
              className="embla__slide embla__class-names flex-[0_0_100%] transition-opacity duration-200 ease-in-out [&:not(.is-snapped)]:opacity-50"
            >
              <CarouselSlideHero slide={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-[5%] flex w-full justify-center">
        <div className="embla__dots flex gap-3">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                "embla__dot w-2 h-2 rounded-full flex items-center" +
                (index === selectedIndex
                  ? " embla__dot--selected bg-transparent border-1 border-white border-solid"
                  : " bg-white")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
