import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { trustBadges, trustPillars, partnerLogos } from "@/lib/content";

export default function TrustBar() {
  return (
    <section id="trust" className="section-padding bg-ps-slate-50">
      <Container wide>
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10 mb-14">
            <div className="md:max-w-sm">
              <p className="text-eyebrow mb-2">Trust Framework</p>
              <h2 className="text-section-title text-ps-navy">Built for modern pathology workflows</h2>
              <div className="mt-5 h-px w-12 bg-ps-navy" aria-hidden />
            </div>
            <p className="text-lead max-w-2xl md:pt-2">
              Every slide gets a permanent ID, batch-level records, and quality documents that are
              easy to show during audits.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 80}>
              <div className="data-card h-full text-center lg:text-left">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-ps-slate-200 lg:mx-0">
                  <svg className="h-6 w-6 text-ps-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-ps-slate-900">{pillar.title}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-ps-slate-500">
                  {pillar.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ps-slate-600">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={150}>
          <div className="mt-16 rounded-lg border border-ps-slate-200 bg-white p-8 md:p-10">
            <p className="text-center text-eyebrow mb-6">Aligned with / Compliant with</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-ps-slate-200 bg-ps-slate-50 px-5 py-2.5 text-xs font-bold text-ps-slate-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 border-t border-ps-slate-200 pt-10">
            <p className="text-center text-eyebrow mb-8">Trusted Standards & Partners</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-16 min-w-[140px] items-center justify-center gap-2.5 rounded-lg border border-ps-slate-200 bg-white px-5 shadow-sm"
                >
                  <svg className="h-5 w-5 shrink-0 text-ps-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ps-slate-700">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
