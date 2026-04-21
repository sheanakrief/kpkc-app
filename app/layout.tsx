import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "KPKC.APP — Votre Passeport Administratif Universel",
  description:
    "Déclarez vos informations une seule fois, utilisez-les partout avec votre accord. Immobilier, vie personnelle, entreprise, juridique, protection.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://kpkc.app",
    siteName: "KPKC.APP",
    title: "KPKC.APP — Votre Passeport Administratif",
    description: "Vos données, votre contrôle. Un seul endroit pour toute votre vie administrative.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
