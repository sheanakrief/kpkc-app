"use client"

import ModuleLayout from "@/components/ModuleLayout"
import KpiCard from "@/components/KpiCard"
import {
  Shield,
  LayoutDashboard,
  FileText,
  AlertTriangle,
  Scale,
  Umbrella,
  Gavel,
  Bell,
  CheckCircle2,
  Clock,
  ChevronRight,
  Home,
  Briefcase,
  User,
  Car,
} from "lucide-react"

const MODULE_COLOR = "#C0392B"

const NAV = [
  { href: "/protect", label: "Vue d'ensemble", Icon: LayoutDashboard },
  { href: "/protect/assurances", label: "Assurances", Icon: Umbrella },
  { href: "/protect/sinistres", label: "Sinistres", Icon: AlertTriangle },
  { href: "/protect/litiges", label: "Litiges", Icon: Gavel },
  { href: "/protect/conformite", label: "Conformité", Icon: Scale },
  { href: "/protect/documents", label: "Documents", Icon: FileText },
  { href: "/protect/alertes", label: "Alertes", Icon: Bell },
]

/* Données Pascal — module transversal agrégé */
const ASSURANCES_PAR_DOMAINE = [
  {
    domaine: "Immobilier",
    Icon: Home,
    color: "#1A3D2E",
    contrats: [
      { nom: "PNO — SCI 3 DAYOT", assureur: "AXA", statut: "ok", echeance: "Déc 2026" },
      { nom: "PNO — SCI VILLA DAYOT", assureur: "MAIF", statut: "ok", echeance: "Nov 2026" },
      { nom: "PNO — AFT CONSTRUCTION", assureur: "—", statut: "alert", echeance: "NON ASSURÉE" },
      { nom: "PNO — SCI P STOPPA", assureur: "—", statut: "alert", echeance: "JAMAIS SOUSCRITE" },
      { nom: "MRH — Résidence principale", assureur: "Allianz", statut: "warning", echeance: "Expirée" },
    ],
  },
  {
    domaine: "Automobile",
    Icon: Car,
    color: "#2C3E50",
    contrats: [
      { nom: "Mercedes Classe C", assureur: "AXA", statut: "ok", echeance: "Juil 2026" },
      { nom: "Peugeot Expert", assureur: "MAIF", statut: "ok", echeance: "Oct 2026" },
      { nom: "BMW X3", assureur: "Allianz", statut: "ok", echeance: "Fév 2027" },
    ],
  },
  {
    domaine: "Professionnel",
    Icon: Briefcase,
    color: "#E67E22",
    contrats: [
      { nom: "RC Pro — CHINA GROUP", assureur: "AXA", statut: "ok", echeance: "Mars 2027" },
      { nom: "RC Pro — RN 6", assureur: "MAIF", statut: "ok", echeance: "Jan 2027" },
      { nom: "Multirisque — Local Bron", assureur: "Groupama", statut: "ok", echeance: "Juin 2026" },
    ],
  },
  {
    domaine: "Personnel",
    Icon: User,
    color: "#1A5276",
    contrats: [
      { nom: "Prévoyance", assureur: "SwissLife", statut: "ok", echeance: "2027" },
      { nom: "Complémentaire santé", assureur: "Harmonie", statut: "ok", echeance: "Annuelle" },
    ],
  },
]

const SINISTRES_OUVERTS = [
  { label: "Dégât des eaux — SCI EXUP 2, lot 3", date: "Fév 2026", statut: "En expertise" },
  { label: "Impayé locataire — SCI DA DO", date: "Nov 2025", statut: "Procédure en cours" },
]

const LITIGES_ACTIFS = [
  { label: "Litige copropriété — SCI VILLA DAYOT vs syndic", date: "2024", statut: "Audience prévue" },
  { label: "Recouvrement — SCI O.M.P. vs locataire", date: "Jan 2026", statut: "Mise en demeure" },
]

export default function ProtectDashboard() {
  const totalContrats = ASSURANCES_PAR_DOMAINE.reduce((acc, d) => acc + d.contrats.length, 0)
  const alertes = ASSURANCES_PAR_DOMAINE.reduce(
    (acc, d) => acc + d.contrats.filter((c) => c.statut === "alert" || c.statut === "warning").length,
    0,
  )

  return (
    <ModuleLayout
      moduleNom="PARKPROTECT"
      moduleColor={MODULE_COLOR}
      moduleIcon={Shield}
      navItems={NAV}
      currentPath="/protect"
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Protection 360° — Pascal Dayot
        </h1>
        <p className="text-sm text-[var(--color-muted)]">
          Module transversal · Assurances, sinistres, litiges, conformité — tous domaines
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Contrats d'assurance" value={totalContrats} Icon={Umbrella} color={MODULE_COLOR} subtitle="4 domaines couverts" />
        <KpiCard label="Alertes" value={alertes} Icon={AlertTriangle} color="#E67E22" subtitle="2 urgentes, 1 à renouveler" />
        <KpiCard label="Sinistres ouverts" value={SINISTRES_OUVERTS.length} Icon={Shield} color="#6C3483" subtitle="en cours de traitement" />
        <KpiCard label="Litiges actifs" value={LITIGES_ACTIFS.length} Icon={Gavel} color="#2C3E50" subtitle="procédures en cours" />
      </div>

      {/* Assurances par domaine */}
      {ASSURANCES_PAR_DOMAINE.map((domaine) => {
        const DIcon = domaine.Icon
        return (
          <section
            key={domaine.domaine}
            className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <DIcon className="h-5 w-5" style={{ color: domaine.color }} />
              <h2
                className="text-base font-bold"
                style={{ color: domaine.color, fontFamily: "var(--font-display)" }}
              >
                {domaine.domaine}
              </h2>
              <span className="text-xs text-[var(--color-muted)]">
                — {domaine.contrats.length} contrat{domaine.contrats.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="space-y-2">
              {domaine.contrats.map((c) => (
                <div
                  key={c.nom}
                  className="flex items-center justify-between rounded-xl border border-[var(--color-border)] p-3 hover:border-[var(--color-sage)]/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {c.statut === "ok" && <CheckCircle2 className="h-4 w-4 text-[#2E86C1]" />}
                    {c.statut === "warning" && <Clock className="h-4 w-4 text-[#E67E22]" />}
                    {c.statut === "alert" && <AlertTriangle className="h-4 w-4 text-[#C0392B]" />}
                    <div>
                      <p className="text-sm font-medium text-[var(--color-ink)]">{c.nom}</p>
                      <p className="text-xs text-[var(--color-muted)]">{c.assureur}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      c.statut === "alert"
                        ? "text-[#C0392B]"
                        : c.statut === "warning"
                        ? "text-[#E67E22]"
                        : "text-[var(--color-muted)]"
                    }`}
                  >
                    {c.echeance}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )
      })}

      {/* Sinistres ouverts */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-4">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: "#6C3483", fontFamily: "var(--font-display)" }}
        >
          Sinistres ouverts
        </h2>
        <div className="space-y-3">
          {SINISTRES_OUVERTS.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-4 w-4 text-[#6C3483]" />
                <div>
                  <p className="text-sm text-[var(--color-ink)]">{s.label}</p>
                  <p className="text-xs text-[var(--color-muted)]">Ouvert : {s.date}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-[#6C3483] bg-[#6C3483]/10 px-2 py-1 rounded-full">
                {s.statut}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Litiges actifs */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: "#2C3E50", fontFamily: "var(--font-display)" }}
        >
          Litiges actifs
        </h2>
        <div className="space-y-3">
          {LITIGES_ACTIFS.map((l) => (
            <div
              key={l.label}
              className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
            >
              <div className="flex items-center gap-3">
                <Gavel className="h-4 w-4 text-[#2C3E50]" />
                <div>
                  <p className="text-sm text-[var(--color-ink)]">{l.label}</p>
                  <p className="text-xs text-[var(--color-muted)]">Depuis : {l.date}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-[#E67E22] bg-[#E67E22]/10 px-2 py-1 rounded-full">
                {l.statut}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Badge bêta */}
      <div className="rounded-xl border border-[var(--color-sage)]/20 bg-[var(--color-sage)]/5 p-4 text-center">
        <p className="text-xs text-[var(--color-muted)]">
          <Shield className="inline h-3.5 w-3.5 mr-1" />
          Module transversal — Agrège vos assurances, sinistres et litiges de tous vos espaces PARK.
          Données synchronisées depuis PARKIMMO, PARKBUSINESS et PARKPERSO.
        </p>
      </div>
    </ModuleLayout>
  )
}
