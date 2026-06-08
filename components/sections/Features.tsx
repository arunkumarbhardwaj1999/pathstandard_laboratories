import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureIcon from "@/components/ui/FeatureIcon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { features } from "@/lib/content";

export default function Features() {
  return (
    <section id="features" className="section-padding bg-ps-slate-50">
      <Container wide>
        <ScrollReveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              label="Product Features"
              title="Engineered for diagnostic accuracy."
              description="Bite-sized capabilities that satisfy compliance while reducing operational friction."
            />
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 60}>
              <div className="feature-card group h-full">
                <FeatureIcon name={feature.icon} />
                <h3 className="mt-6 text-lg font-bold text-ps-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ps-slate-600">
                  {feature.description}
                </p>
                <span className="mt-5 inline-block rounded-md bg-ps-blue-muted px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-ps-blue">
                  {feature.tag}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
