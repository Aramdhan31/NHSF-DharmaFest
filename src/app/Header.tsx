"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const TICKET_URL = "https://www.nhsf.org.uk/product/dharmafest-2026-early-bird-release/";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#see", label: "What You'll See" },
  { href: "#theme", label: "Theme" },
  { href: "#tickets", label: "Tickets" },
];

const ADMIN_LINKS = [
  { href: "/venue", label: "Venue Technical" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const closeMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    logout();
    closeMenu();
  };

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
          {isAuthenticated && ADMIN_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link text-[var(--accent)] transition hover:text-[var(--accent-bright)]"
            >
              {label}
            </Link>
          ))}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-sm text-[var(--fg-muted)] transition hover:text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-bright)] underline underline-offset-2"
            >
              Login
            </Link>
          )}
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
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-[100] bg-[var(--bg)]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      >
        {/* Menu card */}
        <div
          className={`mx-auto mt-8 w-full max-w-sm rounded-2xl border border-[var(--accent-border)] bg-[var(--bg-card)] shadow-2xl transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-nobg.png"
                alt="DharmaFest"
                width={100}
                height={30}
                className="h-7 w-auto object-contain"
              />
              <span className="text-sm font-semibold text-white">DharmaFest</span>
            </div>
            <button
              type="button"
              onClick={closeMenu}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--fg-muted)] transition-all hover:bg-[var(--accent-dim)] hover:text-[var(--accent)]"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="px-5 py-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--fg-subtle)]">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-base font-medium text-white underline decoration-[var(--accent)]/30 underline-offset-4 transition-all hover:bg-[var(--accent-dim)] hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                >
                  {label}
                </a>
              ))}
              
              {/* Admin Links */}
              {isAuthenticated && (
                <>
                  <div className="my-2 border-t border-[var(--border)]" />
                  <p className="px-4 text-xs font-semibold uppercase tracking-wider text-[var(--fg-subtle)] mb-2">
                    Admin
                  </p>
                  {ADMIN_LINKS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className="rounded-lg px-4 py-3 text-base font-medium text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 transition-all hover:bg-[var(--accent-dim)] hover:text-[var(--accent-bright)] hover:decoration-[var(--accent)]"
                    >
                      {label}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="rounded-lg px-4 py-3 text-base font-medium text-[var(--fg-muted)] transition-all hover:bg-[var(--accent-dim)] hover:text-[var(--accent)] text-left"
                  >
                    Logout
                  </button>
                </>
              )}
              
              {!isAuthenticated && (
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-base font-medium text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 transition-all hover:bg-[var(--accent-dim)] hover:text-[var(--accent-bright)] hover:decoration-[var(--accent)] text-left"
                >
                  Login
                </Link>
              )}
              
              {/* Get tickets button */}
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn-primary mt-3 w-full text-center py-3"
              >
                Get tickets
              </a>
            </div>
          </div>

          {/* Accent border */}
          <div className="h-1 rounded-b-2xl bg-gradient-to-r from-[var(--accent)] via-[var(--accent-bright)] to-[var(--accent)]" />
        </div>
      </div>
    </header>
  );
}
