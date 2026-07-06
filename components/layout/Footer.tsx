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
    { label: "contact@pathstandard.in", href: "mailto:contact@pathstandard.in" },
    { label: "+1 (555) 000-0000", href: "tel:+15550000000" },
    { label: "Get in Touch", href: "#contact" },
  ],
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ps-navy-deep text-white">
      <Container wide className="section-padding-sm">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="lg:max-w-xs">
            <Logo size="md" variant="light" />
            <div className="mt-4 h-px w-12 bg-ps-teal" aria-hidden />
            <p className="mt-6 text-sm leading-relaxed text-white/50">
              INDIA · SINGAPORE · APAC · MEA · WE · USA
            </p>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-3 lg:max-w-2xl">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
                Product
              </h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ps-teal-light transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
                Regulatory
              </h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                {footerLinks.regulatory.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ps-teal-light transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
                Contact
              </h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ps-teal-light transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © 2026 PathStandard Technologies Pvt. Ltd. & Pte. Ltd. · All specifications subject to change
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 group-hover:border-white transition-colors">
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
