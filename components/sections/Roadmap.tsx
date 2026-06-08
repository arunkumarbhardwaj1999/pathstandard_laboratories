import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { roadmapPhases } from "@/lib/content";

export default function Roadmap() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Product Roadmap"
          title="A platform that can grow with your laboratory."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roadmapPhases.map((phase, index) => (
            <div
              key={phase.phase}
              className={`clinical-card ${index === 0 ? "border-ps-teal ring-1 ring-ps-teal/20" : ""}`}
            >
              <span className="text-xs font-bold tracking-widest text-ps-teal uppercase">
                {phase.phase}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ps-slate-900">{phase.name}</h3>
              <p className="mt-2 text-sm text-ps-slate-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
