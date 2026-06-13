import Container from "@/components/ui/Container";

const comparisonRows = [
  ["Generic glass", "Permanent identity"],
  ["Paper CoA (if any)", "Digital CoA"],
  ["Lot-level only", "Slide-level traceability"],
  ["No history", "Full chain of custody"],
  ["Disposable consumable", "Digital asset"],
];

export default function ProblemSolution() {
  return (
    <section id="problem" className="section-padding bg-ps-navy-deep text-white">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow mb-3 !text-ps-teal-light">The Challenge</p>
          <h2 className="text-section-title text-white">Why are pathology slides still anonymous?</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Every year millions of slides are created. Most cannot tell you where they came from.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.03]">
            <div className="px-6 py-4 text-sm font-semibold text-white/60">Standard slide</div>
            <div className="px-6 py-4 text-sm font-semibold text-ps-teal-light">PathStandard</div>
          </div>
          {comparisonRows.map(([standard, ps]) => (
            <div key={standard} className="grid grid-cols-2 border-b border-white/[0.06] last:border-0">
              <div className="flex items-center gap-3 px-6 py-4 text-sm text-white/50">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                {standard}
              </div>
              <div className="flex items-center gap-3 bg-ps-teal/[0.06] px-6 py-4 text-sm font-medium text-white">
                <svg className="h-4 w-4 shrink-0 text-ps-teal-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {ps}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
