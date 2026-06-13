import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { regulatoryDisclosures } from "@/lib/content";

export default function RegulatoryDisclosures() {
  const sections = [
    regulatoryDisclosures.productInfo,
    regulatoryDisclosures.labInfo,
  ];

  return (
    <section className="section-padding-sm bg-ps-navy border-t border-white/10">
      <Container wide>
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 100}>
              <h2 className="text-2xl font-bold text-white md:text-3xl">{section.title}</h2>
              <div className="mt-6 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-white/70 md:text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
