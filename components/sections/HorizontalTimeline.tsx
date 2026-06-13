import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { howItWorksSteps } from "@/lib/content";

export default function HorizontalTimeline() {
  return (
    <section id="how-it-works" className="section-padding bg-ps-navy-deep">
      <Container wide>
        <SectionHeading
          align="center"
          label="How It Works"
          title="From manufacture to archive"
          description="Five steps that give every slide a permanent, auditable identity — no new hardware in your lab."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-ps-teal/10 via-ps-teal/40 to-ps-teal/10 lg:block" aria-hidden />
          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {howItWorksSteps.map((s) => (
              <li key={s.step} className="relative">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ps-teal text-sm font-bold text-white ring-4 ring-ps-navy-deep">
                    {s.step}
                  </span>
                  <h3 className="font-semibold text-white lg:mt-5">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/60 lg:mt-3">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
