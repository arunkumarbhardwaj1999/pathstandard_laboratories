import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { slideSKUs } from "@/lib/content";

const skuDescriptions: Record<string, string> = {
  APS: "Charged slides with surface quality recorded for every lot.",
  PLS: "Plain slides with a permanent barcode on each one.",
  FRS: "Frosted-end slides for everyday histology work.",
  PLC: "Coated slides that help tissue stick better.",
  CYT: "PAP cytology slides with full traceability.",
  FSH: "Adhesive FISH slides for molecular testing.",
};

export default function SlidePortfolio() {
  return (
    <section id="slide-portfolio" className="section-padding-sm bg-ps-navy-deep border-t border-white/10">
      <Container wide>
        <ScrollReveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div className="flex gap-5">
              <div className="accent-bar" />
              <h2 className="text-section-title text-white">Slide portfolio</h2>
            </div>
            <p className="text-lead lg:pb-1">
              Six slide types for pathology, histology, cytology, and digital pathology — each with
              a permanent ID and lot-level records.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slideSKUs.map((sku, index) => (
            <ScrollReveal key={sku.code} delay={index * 80}>
              <article className="illumina-product-card group flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="relative h-44 overflow-hidden border-b border-white/10 bg-ps-navy">
                  <Image
                    src={sku.image}
                    alt={sku.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ps-navy">
                    {sku.code}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/45">
                    {sku.code}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">{sku.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                    {skuDescriptions[sku.code]}
                  </p>
                  <a href="#contact" className="text-link-underline mt-5 inline-block w-fit">
                    Request quote
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
