import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { trustBadges, trustPillars } from "@/lib/content";

export default function TrustBar() {
  return (
    <section id="trust" className="section-padding bg-ps-slate-50">
      <Container wide>
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10 mb-14">
            <div className="flex gap-5 md:max-w-sm">
              <div className="accent-bar" />
              <div>
                <p className="text-eyebrow mb-2">Trust Framework</p>
                <h2 className="text-section-title">Built for modern pathology workflows</h2>
              </div>
            </div>
            <p className="text-lead max-w-2xl md:pt-2">
              Permanent slide identification, batch-level documentation, and audit-friendly quality
              records — aligned with global compliance standards.
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

        <ScrollReveal delay={200}>
          <div className="mt-16 rounded-xl border border-ps-slate-200 bg-white p-10 md:p-12">
            <p className="text-center text-eyebrow mb-8">Aligned with / Compliant with</p>
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
      </Container>
    </section>
  );
}
