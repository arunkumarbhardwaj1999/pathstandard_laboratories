import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ — PathStandard Technologies",
  description:
    "Answers to common questions about PathStandard serialized slides: how the DataMatrix is applied, scanning, barcode compatibility, data retention, and device classification.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Clear, specific answers about how PathStandard serialized slides, the DataMatrix barcode, the Certificate of Analysis portal, scanner compatibility, data retention, and regulatory classification work for your laboratory."
      />
      <FAQ />
      <ContactCTA />
    </>
  );
}
