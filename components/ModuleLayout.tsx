"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Shield,
  Menu,
  X,
  ChevronLeft,
  type LucideIcon,
} from "lucide-react"

interface NavItem {
  href: string
  label: string
  Icon: LucideIcon
}

interface ModuleLayoutProps {
  moduleNom: string
  moduleColor: string
  moduleIcon: LucideIcon
  navItems: NavItem[]
  currentPath: string
  children: React.ReactNode
}

export default function ModuleLayout({
  moduleNom,
  moduleColor,
  moduleIcon: ModuleIcon,
  navItems,
  currentPath,
  children,
}: ModuleLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* SIDEBAR — desktop */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[var(--color-border)] bg-white">
        {/* Logo */}
        <div className="px-5 py-4 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: moduleColor }}
            >
              <ModuleIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <p
                className="text-sm font-bold"
                style={{ color: moduleColor, fontFamily: "var(--font-display)" }}
              >
                {moduleNom}
              </p>
              <p className="text-[10px] text-[var(--color-muted)]">
                KPKC · Bêta
              </p>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = currentPath === item.href
            const Icon = item.Icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "text-white"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-cream)]"
                }`}
                style={isActive ? { backgroundColor: moduleColor } : undefined}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Back to hub */}
        <div className="px-3 pb-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-xs text-[var(--color-muted)] hover:text-[var(--color-forest)] transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Retour au Hub
          </Link>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <div className="flex-1 flex flex-col">
        <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-white">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: moduleColor }}
            >
              <ModuleIcon className="h-4 w-4 text-white" />
            </div>
            <span
              className="text-sm font-bold"
              style={{ color: moduleColor, fontFamily: "var(--font-display)" }}
            >
              {moduleNom}
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-[var(--color-forest)]"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </header>

        {/* Mobile menu overlay */}
        {sidebarOpen && (
          <div className="md:hidden border-b border-[var(--color-border)] bg-white px-4 py-3">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPath === item.href
                const Icon = item.Icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                      isActive
                        ? "text-white"
                        : "text-[var(--color-muted)]"
                    }`}
                    style={isActive ? { backgroundColor: moduleColor } : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 mt-3 text-xs text-[var(--color-muted)]"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Retour au Hub
            </Link>
          </div>
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
