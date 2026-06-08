import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { userSegments } from "@/lib/content";

export default function UserSegmentation() {
  return (
    <section className="section-padding-sm bg-white border-b border-ps-slate-200">
      <Container wide>
        <ScrollReveal>
          <p className="text-eyebrow mb-10 text-center">Choose your path</p>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {userSegments.map((segment, i) => (
            <ScrollReveal key={segment.title} delay={i * 100}>
              <a
                href={segment.href}
                className="group feature-card flex flex-col min-h-[220px]"
              >
                <p className="text-eyebrow mb-3">{segment.subtitle}</p>
                <h2 className="text-2xl font-bold text-ps-slate-900 group-hover:text-ps-navy transition-colors">
                  {segment.title}
                </h2>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ps-slate-600">
                  {segment.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ps-blue group-hover:gap-3 transition-all">
                  {segment.cta}
                  <span aria-hidden>→</span>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
