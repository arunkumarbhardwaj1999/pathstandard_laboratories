import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { personas } from "@/lib/content";

export default function Personas() {
  return (
    <section className="section-padding bg-ps-slate-50">
      <Container>
        <SectionHeading
          label="Target Buyers"
          title="Who PathStandard is built for."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona) => (
            <div key={persona.title} className="clinical-card text-center">
              <h3 className="font-semibold text-ps-slate-900">{persona.title}</h3>
              <p className="mt-2 text-sm text-ps-slate-600">{persona.need}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
