"use client"

import ModuleLayout from "@/components/ModuleLayout"
import KpiCard from "@/components/KpiCard"
import {
  Home,
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Wrench,
  Landmark,
  Calendar,
  Shield,
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react"

const MODULE_COLOR = "#1A3D2E"

const NAV = [
  { href: "/immo", label: "Tableau de bord", Icon: LayoutDashboard },
  { href: "/immo/biens", label: "Mes biens", Icon: Building2 },
  { href: "/immo/locataires", label: "Locataires", Icon: Users },
  { href: "/immo/documents", label: "Documents", Icon: FileText },
  { href: "/immo/prets", label: "Prêts & assurances", Icon: Landmark },
  { href: "/immo/travaux", label: "Travaux", Icon: Wrench },
  { href: "/immo/calendrier", label: "Échéances", Icon: Calendar },
]

/* Données patrimoine Pascal Dayot — bêta */
const BIENS = [
  {
    nom: "Villa Dayot — Cap d'Antibes",
    type: "Résidence principale",
    detention: "SCI VILLA DAYOT",
    surface: "420 m²",
    valeur: "4 200 000 €",
    statut: "ok",
  },
  {
    nom: "Immeuble RN 6 — Lyon",
    type: "Mixte (commerce + 6 logements)",
    detention: "RN 6 SAS",
    surface: "980 m²",
    valeur: "2 850 000 €",
    statut: "ok",
  },
  {
    nom: "Résidence Exupéry — Paris 16e",
    type: "Appartement locatif",
    detention: "SCI EXUP 2",
    surface: "142 m²",
    valeur: "1 620 000 €",
    statut: "warning",
  },
  {
    nom: "Local P. Stoppa — Marseille",
    type: "Local commercial",
    detention: "SCI P STOPPA",
    surface: "210 m²",
    valeur: "485 000 €",
    statut: "alert",
  },
]

const LOCATAIRES_RECENTS = [
  { bien: "RN 6 — Lot 3", locataire: "Boulangerie Martin", loyer: "2 400 € / mois", statut: "ok" },
  { bien: "Exupéry — Paris", locataire: "M. & Mme Lefèvre", loyer: "3 850 € / mois", statut: "ok" },
  { bien: "P. Stoppa — Marseille", locataire: "— (vacant depuis 4 mois)", loyer: "—", statut: "alert" },
]

const ECHEANCES = [
  { label: "PNO AFT CONSTRUCTION — non assurée depuis 2,5 ans", date: "URGENT", urgence: "alert" },
  { label: "Assurance SCI P STOPPA — jamais souscrite", date: "URGENT", urgence: "alert" },
  { label: "Renouvellement bail Exupéry", date: "Juin 2026", urgence: "warning" },
  { label: "Échéance prêt Villa Dayot", date: "Mai 2026", urgence: "pending" },
  { label: "AG copropriété Résidence Exupéry", date: "Avril 2026", urgence: "pending" },
]

export default function ImmoDashboard() {
  return (
    <ModuleLayout
      moduleNom="KPARKIMMO"
      moduleColor={MODULE_COLOR}
      moduleIcon={Home}
      navItems={NAV}
      currentPath="/immo"
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Patrimoine immobilier — Pascal Dayot
        </h1>
        <p className="text-sm text-[var(--color-muted)]">
          Portefeuille consolidé · 7 SCIs patrimoniales · Valeur estimée 9,15 M€
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Biens" value={12} Icon={Building2} color={MODULE_COLOR} subtitle="dont 8 en location" />
        <KpiCard label="Valeur patrimoine" value="9,15 M€" Icon={Landmark} color="#2E86C1" subtitle="estimation 2026" />
        <KpiCard label="Locataires actifs" value={9} Icon={Users} color="#6C3483" subtitle="1 lot vacant" />
        <KpiCard label="Alertes" value={3} Icon={AlertTriangle} color="#C0392B" subtitle="2 urgentes" />
      </div>

      {/* Biens */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Biens principaux
        </h2>
        <div className="space-y-3">
          {BIENS.map((b) => (
            <div
              key={b.nom}
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] p-4 hover:border-[#1A3D2E]/30 transition-colors cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" style={{ color: MODULE_COLOR }} />
                  <span className="text-sm font-semibold text-[var(--color-ink)]">{b.nom}</span>
                  {b.statut === "alert" && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C0392B] bg-[#C0392B]/10 px-2 py-0.5 rounded-full">
                      Non assuré
                    </span>
                  )}
                  {b.statut === "warning" && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E67E22] bg-[#E67E22]/10 px-2 py-0.5 rounded-full">
                      À vérifier
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  {b.type} · {b.detention} · {b.surface} · {b.valeur}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-[var(--color-muted)]" />
            </div>
          ))}
        </div>
      </section>

      {/* Locataires */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: "#6C3483", fontFamily: "var(--font-display)" }}
        >
          Locataires récents
        </h2>
        <div className="space-y-3">
          {LOCATAIRES_RECENTS.map((l) => (
            <div
              key={l.bien}
              className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
            >
              <div className="flex items-center gap-3">
                {l.statut === "ok" && <CheckCircle2 className="h-4 w-4 text-[#2E86C1]" />}
                {l.statut === "alert" && <AlertTriangle className="h-4 w-4 text-[#C0392B]" />}
                <div>
                  <p className="text-sm text-[var(--color-ink)]">{l.bien}</p>
                  <p className="text-xs text-[var(--color-muted)]">{l.locataire}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-[var(--color-muted)]">{l.loyer}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Échéances */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: "#C0392B", fontFamily: "var(--font-display)" }}
        >
          Prochaines échéances
        </h2>
        <div className="space-y-3">
          {ECHEANCES.map((e) => (
            <div
              key={e.label}
              className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
            >
              <div className="flex items-center gap-3">
                {e.urgence === "alert" && <AlertTriangle className="h-4 w-4 text-[#C0392B]" />}
                {e.urgence === "warning" && <Clock className="h-4 w-4 text-[#E67E22]" />}
                {e.urgence === "pending" && <CheckCircle2 className="h-4 w-4 text-[#2E86C1]" />}
                <span className="text-sm text-[var(--color-ink)]">{e.label}</span>
              </div>
              <span
                className={`text-xs font-semibold ${
                  e.urgence === "alert"
                    ? "text-[#C0392B]"
                    : e.urgence === "warning"
                    ? "text-[#E67E22]"
                    : "text-[var(--color-muted)]"
                }`}
              >
                {e.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Badge bêta */}
      <div className="rounded-xl border border-[var(--color-sage)]/20 bg-[var(--color-sage)]/5 p-4 text-center">
        <p className="text-xs text-[var(--color-muted)]">
          <Shield className="inline h-3.5 w-3.5 mr-1" />
          Version bêta — Données synchronisées depuis votre espace Parkimmo et vos SCIs (Pappers, OneDrive).
          La synchronisation complète avec parkimmo.app sera rétablie une fois le déploiement restauré.
        </p>
      </div>
    </ModuleLayout>
  )
}
