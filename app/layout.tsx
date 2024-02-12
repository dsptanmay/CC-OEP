import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Josefin_Sans({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Recipe Tracker",
  description: "Created by Team 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
