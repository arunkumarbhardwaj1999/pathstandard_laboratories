import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PlatformIntro() {
  return (
    <section className="section-padding-sm bg-ps-slate-50">
      <Container wide>
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-section-title text-ps-slate-900">
                Helping laboratories lead the way in traceability.
              </h2>
              <p className="text-lead mt-6 max-w-lg">
                No matter your area of expertise — quality management, digital pathology, or
                hospital procurement — our serialized slide platform is designed to drive your
                compliance and diagnostic confidence to the next level.
              </p>
            </div>

            <div className="relative flex items-center justify-center py-8">
              <div className="pattern-dashed absolute inset-0 rounded-2xl opacity-40" />
              <div className="relative grid grid-cols-3 gap-4 p-8">
                {["Serialize", "Verify", "Archive"].map((label, i) => (
                  <div
                    key={label}
                    className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-ps-slate-200 bg-white text-center shadow-sm md:h-28 md:w-28"
                    style={{ transform: `translateY(${i % 2 === 0 ? "0" : "12px"})` }}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-ps-slate-600">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
