import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – JR Agency Services",
  description: "Impressum und rechtliche Angaben von JR Agency Services.",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#020408] pt-40 pb-24">
      <div className="max-w-2xl mx-auto px-6">

        <h1
          className="text-white font-extrabold mb-12"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
          }}
        >
          Impressum
        </h1>

        <div className="space-y-10 text-white/55 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Ruben Lichdi<br />
              JR Agency Services<br />
              Im Eselsberg 17<br />
              74193 Schwaigern<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Kontakt</h2>
            <p>
              Tel.: <a href="tel:+4901783993437" className="text-white/70 hover:text-white transition-colors">01783993437</a><br />
              E-Mail: <a href="mailto:info@jragencyservices.com" className="text-white/70 hover:text-white transition-colors">info@jragencyservices.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Umsatzsteuer</h2>
            <p>
              Umsatzsteuerbefreit gemäß § 19 UStG (Kleinunternehmerregelung).
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Online-Streitbeilegung</h2>
            <p>
              Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
              <a
                href="https://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors underline underline-offset-2"
              >
                https://ec.europa.eu/odr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Streitbeilegung</h2>
            <p>
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
