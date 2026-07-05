import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const metrics = [
  {
    value: "<8.5°",
    title: "Certified surface contact angle",
    desc: "Our aminosilane (APTES) coating is measured per lot, not assumed. A contact angle under 10° means a highly hydrophilic, uniform surface — superior tissue adhesion and less section loss during staining.",
  },
  {
    value: ">60",
    unit: "mJ/m²",
    title: "High surface energy",
    desc: "Surface energy above 60 mJ/m² drives even reagent spread and strong covalent tissue binding — critical for IHC, FISH and delicate sections.",
  },
  {
    value: "0.05",
    unit: "%",
    title: "Ultra-low iron optical glass",
    desc: "Low-iron (Fe₂O₃ 0.05–0.14%) super-white glass reduces autofluorescence and colour cast — cleaner backgrounds for brightfield and fluorescence imaging, and truer H&E colour.",
  },
  {
    value: "±0.5",
    unit: "mm",
    title: "Precision-ground flatness",
    desc: "Tight dimensional tolerance (75 × 25 mm, 1.0–1.2 mm) with ground, safety-cut edges ensures reliable auto-loading and even focus across whole-slide scanners.",
  },
];

export default function PremiumQuality() {
  return (
    <section className="section-padding bg-ps-navy">
      <Container>
        <SectionHeading
          label="Premium by design"
          title="Engineered as a premium slide first."
          description="Before it is serialized, every PathStandard slide is a precision-manufactured optical component — built to outperform commodity glass on the parameters that decide diagnostic quality."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-ps-teal/30 md:p-8">
                <div className="font-serif text-4xl font-semibold text-ps-teal-light md:text-5xl">
                  {m.value}
                  {m.unit && <span className="ml-1 text-xl text-ps-teal-light/70">{m.unit}</span>}
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{m.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic text-white/55">
          Every parameter above is recorded on the per-lot Certificate of Analysis — so premium
          quality is not a claim, it is documented for each slide you receive.
        </p>
      </Container>
    </section>
  );
}
