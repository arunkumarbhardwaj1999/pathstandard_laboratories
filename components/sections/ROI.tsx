import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { roiRows } from "@/lib/content";

export default function ROI() {
  return (
    <section id="roi" className="section-padding bg-ps-navy-deep">
      <Container>
        <SectionHeading
          align="center"
          label="ROI & Value Proof"
          title="Tracking should save money, not add work."
          description="Labs don't buy compliance tools just for paperwork — they buy them to cut rework, save time, and lower risk. PathStandard directly reduces three measurable costs."
        />

        <p className="mt-6 text-sm font-semibold tracking-wide text-white uppercase">
          ROI Example — 500-Slide-Per-Day Lab
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-ps-navy">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-ps-navy-deep">
                <th className="px-4 py-4 font-semibold text-white/80">Cost Driver</th>
                <th className="px-4 py-4 font-semibold text-ps-error">Without PathStandard</th>
                <th className="px-4 py-4 font-semibold text-ps-success">With PathStandard</th>
              </tr>
            </thead>
            <tbody>
              {roiRows.map((row) => (
                <tr key={row.driver} className="border-b border-white/10 last:border-0">
                  <td className="px-4 py-4 font-medium text-white/80">{row.driver}</td>
                  <td className="px-4 py-4 text-white/70">{row.without}</td>
                  <td className="px-4 py-4 text-white/80">{row.with}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
