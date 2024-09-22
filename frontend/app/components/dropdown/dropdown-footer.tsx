"use client";

import Link from "next/link";
import IconArrowDown from "@/public/icons/icon-arrow-down.svg";
import IconArrowUp from "@/public/icons/icon-arrow-up.svg";
import { useState } from "react";

export type TypeNavFooter = {
  category: string;
  links: { name: string; link: string }[];
};

export default function DropdownFooter({
  navFooter,
}: {
  navFooter: TypeNavFooter;
}) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div
      className={`w-full font-n2r text-sm text-white ${
        open ? "bg-[#2f3133]" : ""
      } lg:flex-grow`}
    >
      <button
        className="w-full flex items-center justify-between p-4 border-y border-[#494949] lg:hidden"
        onClick={handleClick}
      >
        <span>{navFooter.category}</span>
        {open ? (
          <IconArrowUp width={12} height={12} />
        ) : (
          <IconArrowDown width={12} height={12} />
        )}
      </button>
      <p className="hidden font-n2m lg:block px-4">{navFooter.category}</p>
      <ul
        className={`${
          open ? "block" : "hidden"
        } px-4 border-y border-[#494949] lg:block lg:border-0`}
      >
        {navFooter.links.map((link) => (
          <li key={link.name} className="my-4 lg:my-3">
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
