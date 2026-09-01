import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieConsent } from "@/components/cookie-consent";
import { GoogleAnalytics } from "@/components/google-analytics";
import { WhatsAppButton } from "@/components/whatsapp-button";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://estudio-vertice-lyart.vercel.app";
const TITLE = "Estúdio Vértice — Design que incomoda, marca que fica";
const DESCRIPTION =
  "Branding, motion e produto pra marcas que não querem passar despercebidas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Estúdio Vértice" },
  description: DESCRIPTION,
  keywords: ["agência de branding", "identidade visual", "motion design", "design de produto digital"],
  authors: [{ name: "Estúdio Vértice" }],
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Estúdio Vértice",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn(archivo.variable, spaceGrotesk.variable, "font-sans")}>
      <body>
        {children}
        <WhatsAppButton phone="5511999999999" message="Oi! Quero um orçamento com o Estúdio Vértice." />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
