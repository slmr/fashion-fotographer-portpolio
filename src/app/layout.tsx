import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./global.css";

import { cn } from "@/lib/utils";
import Header from "./component/header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Revaldi",
  description: "A professional photographer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-black",
          fontSans.variable
        )}
      >
        <Header>{children}</Header>
      </body>
    </html>
  );
}
