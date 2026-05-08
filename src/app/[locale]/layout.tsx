import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CCNE-RDC — Chambre de Commerce Nationale et de l'Économie de la RDC",
  description:
    "La Chambre de Commerce Nationale et de l'Économie de la République Démocratique du Congo. Votre partenaire pour investir en RDC.",
  keywords: [
    "CCNE-RDC",
    "Chambre de Commerce",
    "RDC",
    "Congo",
    "Investissement",
    "Commerce",
    "Business",
    "DRC",
  ],
  metadataBase: new URL("https://ccne-rdc.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CCNE-RDC — Chambre de Commerce Nationale et de l'Économie",
    description:
      "Votre partenaire pour investir en République Démocratique du Congo",
    type: "website",
    locale: "fr_CD",
    alternateLocale: "en_US",
    url: "https://ccne-rdc.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCNE-RDC — Chambre de Commerce Nationale et de l'Économie",
    description:
      "Votre partenaire pour investir en République Démocratique du Congo",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <head />
      <body
        className={`${dmSerif.variable} ${sourceSans.variable} font-body antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
