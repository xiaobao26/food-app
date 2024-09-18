import type { Metadata } from "next";
import "@/components/global.css";
import { Provider } from "./provider";
import { NavbarMobile, NavbarDesktop } from "@/app/components/navbar";
import { fontN2C, fontN2M, fontN2R } from "../components/font";

export const metadata: Metadata = {
  title: "Food App",
  description: "A food app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontN2C.variable} ${fontN2M.variable} ${fontN2R.variable}`}
    >
      <body>
        <Provider>
          <NavbarDesktop />
          <main>{children}</main>
          <NavbarMobile />
        </Provider>
      </body>
    </html>
  );
}
