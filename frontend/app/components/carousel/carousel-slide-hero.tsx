import Image, { getImageProps } from "next/image";
import ButtonMedium from "../button/button-medium";
import Link from "next/link";

export type TypeSlideHero = {
  title: string;
  smallTitle: string;
  imgSrcMobile: string;
  orderLink: string;
  note: string;
  imgSrcDesktop: string;
};

export default function CarouselSlideHero({ slide }: { slide: TypeSlideHero }) {
  const common = { alt: slide.title, sizes: "100vw", priority: true };
  const {
    props: { srcSet: imgSrcDesktop },
  } = getImageProps({
    ...common,
    src: slide.imgSrcDesktop,
    width: 2880,
    height: 1260,
  });
  const {
    props: { srcSet: imgSrcMobile, ...rest },
  } = getImageProps({
    ...common,
    src: slide.imgSrcMobile,
    width: 400,
    height: (400 * 2) / 3,
  });

  return (
    <div className="relative w-full aspect-[3/2] sm:aspect-[16/7]  flex justify-center">
      <picture className="absolute w-full h-full z-[-1]">
        <source media="(min-width: 640px)" srcSet={imgSrcDesktop} />
        <source media="(max-width: 639px)" srcSet={imgSrcMobile} />
        <img
          {...rest}
          className="w-full h-full brightness-75 object-cover object-[0_12%] sm:object-[0_0]"
        />
      </picture>
      <div className="max-w-screen-lg w-full flex flex-col gap-4 sm:gap-6 justify-center pl-[10%] lg:pl-[102.4px]">
        <div>
          <div
            className={`font-n2c text-sm sm:text-lg tracking-widest text-white uppercase`}
          >
            {slide.smallTitle}
          </div>
          <div className={`font-n2c text-xl sm:text-5xl text-white uppercase`}>
            {slide.title}
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <ButtonMedium
            size="md"
            as={Link}
            href={slide.orderLink}
            className="bg-[#E4002B] text-white hover:border-2 hover:border-[#E4002B] hover:bg-white hover:text-[#E4002B]"
          >
            Order Now
          </ButtonMedium>
          <div className="font-n2r text-xs text-white ml-2">{slide.note}</div>
        </div>
      </div>
    </div>
  );
}
