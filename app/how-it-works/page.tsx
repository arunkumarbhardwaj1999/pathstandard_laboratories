import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { howItWorksSteps } from "@/lib/content";
import PageHeader from "@/components/sections/PageHeader";
import HorizontalTimeline from "@/components/sections/HorizontalTimeline";
import WorkflowFilm from "@/components/sections/WorkflowFilm";
import PlatformEcosystem from "@/components/sections/PlatformEcosystem";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "How It Works — PathStandard Technologies",
  description:
    "From manufacture to archive: how PathStandard serializes every slide, writes an immutable QC record, and delivers a Certificate of Analysis with a single phone scan.",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How PathStandard slide traceability works",
  description:
    "From manufacture to archive: how every PathStandard slide is serialized, quality-recorded, and verified with a single phone scan.",
  step: howItWorksSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.description,
  })),
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <PageHeader
        eyebrow="How It Works"
        title="From manufacture to archive — a complete chain of custody"
        description="Every PathStandard slide is serialized and quality-recorded at production, ships with a batch Certificate of Analysis, and can be scanned by any phone in the lab to retrieve its full manufacturer QC record. See the five-step workflow that gives each slide a permanent, auditable identity."
      />
      <HorizontalTimeline />
      <WorkflowFilm />
      <PlatformEcosystem />
      <ContactCTA />
    </>
  );
}
