import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {label && (
        <AnimatedSection delay={0}>
          <span className="inline-block text-[#93C5FD] text-sm font-semibold uppercase tracking-widest mb-3">
            {label}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.05}>
        <h2
          className="text-4xl md:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.1}>
          <p
            className={`mt-4 text-[#94A3B8] text-lg leading-relaxed max-w-2xl ${
              center ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
