"use client";

import { CardPromo, TypePromo } from "../card/card-promo";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

export default function CarouselPromo({
  slides: promos,
}: {
  slides: TypePromo[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      breakpoints: { "(max-width: 639px)": { dragFree: true } },
    },
    [ClassNames()]
  );

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex my-1 -ml-5">
          {promos.map((promo, index) => (
            <div className="embla__slide embla__class-names flex-none pl-6">
              <CardPromo key={index} promo={promo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
