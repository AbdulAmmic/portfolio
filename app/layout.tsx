import type { Metadata } from "next";
import {Nunito} from "next/font/google";

import "./globals.css";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Abdurrahman Mustapha Muhammad",
  description: "A webapp by Abdul Ammic ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} font-sans text-foreground bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
