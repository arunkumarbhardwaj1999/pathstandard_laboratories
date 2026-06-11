import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Roadmap from "@/components/sections/Roadmap";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Platform Roadmap — PathStandard Technologies",
  description:
    "From serialized slides to the CoA portal, lab dashboards, LIMS integration, AI dataset traceability, and an enterprise audit platform — where PathStandard is headed.",
};

export default function RoadmapPage() {
  return (
    <div id="roadmap">
      <PageHeader
        eyebrow="Platform Roadmap"
        title="A traceability platform that grows with your laboratory"
        description="PathStandard begins with serialized slides and a Certificate of Analysis portal, and extends to lab dashboards, LIMS integration, AI dataset traceability, and a multi-site enterprise audit platform — a long-term data infrastructure partner for modern pathology."
      />
      <Roadmap />
      <ContactCTA />
    </div>
  );
}
