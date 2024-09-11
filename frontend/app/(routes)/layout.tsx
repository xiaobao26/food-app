import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/components/global.css";
import { Provider } from "./provider";
import { NavbarMobile, NavbarNonMobile } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <NavbarNonMobile />
          {children}
          <NavbarMobile />
        </Provider>
      </body>
    </html>
  );
}
