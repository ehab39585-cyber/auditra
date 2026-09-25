import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "أوديترا | للمحاسبة والخدمات المالية",

  description:
    "أوديترا للمحاسبة والخدمات المالية — حلول محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

  icons: {
    icon: "/auditra.jpeg",
    shortcut: "/auditra.jpeg",
    apple: "/auditra.jpeg",
  },

  openGraph: {
    title: "أوديترا | للمحاسبة والخدمات المالية",

    description:
      "حلول محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

    url: "http://localhost:3002",

    siteName: "أوديترا",

    locale: "ar_SA",

    type: "website",

    images: [
      {
        url: "http://localhost:3002/auditra.jpeg",
        width: 1200,
        height: 630,
        alt: "أوديترا للمحاسبة والخدمات المالية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "أوديترا | للمحاسبة والخدمات المالية",

    description:
      "حلول محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

    images: ["/auditra.jpeg"],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}