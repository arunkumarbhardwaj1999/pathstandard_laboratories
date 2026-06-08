import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { marketDrivers } from "@/lib/content";

export default function WhyNow() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Market Timing"
          title="The market is finally ready."
          description="Three forces converged in 2025–2026 to make slide traceability urgent in the Indian pathology market."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {marketDrivers.map((driver) => (
            <div key={driver.title} className="clinical-card hover:border-ps-teal/30 transition-colors">
              <h3 className="text-lg font-semibold text-ps-slate-900">{driver.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ps-slate-600">{driver.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
