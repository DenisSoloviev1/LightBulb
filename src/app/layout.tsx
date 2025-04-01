import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.scss";
import { Toaster } from "react-hot-toast";

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Хакатон",
  description: "Проект для хакатона",
  icons: [
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
  ],
  keywords: ["", "", ""],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${overpass.className}`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
