import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { slideSKUs } from "@/lib/content";

const skuDescriptions: Record<string, string> = {
  APS: "APTES-charged slides with documented surface energy per lot.",
  PLS: "Plain serialized slides with permanent DataMatrix identity.",
  FRS: "Frosted end slides for standard histology workflows.",
  PLC: "PLL-coated slides for enhanced tissue adhesion.",
  CYT: "Cytology PAP slides with serialized traceability.",
  FSH: "Adhesive FISH slides for molecular pathology.",
};

export default function SlidePortfolio() {
  return (
    <section className="section-padding-sm bg-ps-slate-50">
      <Container wide>
        <ScrollReveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            <div className="flex gap-5 md:max-w-md">
              <div className="accent-bar" />
              <h2 className="text-section-title">Slide Portfolio</h2>
            </div>
            <p className="text-lead max-w-2xl md:pt-1">
              Six serialized slide SKUs engineered for pathology, histology, cytology, and digital
              pathology workflows — each with permanent identity and lot-level documentation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {slideSKUs.map((sku, index) => (
            <ScrollReveal key={sku.code} delay={index * 80}>
              <article className="product-card h-full">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-ps-slate-100 to-ps-slate-50 border-b border-ps-slate-200">
                  <span className="text-4xl font-bold tracking-tight text-ps-slate-300">
                    {sku.code}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-ps-slate-400">
                    {sku.code}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-ps-slate-900">{sku.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ps-slate-600">
                    {skuDescriptions[sku.code]}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 text-sm font-semibold text-ps-blue hover:underline"
                  >
                    Request quote →
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
