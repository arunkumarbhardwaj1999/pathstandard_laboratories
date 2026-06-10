import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { problemPoints, solutionPoints } from "@/lib/content";

export default function ProblemSolution() {
  return (
    <section id="problem" className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="The Challenge"
          title="Slides are still the weakest link in many lab workflows."
          description="Even as labs go digital, most still have no quality paperwork from the slide maker. Slides arrive without lot certificates, quality data isn't tied to each slide, and audit prep means hours of searching for records."
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
              PathStandard gives every slide a permanent ID and links it to its factory quality
              record — built for tracking, quality, and confidence.
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
