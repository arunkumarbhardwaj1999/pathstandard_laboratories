import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import Personas from "@/components/sections/Personas";
import UseCases from "@/components/sections/UseCases";
import ROI from "@/components/sections/ROI";
import RealResults from "@/components/sections/RealResults";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Use Cases & ROI — PathStandard Technologies",
  description:
    "Real buyer scenarios — NABL audit prep, recurring tissue detachment, and AI-ready WSI archives — plus the ROI of slide-level traceability for pathology labs.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Use Cases & ROI"
        title="Real outcomes for pathology labs, hospitals, and digital centres"
        description="From cutting NABL audit preparation from hours to seconds, to pinpointing tissue-detachment root cause with lot-level coating data, to attaching certified substrate provenance to every whole-slide image — see how slide-level traceability reduces cost and risk across three common laboratory scenarios."
      />
      <Personas />
      <UseCases />
      <ROI />
      <RealResults />
      <TestimonialCarousel />
      <ContactCTA />
    </>
  );
}
