import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";
import Header from "./Header";

const NAVARASAS = [
  { sanskrit: "Śringāra", english: "Love" },
  { sanskrit: "Hasya", english: "Laughter" },
  { sanskrit: "Karuna", english: "Compassion" },
  { sanskrit: "Raudra", english: "Anger" },
  { sanskrit: "Vīra", english: "Courage" },
  { sanskrit: "Bhayānaka", english: "Fear" },
  { sanskrit: "Bibhatsa", english: "Disgust" },
  { sanskrit: "Adbhuta", english: "Wonder" },
  { sanskrit: "Śānta", english: "Peace" },
];

const ART_FORMS = [
  "Kathak",
  "Bharatnatyam",
  "Carnatic music",
  "Hindustani music",
  "Fusion dance",
  "Harikatha",
  "Drama",
  "Vocal & devotional",
];

const TICKET_URL = "https://www.nhsf.org.uk/product/dharmafest-2026-early-bird-release/";
const TITLE_IMAGE = "/SnapInsta.to_573800586_18549132913006920_2490458646030760551_n%20(1).jpg";
const BHAVAN_GOOGLE_MAPS = "https://www.google.com/maps/search/?api=1&query=The+Bhavan+London+W14+9HE";
const BHAVAN_WEBSITE = "https://www.bhavan.net/";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Header />

      {/* Title screen – full width, no side margins */}
      <section id="about" className="bg-[var(--bg)] pt-20 pb-12">
        <div className="flex flex-col items-center w-full px-0">
          <div className="relative w-full overflow-hidden bg-[var(--bg-card)]">
            <div className="relative w-full aspect-[3/4] max-h-[72vh] min-h-[280px] sm:aspect-[16/9] sm:max-h-[60vh] sm:min-h-[300px]">
              <Image
                src={TITLE_IMAGE}
                alt="DharmaFest – Your Story, On Stage"
                fill
                className="object-contain object-center"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get tickets
            </a>
            <a href="#event-details" className="text-sm text-[var(--fg-muted)] transition hover:text-white">
              Scroll for event details
            </a>
          </div>
        </div>
      </section>

      {/* Event info – Countdown, Date, Location (Google Maps), Time */}
      <section id="event-details" className="section border-t border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="layout">
          <h2 className="section-title font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
            Event details
          </h2>
          <p className="mt-1 text-[var(--fg-muted)]">Countdown to DharmaFest 2026 · Sunday 8 March, doors 5pm</p>
          <div className="section-body">
            <Countdown />
          </div>
          <div className="event-info section-body">
            <div className="event-info-item">
              <strong>Date</strong>
              <span>Sunday 8 March 2026</span>
            </div>
            <div className="event-info-item">
              <strong>Location</strong>
              <span>The Bhavan (Bharatiya Vidya Bhavan UK)</span>
              <span className="mt-1 block text-sm">4a Castletown Road, London W14 9HE</span>
              <a
                href={BHAVAN_GOOGLE_MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]"
              >
                View on Google Maps →
              </a>
              <a
                href={BHAVAN_WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-[var(--fg-muted)] underline underline-offset-2 hover:text-white"
              >
                Venue website (bhavan.net)
              </a>
            </div>
            <div className="event-info-item">
              <strong>Time</strong>
              <span>Doors open 5pm</span>
            </div>
          </div>
          <div className="section-body">
            <h3 className="mb-3 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              The Bhavan on the map
            </h3>
            <div className="embed-wrapper overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
              <iframe
                src="https://maps.google.com/maps?q=The+Bhavan+London+W14+9HE&z=15&output=embed"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Bhavan, London on Google Maps"
                className="block w-full"
              />
            </div>
            <a
              href={BHAVAN_GOOGLE_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]"
            >
              Open in Google Maps →
            </a>
          </div>
          {/* Venue info – applies to all events at The Bhavan (from bhavan.net) */}
          <div className="section-body rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Image
                src="/bhavan-logo.png"
                alt="The Bhavan – The home of Indian arts"
                width={200}
                height={80}
                className="h-16 w-auto object-contain object-center"
              />
              <h3 className="font-[family-name:var(--font-cormorant)] text-base font-semibold text-white">
                Venue info (The Bhavan)
              </h3>
            </div>
            <p className="mt-3 text-sm text-[var(--fg-muted)] leading-relaxed">
              If you&apos;re driving, log your details at reception when you arrive to get the discounted parking code. Parking meters are in place to support visitors.
            </p>
            <p className="mt-3 text-sm text-[var(--fg-muted)]">
              Venue contact:{" "}
              <a href="tel:02073813086" className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]">020 7381 3086</a>
              {" · "}
              <a href="mailto:info@bhavan.net" className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]">info@bhavan.net</a>
            </p>
            <a
              href={BHAVAN_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-[var(--fg-muted)] underline underline-offset-2 hover:text-white"
            >
              bhavan.net →
            </a>
          </div>
        </div>
      </section>

      {/* What You'll See – types of acts, no specific lineup yet */}
      <section id="see" className="section border-t border-[var(--border)]">
        <div className="layout">
          <h2 className="section-title font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
            What You&apos;ll See
          </h2>
          <p className="mt-2 text-[var(--fg-muted)] leading-relaxed">
            DharmaFest brings together classical and contemporary Indian arts — dance, music, storytelling, and drama — each exploring the nine rasas (Navarasa). The full lineup of acts will be announced closer to the event.
          </p>
          <p className="mt-3 text-sm text-[var(--fg-subtle)]">
            You can expect performances across forms such as:
          </p>
          <ul className="section-body grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ART_FORMS.map((item) => (
              <li key={item}>
                <div className="card-sexy flex items-center justify-center px-4 py-3 text-center text-sm font-[family-name:var(--font-cormorant)] text-white sm:text-base">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Do I need to be a pro? */}
      <section className="section border-t border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="layout">
          <h2 className="section-title font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
            Do I need to be a pro?
          </h2>
          <div className="section-body max-w-2xl space-y-3 text-[var(--fg-muted)] leading-relaxed">
            <p>
              No. DharmaFest is about expression, not perfection. First performance or hundredth — we want to see it.
            </p>
            <p>Get your tickets and join us on the night.</p>
          </div>
        </div>
      </section>

      {/* Theme – Navarasas */}
      <section id="theme" className="section border-t border-[var(--border)]">
        <div className="layout">
          <h2 className="section-title font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
            The Theme
          </h2>
          <p className="mt-1 text-[var(--accent)]">The nine emotions through art</p>
          <ul className="section-body grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {NAVARASAS.map(({ sanskrit, english }) => (
              <li key={sanskrit}>
                <div className="card-sexy flex items-center justify-between px-5 py-4">
                  <span className="font-[family-name:var(--font-cormorant)] italic text-[var(--accent)]">{sanskrit}</span>
                  <span className="text-[var(--fg-muted)]">{english}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA – Ticket page preview; click anywhere opens ticket page */}
      <section id="tickets" className="section border-t border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" aria-hidden />
        <div className="layout relative">
          <h2 className="section-title font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            Ready to shine?
          </h2>
          <p className="mt-2 text-[var(--fg-muted)]">Sunday 8 March 2026 · The Bhavan, London</p>
          <p className="mt-3 text-sm text-[var(--fg-muted)]">Click anywhere on the ticket page below to open it and complete your purchase.</p>
          <div className="section-body relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)]">
            <iframe
              src={TICKET_URL}
              title="DharmaFest 2026 – Ticket page preview"
              width="100%"
              height="700"
              style={{ border: 0, pointerEvents: "none" }}
              className="block w-full"
              tabIndex={-1}
            />
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
              aria-label="Open ticket page to buy tickets"
            >
              <span className="rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-semibold text-[var(--bg)] shadow-lg">
                Click to open ticket page →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer – centered layout like reference */}
      <footer className="section border-t border-[var(--border)] pt-12 pb-10">
        <div className="layout text-center">
          {/* Top section – branding */}
          <div className="logo-no-bg flex justify-center">
            <Image
              src="/logo-nobg.png"
              alt="DharmaFest"
              width={200}
              height={60}
              className="h-36 w-auto object-contain"
            />
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
            DharmaFest
          </h2>
          <p className="mt-1 text-sm text-[var(--fg-muted)]">
            Your Story, On Stage · NHSF (UK) Cultural Show
          </p>
          <p className="mt-4 text-xs text-[var(--fg-subtle)]">
            © {new Date().getFullYear()} National Hindu Students Forum (UK). DharmaFest 2026. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="mt-2 inline-block text-sm text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]"
          >
            Privacy Policy
          </Link>

          {/* Divider */}
          <div className="mx-auto mt-8 w-full max-w-xs border-t border-[var(--border)] pt-8" />

          {/* Bottom section – Follow us + social */}
          <p className="font-[family-name:var(--font-cormorant)] text-base font-semibold text-white">
            Follow us
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/nhsf_uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E4405F] text-white transition hover:opacity-90"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href="https://www.facebook.com/NHSFUK/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1877F2] text-white transition hover:opacity-90"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@nhsf_uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white transition hover:opacity-90"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a
              href="https://www.youtube.com/@NHSFUK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF0000] text-white transition hover:opacity-90"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a
              href="https://linktr.ee/nhsf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#43e55b] text-white transition hover:opacity-90"
              aria-label="Linktree"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}