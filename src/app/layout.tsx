import type { Metadata } from "next";
import { Prosto_One, Anonymous_Pro, Montserrat } from "@next/font/google";
import Header from "@/components/header/Header";
import Aside from "@/components/aside/Aside";
import "./globals.css";

const anonymous = Anonymous_Pro({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-anonymous",
});

const prosto = Prosto_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-prosto",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "400", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Проектор",
  description: "поиск людей и проектов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anonymous.variable} ${prosto.variable} ${montserrat.variable}`}>
      <body>
        <Header/>
        <Aside/>
        <main className="mx-60">
          {children}
        </main>
      </body>
    </html>
  );
}
