"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
      <nav className="layout flex min-h-16 items-center justify-between py-2">
        <Link href="/" className="flex items-center logo-no-bg" aria-label="DharmaFest home" onClick={closeMenu}>
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
            className="btn-primary"
          >
            Get tickets
          </a>
        </div>

        {/* Burger button – visible on mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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
      <div
        className={`fixed inset-x-0 bottom-0 top-24 z-40 bg-[var(--bg)]/98 backdrop-blur-xl transition lg:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div className="layout flex flex-col gap-6 py-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-lg font-medium text-white transition hover:text-[var(--accent)]"
            >
              {label}
            </a>
          ))}
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn-primary mt-4 w-fit text-base"
          >
            Get tickets
          </a>
        </div>
      </div>
    </header>
  );
}
