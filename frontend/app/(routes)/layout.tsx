import type { Metadata } from "next";
import "@/app/components/global.css";
import { Provider } from "./provider";
import { NavbarMobile, NavbarDesktop } from "@/app/components/navbar";
import { fontN2C, fontN2M, fontN2R } from "../components/font";
import Footer from "../components/footer";

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
      className={`${fontN2C.variable} ${fontN2M.variable} ${fontN2R.variable} font-n2r`}
    >
      <body>
        <Provider>
          <NavbarDesktop />
          <main>{children}</main>
          <Footer />
          <NavbarMobile />
        </Provider>
      </body>
    </html>
  );
}
