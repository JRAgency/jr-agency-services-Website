export default function Marquee() {
  const items = [
    "Webdesign", "Social Media", "Branding", "E-Commerce",
    "Corporate Identity", "Landing Pages", "Logo-Design", "SEO", "Strategie",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="py-4 border-y border-white/[0.09] overflow-hidden select-none bg-[#020408]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-7 text-white/35 text-xs font-medium uppercase tracking-[0.25em]"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-[#3b82f6]/40 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
