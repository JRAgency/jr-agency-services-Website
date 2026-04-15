import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – JR Agency Services",
  description: "Datenschutzerklärung von JR Agency Services.",
};

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-white/55 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Verantwortlicher</h2>
            <p>
              Ruben Lichdi<br />
              JR Agency Services<br />
              Im Eselsberg 17<br />
              74193 Schwaigern<br />
              Deutschland<br /><br />
              Tel.: <a href="tel:+4901783993437" className="text-white/70 hover:text-white transition-colors">01783993437</a><br />
              E-Mail: <a href="mailto:info@jragencyservices.com" className="text-white/70 hover:text-white transition-colors">info@jragencyservices.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, soweit dies zur Bereitstellung
              unserer Dienstleistungen erforderlich ist oder Sie uns diese freiwillig
              mitteilen — z. B. über unser Kontaktformular oder per E-Mail.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Zwecke der Datenverarbeitung</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Beantwortung von Anfragen über das Kontaktformular oder per E-Mail</li>
              <li>Anbahnung und Abwicklung von Verträgen</li>
              <li>Technischer Betrieb und Sicherheit dieser Website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Rechtsgrundlagen</h2>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt auf Basis von Art. 6 Abs. 1 DSGVO:
            </p>
            <ul className="space-y-1 list-disc list-inside mt-2">
              <li><span className="text-white/70">lit. a</span> – Einwilligung (z. B. Cookies)</li>
              <li><span className="text-white/70">lit. b</span> – Vertragserfüllung oder vorvertragliche Maßnahmen</li>
              <li><span className="text-white/70">lit. f</span> – Berechtigte Interessen (z. B. Sicherheit, Betrieb der Website)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Hosting</h2>
            <p>
              Diese Website wird bei <span className="text-white/70">Vercel Inc.</span>, 340 Pine Street, Suite 701,
              San Francisco, CA 94104, USA gehostet. Beim Aufruf der Website werden
              automatisch Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seiten)
              erfasst. Diese Daten werden zur Sicherstellung des Betriebs verwendet und
              nach kurzer Zeit gelöscht. Vercel ist unter dem EU-US Data Privacy Framework
              zertifiziert.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen
              angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung
              Ihrer Anfrage verarbeitet. Die Daten werden nicht ohne Ihre Einwilligung
              an Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">7. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Technisch notwendige Cookies werden auf
              Basis von Art. 6 Abs. 1 lit. f DSGVO gesetzt. Für alle weiteren Cookies
              holen wir Ihre Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO). Sie können
              Ihre Einwilligung jederzeit über den Cookie-Banner am unteren Bildschirmrand
              widerrufen oder anpassen.
            </p>
            <p className="mt-3">
              <span className="text-white/70 font-medium">Notwendige Cookies</span> — Für den technischen Betrieb der Website
              erforderlich. Kein Opt-out möglich.<br /><br />
              <span className="text-white/70 font-medium">Analyse-Cookies</span> — Helfen uns, die Nutzung der Website zu
              verstehen (z. B. Seitenaufrufe, Verweildauer). Nur mit Ihrer Einwilligung.<br /><br />
              <span className="text-white/70 font-medium">Marketing-Cookies</span> — Ermöglichen personalisierte Werbung.
              Nur mit Ihrer Einwilligung.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">8. Weitergabe von Daten an Dritte</h2>
            <p>
              Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, außer
              dies ist zur Vertragserfüllung notwendig, gesetzlich vorgeschrieben oder
              Sie haben ausdrücklich eingewilligt.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">9. Speicherdauer</h2>
            <p>
              Ihre Daten werden nur so lange gespeichert, wie es für den jeweiligen
              Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">10. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="space-y-1 list-disc list-inside mt-2">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:info@jragencyservices.com" className="text-white/70 hover:text-white transition-colors">
                info@jragencyservices.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">11. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren. Die zuständige Behörde für Baden-Württemberg ist der{" "}
              <span className="text-white/70">Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg</span>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">12. Aktualität dieser Erklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026.
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
              gesetzlicher Vorgaben kann eine Anpassung notwendig werden.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
