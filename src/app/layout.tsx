import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Font caricati da Next.js (nessun link esterno nel codice, più veloce)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

// Titolo e descrizione per Google e per le anteprime social
export const metadata: Metadata = {
  title: "Kredo. La tua azienda sotto gli occhi di tutti",
  description:
    "Soluzioni su misura per ampliare la tua presenza digitale. Prenota una call gratuita.",
  openGraph: {
    title: "Kredo. La tua azienda sotto gli occhi di tutti",
    description:
      "Soluzioni su misura per ampliare la tua presenza digitale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${inter.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
