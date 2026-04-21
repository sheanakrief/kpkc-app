"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, ArrowRight, Mail, Lock, CheckCircle2 } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsRedirecting(true)

    // Pour l'instant, redirect vers parkimmo.app/login (seul module SaaS disponible)
    // Quand les autres modules seront prêts, on ajoutera un routing intelligent
    const trimmed = email.trim()
    if (trimmed.length > 0) {
      const url = `https://parkimmo.app/login?email=${encodeURIComponent(trimmed)}`
      window.location.href = url
    } else {
      window.location.href = "https://parkimmo.app/login"
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-cream-bg)]">
      {/* HEADER */}
      <header className="max-w-5xl mx-auto w-full px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-xl bg-[var(--color-forest)] flex items-center justify-center">
            <Shield className="h-5 w-5 text-[var(--color-cream)]" />
          </div>
          <span
            className="text-lg font-bold tracking-tight text-[var(--color-forest)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            KPKC
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm text-[var(--color-muted)] hover:text-[var(--color-forest)] transition-colors"
        >
          ← Retour au hub
        </Link>
      </header>

      {/* CONTENT */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-8">
            {/* Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-sage)]/30 bg-[var(--color-sage)]/10 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[var(--color-forest)] font-semibold mb-4">
                <Lock className="h-3 w-3" />
                Connexion KPKC
              </div>
              <h1
                className="text-2xl md:text-3xl font-extrabold text-[var(--color-forest)] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bon retour
              </h1>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Accédez à votre passeport administratif et à tous vos modules
                KPKC.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--color-forest)] mb-2"
                >
                  Votre email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-muted)]" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sheana@kparkconseils.fr"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-white pl-10 pr-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)] focus:border-transparent transition-all"
                    autoComplete="email"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isRedirecting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[var(--color-forest)] px-4 py-3 text-sm font-semibold text-[var(--color-cream)] hover:bg-[var(--color-forest)]/90 transition-all disabled:opacity-50"
              >
                {isRedirecting ? (
                  "Redirection..."
                ) : (
                  <>
                    Continuer
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Info */}
            <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
              <div className="flex items-start gap-2 text-xs text-[var(--color-muted)] leading-relaxed">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[var(--color-sage)]" />
                <p>
                  Vous serez redirigé vers l&apos;espace{" "}
                  <strong className="text-[var(--color-forest)]">
                    KPARKIMMO (parkimmo.app)
                  </strong>{" "}
                  — seul module SaaS actuellement disponible. Les autres modules
                  (PERSO, BUSINESS, PROTECT) arrivent bientôt.
                </p>
              </div>
            </div>

            {/* No account */}
            <div className="mt-6 text-center">
              <p className="text-xs text-[var(--color-muted)]">
                Pas encore de compte ?{" "}
                <a
                  href="https://kparkconseils.fr/contact"
                  className="text-[var(--color-forest)] font-semibold hover:underline"
                >
                  Nous contacter
                </a>
              </p>
            </div>
          </div>

          {/* Déontologie note */}
          <p className="mt-6 text-center text-xs text-[var(--color-muted)] leading-relaxed px-4">
            KPKC est un service de conseil administratif.
            <br />
            Vos données restent vôtres — consentement éclairé, chiffrement E2E,
            révocation 1-clic.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border)] bg-white/40">
        <div className="max-w-4xl mx-auto px-6 py-4 text-center text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} K PAR K CONSEILS SAS — SIREN 933 709 321
        </div>
      </footer>
    </main>
  )
}
