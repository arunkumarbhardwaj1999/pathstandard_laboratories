import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { howItWorksSteps } from "@/lib/content";

export default function WorkflowTeaser() {
  return (
    <section id="workflow-preview" className="section-padding bg-white border-b border-ps-slate-200">
      <Container wide>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <ScrollReveal>
            <p className="text-eyebrow mb-3">How It Works</p>
            <h2 className="text-section-title text-ps-navy">
              From manufacture to archive — step by step
            </h2>
            <p className="text-lead mt-4">
              Every PathStandard slide follows a five-stage chain of custody. Scroll the interactive
              workflow on our dedicated page, or preview the stages below.
            </p>

            <ol className="mt-8 space-y-4">
              {howItWorksSteps.map((step) => (
                <li
                  key={step.step}
                  className="flex gap-4 rounded-xl border border-ps-slate-200 bg-ps-slate-50 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ps-navy text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-semibold text-ps-navy">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ps-slate-600 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/how-it-works" variant="primary">
                Watch the full workflow →
              </Button>
              <Button href="/how-it-works#workflow-film" variant="outline">
                Play workflow film
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-ps-slate-200 shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/datamatrix-scan.png"
                  alt="Pathologist scanning a PathStandard slide DataMatrix barcode in the lab"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ps-navy/70 via-ps-navy/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                    Lab scan moment
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white md:text-xl">
                    Any phone. No app. CoA in under 10 seconds.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
