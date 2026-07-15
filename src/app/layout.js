import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "EnergyHome AI — Analysez votre performance énergétique",
  description: "EnergyHome AI Plateforme d'analyse énergétique immobilière basée sur les données ADEME et la loi Climat et Résilience.",
  alternates: {
    canonical: "https://ryandepret.github.io/energyhome-nextjs/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.className} suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}