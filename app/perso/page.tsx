"use client"

import ModuleLayout from "@/components/ModuleLayout"
import KpiCard from "@/components/KpiCard"
import {
  User,
  LayoutDashboard,
  FileText,
  Heart,
  Users,
  Calendar,
  Shield,
  Bell,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react"

const MODULE_COLOR = "#1A5276"

const NAV = [
  { href: "/perso", label: "Tableau de bord", Icon: LayoutDashboard },
  { href: "/perso/profil", label: "Mon profil", Icon: User },
  { href: "/perso/documents", label: "Documents", Icon: FileText },
  { href: "/perso/sante", label: "Santé", Icon: Heart },
  { href: "/perso/famille", label: "Famille", Icon: Users },
  { href: "/perso/calendrier", label: "Calendrier", Icon: Calendar },
  { href: "/perso/alertes", label: "Alertes", Icon: Bell },
]

/* Données Pascal Dayot — bêta pré-remplies */
const DEMARCHES_RECENTES = [
  { label: "Renouvellement carte d'identité", statut: "done", date: "Mars 2026" },
  { label: "Déclaration revenus 2025", statut: "pending", date: "Avant mai 2026" },
  { label: "Mise à jour adresse — CPAM", statut: "done", date: "Fév 2026" },
  { label: "Attestation assurance habitation", statut: "warning", date: "Expirée" },
]

const DOCUMENTS_CLES = [
  { nom: "Carte d'identité", expiration: "2032", statut: "ok" },
  { nom: "Passeport", expiration: "2028", statut: "ok" },
  { nom: "Permis de conduire", expiration: "—", statut: "ok" },
  { nom: "Carte Vitale", expiration: "—", statut: "ok" },
  { nom: "Justificatif domicile", expiration: "< 3 mois", statut: "warning" },
  { nom: "RIB principal", expiration: "—", statut: "ok" },
]

export default function PersoDashboard() {
  return (
    <ModuleLayout
      moduleNom="KPARKPERSO"
      moduleColor={MODULE_COLOR}
      moduleIcon={User}
      navItems={NAV}
      currentPath="/perso"
    >
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Bonjour Pascal
        </h1>
        <p className="text-sm text-[var(--color-muted)]">
          Votre espace personnel — passeport administratif
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <KpiCard label="Documents" value={12} Icon={FileText} color={MODULE_COLOR} subtitle="6 validés, 1 à renouveler" />
        <KpiCard label="Démarches" value={4} Icon={CheckCircle2} color="#2E86C1" subtitle="2 en cours" />
        <KpiCard label="Alertes" value={2} Icon={AlertTriangle} color="#E67E22" subtitle="1 urgente" />
        <KpiCard label="Famille" value={3} Icon={Users} color="#1A3D2E" subtitle="membres liés" />
      </div>

      {/* Démarches récentes */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Démarches récentes
        </h2>
        <div className="space-y-3">
          {DEMARCHES_RECENTES.map((d) => (
            <div
              key={d.label}
              className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
            >
              <div className="flex items-center gap-3">
                {d.statut === "done" && <CheckCircle2 className="h-4 w-4 text-[#2E86C1]" />}
                {d.statut === "pending" && <Clock className="h-4 w-4 text-[#E67E22]" />}
                {d.statut === "warning" && <AlertTriangle className="h-4 w-4 text-[#C0392B]" />}
                <span className="text-sm text-[var(--color-ink)]">{d.label}</span>
              </div>
              <span className="text-xs text-[var(--color-muted)]">{d.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Documents clés */}
      <section className="rounded-2xl border border-[var(--color-border)] bg-white p-6 mb-6">
        <h2
          className="text-lg font-bold mb-4"
          style={{ color: MODULE_COLOR, fontFamily: "var(--font-display)" }}
        >
          Documents clés
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DOCUMENTS_CLES.map((doc) => (
            <div
              key={doc.nom}
              className="flex items-center justify-between rounded-xl border border-[var(--color-border)] p-3"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" style={{ color: MODULE_COLOR }} />
                <span className="text-sm">{doc.nom}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--color-muted)]">{doc.expiration}</span>
                <div
                  className={`w-2 h-2 rounded-full ${
                    doc.statut === "ok" ? "bg-[#2E86C1]" : "bg-[#E67E22]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Badge bêta */}
      <div className="rounded-xl border border-[var(--color-sage)]/20 bg-[var(--color-sage)]/5 p-4 text-center">
        <p className="text-xs text-[var(--color-muted)]">
          <Shield className="inline h-3.5 w-3.5 mr-1" />
          Version bêta — Les données affichées proviennent de votre profil Parkimmo existant.
          Vos informations sont protégées par chiffrement et consentement granulaire.
        </p>
      </div>
    </ModuleLayout>
  )
}
