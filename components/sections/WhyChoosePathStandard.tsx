import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FeatureIcon from "@/components/ui/FeatureIcon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { whyChooseBlocks } from "@/lib/content";

function VisualPanel({ type }: { type: string }) {
  if (type === "workflow") {
    return (
      <div className="benchling-visual-panel p-6 md:p-8">
        <div className="rounded-2xl bg-ps-navy p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50">CoA checks</p>
          <ul className="mt-4 space-y-3">
            {["Slide ID verified", "Lot record linked", "QC data complete", "Audit trail saved"].map(
              (item, i) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                      i < 3 ? "bg-ps-navy text-white" : "border border-white/15 text-white/45"
                    }`}
                  >
                    {i < 3 ? "✓" : "·"}
                  </span>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }

  if (type === "data") {
    return (
      <div className="benchling-visual-panel p-6 md:p-8">
        <div className="rounded-2xl bg-ps-navy p-5 shadow-sm">
          <p className="text-xs font-bold text-white/50">Lot QC record</p>
          <div className="mt-4 space-y-2 font-mono text-xs text-white/70">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Serial</span>
              <span className="font-bold text-white">PS-2026-00482</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Coating lot</span>
              <span>APTES-B-114</span>
            </div>
            <div className="flex justify-between">
              <span>Surface QC</span>
              <span className="text-white font-semibold">Pass</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="benchling-visual-panel p-6 md:p-8">
      <div className="rounded-2xl bg-ps-navy p-5 shadow-sm">
        <p className="text-xs font-bold text-white/50 mb-4">Slide lot inventory</p>
        <div className="flex items-end justify-between gap-2 h-28">
          {[8, 12, 6, 10].map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t bg-ps-navy/80" style={{ height: `${h * 8}px` }} />
              <span className="text-[9px] text-white/45">Lot {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhyChoosePathStandard() {
  return (
    <section id="features" className="section-padding bg-ps-navy">
      <Container wide>
        <ScrollReveal>
          <h2 className="text-center text-section-title text-white">
            Why teams choose PathStandard
          </h2>
        </ScrollReveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {whyChooseBlocks.map((block, i) => {
            const reversed = i % 2 === 1;
            return (
              <ScrollReveal key={block.title} delay={i * 60}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <FeatureIcon name={block.icon} />
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-white md:text-3xl">
                      {block.title}
                    </h3>
                    <div className="mt-6 space-y-4">
                      {block.paragraphs.map((p) => (
                        <p key={p.slice(0, 30)} className="text-base leading-relaxed text-white/70">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Button href={block.href} variant="secondary" pill>
                        Read more
                      </Button>
                    </div>
                  </div>
                  <VisualPanel type={block.visual} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
