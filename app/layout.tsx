import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pathstandard.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PathStandard Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    "PathStandard manufactures serialized pathology slides with permanent DataMatrix identity and cloud-linked quality records for NABL-ready, ISO 15189:2022 traceability.",
  email: "hello@pathstandard.com",
  address: [
    { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "Singapore", addressCountry: "SG" },
  ],
  areaServed: ["IN", "APAC"],
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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://pathstandard.com"
  ),
  title: "PathStandard Technologies — Serialized Pathology Reference Slides",
  description:
    "PathStandard helps laboratories protect sample identity, improve traceability, and maintain audit-ready documentation across the full slide lifecycle.",
  keywords: [
    "pathology slides",
    "NABL",
    "ISO 15189",
    "traceability",
    "DataMatrix",
    "Certificate of Analysis",
  ],
  openGraph: {
    title: "PathStandard Technologies — Serialized Pathology Reference Slides",
    description:
      "Serialized pathology slides with NABL-ready traceability documentation. Scan any slide, download a Certificate of Analysis in under 10 seconds.",
    type: "website",
    siteName: "PathStandard Technologies",
    locale: "en_IN",
    // TODO: replace with a dedicated 1200x630 social card at /public/images/og-image.png
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "PathStandard Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PathStandard Technologies — Serialized Pathology Reference Slides",
    description:
      "Serialized pathology slides with NABL-ready traceability documentation.",
    images: ["/images/logo.png"],
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
      <body className="min-h-full flex flex-col font-sans text-ps-slate-900 bg-white" suppressHydrationWarning>
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
