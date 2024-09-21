"use client";

import {
  CardPromo,
  CardPromoLogin,
  CardPromoNo,
  TypePromo,
} from "../card/card-promo";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

export default function CarouselPromo({
  slides: promos,
}: {
  slides: TypePromo[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      breakpoints: { "(max-width: 639px)": { dragFree: true } },
      align: "start",
    },
    [ClassNames()]
  );

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide embla__class-names flex-none py-1 px-2">
            <CardPromoNo />
          </div>
          <div className="embla__slide embla__class-names flex-none py-1 px-2">
            <CardPromoLogin />
          </div>
          {promos.map((promo, index) => (
            <div className="embla__slide embla__class-names flex-none py-1 px-2">
              <CardPromo key={index} promo={promo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
