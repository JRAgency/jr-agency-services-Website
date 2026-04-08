"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;
const DAYS_DE = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS_DE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

const TIME_SLOTS = [
  { id: "09:00", label: "09:00 Uhr" },
  { id: "10:00", label: "10:00 Uhr" },
  { id: "11:00", label: "11:00 Uhr" },
  { id: "14:00", label: "14:00 Uhr" },
  { id: "15:00", label: "15:00 Uhr" },
  { id: "16:00", label: "16:00 Uhr" },
  { id: "17:00", label: "17:00 Uhr" },
];

const TOPICS = [
  "Neue Website",
  "Website-Redesign",
  "Online-Shop",
  "Social Media Management",
  "Branding & Logo",
  "Komplettpaket",
  "Allgemeine Fragen",
];

type Step = "calendar" | "form" | "success";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  // Monday-based: 0=Mon, 6=Sun
  const d = new Date(year, month, 1).getDay();
  return (d + 6) % 7;
}
function isAvailable(date: Date) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const day = date.getDay(); // 0=Sun, 6=Sat
  return date >= now && day !== 0 && day !== 6;
}
function isToday(date: Date) {
  const now = new Date();
  return date.toDateString() === now.toDateString();
}
function formatDate(date: Date) {
  return date.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
}

export default function TerminPage() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("calendar");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [note, setNote] = useState("");

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const calendarCells = useMemo(() => {
    const cells: (Date | null)[] = Array(firstDay).fill(null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(viewYear, viewMonth, d));
    }
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [viewYear, viewMonth, daysInMonth, firstDay]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelectedDate(null); setSelectedTime(null);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelectedDate(null); setSelectedTime(null);
  };

  const canGoBack = !(viewYear === today.getFullYear() && viewMonth === today.getMonth());

  return (
    <div className="min-h-screen bg-[#060A14] flex flex-col overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2563EB]/[0.07] rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#7C3AED]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>


<div className="relative z-10 flex-1 flex items-start justify-center px-4 py-12">
        <div className="w-full max-w-5xl">

          <AnimatePresence mode="wait">

            {/* ── CALENDAR STEP ── */}
            {step === "calendar" && (
              <motion.div key="calendar"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: EASE }}>

                {/* Header */}
                <div className="text-center mb-10">
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#93C5FD] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Kostenloses Erstgespräch
                  </motion.div>
                  <h1 className="font-black text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
                    Gespräch buchen
                  </h1>
                  <p className="text-white/40 text-base max-w-md mx-auto">
                    30 Minuten — kostenlos & unverbindlich. Wir besprechen Ihr Projekt und zeigen Ihnen erste Ideen.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

                  {/* Calendar */}
                  <div className="bg-[#0B1220] border border-white/[0.06] rounded-3xl p-6 md:p-8">

                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-8">
                      <button onClick={prevMonth} disabled={!canGoBack}
                        className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg>
                      </button>
                      <h2 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {MONTHS_DE[viewMonth]} {viewYear}
                      </h2>
                      <button onClick={nextMonth}
                        className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors duration-200">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg>
                      </button>
                    </div>

                    {/* Day headers */}
                    <div className="grid grid-cols-7 mb-3">
                      {DAYS_DE.map(d => (
                        <div key={d} className={`text-center text-[11px] font-bold uppercase tracking-widest pb-2 ${d === "Sa" || d === "So" ? "text-white/15" : "text-white/30"}`}>{d}</div>
                      ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-1.5">
                      {calendarCells.map((date, i) => {
                        if (!date) return <div key={i} />;
                        const avail = isAvailable(date);
                        const selected = selectedDate?.toDateString() === date.toDateString();
                        const tod = isToday(date);
                        return (
                          <button key={i} onClick={() => { if (avail) { setSelectedDate(date); setSelectedTime(null); } }}
                            disabled={!avail}
                            className={`relative aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200
                              ${selected ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]" :
                                avail ? "bg-white/[0.03] hover:bg-[#2563EB]/15 hover:text-white text-white/70 cursor-pointer border border-transparent hover:border-[#2563EB]/30" :
                                "text-white/12 cursor-not-allowed"}`}
                          >
                            {tod && !selected && <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#60A5FA]" />}
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/[0.04] text-xs text-white/25">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]/40 border border-[#2563EB]/60" />Verfügbar</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />Nicht verfügbar</span>
                    </div>
                  </div>

                  {/* Time slots + info */}
                  <div className="flex flex-col gap-4">

                    {/* Info card */}
                    <div className="bg-[#0B1220] border border-white/[0.06] rounded-3xl p-6">
                      <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-4">Details</p>
                      {[
                        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "30 Minuten" },
                        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.68 8.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.63 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.1 7.4a16 16 0 006.29 6.29l.77-.78a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, text: "Google Meet / Telefon" },
                        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>, text: "Deutsch / Englisch" },
                        { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="20 6 9 17 4 12"/></svg>, text: "Kostenlos & unverbindlich" },
                      ].map(({ icon, text }) => (
                        <div key={text} className="flex items-center gap-3 mb-3 last:mb-0">
                          <span className="text-[#60A5FA]/60">{icon}</span>
                          <span className="text-white/50 text-sm">{text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Time slots */}
                    <div className="bg-[#0B1220] border border-white/[0.06] rounded-3xl p-6 flex-1">
                      {selectedDate ? (
                        <>
                          <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest mb-1">Uhrzeit wählen</p>
                          <p className="text-[#60A5FA] text-sm font-semibold mb-5">{formatDate(selectedDate)}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {TIME_SLOTS.map((slot, i) => (
                              <motion.button key={slot.id}
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.04, ease: EASE }}
                                onClick={() => setSelectedTime(slot.id)}
                                className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                                  selectedTime === slot.id
                                    ? "bg-[#2563EB] border-[#2563EB] text-white shadow-[0_0_16px_rgba(37,99,235,0.4)]"
                                    : "bg-white/[0.03] border-white/[0.06] text-white/60 hover:bg-[#2563EB]/10 hover:border-[#2563EB]/30 hover:text-white"
                                }`}>
                                {slot.label}
                              </motion.button>
                            ))}
                          </div>
                          {selectedTime && (
                            <motion.button
                              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                              onClick={() => setStep("form")}
                              className="w-full mt-5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                              Weiter
                              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                            </motion.button>
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center mb-4 text-[#60A5FA]/50">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          </div>
                          <p className="text-white/25 text-sm">Datum auswählen um<br />Uhrzeiten zu sehen</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── FORM STEP ── */}
            {step === "form" && selectedDate && selectedTime && (
              <motion.div key="form" className="max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: EASE }}>

                {/* Selected appointment summary */}
                <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-2xl px-6 py-4 flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 flex items-center justify-center text-[#60A5FA] shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{formatDate(selectedDate)}</p>
                    <p className="text-[#60A5FA]/70 text-xs mt-0.5">{selectedTime} Uhr · 30 Minuten · Google Meet</p>
                  </div>
                  <button onClick={() => setStep("calendar")} className="text-white/20 hover:text-white/50 transition-colors duration-200 text-xs">
                    Ändern
                  </button>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2" style={{ fontFamily: "var(--font-plus-jakarta)", letterSpacing: "-0.02em" }}>
                  Ihre Kontaktdaten
                </h2>
                <p className="text-white/35 text-sm mb-8">Wir schicken Ihnen den Meeting-Link per E-Mail.</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Ihr Name" required>
                      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Max Mustermann"
                        className="w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                    </Field>
                    <Field label="E-Mail" required>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="max@firma.de"
                        className="w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                    </Field>
                  </div>
                  <Field label="Telefon" optional>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+49 152 ..."
                      className="w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                  </Field>
                  <Field label="Worum geht es?" required>
                    <div className="grid grid-cols-2 gap-2">
                      {TOPICS.map(t => (
                        <button key={t} onClick={() => setTopic(t)}
                          className={`py-3 px-4 rounded-xl text-xs font-semibold border text-left transition-all duration-200 ${
                            topic === t ? "bg-[#2563EB]/15 border-[#2563EB]/50 text-[#93C5FD]" : "bg-white/[0.03] border-white/[0.06] text-white/40 hover:border-white/[0.14] hover:text-white/70"
                          }`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Field label="Kurze Beschreibung" optional>
                    <textarea value={note} onChange={e => setNote(e.target.value)} rows={3}
                      placeholder="Was soll Ihre Website können? Haben Sie schon ein Logo?"
                      className="w-full bg-[#0B1220] border border-white/[0.08] focus:border-[#2563EB]/60 text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 resize-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]" />
                  </Field>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-white/15 text-[11px]">🔒 DSGVO-konform</p>
                    <button
                      onClick={() => setStep("success")}
                      disabled={!name || !email || !topic}
                      className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_36px_rgba(37,99,235,0.5)] hover:scale-[1.02]">
                      Termin bestätigen
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── SUCCESS ── */}
            {step === "success" && selectedDate && selectedTime && (
              <motion.div key="success" className="max-w-lg mx-auto text-center py-8"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}>

                {/* Animated check */}
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full bg-[#10B981]/10 blur-xl scale-150" />
                  <div className="absolute inset-0 rounded-full border border-[#10B981]/20 scale-[1.2]" />
                  <div className="relative w-full h-full rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center"
                    style={{ boxShadow: "0 0 40px rgba(16,185,129,0.2)" }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <p className="text-[#10B981] text-xs font-bold uppercase tracking-[0.2em] mb-3">Termin bestätigt</p>
                  <h2 className="font-black text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
                    Wir freuen uns{name ? `, ${name.split(" ")[0]}` : ""}!
                  </h2>
                  <p className="text-white/40 text-base mb-10 max-w-sm mx-auto">
                    Sie erhalten den Meeting-Link in Kürze an{" "}
                    <span className="text-white font-semibold">{email}</span>.
                  </p>
                </motion.div>

                {/* Appointment card */}
                <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.35, type: "spring", stiffness: 130, damping: 14 }}
                  className="text-left rounded-3xl p-8 mb-10 relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #0B1220, #080F1C)", border: "1px solid rgba(37,99,235,0.15)" }}>
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl" style={{ background: "#2563EB08" }} />
                  <div className="relative">
                    <p className="text-[#60A5FA]/50 text-[11px] font-bold uppercase tracking-widest mb-5">Ihr Termin</p>
                    <div className="space-y-4">
                      {[
                        { label: "Datum", value: formatDate(selectedDate) },
                        { label: "Uhrzeit", value: `${selectedTime} Uhr (30 Min.)` },
                        { label: "Format", value: "Google Meet (Link per E-Mail)" },
                        { label: "Thema", value: topic || "Allgemeine Beratung" },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.04] last:border-0 last:pb-0">
                          <span className="text-white/25 text-sm shrink-0">{label}</span>
                          <span className="text-white/80 text-sm text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                  className="flex items-center justify-center gap-6 flex-wrap">
                  <Link href="/" className="text-white/25 hover:text-white/60 text-sm transition-colors duration-200">← Zurück zur Website</Link>
                  <Link href="/anfragen" className="text-[#60A5FA]/50 hover:text-[#60A5FA] text-sm transition-colors duration-200">Demo anfragen →</Link>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, optional, children }: { label: string; required?: boolean; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-white/30 text-[11px] uppercase tracking-widest mb-2">
        {label}
        {required && <span className="text-[#2563EB]">*</span>}
        {optional && <span className="text-white/15 normal-case tracking-normal">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
