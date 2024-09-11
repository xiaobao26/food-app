"use client";

import {
  Button,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

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
import IconMenu from "../icon/icon-menu";
import {
  LINK_ACCOUNT,
  LINK_CART,
  LINK_HOME,
  LINK_MENU,
  LINK_PROMOS_REWARDS,
} from "@/lib/constants";
import { usePathname } from "next/navigation";
import { splitUrlPathname } from "@/lib/utils";
import IconKfc from "../icon/icon-kfc";
import IconUser from "../icon/icon-user";

const NAVIGATION_MOBILE = [
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
    <div className="sm:hidden">
      <nav className="w-full h-16 bg-white rounded-t-lg shadow-[rgba(99,99,99,0.2)_0px_-2px_8px_0px] fixed bottom-0 flex items-center justify-around ">
        {NAVIGATION_MOBILE.map((item) => (
          <div key={item.title}>
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
          </div>
        ))}
      </nav>
      <div className="w-full h-16 static bottom-0"></div>
    </div>
  );
}

export function NavbarNonMobile() {
  const pathname = usePathname();
  const basePath = splitUrlPathname(pathname)[0];

  return (
    <Navbar
      className="hidden sm:flex"
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-[#e4002c]",
        ],
      }}
    >
      <NavbarBrand>
        <Link href={LINK_HOME}>
          <IconKfc width={48} height={48} fill="#e4002c" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="flex gap-6" justify="center">
        <NavbarItem isActive={LINK_MENU === basePath}>
          <Link
            href={LINK_MENU}
            className={`${LINK_MENU === basePath ? "text-[#e4002c]" : "text-black"}`}
          >
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem isActive={LINK_PROMOS_REWARDS === basePath}>
          <Link
            href={LINK_PROMOS_REWARDS}
            className={`${LINK_PROMOS_REWARDS === basePath ? "text-[#e4002c]" : "text-black"}`}
          >
            Promos & Rewards
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#" className="text-black gap-2">
            <IconUser width={24} height={24} />
            <span>Sign In</span>
          </Link>
        </NavbarItem>
        <Divider orientation="vertical" className="h-10" />
        <NavbarItem>
          <Link href={LINK_CART} className="text-black gap-2">
            <IconKfcChickenBoxfilled width={40} height={40} fill="#e4002c" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
