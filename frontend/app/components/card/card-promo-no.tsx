import { Card, CardHeader } from "@nextui-org/react";

export default function CardPromoNo() {
  return (
    <Card className="w-60 h-[480px] bg-[#f9f6f5] flex justify-center">
      <CardHeader className="flex-col gap-3">
        <p className="font-sans text-black text-5xl text-center font-bold">
          No Promos🤔
        </p>
        <p className="font-serif text-gray-400 text-small italic">
          Tips: please sign in to see extra rewards for you!
          <span className="not-italic">🥰</span>
        </p>
      </CardHeader>
    </Card>
  );
}
