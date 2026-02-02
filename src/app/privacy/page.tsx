import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | DharmaFest 2026",
  description: "Privacy policy for NHSF (UK) DharmaFest — how we collect, use and protect your data.",
};

const NHSF_PRIVACY_URL = "https://www.nhsf.org.uk/privacy-policy-2/";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-[var(--fg-muted)]">
          NHSF (UK) DharmaFest 2026
        </p>

        <div className="section-body max-w-2xl space-y-8 text-[var(--fg-muted)] leading-relaxed">
          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              1. Who we are
            </h2>
            <p>
              NHSF (UK) is the data controller under the Data Protection Act 1998 and the UK GDPR.
              This policy covers NHSF (UK) DharmaFest (the cultural show and related events).
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              2. What personal data we collect
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li><strong>Registration / tickets:</strong> name, email, contact details.</li>
              <li><strong>Event participation:</strong> ticket purchases, attendance.</li>
              <li><strong>Communication:</strong> emails, feedback, enquiries.</li>
              <li><strong>Technical:</strong> IP address, browser, device, analytics.</li>
              <li><strong>Media:</strong> images or videos from events used for promotion (with consent where applicable).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              3. Why we use it
            </h2>
            <p>We use your data to:</p>
            <ul className="list-inside list-disc space-y-1 mt-2">
              <li>Run the event (tickets, scheduling, access).</li>
              <li>Communicate updates and event information.</li>
              <li>Administer attendance and logistics.</li>
              <li>Promote the event and keep records.</li>
              <li>Analytics, safety, and security.</li>
            </ul>
            <p className="mt-2">
              We do not sell or share your data for marketing. Event partners may be informed where relevant for running the event.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              4. Sharing your data
            </h2>
            <p>
              Your data is not sold or shared for marketing. It may be shared with: venues (e.g. The Bhavan), officials, media (with consent), technology providers (e.g. ticket platform), and where required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              5. How long we keep it
            </h2>
            <ul className="list-inside list-disc space-y-1">
              <li>For the event period and follow-up.</li>
              <li>Historical records where needed.</li>
              <li>As required by law.</li>
              <li>Communication records for administration.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              6. Your rights
            </h2>
            <p>
              You have rights to access, rectification, to object, to restrict processing, and to erasure. Send requests by email; we will respond within one month.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              7. Contact
            </h2>
            <p>
              Email:{" "}
              <a href="mailto:info@nhsf.org.uk" className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]">
                info@nhsf.org.uk
              </a>
              <br />
              Use the subject line &ldquo;DharmaFest Privacy&rdquo;.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              8. Changes
            </h2>
            <p>
              This policy may be updated. The new version is effective when published on this page.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white">
              9. Full NHSF (UK) privacy policy
            </h2>
            <p>
              For the full NHSF (UK) privacy policy, see:{" "}
              <a
                href={NHSF_PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-bright)]"
              >
                nhsf.org.uk/privacy-policy-2
              </a>
            </p>
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
