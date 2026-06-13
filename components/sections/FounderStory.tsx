import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { labStory } from "@/lib/content";

export default function FounderStory() {
  return (
    <section className="section-padding bg-white">
      <Container wide>
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="pattern-grid-lines absolute -bottom-8 -left-8 h-4/5 w-4/5" aria-hidden />
              <div className="relative overflow-hidden">
                <Image
                  src="/images/slide-serialized.png"
                  alt="Serialized PathStandard pathology slide with permanent QR code identity"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-display text-ps-navy">{labStory.title}</h2>
              <div className="my-6 h-px w-14 bg-ps-navy" aria-hidden />
              <p className="text-xl font-bold text-ps-slate-900">{labStory.category}</p>
              <p className="mt-6 text-base leading-relaxed text-ps-slate-600">{labStory.intro}</p>
              {labStory.body.map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="mt-4 text-base leading-relaxed text-ps-slate-600">
                  {paragraph}
                </p>
              ))}
              <div className="mt-10">
                <Button href="#contact" variant="primary" pill>
                  Request a Sample Box
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
