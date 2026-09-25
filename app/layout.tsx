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
  title: "أوديترا | للمحاسبة والاستشارات المالية",

  description:
    "أوديترا للمحاسبة والاستشارات المالية — خدمات محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

  metadataBase: new URL("https://auditra-sa.vercel.app"),

  openGraph: {
    title: "أوديترا | للمحاسبة والاستشارات المالية",

    description:
      "خدمات محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

    url: "https://auditra-sa.vercel.app/",

    siteName: "أوديترا",

    locale: "ar_SA",

    type: "website",

    images: [
      {
        url: "https://auditra-sa.vercel.app/فثسف.jpeg",
        width: 1200,
        height: 630,
        alt: "أوديترا للمحاسبة والاستشارات المالية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "أوديترا | للمحاسبة والاستشارات المالية",

    description:
      "خدمات محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

    images: ["https://auditra-sa.vercel.app/فثسف.jpeg"],
  },

  icons: {
    icon: "/فثسف.jpeg",
    shortcut: "/فثسف.jpeg",
    apple: "/فثسف.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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