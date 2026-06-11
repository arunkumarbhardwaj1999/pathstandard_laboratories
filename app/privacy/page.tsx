import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — PathStandard Technologies",
  description:
    "How PathStandard Technologies collects, uses, and protects personal information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <Container className="max-w-3xl">
        <p className="text-eyebrow">Legal</p>
        <h1 className="text-section-title mt-3">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ps-slate-500">Last updated: June 2026</p>

        {/* PLACEHOLDER — client to review with legal counsel before launch. */}
        <div className="mt-10 space-y-8 text-ps-slate-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">1. Information We Collect</h2>
            <p className="mt-2">
              When you submit our contact form, we collect the information you provide:
              your name, lab or hospital name, role, city and state, email address, phone
              number, your area of interest, and any optional message. We do not collect
              sensitive personal or patient data through this website.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">2. How We Use It</h2>
            <p className="mt-2">
              We use this information solely to respond to your enquiry, provide requested
              materials such as a sample box or quote, and follow up about PathStandard
              products and services. We do not sell your data to third parties.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">3. Data Retention &amp; Security</h2>
            <p className="mt-2">
              Submissions are stored securely and retained only as long as needed to serve
              your enquiry and meet our legal and business obligations. You may request
              access to, correction of, or deletion of your data at any time.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">4. Analytics &amp; Cookies</h2>
            <p className="mt-2">
              We may use analytics tools (such as Google Analytics) to understand how
              visitors use the site. These tools may set cookies to collect aggregated,
              non-identifying usage data.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">5. Contact</h2>
            <p className="mt-2">
              For any privacy request or question, contact us at{" "}
              <a href="mailto:hello@pathstandard.com" className="text-ps-navy underline underline-offset-4">
                hello@pathstandard.com
              </a>
              .
            </p>
          </div>

          <p className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
            Note: This is a template. Please have it reviewed by legal counsel and updated
            with your registered entity details before going live.
          </p>
        </div>
      </Container>
    </section>
  );
}
