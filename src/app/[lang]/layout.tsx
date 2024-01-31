import { i18n, type Locale } from "@/i18n-config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://clickmore.com"),
  title: {
    default: "Click More",
    template: "%s | clickmore.com",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ja: "/ja",
      pt: "/pt",
    },
  },
  // openGraph: {
  //   images: "/og-image.png",
  // },
  // keywords: ['Next.js', 'React', 'JavaScript'],
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
