import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import PlatformIntro from "@/components/sections/PlatformIntro";
import ProductsServices from "@/components/sections/ProductsServices";
import SlidePortfolio from "@/components/sections/SlidePortfolio";
import ExplorePlatform from "@/components/sections/ExplorePlatform";
import EverythingYouNeed from "@/components/sections/EverythingYouNeed";
import LabServices from "@/components/sections/LabServices";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Products & Slide Portfolio — PathStandard Technologies",
  description:
    "Six serialized pathology slide SKUs — APTES, plain, frosted, PLL, cytology, and FISH — with permanent DataMatrix identity, lot-level quality records, and instant Certificate of Analysis.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products & Slide Portfolio"
        title="Serialized pathology slides with built-in traceability"
        description="Six diagnostic slide SKUs — APTES charged, plain, frosted, PLL coated, cytology PAP, and adhesive FISH — each permanently laser-etched with an ISO/IEC 16022 DataMatrix and linked to a lot-level quality record. Scan any slide with a phone and download its Certificate of Analysis in under 10 seconds."
      />
      <PlatformIntro />
      <ProductsServices />
      <SlidePortfolio />
      <ExplorePlatform />
      <EverythingYouNeed />
      <LabServices />
      <ContactCTA />
    </>
  );
}
