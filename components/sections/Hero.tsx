import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { heroStats } from "@/lib/content";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-ps-navy-deep text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-ps-navy-deep via-ps-navy to-ps-navy-light" aria-hidden />
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-ps-teal/20 blur-[120px]" aria-hidden />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-ps-purple/20 blur-[120px]" aria-hidden />

        <Container wide className="relative py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-eyebrow mb-5 !text-ps-teal-light">PathStandard™ Serialized Slides</p>
            <h1 className="text-hero text-white">
              Your pathology workflow is digital.{" "}
              <span className="text-ps-teal-light">Your slide isn&apos;t.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              PathStandard™ is the permanently identified pathology slide. Superior tissue adhesion,
              slide-level traceability, and digital provenance — built into every slide. NABL-ready,
              with no new hardware in your lab.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary">
                Request Evaluation Kit →
              </Button>
              <Button href="/how-it-works" variant="ghost">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Standard slide → PathStandard slide transition */}
          <div className="mt-16 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-4 lg:gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Standard slide
              </p>
              <div className="mt-4 flex h-44 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02]">
                <div className="h-28 w-14 rounded-md border border-white/15 bg-white/[0.04]" />
              </div>
              <ul className="mt-5 space-y-1.5 text-sm text-white/45">
                <li>Anonymous</li>
                <li>No identity</li>
                <li>No history</li>
              </ul>
            </div>

            <div className="mx-auto hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 text-xl text-ps-teal-light md:flex">
              →
            </div>

            <div className="rounded-3xl border border-ps-teal/30 bg-ps-teal/[0.07] p-6 md:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ps-teal-light">
                PathStandard slide
              </p>
              <div className="relative mt-4 h-44 overflow-hidden rounded-xl border border-white/10 bg-white">
                <Image
                  src="/images/hero-slide-card.png"
                  alt="PathStandard serialized slide with permanent QR code identity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <ul className="mt-5 space-y-1.5 text-sm text-white/85">
                <li>Serialized</li>
                <li>Traceable · CoA verified</li>
                <li>Digital-ready</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-ps-navy">
        <Container wide className="py-12 md:py-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold tracking-tight text-white md:text-[2.5rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
