import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { coreTechnologies } from "@/lib/content";

export default function CoreTechnologies() {
  return (
    <section className="bg-ps-navy-deep py-16 md:py-20">
      <Container wide>
        <ScrollReveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
            <h2 className="shrink-0 text-xl font-medium text-white md:text-2xl lg:max-w-[220px]">
              Learn more about core capabilities:
            </h2>

            <div className="grid flex-1 gap-4 sm:grid-cols-3">
              {coreTechnologies.map((tech, i) => (
                <ScrollReveal key={tech.title} delay={i * 80}>
                  <div className="tech-card-dark flex h-full flex-col items-center rounded-2xl px-5 py-8 text-center">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                      <FeatureIcon name={tech.icon} variant="dark" />
                    </div>
                    <h3 className="text-sm font-bold leading-snug text-white">{tech.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/60">{tech.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
