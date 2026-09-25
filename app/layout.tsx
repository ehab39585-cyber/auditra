import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أوديترا | للمحاسبة والاستشارات المالية",

  description:
    "خدمات محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

  keywords: [
    "أوديترا",
    "Auditra",
    "محاسبة",
    "استشارات مالية",
    "خدمات محاسبية",
    "محاسب عن بعد",
    "CFO",
    "ضريبة القيمة المضافة",
    "الزكاة",
    "السعودية",
  ],

  authors: [
    {
      name: "Auditra",
    },
  ],

  creator: "Auditra",

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
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}