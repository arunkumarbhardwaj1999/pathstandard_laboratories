import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    title: "PathStandard Technologies",
    description:
      "Serialized pathology slides with NABL-ready traceability documentation.",
    type: "website",
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
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-ps-slate-900 bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
