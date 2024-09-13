"use client";

import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import "./carouselhero.css";
import Image from "next/image";
import { DotButton, useDotButton } from "./carousel-hero-dot-button";

const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function CarouselHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [ClassNames()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    () => {}
  );

  return (
    <div className="embla w-full relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__containe flex">
          {SLIDES.map((index) => (
            <div
              key={index}
              className="embla__slide embla__class-names flex-[0_0_100%] w-full aspect-[4/3] relative"
            >
              <Image
                src={`/HERO_WEB_Mobile_750x1040_${index + 1}.png`}
                alt={`hero_${index + 1}`}
                fill
                style={{ objectFit: "cover", objectPosition: "0% 10%" }}
                // Why add this priority attribute, see https://nextjs.org/docs/pages/api-reference/components/image#priority
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
