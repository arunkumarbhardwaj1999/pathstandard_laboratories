import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { integrations } from "@/lib/content";

export default function Integrations() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Integrations"
          title="Works with existing laboratory systems."
          description="PathStandard is designed to work within existing lab workflows — not to replace them. No new hardware is required in the lab."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {integrations.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-lg border border-ps-slate-200 bg-ps-slate-50 px-4 py-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-ps-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-ps-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
