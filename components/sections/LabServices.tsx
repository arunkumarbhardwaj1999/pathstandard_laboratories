import Container from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/FeatureIcon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { labServices } from "@/lib/content";

export default function LabServices() {
  return (
    <section className="section-padding bg-ps-navy-deep border-t border-white/10">
      <Container wide>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-section-title text-white">
              Services from the best in lab traceability.
            </h2>
            <p className="text-lead mt-4">
              Access expertise from the PathStandard team — scientists, quality specialists, and
              platform engineers built for pathology.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {labServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <article className="benchling-service-card flex h-full flex-col rounded-3xl bg-ps-navy p-8">
                <div className="mb-6">
                  <FeatureIcon name={service.icon} />
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
