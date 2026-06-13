import type { Metadata } from "next";
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

export default function HowItWorksPage() {
  return (
    <>
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
