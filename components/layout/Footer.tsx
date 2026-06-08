import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { slideSKUs } from "@/lib/content";

const footerLinks = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Compliance", href: "#trust" },
    { label: "Slide Portfolio", href: "#features" },
    { label: "Request Demo", href: "#contact" },
  ],
  regulatory: [
    { label: "ISO 15189:2022 Cl.6.6", href: "#trust" },
    { label: "NABL Documentation", href: "#trust" },
    { label: "CDSCO MDR 2017", href: "#trust" },
    { label: "ISO 13485 QMS", href: "#trust" },
    { label: "ISO/IEC 16022", href: "#trust" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-ps-slate-200 bg-ps-navy text-ps-slate-300">
      <Container className="section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" size="sm" />
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a href="mailto:hello@pathstandard.com" className="hover:text-ps-teal-light">
                  hello@pathstandard.com
                </a>
              </p>
              <p>
                <a href="https://cert.pathstandard.com" className="hover:text-ps-teal-light">
                  cert.pathstandard.com
                </a>
              </p>
              <p>Hyderabad, India</p>
              <p>Singapore · APAC</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-ps-gold uppercase">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-ps-gold uppercase">
              Slide SKUs
            </h3>
            <ul className="space-y-2 text-sm">
              {slideSKUs.map((sku) => (
                <li key={sku.code}>
                  <span className="font-mono text-ps-teal-light">{sku.code}</span>
                  <span className="text-ps-slate-400"> — {sku.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-ps-gold uppercase">
              Regulatory
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.regulatory.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ps-slate-700 pt-8 text-center text-xs text-ps-slate-500">
          © 2026 PathStandard Technologies Pvt. Ltd. & Pte. Ltd. · Hyderabad · Singapore · All
          specifications subject to change
        </div>
      </Container>
    </footer>
  );
}
