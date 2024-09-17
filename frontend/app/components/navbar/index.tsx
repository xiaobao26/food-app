"use client";

import {
  Divider,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import {
  LINK_ACCOUNT,
  LINK_CART,
  LINK_HOME,
  LINK_MENU,
  LINK_PROMOS_REWARDS,
} from "@/app/lib/constants";

import { usePathname } from "next/navigation";
import { getBaseUrlPath } from "@/app/lib/utils";

import IconCartDesktop from "@/public/icons/icon-cart-desktop.svg";
import IconCartDesktopUrl from "@/public/icons/icon-cart-desktop.svg?url";
import IconKfcLogo from "@/public/icons/icon-kfc-logo.svg";
import IconHomeOutlined from "@/public/icons/icon-home-outlined.svg";
import IconHomeFilled from "@/public/icons/icon-home-filled.svg";
import IconPoultryLegOutlined from "@/public/icons/icon-poultry-leg-outlined.svg";
import IconPoultryLegFilled from "@/public/icons/icon-poultry-leg-filled.svg";
import IconPriceTagOutlined from "@/public/icons/icon-price-tag-outlined.svg";
import IconPriceTagFilled from "@/public/icons/icon-price-tag-filled.svg";
import IconMenu from "@/public/icons/icon-menu.svg";
import IconUser from "@/public/icons/icon-user.svg";

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
    iconOutlined: IconCartDesktop,
    iconFilled: IconCartDesktop,
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

const NAVIGATION_DESKTOP = [
  {
    title: "Menu",
    link: LINK_MENU,
  },
  {
    title: "Promos & Rewards",
    link: LINK_PROMOS_REWARDS,
  },
];

export function NavbarMobile() {
  const pathname = usePathname();
  const basePath = getBaseUrlPath(pathname);

  const navHeight = "h-14";
  const iconSize = "w-4 h-4";

  return (
    <div className={`w-full ${navHeight} lg:hidden  static bottom-0`}>
      <nav
        className={`font-n2m text-[10px] leading-4 w-full ${navHeight} bg-white rounded-t-lg shadow-[rgba(99,99,99,0.2)_0px_-2px_8px_0px] fixed bottom-0 flex items-center justify-around`}
      >
        {NAVIGATION_MOBILE.map((item) => (
          <div key={item.title}>
            <a href={item.link} className="flex flex-col items-center">
              {item.link === basePath ? (
                <>
                  <item.iconFilled className={`fill-[#e4002c] ${iconSize}`} />
                  <span className="text-[#e4002c]">{item.title}</span>
                </>
              ) : (
                <>
                  <item.iconOutlined className={iconSize} />
                  <span className="text-black">{item.title}</span>
                </>
              )}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
}

export function NavbarDesktop() {
  const pathname = usePathname();
  const basePath = getBaseUrlPath(pathname);

  return (
    <Navbar
      className="font-n2m hidden lg:flex lg:h-24"
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
      <NavbarContent className="flex gap-10">
        <a href={LINK_HOME}>
          <IconKfcLogo />
        </a>
        {NAVIGATION_DESKTOP.map((item) => (
          <NavbarItem
            key={item.title}
            isActive={item.link === basePath}
            className="text-sm"
          >
            <a
              href={item.link}
              className={`${
                item.link === basePath ? "text-[#e4002c]" : "text-black"
              }`}
            >
              {item.title}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <a href="#" className="flex gap-3 items-center text-sm">
            <IconUser className="w-5 h-5" />
            <span>Sign In</span>
          </a>
        </NavbarItem>
        <Divider orientation="vertical" className="h-6" />
        <NavbarItem>
          <Link href={LINK_CART} className="text-black gap-2">
            <div
              className="w-12 h-12"
              style={{ backgroundImage: `url(${IconCartDesktopUrl.src})` }}
            ></div>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
