import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { securityFeatures } from "@/lib/content";

export default function Security() {
  return (
    <section className="section-padding bg-ps-slate-50">
      <Container>
        <SectionHeading
          label="Security & Privacy"
          title="Built with enterprise control in mind."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((item) => (
            <div key={item.feature} className="clinical-card">
              <h3 className="font-semibold text-ps-slate-900">{item.feature}</h3>
              <p className="mt-2 text-sm text-ps-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
