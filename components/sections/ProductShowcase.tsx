import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <Container wide>
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1 relative">
              <div className="pattern-dashed absolute -right-8 -top-8 h-48 w-48 opacity-50" />
              <div className="relative overflow-hidden rounded-lg border border-ps-slate-200 bg-ps-slate-50">
                <Image
                  src="/images/brand-spec.png"
                  alt="PathStandard serialized pathology slides and packaging"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-eyebrow mb-4">The PathStandard Platform</p>
              <h2 className="text-section-title text-ps-navy">Serialized Pathology Reference Slides</h2>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-ps-slate-500">
                A traceability-first slide system
              </p>
              <p className="text-lead mt-6">
                Capable of providing permanent slide-level identity, cloud-linked quality records,
                and NABL-ready documentation — with no additional equipment required in the lab.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ps-slate-500">
                Every slide is laser-etched with a DataMatrix barcode and linked to a manufacturer
                QC record. Scan with any phone camera to retrieve a PDF Certificate of Analysis in
                under 10 seconds.
              </p>
              <div className="mt-8">
                <Button href="#how-it-works" variant="secondary" pill>
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
