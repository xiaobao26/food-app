import { ReactNode } from "react";

type H2Props = {
  children?: ReactNode;
  label?: string;
};

export default function H2(props: H2Props) {
  return (
    <h2 className="font-n2c text-black text-2xl sm:text-4xl uppercase tracking-wider">
      {props.label ? props.label : props.children}
    </h2>
  );
}
