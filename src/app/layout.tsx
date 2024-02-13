import type { Metadata } from "next";
import { Josefin_Sans as fontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const font = fontSans({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Cookbook Manager",
  description: "Made by Team 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
