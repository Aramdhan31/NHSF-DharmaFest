"use client";

import { useState } from "react";

interface TicketEmbedProps {
  url: string;
}

export default function TicketEmbed({ url }: TicketEmbedProps) {
  const [showEmbed, setShowEmbed] = useState(false);

  if (!showEmbed) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-elevated)]" style={{ minHeight: "500px" }}>
        {/* Styled Preview Card */}
        <div className="p-8 sm:p-12">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent)]/20 mb-4">
                <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold text-white mb-3">
                DharmaFest 2026 Tickets
              </h3>
              <p className="text-[var(--fg-muted)] text-sm sm:text-base">
                Secure ticket purchasing powered by SumUp
              </p>
            </div>

            {/* Preview Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="card-sexy p-4 text-center">
                <div className="text-2xl font-bold text-[var(--accent)] mb-1">£10</div>
                <div className="text-xs text-[var(--fg-subtle)] uppercase">Per Ticket</div>
              </div>
              <div className="card-sexy p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">8 Mar</div>
                <div className="text-xs text-[var(--fg-subtle)] uppercase">2026</div>
              </div>
              <div className="card-sexy p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">5PM</div>
                <div className="text-xs text-[var(--fg-subtle)] uppercase">Doors Open</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() => setShowEmbed(true)}
                className="btn-primary text-base px-8 py-4 mb-3"
              >
                View & Purchase Tickets
              </button>
              <p className="text-xs text-[var(--fg-subtle)]">
                Click to load the secure ticket page
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]" style={{ height: "500px" }}>
      <div className="relative w-full h-full" style={{ overflow: "hidden" }}>
        <iframe
          src={url}
          title="DharmaFest 2026 – Ticket page"
          width="100%"
          height="500"
          style={{ 
            border: 0,
            display: "block"
          }}
          className="w-full"
          allow="payment"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
        {/* Overlay to hide cookie banner - covers bottom 200px */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-[var(--bg-card)] pointer-events-none" style={{ zIndex: 20 }} />
        
        {/* Close/Open in new tab button */}
        <div className="absolute top-4 right-4 z-30 flex gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--bg)] shadow-lg transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
            aria-label="Open ticket page in new tab"
          >
            Open in new tab
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
