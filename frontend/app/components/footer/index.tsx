import {
  LINK_ABOUT_KFC_GLOBAL,
  LINK_CATERING,
  LINK_CONTACT_KFC,
  LINK_CORPORATE_JOBS,
  LINK_FAQ,
  LINK_FIND_STORE,
  LINK_FINGER_LICKIN_GOOD,
  LINK_FRIED_CHICKEN,
  LINK_KFC_APP,
  LINK_KFC_APPLE_STORE,
  LINK_KFC_DELIVERY,
  LINK_KFC_GOOGLE_PLAY_STORE,
  LINK_KFC_MERCH_STORE,
  LINK_KFC_YOUTH_FOUNDATION,
  LINK_MENU,
  LINK_MYTH_BUSTERS,
  LINK_NUTRITION_ALLERGEN,
  LINK_OUR_HISTORY,
  LINK_PROMOS_REWARDS,
  LINK_RESPONSIBLE_DISCLOSURE,
  LINK_RESTAURANT_JOBS,
  LINK_SOCIAL_IMPACT,
} from "@/app/lib/constants";
import IconKfcLogoFooter from "@/public/icons/icon-kfc-logo-footer.svg";
import DropdownFooter, { TypeNavFooter } from "../dropdown/dropdown-footer";
import Link from "next/link";
import IconGoogleMapLocation from "@/public/icons/icon-google-map-location.svg";
import IconSocialInsta from "@/public/icons/icon-social-insta-white.svg";
import IconSocialFacebook from "@/public/icons/icon-social-facebook-white.svg";
import IconSocialTwitter from "@/public/icons/icon-social-twitter-white.svg";
import IconSocialYoutube from "@/public/icons/icon-social-youtube-white.svg";
import IconSocialSnapchat from "@/public/icons/icon-social-snapchat-white.svg";
import IconSocialLinkedin from "@/public/icons/icon-social-linkedin-white.svg";
import IconCircleOutlined from "@/public/icons/icon-circle-outlined.svg";
import Image from "next/image";

export const NAVIGATION_FOOTER: TypeNavFooter[] = [
  {
    category: "Menu",
    links: [
      { name: "Menu", link: LINK_MENU },
      { name: "Catering", link: LINK_CATERING },
      { name: "Nutrition & Allergen Guide", link: LINK_NUTRITION_ALLERGEN },
      { name: "Promos & Rewards", link: LINK_PROMOS_REWARDS },
    ],
  },
  {
    category: "Support",
    links: [
      { name: "FAQ", link: LINK_FAQ },
      { name: "Contact KFC", link: LINK_CONTACT_KFC },
      { name: "Responsible Disclosure", link: LINK_RESPONSIBLE_DISCLOSURE },
    ],
  },
  {
    category: "KFC Australia",
    links: [
      { name: "About KFC Global", link: LINK_ABOUT_KFC_GLOBAL },
      { name: "KFC Delivery", link: LINK_KFC_DELIVERY },
      { name: "KFC App", link: LINK_KFC_APP },
      { name: "Social Impact", link: LINK_SOCIAL_IMPACT },
      { name: "Our history", link: LINK_OUR_HISTORY },
      { name: "Fried Chicken", link: LINK_FRIED_CHICKEN },
      { name: "Myth Busters", link: LINK_MYTH_BUSTERS },
      { name: "Finger Lickin' Good", link: LINK_FINGER_LICKIN_GOOD },
      { name: "KFC Youth Foundation", link: LINK_KFC_YOUTH_FOUNDATION },
      { name: "KFC Merch Store", link: LINK_KFC_MERCH_STORE },
    ],
  },
  {
    category: "Work With Us",
    links: [
      { name: "Restaurant Jobs", link: LINK_RESTAURANT_JOBS },
      { name: "Corporate Jobs", link: LINK_CORPORATE_JOBS },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center bg-[#202125] font-n2r text-sm text-white pb-12">
      <div className="max-w-screen-lg w-full flex flex-col items-center">
        <div className="w-full p-6 flex flex-col items-center lg:flex-row lg:items-start lg:pt-12">
          {/* Logo */}
          <IconKfcLogoFooter
            width={80}
            height={80}
            className="my-4 flex-none lg:my-0"
          />
          {/* Navigation Links */}
          {NAVIGATION_FOOTER.map((nav) => (
            <DropdownFooter key={nav.category} navFooter={nav} />
          ))}
          {/* Find a kfc */}
          <div className="w-full border-y border-[#494949] p-4 lg:px-4 lg:py-0 lg:border-0">
            <Link href={LINK_FIND_STORE} className="relative">
              <IconGoogleMapLocation
                width={11}
                height={15}
                className="absolute -left-4 top-[2px]"
              />
              <span>Find a KFC</span>
            </Link>
          </div>
          {/* Download app mobile */}
          <div className="max-w-72 w-full">
            <p className="w-full p-4 lg:hidden">Download App</p>
            <div className="flex justify-around lg:flex-col items-center lg:gap-4">
              <a
                href={LINK_KFC_APPLE_STORE}
                target="_blank"
                className="max-w-32 w-[45%] lg:w-full"
              >
                <Image
                  src={"/images/DOWNLOAD_ON_APPLE_STORE.webp"}
                  alt="Download on the Apple store"
                  width={133}
                  height={45}
                />
              </a>
              <a
                href={LINK_KFC_GOOGLE_PLAY_STORE}
                target="_blank"
                className="max-w-32 w-[45%] lg:w-full"
              >
                <Image
                  src={"/images/DOWNLOAD_ON_GOOGLE_PLAY.webp"}
                  alt="Download on the Google Play store"
                  width={133}
                  height={45}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Social links */}
        <div className="max-w-72 w-full flex justify-evenly my-4">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <IconCircleOutlined
              fill="#494949"
              className="absolute -z-1 w-full h-full"
            />
            <IconSocialInsta width={16} height={16} />
          </div>
          <div className="relative w-11 h-11 flex items-center justify-center">
            <IconCircleOutlined
              fill="#494949"
              className="absolute -z-1 w-full h-full"
            />
            <IconSocialFacebook width={16} height={16} />
          </div>
          <div className="relative w-11 h-11 flex items-center justify-center">
            <IconCircleOutlined
              fill="#494949"
              className="absolute -z-1 w-full h-full"
            />
            <IconSocialTwitter width={16} height={16} />
          </div>
          <div className="relative w-11 h-11 flex items-center justify-center">
            <IconCircleOutlined
              fill="#494949"
              className="absolute -z-1 w-full h-full"
            />
            <IconSocialYoutube width={16} height={16} />
          </div>
          <div className="relative w-11 h-11 flex items-center justify-center">
            <IconCircleOutlined
              fill="#494949"
              className="absolute -z-1 w-full h-full"
            />
            <IconSocialSnapchat width={16} height={16} />
          </div>
          <div className="relative w-11 h-11 flex items-center justify-center">
            <IconCircleOutlined
              fill="#494949"
              className="absolute -z-1 w-full h-full"
            />
            <IconSocialLinkedin width={16} height={16} />
          </div>
        </div>
        {/* Copyright */}
        <div className="text-xs flex flex-col items-center gap-2">
          <ul className="flex gap-1 underline underline-offset-2 text-nowrap flex-wrap items-center justify-center">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Protected Disclosure</a>
            </li>
            <li>
              <a href="">Yum</a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
          </ul>
          <p>Copyright © KFC Australia. 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
