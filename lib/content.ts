export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Compliance", href: "/compliance" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "FAQ", href: "/faq" },
];

export const userSegments = [
  {
    title: "For Healthcare Providers",
    subtitle: "Labs, Hospitals & Pathologists",
    description:
      "NABL-ready tracking, instant quality certificates (CoA), and audit-ready records for your lab.",
    href: "/use-cases",
    cta: "Learn more",
    image: "/images/packaging-hero.png",
  },
  {
    title: "For Partners & Enterprise",
    subtitle: "Distributors, Investors & Digital Pathology",
    description:
      "Platform roadmap, LIMS connections, digital pathology support, and multi-site audit tools.",
    href: "/roadmap",
    cta: "Learn more",
    image: "/images/brand-spec.png",
  },
  {
    title: "For Quality & Compliance",
    subtitle: "NABL Coordinators & Quality Managers",
    description:
      "Audit-ready documentation, ISO 15189 templates, and immutable quality records for every slide.",
    href: "/compliance",
    cta: "Learn more",
    image: "/images/datamatrix-scan.png",
  },
];

export const ecosystemNodes = [
  { id: "serialize", label: "Laser Serialization", icon: "barcode" },
  { id: "qc", label: "QC Records", icon: "document" },
  { id: "coa", label: "CoA Portal", icon: "scan" },
  { id: "audit", label: "Audit Docs", icon: "shield" },
  { id: "lims", label: "LIMS Ready", icon: "chain" },
  { id: "digital", label: "Digital Pathology", icon: "scan" },
  { id: "tracking", label: "Chain of Custody", icon: "chain" },
  { id: "nabl", label: "NABL Aligned", icon: "shield" },
];

export const realResults = [
  {
    badge: "Case Study",
    title: "NABL audit prep cut from 2 hours to 10 seconds per slide",
    description:
      "A quality team replaced manual lot searches with instant CoA downloads during their ISO 15189 re-assessment.",
    href: "/use-cases",
    image: "/images/packaging-hero.png",
  },
  {
    badge: "Research",
    title: "Whole slide images now linked to substrate quality data",
    description:
      "Digital pathology centres attach manufacturer QC records to every scan for AI-ready archives.",
    href: "/products",
    image: "/images/brand-spec.png",
  },
  {
    badge: "Whitepaper",
    title: "ISO 15189:2022 consumable traceability requirements explained",
    description:
      "How serialized slides help NABL-accredited labs meet Clause 6.6 documentation needs.",
    href: "/compliance",
    image: "/images/datamatrix-scan.png",
  },
];

export const trustPillars = [
  {
    title: "Serialized",
    subtitle: "Unique Slide Identity",
    description: "A permanent laser-etched barcode on every slide.",
  },
  {
    title: "Traceable",
    subtitle: "Full Tracking History",
    description: "Digital records from factory to archive.",
  },
  {
    title: "CoA Verified",
    subtitle: "Certificate of Analysis",
    description: "Download a PDF quality certificate in under 10 seconds with a phone scan.",
  },
  {
    title: "NABL Ready",
    subtitle: "Supports Accreditation",
    description: "Documentation aligned with ISO 15189:2022 audit needs.",
  },
];

export const heroStats = [
  { value: "5", label: "Slide SKUs" },
  { value: "10 sec", label: "CoA Download" },
  { value: "ISO 15189", label: "2022 Aligned" },
  { value: "∞", label: "Permanent ID" },
];

export const trustBadges = [
  "ISO 15189:2022",
  "ISO 13485 QMS",
  "CDSCO Class A IVD — registration in progress",
  "ISO/IEC 18004 QR Code",
  "NABL Aligned",
];

export const problemPoints = [
  "Slide IDs can be lost during handling, staining, or storage.",
  "Batch and lot details are hard to find later.",
  "Paper records slow audits and increase compliance risk.",
  "Gaps appear when slides move between sample prep, staining, and scanning.",
  "Poor slide coating can cause tissue to fall off, leading to rescans and delays.",
];

export const solutionPoints = [
  "A permanent laser-etched QR code on every slide — designed to withstand standard staining and clearing; validation in progress.",
  "Lot-level quality data recorded at manufacture (surface quality, coating batch, and more).",
  "Scan any slide with your phone → PDF quality certificate (CoA) in under 10 seconds.",
  "Full digital tracking from manufacture to archive.",
  "Barcode readable from whole slide images — slide origin data for digital pathology.",
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Manufacture & Serialize",
    description:
      "Each slide gets a permanent laser-etched barcode and serial number at our Hyderabad factory. Surface quality and coating details are saved to the cloud at the same time.",
  },
  {
    step: 2,
    title: "QC Record Written",
    description:
      "Lot data goes into the PathStandard cloud: glass batch, coating lot, surface measurements, pass/fail result, production date, and QA officer. Once saved, the record cannot be changed.",
  },
  {
    step: 3,
    title: "Shipment with Batch CoA",
    description:
      "Slides ship in boxes of 72. Each box has a QR code linking to the batch quality certificate. Every slide in the box shares the same lot record.",
  },
  {
    step: 4,
    title: "Lab Receipt & Use",
    description:
      "Any lab staff member scans a slide with a phone camera — no app needed. The browser opens cert.pathstandard.com/s/{serial_id} with the full quality record. One tap downloads the PDF certificate.",
  },
  {
    step: 5,
    title: "Permanent Archive",
    description:
      "Every scan, view, and download is logged with a timestamp. The full chain from manufacture to archive stays complete. For digital pathology, the barcode can also be read from whole slide image files.",
  },
];

export const comparisonFeatures = [
  { feature: "Permanent slide ID on every slide", pathstandard: true, leica: "limited", epredia: "limited", traditional: false },
  { feature: "Barcode tracking", pathstandard: true, leica: true, epredia: true, traditional: "limited" },
  { feature: "Per-slide quality certificate (CoA)", pathstandard: true, leica: false, epredia: false, traditional: false },
  { feature: "Digital tracking records", pathstandard: true, leica: "limited", epredia: "limited", traditional: false },
  { feature: "Phone scan — no extra equipment", pathstandard: true, leica: false, epredia: false, traditional: false },
  { feature: "ISO 15189:2022 audit documents", pathstandard: true, leica: "limited", epredia: "limited", traditional: false },
  { feature: "Barcode readable from whole slide images", pathstandard: true, leica: false, epredia: false, traditional: false },
  { feature: "No new equipment needed in the lab", pathstandard: true, leica: false, epredia: false, traditional: false },
];

export const roiRows = [
  {
    driver: "Tissue detachment rescan cost",
    without: "₹12,500/day at 5–7% failure rate",
    with: "Lot tracking finds the batch — fixed in one scan",
  },
  {
    driver: "NABL audit documentation prep",
    without: "2+ hours per consumable category",
    with: "10-second CoA download — no manual prep",
  },
  {
    driver: "Root-cause investigation time",
    without: "Days of searching with no lot data",
    with: "Scan any slide → full factory record instantly",
  },
  {
    driver: "Whole slide image metadata (digital labs)",
    without: "Unknown glass — no origin data",
    with: "Barcode links to quality record on every scan",
  },
];

export const roadmapPhases = [
  { phase: "Phase 1", name: "Serialized Slides", description: "Slides with permanent IDs and cloud quality records — APTES, plain, frosted, PLL, cytology, and FISH types." },
  { phase: "Phase 2", name: "CoA Portal", description: "Web portal to scan any slide and download a PDF quality certificate in under 10 seconds." },
  { phase: "Phase 3", name: "Lab Dashboard", description: "Lab portal showing scanned slides, certificate history, lot records, and audit summary reports." },
  { phase: "Phase 4", name: "LIMS Integration", description: "Direct API connections to major LIMS platforms." },
  { phase: "Phase 5", name: "AI Dataset Traceability", description: "Export slide quality data for AI training datasets, auto-linked to whole slide images." },
  { phase: "Phase 6", name: "Enterprise Audit Platform", description: "Multi-site audit management, compliance alerts, and regulatory reporting dashboard." },
];

export const personas = [
  { title: "Lab Owner / Director", need: "Wants better returns, fewer audit failures, and a quality edge over competitors." },
  { title: "Quality Manager", need: "Needs ISO 15189 documentation ready for NABL assessors." },
  { title: "NABL Coordinator", need: "Keeps audit records complete and wants zero gaps." },
  { title: "Pathologist", need: "Wants confidence in slide quality — tissue falling off wastes diagnostic time." },
  { title: "Hospital Procurement", need: "Weighing total cost and regulatory risk before buying." },
  { title: "Digital Pathology Director", need: "Building AI-ready image archives and needs slide origin data." },
];

export const useCases = [
  {
    title: "NABL Lab: Annual ISO 15189 Audit",
    audience: "Quality Manager / NABL Coordinator",
    before: "2+ hours digging through paper delivery notes, calling suppliers, and compiling lot records. Records often missing. Audit issues raised.",
    after: "10-second slide scan → PDF certificate with full lot history. Assessor satisfied. Zero issues on consumable tracking.",
    quote: "From 2-hour search to 10-second download.",
  },
  {
    title: "Busy Hospital Lab: Recurring Tissue Detachment",
    audience: "Lab Director / Pathologist",
    before: "₹12,500/day in rescan costs. Changing suppliers didn't help. No lot records — root cause unknown.",
    after: "Coating quality documented per lot. When tissue falls off, scan the batch record → lot data shows the coating issue right away.",
    quote: "Stop guessing. Start tracing.",
  },
  {
    title: "Digital Pathology Centre: Building an AI-Ready Image Archive",
    audience: "Digital Pathology Director",
    before: "Whole slide image files have no linked slide quality data. Unknown glass — no origin info for AI training.",
    after: "Barcode readable from images → software looks up PathStandard → quality record attached to image metadata automatically.",
    quote: "Every image now has a verified slide identity.",
  },
];

export const faqs = [
  {
    q: "How is the barcode applied to the slide?",
    a: "It is laser-etched permanently into the glass — not a label, sticker, or ink print. It stays readable after all standard staining and clearing steps.",
  },
  {
    q: "Does scanning require a special app?",
    a: "No. Any phone camera (iOS or Android) can scan the barcode. It opens cert.pathstandard.com/s/{serial_id} in your browser. No app download or account needed.",
  },
  {
    q: "Can existing slides already in use be serialized?",
    a: "No. The barcode is added at manufacture during laser etching. It cannot be added later. Labs start with new PathStandard orders; existing stock is used as normal.",
  },
  {
    q: "Does it work with our existing barcode scanners?",
    a: "Yes. PathStandard barcodes work with any standard 2D barcode scanner. The CoA portal is web-based and works from scanners, desktops, or phones.",
  },
  {
    q: "How long is quality data retained?",
    a: "All quality records are kept indefinitely by default. You can scan a slide from a 10-year archive and still get the original factory quality record.",
  },
  {
    q: "Is PathStandard a Class A or Class B medical device?",
    a: "PathStandard slides are Class A In Vitro Diagnostic devices under India's Medical Devices Rules (MDR) 2017 and the CDSCO framework.",
  },
];

export const slideSKUs = [
  {
    code: "APS",
    name: "APTES Charged",
    image: "/images/slide-serialized.png",
    imageAlt: "APTES charged pathology slide with laser-etched QR code",
  },
  {
    code: "PLS",
    name: "Plain Serialized",
    image: "/images/hero-slide-card.png",
    imageAlt: "Plain serialized pathology slide with permanent barcode identity",
  },
  {
    code: "FRS",
    name: "Frosted End",
    image: "/images/clinical-pattern.png",
    imageAlt: "Frosted-end histology slide for routine pathology workflows",
  },
  {
    code: "CYT",
    name: "Cytology PAP",
    image: "/images/packaging-hero.png",
    imageAlt: "PAP cytology slide packaging with full traceability documentation",
  },
  {
    code: "FSH",
    name: "Adhesive FISH",
    image: "/images/datamatrix-scan.png",
    imageAlt: "Adhesive FISH slide scanned for molecular pathology traceability",
  },
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
    caption: "Today — 200 slides with no ID and no paperwork.",
    duration: 8,
  },
  {
    id: 2,
    title: "The Slide Arrives",
    caption: "PathStandard™ — a permanent ID etched into the glass.",
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
    caption: "NABL-ready quality certificate — in 8 seconds.",
    duration: 8,
  },
  {
    id: 6,
    title: "Full Tracking",
    caption: "Complete history from factory to archive.",
    duration: 9,
  },
  {
    id: 7,
    title: "The Outcome",
    caption: "NABL audit papers ready in 30 seconds, not 4 hours.",
    duration: 10,
  },
];

export const workflowFilmEndCard = {
  brand: "PathStandard Technologies",
  url: "cert.pathstandard.com",
  tagline: "Serialized pathology slides with NABL-ready tracking and documentation.",
};

export const missionStatement = {
  label: "Our Mission",
  headline: "To make every pathology slide traceable, from factory to archive.",
  body: "PathStandard gives laboratories permanent slide identity, instant quality certificates, and audit-ready records — with no new equipment required.",
};

export const labStory = {
  title: "Why PathStandard Exists",
  category: "Slide Traceability",
  intro:
    "We started PathStandard after seeing the same problem in labs across India: quality teams spent hours gathering audit papers for slides that were never built to be tracked.",
  body: [
    "Most labs still receive slides with no quality paperwork from the manufacturer. When audit day comes, staff search through delivery notes and call suppliers — often with no result.",
    "PathStandard changes that. Every slide gets a permanent ID etched into the glass. Scan it with any phone and download a full quality certificate in seconds.",
  ],
};

export const regulatoryDisclosures = {
  productInfo: {
    title: "Important Product Information",
    paragraphs: [
      "PathStandard serialized slides are Class A In Vitro Diagnostic (IVD) medical devices under India's Medical Devices Rules (MDR) 2017 and the CDSCO classification framework.",
      "Slides are intended for use in clinical and research pathology laboratories. Quality certificates (CoA) provide manufacturer lot data and should be reviewed alongside your lab's standard quality procedures.",
      "Scan results and CoA downloads are provided for documentation and audit support. They do not replace your lab's internal quality management system or assessor judgment.",
    ],
  },
  labInfo: {
    title: "Quality & Regulatory Information",
    paragraphs: [
      "PathStandard manufacturing is aligned with ISO 13485 Quality Management System requirements. Documentation supports ISO 15189:2022 Clause 6.6 consumable traceability needs for NABL-accredited laboratories.",
      "Slide QR codes comply with ISO/IEC 18004 2D barcode standards. Quality records are stored with encryption and maintained as immutable entries from the point of manufacture.",
      "For regulatory inquiries, contact hello@pathstandard.com. Product specifications are subject to change. Intended for laboratory and healthcare professional use in India and APAC markets.",
    ],
  },
};

export const complianceMatrix = [
  {
    standard: "ISO 15189:2022",
    clause: "Clause 6.6 — Reagents & Consumables",
    detail:
      "PathStandard provides a manufacturer-issued Certificate of Analysis with lot number, quality specifications, and pass/fail determination for every slide lot — downloadable as a PDF in under 10 seconds, directly satisfying consumable traceability requirements.",
  },
  {
    standard: "NABL 112A",
    clause: "Specific Criteria for Medical Laboratories",
    detail:
      "NABL requires documented traceability for all reagents and consumables under ISO 15189:2022. PathStandard's cloud quality database provides this lot-level documentation for every slide, with a tamper-evident access log for assessors.",
  },
  {
    standard: "ISO 13485:2016",
    clause: "Medical Device Quality Management",
    detail:
      "PathStandard manufacturing is aligned with ISO 13485 QMS requirements, ensuring systematic quality control and documented production records at the point of manufacture.",
  },
  {
    standard: "CDSCO MDR 2017",
    clause: "Class A IVD Classification",
    detail:
      "Microscope slides are classified as Class A In Vitro Diagnostic devices under India's Medical Device Rules 2017. PathStandard products are manufactured and documented accordingly.",
  },
  {
    standard: "ISO/IEC 16022",
    clause: "QR Code Symbology (ISO/IEC 18004)",
    detail:
      "Each slide carries a QR code with error correction, ensuring reliable scan readability by any phone camera or 2D barcode reader — even with partial label wear after staining and clearing.",
  },
  {
    standard: "ISO/IEC 15415",
    clause: "2D Barcode Print Quality",
    detail:
      "QR codes are produced to Grade A print-quality specifications, ensuring consistent readability across phone cameras, lab scanners, and whole-slide imaging systems.",
  },
];

export const partnerLogos = [
  { name: "NABL", subtitle: "Aligned", icon: "nabl" },
  { name: "ISO 15189", subtitle: "2022", icon: "iso" },
  { name: "ISO 13485", subtitle: "QMS", icon: "qms" },
  { name: "CDSCO", subtitle: "Class A IVD", icon: "cdsco" },
] as const;

export const coreTechnologies = [
  {
    title: "Laser Serialization",
    icon: "barcode",
    description: "Permanent barcode etched into every slide at manufacture.",
  },
  {
    title: "Quality Documentation",
    icon: "document",
    description: "Instant CoA downloads and NABL-ready audit records.",
  },
  {
    title: "Digital Tracking",
    icon: "chain",
    description: "Full chain of custody from factory to lab archive.",
  },
];

export const productCategories = [
  {
    title: "Serialized Slides",
    description: "Five slide types with permanent IDs, lot-level records, and NABL-ready documentation.",
    cta: "View all slide types",
    href: "/products",
    image: "/images/brand-spec.png",
    imageAlt: "PathStandard serialized pathology slides",
  },
  {
    title: "CoA & Quality Portal",
    description: "Scan any slide with a phone and download a PDF quality certificate in under 10 seconds.",
    cta: "View CoA portal",
    href: "https://cert.pathstandard.com",
    image: "/images/packaging-hero.png",
    imageAlt: "PathStandard quality certificate portal",
  },
];

export const platformSpotlight = {
  label: "Platform spotlight",
  title: "PathStandard innovation roadmap",
  description:
    "From serialized slides to LIMS integration, lab dashboards, and enterprise audit tools — see where the platform is headed.",
  cta: "View roadmap",
  href: "/roadmap",
};

export const productsSectionIntro = {
  title: "Products and services",
  description:
    "The traceability technology your lab needs. The documentation and support your quality team deserves. Designed with your audit results in mind.",
};

export const customerTrust = {
  headline: "Trusted by pathology labs across India and APAC",
  subheadline:
    "Academic hospitals, NABL-accredited labs, and digital pathology centres rely on PathStandard for slide traceability and audit-ready documentation.",
  stats: [
    {
      stat: "10 sec",
      label: "reduction in CoA retrieval time vs manual record search",
      partner: "NABL Labs",
      href: "/use-cases",
      image: "/images/packaging-hero.png",
    },
    {
      stat: "6",
      label: "serialized slide SKUs with permanent ID and lot-level records",
      partner: "PathStandard",
      href: "/products",
      image: "/images/brand-spec.png",
    },
    {
      stat: "100%",
      label: "of slides ship with manufacturer-issued quality documentation",
      partner: "ISO 15189",
      href: "/compliance",
      image: "/images/packaging-hero.png",
    },
  ],
};

export const whyChooseBlocks = [
  {
    icon: "barcode",
    title: "Digitize your lab, automate traceability, and speed up audits.",
    paragraphs: [
      "Plan, record, and share slide quality data in a system built for pathology workflows.",
      "Replace paper lot searches with instant phone scans and PDF quality certificates.",
      "Give quality teams audit-ready records without hours of manual preparation.",
    ],
    href: "/how-it-works",
    visual: "workflow",
  },
  {
    icon: "document",
    title: "Build a data foundation that fits your unique lab science.",
    paragraphs: [
      "Every slide carries a permanent ID linked to factory QC records in the cloud.",
      "Lot-level surface quality, coating batch, and production data — recorded at manufacture.",
      "Works with histology, cytology, IHC, FISH, and digital pathology workflows.",
    ],
    href: "/products",
    visual: "data",
  },
  {
    icon: "chain",
    title: "Evolve with your lab on an open, flexible traceability platform.",
    paragraphs: [
      "Connect to LIMS, whole slide imaging, and hospital IT — no local installation required.",
      "Scale from a single NABL lab to multi-site hospital networks.",
      "Roadmap includes lab dashboards, API access, and enterprise audit tools.",
    ],
    href: "/roadmap",
    visual: "platform",
  },
];

export const exploreTabs = [
  {
    id: "histology",
    label: "Histology",
    title: "Perform efficient histology with traceable slides.",
    description:
      "Serialized H&E and IHC slides with permanent barcodes that survive all staining and clearing steps.",
    href: "/products",
    image: "/images/brand-spec.png",
  },
  {
    id: "cytology",
    label: "Cytology",
    title: "Track every cytology slide from factory to report.",
    description:
      "PAP and cytology SKUs with lot-level quality records and instant CoA access for audit teams.",
    href: "/products",
    image: "/images/packaging-hero.png",
  },
  {
    id: "digital",
    label: "Digital Pathology",
    title: "Link whole slide images to substrate quality data.",
    description:
      "Barcodes readable from WSI files — attach manufacturer QC records to every digital scan automatically.",
    href: "/products",
    image: "/images/brand-spec.png",
  },
  {
    id: "compliance",
    label: "NABL Compliance",
    title: "Meet ISO 15189 consumable traceability requirements.",
    description:
      "Pre-formatted audit documentation, immutable records, and assessor-ready CoA PDFs in seconds.",
    href: "/compliance",
    image: "/images/packaging-hero.png",
  },
  {
    id: "quality",
    label: "Quality Management",
    title: "Give your quality team the records they need.",
    description:
      "Immutable manufacture records, role-based access, and full audit logging for every scan and download.",
    href: "/compliance",
    image: "/images/brand-spec.png",
  },
];

export const solutionModalities = [
  { title: "Histology & IHC", icon: "coating", href: "/products" },
  { title: "Cytology & PAP", icon: "scan", href: "/products" },
  { title: "FISH & Molecular", icon: "barcode", href: "/products" },
  { title: "Digital Pathology", icon: "scan", href: "/products" },
  { title: "NABL Audit Prep", icon: "shield", href: "/compliance" },
  { title: "Hospital Procurement", icon: "document", href: "/use-cases" },
];

export const labServices = [
  {
    title: "Implementation & onboarding",
    description:
      "Get support transitioning to serialized slides — sample boxes, workflow guides, and quality team training.",
    icon: "shield",
  },
  {
    title: "CoA portal access",
    description:
      "Scan any slide with a phone and download PDF quality certificates in under 10 seconds. No app required.",
    icon: "document",
  },
  {
    title: "Compliance documentation",
    description:
      "ISO 15189:2022 templates, NABL audit packages, and assessor-ready records for every slide lot.",
    icon: "chain",
  },
  {
    title: "Platform & integrations",
    description:
      "LIMS connectivity, WSI metadata linking, and API access on the PathStandard roadmap.",
    icon: "scan",
  },
];
