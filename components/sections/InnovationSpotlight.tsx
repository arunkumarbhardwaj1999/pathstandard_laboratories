import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { platformSpotlight } from "@/lib/content";

export default function InnovationSpotlight() {
  return (
    <section className="pb-0">
      <Container wide>
        <ScrollReveal>
          <div className="spotlight-banner relative overflow-hidden rounded-3xl bg-ps-navy px-8 py-10 md:px-12 md:py-12 lg:px-16">
            <div className="pattern-dashed absolute inset-0 opacity-[0.07]" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white/80">{platformSpotlight.label}</span>
                </div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">{platformSpotlight.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                  {platformSpotlight.description}
                </p>
              </div>
              <Button href={platformSpotlight.href} variant="primary" className="shrink-0">
                {platformSpotlight.cta}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
