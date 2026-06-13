"use client";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  product: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Products & Slides", href: "/products" },
    { label: "Compliance", href: "/compliance" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  regulatory: [
    { label: "ISO 15189:2022", href: "/compliance" },
    { label: "NABL Documentation", href: "/compliance" },
    { label: "CDSCO MDR 2017", href: "/compliance" },
    { label: "ISO 13485 QMS", href: "/compliance" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  connect: [
    { label: "hello@pathstandard.com", href: "mailto:hello@pathstandard.com" },
    { label: "cert.pathstandard.com", href: "https://cert.pathstandard.com" },
    { label: "Get in Touch", href: "#contact" },
  ],
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t border-ps-slate-200 bg-white">
      <Container wide className="section-padding-sm">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="lg:max-w-xs">
            <Logo size="md" />
            <div className="mt-4 h-px w-12 bg-ps-navy" aria-hidden />
            <p className="mt-6 text-sm leading-relaxed text-ps-slate-500">
              INDIA · SINGAPORE · APAC · MEA · WE · USA
            </p>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-3 lg:max-w-2xl">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ps-slate-900">
                Product
              </h3>
              <ul className="space-y-2.5 text-sm text-ps-slate-600">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ps-navy transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ps-slate-900">
                Regulatory
              </h3>
              <ul className="space-y-2.5 text-sm text-ps-slate-600">
                {footerLinks.regulatory.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ps-navy transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ps-slate-900">
                Contact
              </h3>
              <ul className="space-y-2.5 text-sm text-ps-slate-600">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ps-navy transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-ps-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-ps-slate-500">
            © 2026 PathStandard Technologies Pvt. Ltd. & Pte. Ltd. · All specifications subject to change
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-1 text-ps-slate-500 hover:text-ps-navy transition-colors"
            aria-label="Back to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ps-slate-300 group-hover:border-ps-navy transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Top</span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
