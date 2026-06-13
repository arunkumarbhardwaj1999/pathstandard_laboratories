import Container from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/FeatureIcon";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { solutionModalities } from "@/lib/content";

export default function EverythingYouNeed() {
  return (
    <section className="section-padding bg-ps-navy">
      <Container wide>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-section-title text-white">
                Everything you need for traceable pathology.
              </h2>
              <p className="text-lead mt-6">
                Plus five slide SKUs, NABL-ready templates, and quality records built for modern
                lab workflows.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {solutionModalities.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 50}>
                <a
                  href={item.href}
                  className="group flex items-start gap-5 border-b border-white/10 pb-8 last:border-0"
                >
                  <FeatureIcon name={item.icon} />
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">
                      {item.title}
                    </h3>
                    <span className="mt-2 inline-block text-sm font-semibold text-white underline decoration-ps-slate-300 underline-offset-4 group-hover:decoration-ps-navy">
                      Learn more
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
