import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { roiRows } from "@/lib/content";

export default function ROI() {
  return (
    <section id="roi" className="section-padding bg-ps-slate-50">
      <Container>
        <SectionHeading
          label="ROI & Value Proof"
          title="Traceability should reduce cost, not add complexity."
          description="Laboratories don't buy compliance tools only for documentation — they buy them to reduce rework, save time, and lower operational risk. PathStandard's traceability system directly reduces three measurable cost drivers."
        />

        <p className="mt-6 text-sm font-semibold tracking-wide text-ps-navy uppercase">
          ROI Example — 500-Slide-Per-Day Lab
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-ps-slate-200 bg-white">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-ps-slate-200 bg-ps-slate-50">
                <th className="px-4 py-4 font-semibold text-ps-slate-700">Cost Driver</th>
                <th className="px-4 py-4 font-semibold text-ps-error">Without PathStandard</th>
                <th className="px-4 py-4 font-semibold text-ps-success">With PathStandard</th>
              </tr>
            </thead>
            <tbody>
              {roiRows.map((row) => (
                <tr key={row.driver} className="border-b border-ps-slate-100 last:border-0">
                  <td className="px-4 py-4 font-medium text-ps-slate-800">{row.driver}</td>
                  <td className="px-4 py-4 text-ps-slate-600">{row.without}</td>
                  <td className="px-4 py-4 text-ps-slate-700">{row.with}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
