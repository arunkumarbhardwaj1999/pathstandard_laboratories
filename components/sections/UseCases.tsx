import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCases } from "@/lib/content";

export default function UseCases() {
  return (
    <section id="use-cases" className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Use Cases"
          title="Real scenarios. Measurable outcomes."
          align="center"
        />

        <div className="mt-12 space-y-8">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="clinical-card">
              <p className="text-xs font-semibold tracking-widest text-ps-navy uppercase">
                {useCase.audience}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-ps-slate-900">{useCase.title}</h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-ps-error-bg p-4">
                  <p className="text-xs font-bold tracking-widest text-ps-error uppercase">
                    Before PathStandard
                  </p>
                  <p className="mt-2 text-sm text-ps-slate-700">{useCase.before}</p>
                </div>
                <div className="rounded-lg bg-ps-success-bg p-4">
                  <p className="text-xs font-bold tracking-widest text-ps-success uppercase">
                    After PathStandard
                  </p>
                  <p className="mt-2 text-sm text-ps-slate-700">{useCase.after}</p>
                </div>
              </div>

              <p className="text-quote mt-4 text-lg text-ps-navy">
                &ldquo;{useCase.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
