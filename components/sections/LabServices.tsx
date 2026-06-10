import Container from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/FeatureIcon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { labServices } from "@/lib/content";

export default function LabServices() {
  return (
    <section className="section-padding bg-ps-slate-50 border-t border-ps-slate-200">
      <Container wide>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-section-title text-ps-navy">
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
              <article className="benchling-service-card flex h-full flex-col rounded-3xl bg-white p-8">
                <div className="mb-6">
                  <FeatureIcon name={service.icon} />
                </div>
                <h3 className="text-lg font-bold text-ps-navy">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ps-slate-600">
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
