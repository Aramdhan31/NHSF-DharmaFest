import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Venue Technical Information | DharmaFest 2026",
  description: "Technical coordinator contact and venue technical questions for DharmaFest 2026.",
};

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <header className="border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
        <div className="layout flex h-16 items-center justify-between py-2">
          <Link href="/" className="flex items-center logo-no-bg" aria-label="Back to DharmaFest">
            <Image
              src="/logo-nobg.png"
              alt="DharmaFest"
              width={280}
              height={84}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--fg-muted)] underline underline-offset-2 hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="layout section">
        <h1 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-white sm:text-4xl">
          Venue Technical Information
        </h1>
        <p className="mt-2 text-[var(--fg-muted)]">
          DharmaFest 2026 – Technical Coordination
        </p>

        <div className="section-body max-w-3xl space-y-8 text-[var(--fg-muted)] leading-relaxed">
          {/* Contact Information */}
          <section>
            <h2 className="mb-4 font-[family-name:var(--font-cormorant)] text-xl font-semibold text-white">
              Technical Coordinator
            </h2>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4">
              <p className="text-white font-medium">Arjun Ramdhan</p>
              <p className="mt-1 text-sm">Technical Coordinator – DharmaFest 2026</p>
              <div className="mt-3 space-y-1 text-sm">
                <p>
                  <strong className="text-white">Phone:</strong>{" "}
                  <a href="tel:07518436566" className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]">
                    07518 436566
                  </a>
                </p>
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a href="mailto:arjun.ramdhan@nhsf.org.uk" className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]">
                    arjun.ramdhan@nhsf.org.uk
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section>
            <p className="leading-relaxed">
              I am writing as the Technical Coordinator for DharmaFest 2026, organised by NHSF (UK).
              As part of our initial planning, we would like to confirm the technical facilities and venue
              provisions available at Bhavan London before finalising and issuing technical
              requirement forms to performers.
            </p>
            <p className="mt-3 leading-relaxed">
              Our aim is to clearly communicate to performers what equipment and support can be
              provided by the venue, and to avoid any technical limitations or misunderstandings on
              the day of the event.
            </p>
            <p className="mt-3 leading-relaxed">
              From previous events, we understand that the venue can provide six microphones with
              stands, as well as a black projection curtain at the rear of the stage. We would appreciate
              further clarification on the following:
            </p>
          </section>

          {/* Lighting */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              Lighting
            </h2>
            <ul className="space-y-2 list-inside list-disc">
              <li>What stage lighting is available (for example static spotlights, follow spotlights, theatre lighting or colour washes)?</li>
              <li>Is it possible to preset lighting states or cues in advance?</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              I am happy to programme lighting presets during a dress rehearsal on the morning of
              the event, with support from Shankar Anna ji, if appropriate.
            </p>
          </section>

          {/* Stage Curtain */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              Stage Curtain
            </h2>
            <p className="mb-2 leading-relaxed">
              We would like clarification on the main stage curtain, specifically how quickly it opens
              and closes.
            </p>
            <p className="leading-relaxed">
              In previous years, the curtain movement was relatively slow, which resulted in
              awkward silence during transitions. To avoid this, we are open to not using the curtain
              if advised.
            </p>
          </section>

          {/* Live Feed to Backstage */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              Live Feed to Backstage
            </h2>
            <p className="mb-2 leading-relaxed">
              It has been suggested that a live video feed from the stage to backstage would assist
              with performer cueing.
            </p>
            <p className="mb-2 leading-relaxed">
              We would appreciate guidance from Shankar Anna ji on how best to implement this
              and what setup the venue would recommend.
            </p>
            <p className="leading-relaxed">
              Additionally, could you advise on Wi-Fi availability and reliability in backstage areas?
            </p>
          </section>

          {/* Additional Venue Queries */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              Additional Venue Queries
            </h2>
            <ul className="space-y-2 list-inside list-disc">
              <li>Please could you confirm fire exit arrangements for performers and backstage areas? We appreciate this may already have been discussed, but we would like to reconfirm.</li>
              <li>Are there any venue guidelines or recommendations regarding signage for guests?</li>
            </ul>
          </section>
        </div>

        <p className="mt-10">
          <Link href="/" className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]">
            ← Back to DharmaFest
          </Link>
        </p>
      </main>
    </div>
  );
}
