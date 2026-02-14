import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "CCNE-RDC — Chambre de Commerce Nationale et de l'Économie",
    description:
      "Votre partenaire pour investir en République Démocratique du Congo",
    type: "website",
    locale: "fr_CD",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${dmSerif.variable} ${sourceSans.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
