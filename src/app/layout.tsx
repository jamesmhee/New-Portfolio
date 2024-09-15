import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const icon = `https://icons.iconarchive.com/icons/pictogrammers/material/256/teddy-bear-icon.png`

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JEMMYBLAIR",
  description: "HELLO I'm jemmyblair nice to meet you and see you here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <head>
        <link rel="icon" type="img/png" href={icon} sizes="any" />
      </head>
      <body className={inter.className + ' w-screen h-dvh'}>
        {children}
      </body>
    </html>
  );
}
