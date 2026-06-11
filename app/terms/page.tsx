import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions — PathStandard Technologies",
  description:
    "The terms governing use of the PathStandard Technologies website and services.",
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <Container className="max-w-3xl">
        <p className="text-eyebrow">Legal</p>
        <h1 className="text-section-title mt-3">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-ps-slate-500">Last updated: June 2026</p>

        {/* PLACEHOLDER — client to review with legal counsel before launch. */}
        <div className="mt-10 space-y-8 text-ps-slate-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">1. Use of This Website</h2>
            <p className="mt-2">
              This website is provided for general information about PathStandard
              Technologies products and services. By using it, you agree to these terms.
              Content may be updated at any time without notice.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">2. Product Information</h2>
            <p className="mt-2">
              Product specifications, compliance references, and other details are subject
              to change. Nothing on this site constitutes a binding offer, warranty, or
              regulatory certification. Final specifications are confirmed in writing at the
              point of sale.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">3. Intellectual Property</h2>
            <p className="mt-2">
              All trademarks, logos, content, and designs on this site are the property of
              PathStandard Technologies and may not be reproduced without permission.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">4. Limitation of Liability</h2>
            <p className="mt-2">
              PathStandard Technologies is not liable for any indirect or consequential loss
              arising from use of this website or reliance on its content.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-ps-slate-900">5. Governing Law</h2>
            <p className="mt-2">
              These terms are governed by the applicable laws of India. Any disputes are
              subject to the jurisdiction of the courts of the company&apos;s registered
              location.
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
