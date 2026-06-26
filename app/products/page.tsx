import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { slideSKUs } from "@/lib/content";
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
    "Five serialized pathology slide SKUs — APTES, plain, frosted, cytology, and FISH — with permanent QR code identity, lot-level quality records, and instant Certificate of Analysis.",
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PathStandard Serialized Slide Portfolio",
  itemListElement: slideSKUs.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `${s.code} — ${s.name}`,
      brand: { "@type": "Brand", name: "PathStandard" },
      category: "Pathology microscope slides",
      description: `Permanently serialized ${s.name} pathology slide with QR code identity and lot-level quality records.`,
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productListSchema} />
      <PageHeader
        eyebrow="Products & Slide Portfolio"
        title="Serialized pathology slides with built-in traceability"
        description="Five diagnostic slide SKUs — APTES charged, plain, frosted, cytology PAP, and adhesive FISH — each permanently laser-etched with a QR code and linked to a lot-level quality record. Scan any slide with a phone and download its Certificate of Analysis in under 10 seconds."
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
