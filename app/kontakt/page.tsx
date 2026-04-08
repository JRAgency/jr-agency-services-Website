"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function KontaktPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    demo: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", demo: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="min-h-screen bg-[#070C18] pt-24 pb-20">
        {/* Background glow */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2563EB]/12 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <AnimatedSection>
              <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-3">
                Kontakt
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.05}>
              <h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Lassen Sie uns
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                  zusammenarbeiten
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-4 text-[#94A3B8] text-lg leading-relaxed">
                Erzählen Sie uns von Ihrem Projekt — wir melden uns innerhalb
                von 24 Stunden bei Ihnen.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection
              delay={0.1}
              className="lg:col-span-3"
            >
              <form
                id="demo"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-[#94A3B8] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      className="w-full bg-[#121D35] border border-[#94A3B8]/15 rounded-xl px-4 py-3.5 text-white placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#2563EB] transition-colors duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-[#94A3B8] mb-2"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="max@example.com"
                      className="w-full bg-[#121D35] border border-[#94A3B8]/15 rounded-xl px-4 py-3.5 text-white placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#2563EB] transition-colors duration-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-[#94A3B8] mb-2"
                  >
                    Telefon (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 152 25992009"
                    className="w-full bg-[#121D35] border border-[#94A3B8]/15 rounded-xl px-4 py-3.5 text-white placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#2563EB] transition-colors duration-200 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[#94A3B8] mb-2"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    className="w-full bg-[#121D35] border border-[#94A3B8]/15 rounded-xl px-4 py-3.5 text-white placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#2563EB] transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                {/* Demo checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      name="demo"
                      checked={formData.demo}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border transition-all duration-200 flex items-center justify-center ${
                        formData.demo
                          ? "bg-[#2563EB] border-[#2563EB]"
                          : "bg-transparent border-[#94A3B8]/30 group-hover:border-[#94A3B8]/60"
                      }`}
                    >
                      {formData.demo && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-[#94A3B8] group-hover:text-[#94A3B8]/80 transition-colors">
                    Ich interessiere mich für eine{" "}
                    <span className="text-[#93C5FD] font-semibold">
                      kostenlose Demo-Website
                    </span>
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-[0_0_32px_rgba(37,99,235,0.5)] text-base"
                >
                  {status === "sending" ? "Wird gesendet..." : "Nachricht senden →"}
                </button>

                {status === "success" && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-green-400 text-sm">
                    Danke! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald.
                  </div>
                )}
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
                    Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.
                  </div>
                )}
              </form>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.15} direction="right" className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3
                    className="text-white font-bold text-xl mb-6"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Kontaktdaten
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#93C5FD] shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#94A3B8]/50 text-xs uppercase tracking-wider mb-1">Adresse</p>
                        <p className="text-white text-sm">JR Agency Services<br />76448 Schweigen<br />Deutschland</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#93C5FD] shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#94A3B8]/50 text-xs uppercase tracking-wider mb-1">Telefon</p>
                        <a href="tel:+4915225992009" className="text-white text-sm hover:text-[#93C5FD] transition-colors">
                          +49 152 25992009
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#93C5FD] shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#94A3B8]/50 text-xs uppercase tracking-wider mb-1">E-Mail</p>
                        <a href="mailto:info@jragencyservices.com" className="text-white text-sm hover:text-[#93C5FD] transition-colors">
                          info@jragencyservices.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#93C5FD] shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#94A3B8]/50 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                        <a
                          href="https://wa.me/4915225992009"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-sm hover:text-[#93C5FD] transition-colors"
                        >
                          +49 152 25992009
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Free Demo box */}
                <div className="bg-gradient-to-br from-[#2563EB]/10 to-[#93C5FD]/05 border border-[#2563EB]/20 rounded-2xl p-6">
                  <h4
                    className="text-white font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Kostenlose Demo-Website
                  </h4>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Neugierig wie Ihre neue Website aussehen könnte? Wir
                    erstellen Ihnen eine unverbindliche Demo — einfach oben
                    das Häkchen setzen.
                  </p>
                  <p className="text-[#94A3B8]/50 text-xs mt-3">
                    Keine Kosten. Keine Verpflichtung. Keine Kreditkarte.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
