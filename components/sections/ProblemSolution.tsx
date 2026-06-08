import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { problemPoints, solutionPoints } from "@/lib/content";

export default function ProblemSolution() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="The Challenge"
          title="The slide is still the weakest link in many laboratory workflows."
          description="Even as pathology becomes more digital, most labs still have no manufacturer-issued documentation for their microscope slides. Slides arrive without lot-level certificates, quality data is not linked to individual units, and audit preparation means hours of manual record-hunting."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="clinical-card border-l-4 border-l-ps-error">
            <h3 className="mb-4 text-sm font-bold tracking-widest text-ps-error uppercase">
              The Problem
            </h3>
            <ul className="space-y-3">
              {problemPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ps-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ps-error" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="clinical-card border-l-4 border-l-ps-success">
            <h3 className="mb-4 text-sm font-bold tracking-widest text-ps-success uppercase">
              The Solution
            </h3>
            <p className="mb-4 text-sm text-ps-slate-600">
              A slide platform designed for traceability, quality, and confidence. PathStandard
              gives each slide a permanent identity and connects it to the associated manufacturing
              and quality record.
            </p>
            <ul className="space-y-3">
              {solutionPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ps-slate-700">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-ps-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
