import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { missionStatement } from "@/lib/content";

export default function PlatformIntro() {
  return (
    <section className="section-padding-sm bg-white border-b border-ps-slate-200">
      <Container wide>
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <span className="inline-block rounded-full bg-ps-slate-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ps-slate-600">
                {missionStatement.label}
              </span>
              <h2 className="mt-6 text-section-title text-ps-navy">{missionStatement.headline}</h2>
              <p className="text-lead mt-6 max-w-lg">{missionStatement.body}</p>
            </div>

            <div className="bg-ps-slate-50 p-8 md:p-10 lg:p-12">
              <div className="flex gap-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-sm bg-ps-slate-200">
                  <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-ps-slate-400">
                    PS
                  </div>
                </div>
                <blockquote className="text-base leading-relaxed text-ps-slate-700 md:text-lg">
                  &ldquo;We built PathStandard to make slide tracking simple, audit-ready, and easy
                  for every pathology lab — because quality teams deserve better than hours of
                  paper-chasing.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
