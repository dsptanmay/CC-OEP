import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import AuthProvider from "@/provider/AuthProvider";
import { Josefin_Sans as FontSans } from "next/font/google";

const font = FontSans({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Chef's Palette",
  description: "Made by Team 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
