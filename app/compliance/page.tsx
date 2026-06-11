import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import TrustBar from "@/components/sections/TrustBar";
import ComplianceMatrix from "@/components/sections/ComplianceMatrix";
import RegulatoryDisclosures from "@/components/sections/RegulatoryDisclosures";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Compliance & NABL Documentation — PathStandard Technologies",
  description:
    "Built around ISO 15189:2022 Clause 6.6. NABL-ready consumable traceability, ISO 13485 QMS alignment, CDSCO Class A IVD, and assessor-ready Certificate of Analysis documentation.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Compliance & Quality"
        title="NABL and ISO 15189:2022 documentation, built into every slide"
        description="PathStandard provides manufacturer-issued Certificates of Analysis with lot number, quality specifications, and pass/fail determination for every slide — directly supporting ISO 15189:2022 Clause 6.6 consumable traceability, NABL 112A criteria, ISO 13485 QMS alignment, and CDSCO Class A IVD classification under MDR 2017."
      />
      <TrustBar />
      <ComplianceMatrix />
      <RegulatoryDisclosures />
      <ContactCTA />
    </>
  );
}
