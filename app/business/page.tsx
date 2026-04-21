"use client"

import ModuleLayout from "@/components/ModuleLayout"
import KpiCard from "@/components/KpiCard"
import {
  Briefcase,
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Receipt,
  Scale,
  TrendingUp,
  Shield,
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react"

const MODULE_COLOR = "#E67E22"

const NAV = [
  { href: "/business", label: "Tableau de bord", Icon: LayoutDashboard },
  { href: "/business/societes", label: "Mes sociétés", Icon: Building2 },
  { href: "/business/rh", label: "RH & Équipes", Icon: Users },
  { href: "/business/documents", label: "Documents", Icon: FileText },
  { href: "/business/comptabilite", label: "Comptabilité", Icon: Receipt },
  { href: "/business/conformite", label: "Conformité", Icon: Scale },
  { href: "/business/performances", label: "Performances", Icon: TrendingUp },
]

/* Données Pascal Dayot — groupe capitalistique */
const SOCIETES = [
  { nom: "CHINA GROUP", type: "SARL", role: "Gérant", capital: "2 420 000 €", statut: "active", siren: "842 801 250" },
  { nom: "CHINA EXUPERY", type: "SAS", role: "Président", capital: "—", statut: "active", siren: "—" },
  { nom: "RN 6", type: "SAS", role: "Dirigeant", capital: "—", statut: "active", siren: "—" },
  { nom: "SNC DAYOTGOY", type: "SNC", role: "Associé", capital: "—", statut: "active", siren: "—" },
  { nom: "AFT CONSTRUCTION", type: "SAS", role: "Associé", capital: "—", statut: "active", siren: "—" },
  { nom: "CHINA EXTENSION", type: "SCI", role: "Gérant", capital: "—", statut: "active", siren: "—" },
]

const SCIS = [
  { nom: "SCI 3 DAYOT", statut: "active" },
  { nom: "SCI EXUP 2", statut: "active" },
  { nom: "SCI VILLA DAYOT", statut: "active" },
  { nom: "SCI O.M.P.", statut: "active" },
  { nom: "SCI DA DO", statut: "active" },
  { nom: "SCI GIVBRON", statut: "active" },
  { nom: "SCI P STOPPA", statut: "active" },
]

const ACTIONS_PRIORITAIRES = [
  { label: "AG annuelle SCI 3 DAYOT", echeance: "Juin 2026", urgence: "warning" },
  { label: "Mise à jour K-bis CHINA GROUP", echeance: "Mai 2026", urgence: "pending" },
  { label: "Déclaration bénéficiaires effectifs — CHINA EXTENSION", echeance: "À vérifier", urgence: "warning" },
  { label: "PNO AFT CONSTRUCTION — non assurée depuis 2,5 ans", echeance: "URGENT", urgence: "alert" },
  { label: "Assurance SCI P STOPPA — jamais souscrite", echeance: "URGENT", urgence: "alert" },
]

export default function BusinessDashboard() {
  return (
    <ModuleLayout
      moduleNom="KPARKBUSINESS"
      moduleColor={MODULE_COLOR}
      moduleIcon={Briefcase}
      navItems={NAV}
      currentPath="/business"
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Groupe Dayot — Vue consolidée
        </h1>
        <p className="text-sm text-[var(--color-muted)]">
          15 entités identifiées dont 11 actives · Holding principale : CHINA GROUP
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Sociétés actives" value={11} Icon={Building2} color={MODULE_COLOR} subtitle="sur 15 identifiées" />
        <KpiCard label="SCIs patrimoniales" value={7} Icon={Scale} color="#6C3483" subtitle="immobilier structuré" />
        <KpiCard label="Bénéficiaires effectifs" value={3} Icon={Users} color="#1A3D2E" subtitle="Pascal, Marie-Laure, Olivier" />
        <KpiCard label="Alertes conformité" value={3} Icon={AlertTriangle} color="#C0392B" subtitle="2 urgentes" />
      </div>

      {/* Sociétés opérationnelles */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Sociétés opérationnelles
        </h2>
        <div className="space-y-3">
          {SOCIETES.map((s) => (
            <div
              key={s.nom}
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] p-4 hover:border-[#E67E22]/30 transition-colors cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" style={{ color: MODULE_COLOR }} />
                  <span className="text-sm font-semibold text-[var(--color-ink)]">{s.nom}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--color-muted)] bg-[var(--color-cream)] px-2 py-0.5 rounded-full">
                    {s.type}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  {s.role} · Capital : {s.capital} {s.siren !== "—" && `· SIREN ${s.siren}`}
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-[var(--color-muted)]" />
            </div>
          ))}
        </div>
      </section>

      {/* SCIs patrimoniales */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: "#6C3483", fontFamily: "var(--font-display)" }}
        >
          SCIs patrimoniales
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SCIS.map((s) => (
            <div
              key={s.nom}
              className="rounded-xl border border-[var(--color-border)] p-3 text-center hover:border-[#6C3483]/30 transition-colors cursor-pointer"
            >
              <Scale className="h-4 w-4 mx-auto mb-1" style={{ color: "#6C3483" }} />
              <p className="text-xs font-medium text-[var(--color-ink)]">{s.nom}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Actions prioritaires */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: "#C0392B", fontFamily: "var(--font-display)" }}
        >
          Actions prioritaires
        </h2>
        <div className="space-y-3">
          {ACTIONS_PRIORITAIRES.map((a) => (
            <div
              key={a.label}
              className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
            >
              <div className="flex items-center gap-3">
                {a.urgence === "alert" && <AlertTriangle className="h-4 w-4 text-[#C0392B]" />}
                {a.urgence === "warning" && <Clock className="h-4 w-4 text-[#E67E22]" />}
                {a.urgence === "pending" && <CheckCircle2 className="h-4 w-4 text-[#2E86C1]" />}
                <span className="text-sm text-[var(--color-ink)]">{a.label}</span>
              </div>
              <span
                className={`text-xs font-semibold ${
                  a.urgence === "alert"
                    ? "text-[#C0392B]"
                    : a.urgence === "warning"
                    ? "text-[#E67E22]"
                    : "text-[var(--color-muted)]"
                }`}
              >
                {a.echeance}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Badge bêta */}
      <div className="rounded-xl border border-[var(--color-sage)]/20 bg-[var(--color-sage)]/5 p-4 text-center">
        <p className="text-xs text-[var(--color-muted)]">
          <Shield className="inline h-3.5 w-3.5 mr-1" />
          Version bêta — Données structurées depuis Pappers, OneDrive et votre espace Parkimmo.
          Sources : pappers.fr, societe.com, verif.com
        </p>
      </div>
    </ModuleLayout>
  )
}
