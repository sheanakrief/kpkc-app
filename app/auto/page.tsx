"use client"

import ModuleLayout from "@/components/ModuleLayout"
import KpiCard from "@/components/KpiCard"
import {
  Car,
  LayoutDashboard,
  FileText,
  Shield,
  Wrench,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Fuel,
  MapPin,
  ChevronRight,
} from "lucide-react"

const MODULE_COLOR = "#2C3E50"

const NAV = [
  { href: "/auto", label: "Tableau de bord", Icon: LayoutDashboard },
  { href: "/auto/vehicules", label: "Mes véhicules", Icon: Car },
  { href: "/auto/documents", label: "Documents", Icon: FileText },
  { href: "/auto/entretien", label: "Entretien", Icon: Wrench },
  { href: "/auto/assurances", label: "Assurances", Icon: Shield },
  { href: "/auto/calendrier", label: "Échéances", Icon: Calendar },
]

/* Données véhicules Pascal Dayot — bêta */
const VEHICULES = [
  {
    marque: "Mercedes-Benz",
    modele: "Classe C 220d AMG Line",
    immatriculation: "FX-***-XX",
    annee: 2023,
    km: "32 400",
    assurance: "AXA · Tous risques",
    prochainCT: "Mars 2027",
    statut: "ok",
    usage: "Personnel",
  },
  {
    marque: "Peugeot",
    modele: "Expert",
    immatriculation: "GH-***-YY",
    annee: 2021,
    km: "78 500",
    assurance: "MAIF · Tiers + vol + incendie",
    prochainCT: "Sept 2025",
    statut: "warning",
    usage: "Professionnel — CHINA GROUP",
  },
  {
    marque: "BMW",
    modele: "X3 xDrive30e",
    immatriculation: "GJ-***-ZZ",
    annee: 2022,
    km: "45 200",
    assurance: "Allianz · Tous risques",
    prochainCT: "Nov 2026",
    statut: "ok",
    usage: "Professionnel — RN 6",
  },
]

const ECHEANCES = [
  { label: "CT Peugeot Expert — DÉPASSÉ", date: "Sept 2025", urgence: "alert" },
  { label: "Renouvellement assurance Mercedes", date: "Juil 2026", urgence: "pending" },
  { label: "Vidange BMW X3", date: "Mai 2026", urgence: "pending" },
  { label: "Changement pneus hiver → été", date: "Avril 2026", urgence: "warning" },
]

export default function AutoDashboard() {
  return (
    <ModuleLayout
      moduleNom="PARKAUTO"
      moduleColor={MODULE_COLOR}
      moduleIcon={Car}
      navItems={NAV}
      currentPath="/auto"
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Mes véhicules
        </h1>
        <p className="text-sm text-[var(--color-muted)]">
          Flotte personnelle & professionnelle — Pascal Dayot
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Véhicules" value={3} Icon={Car} color={MODULE_COLOR} subtitle="2 pro, 1 perso" />
        <KpiCard label="Assurances actives" value={3} Icon={Shield} color="#2E86C1" subtitle="toutes à jour" />
        <KpiCard label="Alertes" value={2} Icon={AlertTriangle} color="#C0392B" subtitle="1 CT dépassé" />
        <KpiCard label="Km total flotte" value="156k" Icon={Fuel} color="#E67E22" subtitle="année 2026" />
      </div>

      {/* Véhicules */}
      <section className="space-y-4 mb-6">
        {VEHICULES.map((v) => (
          <div
            key={v.immatriculation}
            className="rounded-2xl border border-[var(--color-border)] bg-white p-6 hover:border-[#2C3E50]/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Car className="h-5 w-5" style={{ color: MODULE_COLOR }} />
                  <h3
                    className="text-base font-bold"
                    style={{ fontFamily: "var(--font-display)", color: MODULE_COLOR }}
                  >
                    {v.marque} {v.modele}
                  </h3>
                  {v.statut === "warning" && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C0392B] bg-[#C0392B]/10 px-2 py-0.5 rounded-full">
                      CT dépassé
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--color-muted)]">
                  {v.immatriculation} · {v.annee} · {v.km} km
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-[var(--color-muted)] mt-1" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="text-xs">
                <p className="text-[var(--color-muted)]">Usage</p>
                <p className="font-medium text-[var(--color-ink)]">{v.usage}</p>
              </div>
              <div className="text-xs">
                <p className="text-[var(--color-muted)]">Assurance</p>
                <p className="font-medium text-[var(--color-ink)]">{v.assurance}</p>
              </div>
              <div className="text-xs">
                <p className="text-[var(--color-muted)]">Prochain CT</p>
                <p className={`font-medium ${v.statut === "warning" ? "text-[#C0392B]" : "text-[var(--color-ink)]"}`}>
                  {v.prochainCT}
                </p>
              </div>
              <div className="text-xs">
                <p className="text-[var(--color-muted)]">Kilométrage</p>
                <p className="font-medium text-[var(--color-ink)]">{v.km} km</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Échéances */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
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
          Version bêta — Connectez SIV (Système d&apos;Immatriculation des Véhicules) et HistoVec pour synchroniser automatiquement vos données.
        </p>
      </div>
    </ModuleLayout>
  )
}
