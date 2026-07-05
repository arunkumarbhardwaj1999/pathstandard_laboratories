import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { certifications, trustPillars } from "@/lib/content";

export default function TrustBar() {
  return (
    <section id="trust" className="section-padding bg-ps-navy text-white">
      <Container wide>
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10 mb-14">
            <div className="md:max-w-sm">
              <p className="text-eyebrow mb-2 !text-ps-teal-light">Trust Framework</p>
              <h2 className="text-section-title text-white">Built for modern pathology workflows</h2>
              <div className="mt-5 h-px w-12 bg-ps-teal" aria-hidden />
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:pt-2">
              Every slide gets a permanent ID, batch-level records, and quality documents that are
              easy to show during audits.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center md:p-8 lg:text-left">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-ps-teal/15 lg:mx-0">
                  <svg className="h-6 w-6 text-ps-teal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-ps-teal-light/80">
                  {pillar.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={150}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="mb-6 text-center text-eyebrow !text-white/50">Quality &amp; regulatory</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5"
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      c.status === "aligned"
                        ? "bg-green-500"
                        : c.status === "progress"
                        ? "bg-amber-400"
                        : "bg-white/40"
                    }`}
                    aria-hidden
                  />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">{c.name}</div>
                    <div className="text-[10px] text-white/50">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-[10px] text-white/35">
              Green = aligned · Amber = in progress · Grey = planned
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
