import AnimatedSection from "@/components/ui/AnimatedSection";

const clients = [
  "Kimchi Korean Kitchen",
  "Lombare Parfum",
  "Mana Café",
  "Peter Schmid GmbH",
  "YAMYAM",
  "Business Class",
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-[#020408]">
      <div className="page-container">
        <AnimatedSection delay={0}>
          <p className="text-center text-white/35 text-xs uppercase tracking-[0.22em] font-medium mb-9">
            Vertraut von Unternehmen in der Region
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-2 md:gap-y-3">
            {clients.map((client, i) => (
              <span key={client} className="flex items-center gap-4 sm:gap-8 md:gap-10">
                <span className="text-white/40 text-sm font-medium hover:text-white/50 transition-colors duration-200 cursor-default">
                  {client}
                </span>
                {i < clients.length - 1 && (
                  <span className="text-white/10 hidden sm:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
