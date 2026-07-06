import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pathstandard.in";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PathStandard Technologies",
  legalName: "PathStandard Technologies Pvt. Ltd. & Pte. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-image.png`,
  slogan: "Identified. Traceable. Trusted.",
  description:
    "PathStandard manufactures serialized pathology slides with permanent QR code identity and cloud-linked quality records for NABL-ready, ISO 15189:2022 traceability.",
  email: "contact@pathstandard.in",
  telephone: "+1-555-000-0000",
  knowsAbout: [
    "Pathology slides",
    "Slide serialization",
    "NABL accreditation",
    "ISO 15189:2022",
    "Certificate of Analysis",
    "Digital pathology",
    "Whole slide imaging",
    "Consumable traceability",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-000-0000",
    email: "contact@pathstandard.in",
    contactType: "sales",
    areaServed: ["IN", "SG", "AE", "US", "GB"],
    availableLanguage: ["en"],
  },
  address: [
    { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "Singapore", addressCountry: "SG" },
  ],
  areaServed: ["IN", "SG", "AE", "US", "GB", "APAC"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PathStandard Technologies",
  url: SITE_URL,
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://pathstandard.in"
  ),
  title: "PathStandard — Premium Pathology Slides, Certified & Serialized",
  description:
    "Premium precision-manufactured pathology slides — ultra-flat low-iron glass, certified aminosilane surface (contact angle <8.5°), ISO 13485 quality system. Every slide permanently serialized with a downloadable Certificate of Analysis.",
  keywords: [
    "pathology slides",
    "NABL",
    "ISO 15189",
    "traceability",
    "QR code",
    "Certificate of Analysis",
  ],
  openGraph: {
    title: "PathStandard — Premium Pathology Slides, Certified & Serialized",
    description:
      "Premium precision-manufactured pathology slides — ultra-flat low-iron glass, certified aminosilane surface, ISO 13485 quality system. Serialized with a downloadable Certificate of Analysis.",
    type: "website",
    siteName: "PathStandard Technologies",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "PathStandard Technologies — serialized pathology slides with NABL-ready traceability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PathStandard — Premium Pathology Slides, Certified & Serialized",
    description:
      "Premium precision-manufactured pathology slides — certified quality, serialized identity.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans text-white bg-ps-navy-deep" suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
