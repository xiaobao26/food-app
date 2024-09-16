"use client";

import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, useDotButton } from "./carousel-hero-dot-button";
import ButtonCustom from "../button/button-custom";
import { Link } from "@nextui-org/react";
import styled from "styled-components";
import { national2Condensed, national2Regular } from "../font";

export type TypeSlideHero = {
  title: string;
  smallTitle: string;
  imgSrcMobile: string;
  orderLink: string;
  note: string;
  imgSrcDesktop: string;
};

type CarouselHeroProps = {
  slides: TypeSlideHero[];
};

const CarouselHeroSlide = styled.div<{ slide: TypeSlideHero }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      190.77deg,
      rgba(32, 33, 36, 0) 21.45%,
      rgba(32, 33, 36, 0.6) 98.01%
    ),
    url(${(props) => props.slide.imgSrcMobile});
  background-size: cover;

  @media (min-width: 640px) {
    background-image: url(${(props) => props.slide.imgSrcDesktop});
  }
`;

export default function CarouselHero({ slides }: CarouselHeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    ClassNames(),
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: false,
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
            <CarouselHeroSlide
              key={slide.title}
              className="embla__slide embla__class-names flex-[0_0_100%] w-full aspect-[4/3] sm:aspect-[16/7] transition-opacity duration-200 ease-in-out [&:not(.is-snapped)]:opacity-50 flex justify-center"
              slide={slide}
            >
              <div className="max-w-screen-lg w-full flex flex-col gap-3 justify-center pl-[10%] lg:pl-[102.4px]">
                <div>
                  <div
                    className={`${national2Condensed.className} text-sm tracking-widest text-white uppercase`}
                  >
                    {slide.smallTitle}
                  </div>
                  <div
                    className={`${national2Condensed.className} text-xl text-white uppercase`}
                  >
                    {slide.title}
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <ButtonCustom
                    size="md"
                    radius="full"
                    as={Link}
                    href={slide.orderLink}
                    className={`${national2Regular.className} w-32 h-8 text-xs bg-[#E4002B] text-white hover:border-2 hover:border-[#E4002B] hover:bg-white hover:text-[#E4002B]`}
                  >
                    Order Now
                  </ButtonCustom>
                  <div
                    className={`${national2Regular.className} font-serif text-xs text-white ml-2`}
                  >
                    {slide.note}
                  </div>
                </div>
              </div>
            </CarouselHeroSlide>
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
