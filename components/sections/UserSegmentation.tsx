import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { userSegments } from "@/lib/content";

export default function UserSegmentation() {
  return (
    <section id="segments" className="section-padding-sm bg-ps-navy text-white border-b border-white/10">
      <Container wide>
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-white/60">
            For your assessment. For your diagnosis. For clinicians. For hospitals.
          </p>
          <h2 className="mt-4 text-center text-section-title text-white">For better healthcare.</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {userSegments.map((segment, i) => (
            <ScrollReveal key={segment.title} delay={i * 100}>
              <article className="butterfly-segment-card flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                <div className="relative h-48 overflow-hidden md:h-52">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="text-eyebrow mb-2 !text-ps-teal-light">{segment.subtitle}</p>
                  <h3 className="text-xl font-bold text-white">{segment.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                    {segment.description}
                  </p>
                  <div className="mt-6">
                    <Button href={segment.href} variant="primary" className="w-full sm:w-auto">
                      {segment.cta}
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
