"use client";

import { Link, Navbar, NavbarItem } from "@nextui-org/react";

import {
  IconPoultryLegFilled,
  IconPoultryLegOutlined,
} from "../icon/icon-poultry-leg";
import { IconPriceTagFilled, IconPriceTagOutlined } from "../icon/icon-promo";
import { IconHomeFilled, IconHomeOutlined } from "../icon/icon-home";
import {
  IconKfcChickenBoxfilled,
  IconKfcChickenBoxOutlined,
} from "../icon/icon-kfc-chicken-box";
import { IconMenu } from "../icon/icon-menu";
import {
  LINK_ACCOUNT,
  LINK_CART,
  LINK_HOME,
  LINK_MENU,
  LINK_PROMOS_REWARDS,
} from "@/lib/constants";
import { usePathname } from "next/navigation";
import { splitUrlPathname } from "@/lib/utils";

const navigation = [
  {
    title: "Home",
    link: LINK_HOME,
    iconOutlined: IconHomeOutlined,
    iconFilled: IconHomeFilled,
  },
  {
    title: "Menu",
    link: LINK_MENU,
    iconOutlined: IconPoultryLegOutlined,
    iconFilled: IconPoultryLegFilled,
  },
  {
    title: "Cart",
    link: LINK_CART,
    iconOutlined: IconKfcChickenBoxOutlined,
    iconFilled: IconKfcChickenBoxfilled,
  },
  {
    title: "Promos",
    link: LINK_PROMOS_REWARDS,
    iconOutlined: IconPriceTagOutlined,
    iconFilled: IconPriceTagFilled,
  },
  {
    title: "More",
    link: LINK_ACCOUNT,
    iconOutlined: IconMenu,
    iconFilled: IconMenu,
  },
];

export function NavbarMobile() {
  const pathname = usePathname();
  const basePath = splitUrlPathname(pathname)[0];

  return (
    <Navbar className="rounded-t-lg shadow-[rgba(99,99,99,0.2)_0px_-2px_8px_0px]">
      <div className="w-full flex justify-around">
        {navigation.map((item) => (
          <NavbarItem key={item.title} isActive={item.link === basePath}>
            {item.link === basePath ? (
              <Link href={item.link} className="flex-col">
                <item.iconFilled fill="#e4002c" />
                <span className="text-[#e4002c]">{item.title}</span>
              </Link>
            ) : (
              <Link href={item.link} className="flex-col">
                <item.iconOutlined />
                <span className="text-black">{item.title}</span>
              </Link>
            )}
          </NavbarItem>
        ))}
      </div>
    </Navbar>
  );
}
