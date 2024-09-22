import { Card, CardFooter, CardHeader, Link } from "@nextui-org/react";
import ButtonMedium from "../button/button-medium";

import NextLink from "next/link";
import Image from "next/image";

export type TypePromo = {
  title: string;
  imgSrc: string;
  detail: string;
  detailLink: string;
  redeemLink: string;
};

function CardPromoDecorator(props: any) {
  return (
    <div className={"w-60 h-[440px] lg:w-72 lg:h-[480px]"}>
      {props.children}
    </div>
  );
}

export function CardPromo({ promo }: { promo: TypePromo }) {
  return (
    <CardPromoDecorator>
      <Card shadow="sm" className="w-full h-full bg-[#f9f6f5] flex flex-col">
        <Image
          src={promo.imgSrc}
          alt={promo.title}
          width={240}
          height={(240 * 3) / 4}
          className="w-full"
        />
        <div className="p-6 flex-grow flex flex-col items-center justify-between">
          <div className="flex-grow flex flex-col items-center gap-4">
            <div className="w-full h-16 flex items-center justify-center">
              <p className="font-n2c uppercase text-2xl text-center line-clamp-2">
                {promo.title}
              </p>
            </div>
            <p className="font-n2r text-sm text-center w-full h-10 line-clamp-2">
              {promo.detail}
            </p>
            <Link
              as={NextLink}
              href={promo.detailLink}
              underline="always"
              className="font-n2m text-sm text-center text-black"
            >
              View Details
            </Link>
          </div>
          <ButtonMedium
            size="md"
            fullWidth
            as={Link}
            href={promo.redeemLink}
            className="font-n2m bg-black text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
          >
            Redeem
          </ButtonMedium>
        </div>
      </Card>
    </CardPromoDecorator>
  );
}

export function CardPromoNo() {
  return (
    <CardPromoDecorator>
      <Card shadow="sm" className="w-full h-full bg-[#f9f6f5] justify-center">
        <CardHeader className="flex-col gap-6">
          <p className="font-n2c text-black text-3xl text-center uppercase">
            No promos right now 🤔
          </p>
          <p className="font-n2r text-black text-xs text-center">
            Tips: Check back during your chosen restaurant's opening hours
            <span className="not-italic"> 😋</span>
          </p>
        </CardHeader>
      </Card>
    </CardPromoDecorator>
  );
}

export function CardPromoLogin() {
  return (
    <CardPromoDecorator>
      <Card shadow="sm" className="w-full h-full bg-[#f9f6f5] flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('/images/PROMO_LOGIN.png')]">
        <CardHeader className="font-n2c text-3xl text-white tracking-wider uppercase flex-col gap-3">
          <p>Sign in to see</p>
          <p>Extra rewards,</p>
          <p>Just for you</p>
        </CardHeader>
        <CardFooter>
          <ButtonMedium
            size="md"
            radius="full"
            fullWidth
            as={Link}
            href="#"
            className="font-n2m bg-[#E4002B] border-2 text-white border-white hover:bg-white hover:text-[#E4002B]"
          >
            Sign In
          </ButtonMedium>
        </CardFooter>
      </Card>
    </CardPromoDecorator>
  );
}
