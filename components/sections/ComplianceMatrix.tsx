import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { complianceMatrix } from "@/lib/content";

export default function ComplianceMatrix() {
  return (
    <section id="standards" className="section-padding bg-ps-navy-deep">
      <Container>
        <SectionHeading
          label="Standards & Clauses"
          title="Built for NABL audits. Designed around ISO 15189:2022."
          description="Each PathStandard capability maps directly to a specific standard or clause your assessors check — so compliance documentation is satisfied by design, not by manual preparation."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ps-navy">
          {complianceMatrix.map((row, i) => (
            <ScrollReveal key={row.standard} delay={i * 60}>
              <div className="grid gap-3 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[260px_1fr] md:gap-10 md:p-8">
                <div>
                  <span className="inline-flex rounded-md bg-ps-teal px-2.5 py-1 text-xs font-bold tracking-wide text-white">
                    {row.standard}
                  </span>
                  <p className="mt-2.5 text-sm font-semibold text-white">
                    {row.clause}
                  </p>
                </div>
                <p className="leading-relaxed text-white/70">{row.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
