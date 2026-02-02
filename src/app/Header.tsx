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
            className="btn-primary px-4 py-2 text-sm"
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
      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[var(--bg)]/98 backdrop-blur-xl lg:hidden"
          onClick={closeMenu}
          aria-hidden={!menuOpen}
        >
          <div className="flex h-full flex-col">
            {/* Menu header with logo and close button */}
            <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
              <Link href="/" className="flex items-center logo-no-bg" aria-label="DharmaFest home" onClick={closeMenu}>
                <Image
                  src="/logo-nobg.png"
                  alt="DharmaFest"
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center text-white transition hover:text-[var(--accent)]"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu content */}
            <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-8" onClick={(e) => e.stopPropagation()}>
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-xl font-medium text-white transition hover:text-[var(--accent)]"
                >
                  {label}
                </a>
              ))}
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn-primary mt-2 w-full text-center text-base"
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
