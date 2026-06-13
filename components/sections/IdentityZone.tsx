import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const callouts = [
  { title: "QR code", desc: "Permanent, machine-readable identity — readable by any phone camera, no app required." },
  { title: "Human-readable serial number", desc: "Every slide carries a unique, printed serial you can read at a glance." },
  { title: "Fiducial markers", desc: "Precise reference points for whole-slide-image (WSI) registration." },
  { title: "Lot traceability", desc: "Linked to the manufacturer quality record for the slide's production lot." },
  { title: "Certificate access", desc: "Scan to retrieve the Certificate of Analysis in under 10 seconds." },
];

export default function IdentityZone() {
  return (
    <section id="identity-zone" className="section-padding relative overflow-hidden bg-ps-navy-deep">
      <div className="absolute -left-32 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-ps-teal/15 blur-[130px]" aria-hidden />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/datamatrix-scan.png"
                  alt="The Identity Zone on a PathStandard slide — QR code, serial number and fiducial markers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="text-eyebrow !text-ps-teal-light">Built into every slide</p>
            <h2 className="mt-3 text-section-title text-white">The Identity Zone™</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              A permanent digital identity built directly into the slide — the single corner that turns
              anonymous glass into a traceable, digital asset.
            </p>

            <ul className="mt-8 space-y-5">
              {callouts.map((c) => (
                <li key={c.title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ps-teal/15 text-ps-teal-light">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-white">{c.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-white/60">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
