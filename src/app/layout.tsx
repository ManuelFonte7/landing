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
  title: "TuoBrand. Rendiamo la tua azienda più intelligente",
  description:
    "Soluzioni su misura per automatizzare i processi della tua azienda. Prenota una call gratuita.",
  openGraph: {
    title: "TuoBrand. Rendiamo la tua azienda più intelligente",
    description:
      "Soluzioni su misura per automatizzare i processi della tua azienda.",
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
