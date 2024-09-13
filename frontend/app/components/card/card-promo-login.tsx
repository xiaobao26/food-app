import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import ButtonCustom from "../button/button-custom";

export default function CardPromoLogin() {
  return (
    <Card className="w-60 h-[480px] bg-[#f9f6f5] flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('/CARD_PROMO_LOGIN.png')]">
      <CardHeader className="flex-col gap-3">
        <p className="font-sans text-white text-2xl text-center font-bold uppercase">
          Sign in to see
        </p>
        <p className="font-sans text-white text-2xl text-center font-bold uppercase">
          Extra rewards,
        </p>
        <p className="font-sans text-white text-2xl text-center font-bold uppercase">
          Just for you
        </p>
      </CardHeader>
      <CardBody className="flex-initial">
        <ButtonCustom
          size="md"
          radius="full"
          className="bg-[#E4002B] border-2 text-white border-white hover:bg-white hover:text-[#E4002B]"
          as={Link}
          href="#"
        >
          Sign In
        </ButtonCustom>
      </CardBody>
    </Card>
  );
}
