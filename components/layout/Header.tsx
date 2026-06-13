"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const sampleBoxHref = `${pathname}?intent=Sample+Box#contact`;
  const demoHref = `${pathname}?intent=Demo#contact`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm shadow-ps-slate-200/50">
      <div className="hidden bg-ps-navy lg:block">
        <Container wide className="flex h-9 items-center justify-between">
          <div className="flex items-center gap-5 text-xs text-white/70">
            <a href="https://cert.pathstandard.com" className="hover:text-white transition-colors">
              cert.pathstandard.com
            </a>
            <span className="text-white/30">|</span>
            <span>INDIA · SINGAPORE · APAC · MEA · WE · USA</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium text-white/80">
            <a href="/use-cases" className="hover:text-white transition-colors">
              For Healthcare Providers
            </a>
            <a href="/roadmap" className="hover:text-white transition-colors">
              For Partners
            </a>
            <a href="mailto:hello@pathstandard.com" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </Container>
      </div>

      <div className="relative border-b border-ps-slate-100">
        <Container wide>
          <div className="flex h-[5rem] items-center gap-4 lg:gap-8">
            <Logo size="md" />

            <div className="ml-auto flex items-center gap-3">
            <nav className="hidden items-center justify-center gap-1 xl:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[15px] font-medium text-ps-slate-700 transition-colors hover:text-ps-navy"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button href={sampleBoxHref} variant="outline" className="!py-2.5 !px-5 !text-[13px]">
                Sample Box
              </Button>
              <Button href={demoHref} variant="primary" className="!py-2.5 !px-6 !text-[13px]">
                Request a Demo
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-ps-slate-700 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            </div>
          </div>
        </Container>
      </div>

      {menuOpen && (
        <div className="animate-fade-up border-t border-ps-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="mb-4 flex flex-col gap-2 border-b border-ps-slate-100 pb-4 text-sm text-ps-slate-600">
            <a href="/use-cases" onClick={() => setMenuOpen(false)}>For Healthcare Providers</a>
            <a href="/roadmap" onClick={() => setMenuOpen(false)}>For Partners</a>
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-[15px] font-medium text-ps-slate-800 border-b border-ps-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button href={sampleBoxHref} variant="outline" className="w-full" onClick={() => setMenuOpen(false)}>
                Request a Sample Box
              </Button>
              <Button href={demoHref} variant="primary" className="w-full" onClick={() => setMenuOpen(false)}>
                Request a Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
