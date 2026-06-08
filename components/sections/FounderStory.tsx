import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FounderStory() {
  return (
    <section className="section-padding bg-white">
      <Container wide>
        <ScrollReveal>
          <div className="grid items-center gap-0 overflow-hidden rounded-2xl border border-ps-slate-200 lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[480px]">
              <Image
                src="/images/packaging-hero.png"
                alt="PathStandard laboratory traceability"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ps-navy/40" />
            </div>

            <div className="flex flex-col justify-center bg-ps-slate-50 p-10 md:p-14 lg:p-16">
              <p className="text-eyebrow mb-4">Our Story</p>
              <h2 className="text-section-title text-ps-navy">Why we built PathStandard.</h2>
              <p className="mt-6 text-base leading-relaxed text-ps-slate-600">
                PathStandard was built after observing recurring traceability gaps in pathology
                laboratories across India. Quality teams spent hours preparing NABL audit
                documentation — for a consumable never designed to be traceable.
              </p>
              <blockquote className="text-quote mt-8 text-xl leading-relaxed text-ps-slate-800">
                &ldquo;We built PathStandard to make slide-level traceability simple, auditable, and
                accessible for pathology laboratories.&rdquo;
              </blockquote>
              <div className="mt-8">
                <Button href="#contact" variant="secondary" pill>
                  Full story
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
