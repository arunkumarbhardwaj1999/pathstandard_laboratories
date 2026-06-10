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
      <div className="hidden bg-ps-navy lg:block">
        <Container wide className="flex h-9 items-center justify-between">
          <div className="flex items-center gap-5 text-xs text-white/70">
            <a href="https://cert.pathstandard.com" className="hover:text-white transition-colors">
              cert.pathstandard.com
            </a>
            <span className="text-white/30">|</span>
            <span>Hyderabad · Singapore · APAC</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium text-white/80">
            <a href="#use-cases" className="hover:text-white transition-colors">
              For Healthcare Providers
            </a>
            <a href="#roadmap" className="hover:text-white transition-colors">
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

            <form
              className="hidden md:flex flex-1 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "#faq";
              }}
            >
              <label htmlFor="site-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <svg
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ps-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  id="site-search"
                  type="search"
                  placeholder="Search PathStandard..."
                  className="w-full rounded-full border border-ps-slate-200 bg-ps-slate-50 py-2 pl-10 pr-4 text-sm text-ps-slate-800 placeholder:text-ps-slate-400 focus:border-ps-slate-400 focus:outline-none"
                />
              </div>
            </form>

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
          </div>
        </Container>
      </div>

      {menuOpen && (
        <div className="border-t border-ps-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="mb-4 flex flex-col gap-2 border-b border-ps-slate-100 pb-4 text-sm text-ps-slate-600">
            <a href="#use-cases" onClick={() => setMenuOpen(false)}>For Healthcare Providers</a>
            <a href="#roadmap" onClick={() => setMenuOpen(false)}>For Partners</a>
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
