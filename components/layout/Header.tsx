"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm shadow-ps-slate-200/50">
      <div className="hidden border-b border-ps-slate-100 lg:block">
        <Container wide className="flex h-10 items-center justify-between">
          <div className="flex items-center gap-5 text-xs text-ps-slate-500">
            <a href="https://cert.pathstandard.com" className="hover:text-ps-slate-900 transition-colors">
              cert.pathstandard.com
            </a>
            <span className="text-ps-slate-300">|</span>
            <span>Hyderabad · Singapore · APAC</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium text-ps-slate-600">
            <a href="#use-cases" className="hover:text-ps-slate-900 transition-colors">
              For Healthcare Providers
            </a>
            <a href="#roadmap" className="hover:text-ps-slate-900 transition-colors">
              For Partners
            </a>
            <a href="mailto:hello@pathstandard.com" className="hover:text-ps-slate-900 transition-colors">
              Contact
            </a>
          </div>
        </Container>
      </div>

      <div className="relative">
      <Container wide>
        <div className="flex h-[4.25rem] items-center justify-between">
          <Logo size="sm" />

          <nav className="hidden items-center justify-center gap-1 xl:flex xl:absolute xl:left-1/2 xl:-translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[15px] font-medium text-ps-slate-700 transition-colors hover:text-ps-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#contact" variant="outline" className="!py-2.5 !px-5 !text-[13px]">
              Sample Box
            </Button>
            <Button href="#contact" variant="primary" className="!py-2.5 !px-6 !text-[13px]">
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
      </Container>
      </div>

      {menuOpen && (
        <div className="border-t border-ps-slate-200 bg-white px-6 py-5 lg:hidden">
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
              <Button href="#contact" variant="outline" className="w-full">
                Request a Sample Box
              </Button>
              <Button href="#contact" variant="primary" className="w-full">
                Request a Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
