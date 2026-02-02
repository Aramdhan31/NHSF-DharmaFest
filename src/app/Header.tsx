"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const TICKET_URL = "https://www.nhsf.org.uk/product/dharmafest-2026-early-bird-release/";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#see", label: "What You'll See" },
  { href: "#theme", label: "Theme" },
  { href: "#tickets", label: "Tickets" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
      <nav className="layout flex min-h-16 items-center justify-between py-2">
        <Link href="/" className="flex items-center logo-no-bg flex-shrink-0" aria-label="DharmaFest home" onClick={closeMenu}>
          <Image
            src="/logo-nobg.png"
            alt="DharmaFest"
            width={400}
            height={120}
            className="h-36 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav – hidden on mobile */}
        <div className="hidden items-center gap-5 text-sm lg:flex lg:gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link text-[var(--fg-muted)] transition hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2 text-sm"
          >
            Get tickets
          </a>
        </div>

        {/* Burger button – visible on mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`h-0.5 w-5 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-[100] bg-gradient-to-b from-[var(--bg)] via-[var(--bg)] to-[var(--bg-elevated)] backdrop-blur-xl lg:hidden"
          onClick={closeMenu}
          aria-hidden={!menuOpen}
        >
          {/* Menu content - compact design, all visible */}
          <div className="flex h-full flex-col px-4 py-4" onClick={(e) => e.stopPropagation()}>
            {/* Decorative top accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

            {/* Close button - compact */}
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent-border)]/30 bg-[var(--bg-card)]/80 text-white backdrop-blur-sm transition-all hover:border-[var(--accent-border)] hover:bg-[var(--accent-dim)] hover:scale-110"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu items - compact, all fit on screen */}
            <div className="flex flex-1 flex-col justify-center gap-2.5">
              {NAV_LINKS.map(({ href, label }, index) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="group relative overflow-hidden rounded-lg border border-[var(--accent-border)]/20 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-elevated)] px-6 py-3.5 text-lg font-semibold text-white shadow-lg transition-all hover:border-[var(--accent-border)] hover:shadow-[0_0_20px_var(--accent-glow)]"
                >
                  <span className="relative z-10 flex items-center justify-between">
                    <span>{label}</span>
                    <svg className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-dim)]/0 via-[var(--accent-dim)]/5 to-[var(--accent-dim)]/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {/* Get tickets button - compact */}
            <div className="mt-4">
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn-primary w-full text-center py-3.5 shadow-[0_8px_32px_var(--accent-glow)] transition-all hover:scale-[1.02] hover:shadow-[0_12px_40px_var(--accent-glow)]"
              >
                Get tickets
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
