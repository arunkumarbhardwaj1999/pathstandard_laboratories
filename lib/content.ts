export const navLinks = [
  { label: "Workflow", href: "#workflow-film" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Compliance", href: "#trust" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
];

export const userSegments = [
  {
    title: "For Healthcare Providers",
    subtitle: "Labs, Hospitals & Pathologists",
    description:
      "NABL-ready traceability, instant CoA downloads, and audit-ready documentation for your pathology workflow.",
    href: "#use-cases",
    cta: "Explore lab solutions",
  },
  {
    title: "For Partners & Enterprise",
    subtitle: "Distributors, Investors & Digital Pathology",
    description:
      "Platform roadmap, LIMS integration, WSI substrate provenance, and multi-site audit management.",
    href: "#roadmap",
    cta: "View platform vision",
  },
];

export const trustPillars = [
  {
    title: "Serialized",
    subtitle: "Unique Slide Identity",
    description: "Permanent laser-etched DataMatrix on every slide.",
  },
  {
    title: "Traceable",
    subtitle: "Full Chain of Custody",
    description: "Digital records from manufacture to archive.",
  },
  {
    title: "CoA Verified",
    subtitle: "Certificate of Analysis",
    description: "PDF CoA in under 10 seconds via phone scan.",
  },
  {
    title: "NABL Ready",
    subtitle: "Supports Accreditation",
    description: "ISO 15189:2022 Cl.6.6 aligned documentation.",
  },
];

export const heroStats = [
  { value: "6", label: "Slide SKUs" },
  { value: "10 sec", label: "CoA Download" },
  { value: "ISO 15189", label: "2022 Aligned" },
  { value: "∞", label: "Identity Permanence" },
];

export const trustBadges = [
  "ISO 15189:2022",
  "ISO 13485 QMS",
  "CDSCO Class A IVD",
  "ISO/IEC 16022 DataMatrix",
  "NABL Aligned",
];

export const problemPoints = [
  "Slide identity can be lost during handling, staining, or storage.",
  "Batch and lot data is nearly impossible to retrieve after the fact.",
  "Manual records slow down audits and create non-conformance risk.",
  "Handoffs between accessioning, staining, and scanning create traceability gaps.",
  "Tissue detachment from unverified slide coatings causes rescans and diagnostic delays.",
];

export const solutionPoints = [
  "Permanent laser-etched DataMatrix identity on every slide — survives all staining protocols.",
  "Lot-level quality data (contact angle, surface energy, coating batch) recorded at manufacture.",
  "Scan any slide with a phone camera → PDF Certificate of Analysis in under 10 seconds.",
  "Complete digital chain of custody from manufacture to lab archive.",
  "DataMatrix readable from Whole Slide Images — substrate provenance for digital pathology.",
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Manufacture & Serialize",
    description:
      "Each slide is laser-etched with a permanent DataMatrix (ISO/IEC 16022 ECC200) and human-readable serial ID at production in Hyderabad. Quality parameters — contact angle, surface energy, coating lot — are measured and written to the cloud database simultaneously.",
  },
  {
    step: 2,
    title: "QC Record Written",
    description:
      "Production lot data is written to the PathStandard cloud database: glass batch reference, coating reagent lot, contact angle measurement, surface energy value, QC pass/fail, production date, QA officer name. The record is immutable after creation.",
  },
  {
    step: 3,
    title: "Shipment with Batch CoA",
    description:
      "Slides are packed in boxes of 72. The box label carries a QR code linking to the batch Certificate of Analysis. Every slide inherits the same lot-level quality record.",
  },
  {
    step: 4,
    title: "Lab Receipt & Use",
    description:
      "Any lab technician scans any individual slide with a standard phone camera — no app required. The phone opens cert.pathstandard.com/s/{serial_id} and displays the full quality record. One tap downloads the PDF Certificate of Analysis.",
  },
  {
    step: 5,
    title: "Permanent Archive",
    description:
      "Every scan, every CoA access, every download is logged with a timestamp. Chain of custody from manufacture to archive is complete and retrievable indefinitely. For digital pathology, the DataMatrix is readable from WSI files.",
  },
];

export const comparisonFeatures = [
  { feature: "Permanent serialized slide identity", pathstandard: true, leica: "limited", epredia: "limited", traditional: false },
  { feature: "DataMatrix / barcode traceability", pathstandard: true, leica: true, epredia: true, traditional: "limited" },
  { feature: "Per-slide Certificate of Analysis", pathstandard: true, leica: false, epredia: false, traditional: false },
  { feature: "Digital chain of custody records", pathstandard: true, leica: "limited", epredia: "limited", traditional: false },
  { feature: "Phone scan — no equipment needed", pathstandard: true, leica: false, epredia: false, traditional: false },
  { feature: "ISO 15189:2022 Cl.6.6 documentation", pathstandard: true, leica: "limited", epredia: "limited", traditional: false },
  { feature: "WSI-readable DataMatrix for AI datasets", pathstandard: true, leica: false, epredia: false, traditional: false },
  { feature: "No lab-side equipment investment", pathstandard: true, leica: false, epredia: false, traditional: false },
];

export const roiRows = [
  {
    driver: "Tissue detachment rescan cost",
    without: "₹12,500/day at 5–7% failure rate",
    with: "Lot traceability pinpoints batch — issue resolved in one scan",
  },
  {
    driver: "NABL audit documentation prep",
    without: "2+ hours per consumable category",
    with: "10-second CoA download — zero manual prep",
  },
  {
    driver: "Root-cause investigation time",
    without: "Days of searching with no lot data",
    with: "Scan any slide → full manufacture record instantly",
  },
  {
    driver: "WSI substrate metadata (digital labs)",
    without: "Anonymous glass — no provenance",
    with: "DataMatrix → auto-linked QC record per scan",
  },
];

export const marketDrivers = [
  {
    title: "ISO 15189:2022 Mandate",
    description:
      "All NABL-accredited labs in India now required to document traceability for every consumable including slides. Compliance is not optional.",
  },
  {
    title: "Digital Pathology Growth",
    description:
      "India's digital pathology market at USD 48.5M (2025), growing at 10.45% CAGR to USD 124.1M by 2034. Every WSI file needs linked substrate metadata.",
  },
  {
    title: "Quality as Competitive Advantage",
    description:
      "Lupin Diagnostics: all 27 greenfield labs NABL-accredited (April 2025). Quality credentials are now a commercial differentiator in the India diagnostics market.",
  },
];

export const features = [
  {
    title: "Permanent Laser Serialization",
    description:
      "ISO/IEC 16022 ECC200 DataMatrix laser-etched directly into the glass surface — not a label, not an ink print. Survives all staining protocols (H&E, IHC, FISH), xylene clearing, and archival storage for decades.",
    tag: "ISO/IEC 16022 · ISO/IEC 15415",
    icon: "barcode",
  },
  {
    title: "Instant Certificate of Analysis",
    description:
      "Scan any slide with any phone camera. No app required. Opens cert.pathstandard.com/s/{serial_id} and displays the full manufacturer QC record. One tap downloads a PDF Certificate of Analysis.",
    tag: "ISO 15189:2022 Cl.6.6",
    icon: "document",
  },
  {
    title: "Digital Chain of Custody",
    description:
      "Every scan, every CoA access, every download is logged with a timestamp and user record. Complete chain from manufacture to archive. Assessors get a tamper-evident audit trail with zero manual preparation.",
    tag: "Audit Ready · NABL 112A",
    icon: "chain",
  },
  {
    title: "APTES-Certified Surface Coating",
    description:
      "Contact angle and surface energy measured and documented per lot. APTES-charged slides have contact angle <10° (specification). Lot-level coating records eliminate root-cause ambiguity when tissue detachment occurs.",
    tag: "Documented Per Lot",
    icon: "coating",
  },
  {
    title: "WSI Integration for Digital Pathology",
    description:
      "DataMatrix and fiducial array are sized and positioned for reliable readability from Whole Slide Image scans at standard magnifications. Software can auto-extract serial ID from WSI and query PathStandard database.",
    tag: "Digital Pathology Ready",
    icon: "scan",
  },
  {
    title: "NABL Audit Documentation Package",
    description:
      "Pre-formatted ISO 15189:2022 Clause 6.6 documentation template referencing PathStandard lot records. Assessor-facing CoA PDFs include all required fields: manufacturer name, lot number, expiry, specification values.",
    tag: "NABL 112A Compliant",
    icon: "shield",
  },
];

export const integrations = [
  "LIMS platforms (via QR/DataMatrix scan or API — roadmap)",
  "Whole Slide Imaging systems (DataMatrix readable from WSI files)",
  "Standard phone cameras — iOS and Android, no app required",
  "Desktop and mobile browsers for CoA portal access",
  "Hospital and lab IT environments (web-based, no local installation)",
  "Barcode scanners — compatible with ISO/IEC 16022 ECC200 DataMatrix readers",
];

export const securityFeatures = [
  { feature: "Encrypted Records", description: "All slide quality records stored with encryption at rest and in transit." },
  { feature: "Immutable QC Records", description: "QC data written at manufacture cannot be edited or deleted. Tamper-evident audit trail." },
  { feature: "Role-Based Access", description: "Labs can control who in their team can access which records." },
  { feature: "Audit Logging", description: "Every access event (scan, view, download) is logged with timestamp, user, and IP." },
  { feature: "Controlled Data Retention", description: "Records retained per lab policy. Indefinite retention available for archival labs." },
];

export const roadmapPhases = [
  { phase: "Phase 1", name: "Serialized Slides", description: "Permanently serialized APTES, plain, frosted, PLL, cytology, and FISH slides with cloud QC records." },
  { phase: "Phase 2", name: "CoA Portal", description: "Web portal for labs to scan any slide and retrieve PDF Certificate of Analysis in under 10 seconds." },
  { phase: "Phase 3", name: "Lab Dashboard", description: "Lab-side portal showing all slides scanned, CoA access history, lot records, and audit summary reports." },
  { phase: "Phase 4", name: "LIMS Integration", description: "API connectivity for direct integration with major LIMS platforms." },
  { phase: "Phase 5", name: "AI Dataset Traceability", description: "Structured substrate metadata export for AI/ML training datasets with WSI auto-linking." },
  { phase: "Phase 6", name: "Enterprise Audit Platform", description: "Multi-site audit management, automated non-conformance alerts, and regulatory reporting dashboard." },
];

export const personas = [
  { title: "Lab Owner / Director", need: "Wants ROI, fewer audit failures, competitive differentiation." },
  { title: "Quality Manager", need: "Needs ISO 15189 Cl.6.6 documentation to satisfy NABL assessors." },
  { title: "NABL Coordinator", need: "Responsible for keeping audit records complete. Wants zero gaps." },
  { title: "Pathologist", need: "Wants substrate confidence — knows tissue detachment costs diagnostic time." },
  { title: "Hospital Procurement", need: "Evaluating total cost of ownership and regulatory risk." },
  { title: "Digital Pathology Director", need: "Building AI-ready WSI archives — needs substrate provenance data." },
];

export const useCases = [
  {
    title: "NABL-Accredited Lab: Annual ISO 15189 Re-Assessment Audit",
    audience: "Quality Manager / NABL Coordinator",
    before: "2+ hours searching paper delivery notes, calling distributors, manually compiling lot records. Records often missing. Non-conformance raised.",
    after: "10-second scan of any slide → PDF CoA with complete lot history. Assessor satisfied. Zero non-conformances on consumable traceability.",
    quote: "From 2-hour search to 10-second download.",
  },
  {
    title: "High-Volume Hospital Lab: Recurring Tissue Detachment",
    audience: "Lab Director / Pathologist",
    before: "₹12,500/day in rescan costs. Supplier switch doesn't resolve it. Root cause unknown — no lot documentation.",
    after: "APTES-certified coating with documented surface energy per lot. Detachment occurs → batch record scanned immediately → lot QC data pinpoints the coating issue.",
    quote: "Stop guessing. Start tracing.",
  },
  {
    title: "Digital Pathology Centre: Building an AI-Ready WSI Archive",
    audience: "Digital Pathology Director",
    before: "WSI files have no linked substrate quality data. Anonymous glass — no provenance for AI training datasets.",
    after: "DataMatrix readable from WSI → software auto-queries PathStandard database → manufacturer QC record attached to WSI metadata automatically.",
    quote: "Every WSI now has a verified substrate identity.",
  },
];

export const faqs = [
  {
    q: "How is the DataMatrix applied to the slide?",
    a: "It is laser-etched permanently into the glass surface — not a label, sticker, or ink print. The etching depth and contrast are optimized to ISO/IEC 16022 ECC200 and ISO/IEC 15415 Grade A specifications, ensuring reliable scan readability after all standard staining and clearing protocols.",
  },
  {
    q: "Does scanning require a special app?",
    a: "No. Any standard phone camera (iOS or Android) can scan the DataMatrix. The camera opens cert.pathstandard.com/s/{serial_id} directly in the phone's browser. No app download, no account creation required for CoA access.",
  },
  {
    q: "Can existing slides already in use be serialized?",
    a: "No. Serialization is applied permanently at manufacture during the laser-etching process. It cannot be added to slides after production. Labs transitioning to PathStandard start with new orders; existing stock continues to be used normally.",
  },
  {
    q: "Does it work with our existing barcode scanners?",
    a: "Yes. PathStandard DataMatrix barcodes are ISO/IEC 16022 ECC200 compliant and are readable by any standard 2D barcode scanner. The CoA portal is web-based and accessible from any scanner-connected workstation or mobile device.",
  },
  {
    q: "How long is quality data retained?",
    a: "All quality records are retained indefinitely by default. The cloud database is designed for long-term archival — a pathologist can scan a slide retrieved from a 10-year archive and retrieve the original manufacture QC record.",
  },
  {
    q: "Is PathStandard a Class A or Class B medical device?",
    a: "PathStandard slides are classified as Class A In Vitro Diagnostic medical devices under India's Medical Devices Rules (MDR) 2017 and CDSCO classification framework.",
  },
];

export const slideSKUs = [
  { code: "APS", name: "APTES Charged" },
  { code: "PLS", name: "Plain Serialized" },
  { code: "FRS", name: "Frosted End" },
  { code: "PLC", name: "PLL Coated" },
  { code: "CYT", name: "Cytology PAP" },
  { code: "FSH", name: "Adhesive FISH" },
];

export const roleOptions = [
  "Lab Owner",
  "Quality Manager",
  "NABL Coordinator",
  "Pathologist",
  "Procurement",
  "Digital Pathology",
  "Other",
];

export const intentOptions = [
  "Sample Box",
  "Pricing Quote",
  "Demo",
  "Partnership",
  "Other",
];

export const workflowFilmScenes = [
  {
    id: 1,
    title: "The Problem",
    caption: "Today — 200 anonymous slides. No documentation.",
    duration: 8,
  },
  {
    id: 2,
    title: "The Slide Arrives",
    caption: "PathStandard™ — identity etched permanently in glass.",
    duration: 9,
  },
  {
    id: 3,
    title: "Through the Workflow",
    caption: "Survives every step of tissue processing.",
    duration: 10,
  },
  {
    id: 4,
    title: "The Scan Moment",
    caption: "Any phone. No app. No login.",
    duration: 8,
  },
  {
    id: 5,
    title: "The Certificate",
    caption: "NABL-ready Certificate of Analysis — in 8 seconds.",
    duration: 8,
  },
  {
    id: 6,
    title: "Chain of Custody",
    caption: "Complete chain of custody. Manufacture to archive.",
    duration: 9,
  },
  {
    id: 7,
    title: "The Outcome",
    caption: "NABL audit documentation. 30 seconds, not 4 hours.",
    duration: 10,
  },
];

export const workflowFilmEndCard = {
  brand: "PathStandard Technologies",
  url: "cert.pathstandard.com",
  tagline: "Serialized pathology slides with NABL-ready traceability documentation.",
};
