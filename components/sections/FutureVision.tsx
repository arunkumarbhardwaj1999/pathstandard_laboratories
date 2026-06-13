import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const chain = ["Specimen Container", "Cassette", "Slide", "Scanner", "Digital Archive"];

export default function FutureVision() {
  return (
    <section className="section-padding relative overflow-hidden bg-ps-navy">
      <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-ps-purple/15 blur-[130px]" aria-hidden />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow !text-ps-teal-light">Future Vision</p>
          <h2 className="mt-3 text-section-title text-white">Building the identity layer for pathology</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            We believe every pathology specimen should carry a permanent identity — from collection,
            through diagnosis, to archive. The slide is where that identity begins.
          </p>
        </div>

        <ScrollReveal delay={120}>
          <div className="mt-14 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-center md:gap-2">
            {chain.map((node, i) => {
              const active = node === "Slide";
              return (
                <div key={node} className="flex items-center gap-3 md:flex-col md:gap-3">
                  <div
                    className={`flex-1 rounded-xl border px-5 py-4 text-center text-sm font-semibold md:min-w-[140px] ${
                      active
                        ? "border-ps-teal/40 bg-ps-teal/15 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/55"
                    }`}
                  >
                    {node}
                    {active && (
                      <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-ps-teal-light">
                        Identified
                      </span>
                    )}
                  </div>
                  {i < chain.length - 1 && (
                    <span className="text-ps-teal-light/60 md:rotate-0">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
