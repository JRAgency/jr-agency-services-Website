'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Leistungen',
    links: [
      { title: 'Webdesign', href: '/webdesign' },
      { title: 'Social Media', href: '/social-media' },
      { title: 'Branding', href: '/branding' },
      { title: 'Demo anfordern', href: '/kontakt#demo' },
    ],
  },
  {
    label: 'Unternehmen',
    links: [
      { title: 'Über uns', href: '/#about' },
      { title: 'Referenzen', href: '/#referenzen' },
      { title: 'FAQ', href: '/#faq' },
      { title: 'Kontakt', href: '/kontakt' },
    ],
  },
  {
    label: 'Rechtliches',
    links: [
      { title: 'Impressum', href: '/impressum' },
      { title: 'Datenschutz', href: '/datenschutz' },
    ],
  },
  {
    label: 'Soziale Medien',
    links: [
      { title: 'Instagram', href: 'https://www.instagram.com/jragencyservices/', icon: InstagramIcon },
      {
        title: 'WhatsApp',
        href: 'https://wa.me/4915129558908',
        icon: ({ className }) => (
          <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        ),
      },
    ],
  },
];

export function FooterSection() {
  return (
    <div className="bg-[#070C18] pb-6" style={{ paddingLeft: 'clamp(20px, 7vw, 160px)', paddingRight: 'clamp(20px, 7vw, 160px)' }}>

      <footer
        className="relative w-full rounded-3xl overflow-hidden border border-white/[0.07] px-6 py-14 sm:px-8 lg:px-14 lg:py-16"
        style={{
          background:
            'radial-gradient(35% 140px at 50% 0%, rgba(37,99,235,0.14) 0%, transparent 100%), #080e1a',
        }}
      >
        {/* Glowing blur line at very top center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/5 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.7) 50%, transparent 100%)',
            filter: 'blur(1px)',
          }}
        />
        {/* Second softer glow layer */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-1/3 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at top, rgba(37,99,235,0.22) 0%, transparent 80%)',
          }}
        />

        <div className="grid w-full gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">

          {/* Brand column */}
          <AnimatedContainer className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/JR Logo (glow effekt) PNG.png"
                alt="JR Agency"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span
                className="font-bold text-white text-sm tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-plus-jakarta)' }}
              >
                JR Agency Services
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Maßgeschneiderte Websites, Social Media und Branding
              für Unternehmen mit Anspruch.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href="tel:+4915225992009"
                className="block text-white/45 hover:text-white/50 text-sm transition-colors duration-200"
              >
                +49 152 25992009
              </a>
              <a
                href="mailto:info@jragencyservices.com"
                className="block text-white/45 hover:text-white/50 text-sm transition-colors duration-200"
              >
                info@jragencyservices.com
              </a>
            </div>
            <p className="text-white/40 text-xs pt-2">
              © {new Date().getFullYear()} JR Agency Services. Alle Rechte vorbehalten.
            </p>
          </AnimatedContainer>

          {/* Link columns */}
          <div className="mt-4 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.08}>
                <div>
                  <h3 className="text-white/35 text-xs uppercase tracking-[0.2em] font-medium mb-4">
                    {section.label}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-white/35 hover:text-white inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                        >
                          {link.icon && <link.icon className="w-3.5 h-3.5 shrink-0" />}
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>

        </div>
      </footer>
    </div>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
