import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const cloudFeatures = [
  { label: "CoA retrieval", value: "10 sec" },
  { label: "Lot records", value: "Live" },
  { label: "Audit reports", value: "Ready" },
  { label: "Batch alerts", value: "Auto" },
  { label: "Chain of custody", value: "Full" },
  { label: "LIS integrations", value: "Roadmap" },
];

export default function PathStandardCloud() {
  return (
    <section id="cloud" className="section-padding bg-ps-navy">
      <Container>
        <SectionHeading
          align="center"
          label="The Platform"
          title="Every slide connects to PathStandard Cloud™"
          description="A modern cloud layer that turns slide identity into living quality intelligence — certificates, lot records, audit reports and chain-of-custody, all in one place."
        />

        <ScrollReveal delay={120}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-ps-navy-deep shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-xs font-medium text-white/40">cert.pathstandard.com / dashboard</span>
            </div>
            <div className="grid gap-px bg-white/5 p-px sm:grid-cols-2 lg:grid-cols-3">
              {cloudFeatures.map((f) => (
                <div key={f.label} className="bg-ps-navy-deep p-6 md:p-8">
                  <p className="text-2xl font-bold tracking-tight text-ps-teal-light">{f.value}</p>
                  <p className="mt-2 text-sm font-medium text-white/70">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
