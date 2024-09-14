"use client";

import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./carousel-hero-dot-button";
import ButtonCustom from "../button/button-custom";
import { Link } from "@nextui-org/react";

export type TypeSlideHero = {
  title: string;
  smallTitle: string;
  imgSrcMobile: string;
  orderLink: string;
  note: string;
  imgSrcDesktop?: string;
};

type CarouselHeroProps = {
  slides: TypeSlideHero[];
};

export default function CarouselHero({ slides }: CarouselHeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    ClassNames(),
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    () => {}
  );

  return (
    <div className="embla w-full relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__containe flex">
          {slides.map((slide) => (
            <div
              key={slide.title}
              className="embla__slide embla__class-names flex-[0_0_100%] transition-opacity duration-200 ease-in-out [&:not(.is-snapped)]:opacity-50 relative"
            >
              <picture>
                <source
                  media="(min-width: 640px)"
                  srcSet={slide.imgSrcDesktop}
                />
                <img
                  src={slide.imgSrcMobile}
                  alt={slide.title}
                  className="w-full aspect-[4/3] object-cover object-[0_10%] sm:aspect-auto brightness-75"
                />
              </picture>
              <div className="absolute bottom-[20%] left-[10%] flex flex-col gap-3">
                <div>
                  <div className="font-sans text-sm text-white uppercase font-medium">
                    {slide.smallTitle}
                  </div>
                  <div className="font-sans text-2xl text-white uppercase font-bold">
                    {slide.title}
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <ButtonCustom
                    size="md"
                    radius="full"
                    as={Link}
                    href={slide.orderLink}
                    className="w-32 h-8 text-xs bg-[#E4002B] text-white hover:border-2 hover:border-[#E4002B] hover:bg-white hover:text-[#E4002B]"
                  >
                    Order Now
                  </ButtonCustom>
                  <div className="font-serif text-xs text-white ml-2">
                    {slide.note}
                  </div>
                </div>
              </div>
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
