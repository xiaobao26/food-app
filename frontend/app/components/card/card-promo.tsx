import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import ButtonCustom from "../button/button-custom";

export type CardPromoProps = {
  title: string;
  imgSrc: string;
  detail: string;
  detailLink: string;
  redeemLink: string;
};

export default function CardPromo(props: CardPromoProps) {
  return (
    <Card className="w-60 h-[480px] bg-[#f9f6f5]">
      <CardHeader className="flex-col p-0">
        <Image src={props.imgSrc} alt={props.title} width="100%" />
      </CardHeader>
      <CardBody className="flex-col items-center justify-center gap-4">
        <span className="font-sans uppercase text-2xl font-bold text-center">
          {props.title}
        </span>
        <p className="text-sm text-center">{props.detail}</p>
        <Link
          href={props.detailLink}
          underline="always"
          className="text-sm text-center"
        >
          View Details
        </Link>
      </CardBody>
      <CardFooter className="flex-col items-center">
        <ButtonCustom
          size="md"
          radius="full"
          fullWidth
          as={Link}
          href={props.redeemLink}
          className="bg-black text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
        >
          Redeem
        </ButtonCustom>
      </CardFooter>
    </Card>
  );
}
