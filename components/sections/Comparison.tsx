import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { comparisonFeatures } from "@/lib/content";

function StatusCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1 text-ps-success font-semibold">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Yes
      </span>
    );
  }
  if (value === false) {
    return <span className="text-ps-error font-medium">No</span>;
  }
  return <span className="text-ps-slate-400 font-medium capitalize">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Competitive Landscape"
          title="Why PathStandard is different."
          description="Established manufacturers offer specimen labeling and barcode printing. But no competitor currently offers a unified system that combines permanent slide-level serialization, cloud-based quality documentation, and a digital chain of custody in a single platform."
        />

        <div className="mt-12 overflow-x-auto rounded-xl border border-ps-slate-200">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead>
              <tr className="border-b border-ps-slate-200 bg-ps-slate-50">
                <th className="px-4 py-4 font-semibold text-ps-slate-700">Feature</th>
                <th className="px-4 py-4 font-semibold text-ps-teal">PathStandard</th>
                <th className="px-4 py-4 font-semibold text-ps-slate-600">Leica</th>
                <th className="px-4 py-4 font-semibold text-ps-slate-600">Epredia</th>
                <th className="px-4 py-4 font-semibold text-ps-slate-600">Traditional</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row) => (
                <tr key={row.feature} className="border-b border-ps-slate-100 last:border-0">
                  <td className="px-4 py-3 text-ps-slate-700">{row.feature}</td>
                  <td className="px-4 py-3 bg-ps-success-bg/50">
                    <StatusCell value={row.pathstandard} />
                  </td>
                  <td className="px-4 py-3"><StatusCell value={row.leica} /></td>
                  <td className="px-4 py-3"><StatusCell value={row.epredia} /></td>
                  <td className="px-4 py-3"><StatusCell value={row.traditional} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
