"use client"

import { useState } from "react"
import {
  Shield,
  Home,
  User,
  Briefcase,
  Scale,
  ArrowRight,
  Lock,
  Check,
  ChevronRight,
} from "lucide-react"

/* ──────────────── HUB MODULES ──────────────── */

const MODULES = [
  {
    id: "perso",
    nom: "PERSO",
    nomComplet: "KPARKPERSO",
    sousTitre: "Ma vie personnelle",
    description:
      "Santé, famille, documents officiels, démarches, calendrier administratif. Le socle de votre passeport.",
    Icon: User,
    color: "#1A5276",
    gradient: "from-[#1A5276] to-[#2E86C1]",
    url: "#",
    disponible: false,
  },
  {
    id: "immo",
    nom: "IMMO",
    nomComplet: "KPARKIMMO",
    sousTitre: "Mon patrimoine immobilier",
    description:
      "Biens, locataires, copropriétés, assurances, prêts, sinistres, mandats, travaux. Gestion interne ou déléguée.",
    Icon: Home,
    color: "#1A3D2E",
    gradient: "from-[#1A3D2E] to-[#2D6A4F]",
    url: "https://parkimmo.app",
    disponible: true,
  },
  {
    id: "business",
    nom: "BUSINESS",
    nomComplet: "KPARKBUSINESS",
    sousTitre: "Mes entreprises",
    description:
      "Multi-sociétés, RH, fournisseurs, conformité sectorielle. Sites vitrines clé-en-main pour pros.",
    Icon: Briefcase,
    color: "#E67E22",
    gradient: "from-[#E67E22] to-[#F39C12]",
    url: "#",
    disponible: false,
  },
  {
    id: "juris",
    nom: "PROTECT",
    nomComplet: "PARKPROTECT",
    sousTitre: "Ma protection & mes litiges",
    description:
      "Assurances, sinistres, litiges, conformité juridique. Module transversal avec spécificité par domaine (immo, pro, perso).",
    Icon: Shield,
    color: "#C0392B",
    gradient: "from-[#C0392B] to-[#E74C3C]",
    url: "#",
    disponible: false,
  },
] as const

/* ──────────────── COMPONENT ──────────────── */

export default function HubPage() {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  return (
    <main className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="max-w-5xl mx-auto w-full px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[var(--color-forest)] flex items-center justify-center">
            <Shield className="h-5 w-5 text-[var(--color-cream)]" />
          </div>
          <span
            className="text-lg font-bold tracking-tight text-[var(--color-forest)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            KPKC
          </span>
        </div>
        <a
          href="/login"
          className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-[var(--color-cream)] transition-all"
        >
          Se connecter
        </a>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto w-full px-6 pt-12 pb-8 md:pt-20 md:pb-12 text-center flex-shrink-0">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-sage)]/30 bg-[var(--color-sage)]/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-[var(--color-forest)] font-semibold mb-6">
          <Lock className="h-3.5 w-3.5" />
          Passeport Administratif Universel
        </div>

        <h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-[1.15]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-forest)",
          }}
        >
          Bienvenue sur{" "}
          <span style={{ color: "var(--color-sage)" }}>KPKC</span>
        </h1>
        <p className="text-base md:text-lg text-[var(--color-muted)] mb-12 max-w-xl mx-auto leading-relaxed">
          Votre vie administrative centralisée. Choisissez votre espace.
        </p>
      </section>

      {/* MODULES GRID */}
      <section className="max-w-4xl mx-auto w-full px-6 pb-16 md:pb-24 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULES.map((m) => {
            const Icon = m.Icon
            const isHovered = hoveredModule === m.id
            return (
              <a
                key={m.id}
                href={m.disponible ? m.url : undefined}
                onClick={
                  m.disponible
                    ? undefined
                    : (e) => e.preventDefault()
                }
                onMouseEnter={() => setHoveredModule(m.id)}
                onMouseLeave={() => setHoveredModule(null)}
                className={`group relative rounded-2xl border-2 bg-white p-6 transition-all duration-200 ${
                  m.disponible
                    ? "cursor-pointer hover:shadow-xl hover:-translate-y-1"
                    : "cursor-default"
                }`}
                style={{
                  borderColor: isHovered ? m.color + "66" : "var(--color-border)",
                }}
              >
                {/* Module icon + name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: m.color + "14" }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: m.color }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2
                        className="text-xl font-bold"
                        style={{
                          color: m.color,
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {m.nom}
                      </h2>
                      {!m.disponible && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--color-muted)] bg-[var(--color-cream)] px-2 py-0.5 rounded-full">
                          Bientôt
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--color-muted)]">
                      {m.sousTitre}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  {m.description}
                </p>

                {/* CTA */}
                {m.disponible ? (
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                    style={{ color: m.color }}
                  >
                    Accéder
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
                    <Check className="h-3.5 w-3.5 text-[var(--color-sage)]" />
                    En développement
                  </div>
                )}
              </a>
            )
          })}
        </div>

        {/* SOUS-TEXTE */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--color-muted)] mb-2">
            Chaque module partage vos données uniquement avec votre consentement
            explicite.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-[var(--color-forest)]">
            {[
              "Consentement granulaire",
              "Audit trail immuable",
              "RGPD natif",
              "Révocation 1-clic",
            ].map((v) => (
              <div key={v} className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-[var(--color-sage)]" />
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border)] bg-white/40">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--color-muted)]">
          <p>
            © {new Date().getFullYear()} K PAR K CONSEILS SAS — SIREN 933 709 321
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://kparkconseils.fr"
              className="hover:text-[var(--color-forest)] transition-colors"
            >
              kparkconseils.fr
            </a>
            <a
              href="https://kparkconseils.fr/investisseurs"
              className="hover:text-[var(--color-forest)] transition-colors"
            >
              Investisseurs
            </a>
            <a
              href="https://kparkconseils.fr/mentions-legales"
              className="hover:text-[var(--color-forest)] transition-colors"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
