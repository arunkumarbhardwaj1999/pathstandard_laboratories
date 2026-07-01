import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { comparisonFeatures } from "@/lib/content";

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 font-semibold text-ps-teal-light">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Yes
      </span>
    );
  }
  if (value === false) return <span className="font-medium text-white/35">No</span>;
  return <span className="font-medium capitalize text-white/45">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="section-padding bg-ps-navy-deep text-white">
      <Container>
        <SectionHeading
          align="center"
          dark
          label="The Difference"
          title="Standard slide vs PathStandard"
          description="A standard slide is anonymous glass. A PathStandard slide carries a permanent identity, a digital quality record, and a full chain of custody — built in."
        />

        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="px-6 py-4 font-semibold text-white/60">Feature</th>
                <th className="px-6 py-4 font-semibold text-white/60">Standard slide</th>
                <th className="px-6 py-4 font-semibold text-ps-teal-light">PathStandard</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row) => (
                <tr key={row.feature} className="border-b border-white/[0.06] last:border-0">
                  <td className="px-6 py-3.5 text-white/80">{row.feature}</td>
                  <td className="px-6 py-3.5"><Cell value={row.traditional} /></td>
                  <td className="bg-ps-teal/[0.06] px-6 py-3.5"><Cell value={row.pathstandard} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-white/40">
          Detailed comparison with other manufacturers is available on the Products page.
        </p>
      </Container>
    </section>
  );
}
