import { ReactNode } from "react";

type H2Props = {
  children?: ReactNode;
  label?: string;
};

export default function H2(props: H2Props) {
  return (
    <h2 className="font-mono text-black text-xl uppercase font-bold tracking-wide text-center">
      {props.label ? props.label : props.children}
    </h2>
  );
}
