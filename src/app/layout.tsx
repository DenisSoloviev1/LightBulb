import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Loader } from "@/shared/ui";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Лампочка | Калькулятор тарифов на электроэнергию для бизнеса",
  description:
    "Автоматический подбор оптимального тарифа на электроэнергию для юридических лиц. Анализ потребления и расчет экономии за 5 минут.",
  icons: [
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" }, // Для iOS
  ],
  keywords: [
    "тарифы на электроэнергию",
    "калькулятор тарифов",
    "юридические лица",
    "оптимальный тариф",
    "электроэнергия для бизнеса",
    "расчет стоимости электроэнергии",
    "ценовые категории",
    "энергосбыт",
    "подбор тарифа",
    "анализ потребления электроэнергии",
  ],
  openGraph: {
    images: ["/og-image.jpg"],
  },
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
      <body className={`${roboto.className}`}>
        <Suspense fallback={<Loader text={"Loading"} />}>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  );
}
