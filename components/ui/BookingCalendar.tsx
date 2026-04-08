"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DAYS_DE = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS_DE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00",
];

const EASE = [0.22, 1, 0.36, 1] as const;

// Earliest bookable date = now + 48 hours
function getMinDate(): Date {
  const d = new Date();
  d.setHours(d.getHours() + 48);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isAvailable(date: Date): boolean {
  const min = getMinDate();
  const day = date.getDay(); // 0=Sun, 6=Sat
  return date >= min && day !== 0 && day !== 6;
}

function isSlotAvailable(date: Date, time: string): boolean {
  const [h, m] = time.split(":").map(Number);
  const dt = new Date(date);
  dt.setHours(h, m, 0, 0);
  const minDt = new Date();
  minDt.setHours(minDt.getHours() + 48);
  return dt >= minDt;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return (new Date(year, month, 1).getDay() + 6) % 7;
}
function isToday(date: Date) {
  return date.toDateString() === new Date().toDateString();
}
export function formatDate(date: Date) {
  return date.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
}

interface Props {
  onConfirm: (date: Date, time: string) => void;
}

export default function BookingCalendar({ onConfirm }: Props) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const cells = useMemo(() => {
    const c: (Date | null)[] = Array(firstDay).fill(null);
    for (let d = 1; d <= daysInMonth; d++) c.push(new Date(viewYear, viewMonth, d));
    while (c.length % 7 !== 0) c.push(null);
    return c;
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

  // Available slots for selected date
  const availableSlots = selectedDate
    ? TIME_SLOTS.filter(t => isSlotAvailable(selectedDate, t))
    : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-4">

      {/* ── Calendar ── */}
      <div className="bg-[#0B1220] border border-white/[0.06] rounded-2xl p-6">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevMonth} disabled={!canGoBack}
            className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center transition-colors">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg>
          </button>
          <p className="text-white font-bold text-base" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            {MONTHS_DE[viewMonth]} {viewYear}
          </p>
          <button onClick={nextMonth}
            className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS_DE.map(d => (
            <div key={d} className={`text-center text-[10px] font-bold uppercase tracking-widest pb-2 ${d === "Sa" || d === "So" ? "text-white/12" : "text-white/25"}`}>{d}</div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {cells.map((date, i) => {
            if (!date) return <div key={i} />;
            const avail = isAvailable(date);
            const sel = selectedDate?.toDateString() === date.toDateString();
            const tod = isToday(date);
            return (
              <button key={i} onClick={() => { if (avail) { setSelectedDate(date); setSelectedTime(null); } }}
                disabled={!avail}
                className={`relative aspect-square rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-150
                  ${sel ? "bg-[#2563EB] text-white shadow-[0_0_16px_rgba(37,99,235,0.45)]" :
                    avail ? "hover:bg-[#2563EB]/15 hover:text-white text-white/60 cursor-pointer" :
                    "text-white/10 cursor-not-allowed"}`}>
                {tod && !sel && <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#60A5FA]" />}
                {date.getDate()}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/[0.04] text-[10px] text-white/20">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#2563EB]/50" />Verfügbar</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-white/[0.06]" />Nicht verfügbar</span>
          <span className="flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#F59E0B]/60"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Min. 48h Vorlauf</span>
          </span>
        </div>
      </div>

      {/* ── Time slots ── */}
      <div className="bg-[#0B1220] border border-white/[0.06] rounded-2xl p-6 flex flex-col">
        {selectedDate ? (
          <>
            <p className="text-white/25 text-[10px] font-bold uppercase tracking-widest mb-1">Uhrzeit</p>
            <p className="text-[#60A5FA] text-sm font-semibold mb-5">{formatDate(selectedDate)}</p>
            <div className="flex flex-col gap-2 flex-1">
              {availableSlots.length === 0 ? (
                <p className="text-white/25 text-xs text-center py-6">Keine freien Slots an diesem Tag.</p>
              ) : (
                availableSlots.map((slot, i) => (
                  <motion.button key={slot}
                    initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, ease: EASE }}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all duration-200 text-left ${
                      selectedTime === slot
                        ? "bg-[#2563EB] border-[#2563EB] text-white shadow-[0_0_14px_rgba(37,99,235,0.4)]"
                        : "bg-white/[0.03] border-white/[0.06] text-white/55 hover:bg-[#2563EB]/10 hover:border-[#2563EB]/30 hover:text-white"
                    }`}>
                    {slot} Uhr
                  </motion.button>
                ))
              )}
            </div>

            <AnimatePresence>
              {selectedTime && (
                <motion.button
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                  onClick={() => onConfirm(selectedDate, selectedTime)}
                  className="mt-5 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_28px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                  Termin wählen
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </motion.button>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 text-center py-4">
            <div className="w-11 h-11 rounded-xl bg-[#2563EB]/08 flex items-center justify-center mb-3 text-[#60A5FA]/30">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <p className="text-white/20 text-xs leading-relaxed">Datum im Kalender<br />wählen</p>
          </div>
        )}
      </div>
    </div>
  );
}
