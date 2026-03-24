import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import { SHOP_NAME } from "../data";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: `${SHOP_NAME} | Melbourne`,
  description:
    "Melbourne's premier barbershop. Where tradition meets precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmMono.variable} dark`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{
          backgroundColor: "#09090b",
          color: "#fafafa",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
