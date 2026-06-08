import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { heroStats } from "@/lib/content";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-ps-navy-deep">
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src="/images/packaging-hero.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ps-navy-deep/95 via-ps-navy/75 to-ps-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ps-navy-deep/80 via-transparent to-transparent" />

        <Container wide className="relative z-10 w-full pb-16 pt-36 md:pb-24 md:pt-44">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-eyebrow mb-6 !text-white/70">PathStandard Serialized Slides</p>

            <h1 className="space-y-1">
              <span className="text-highlight text-hero block w-fit">Traceability,</span>
              <span className="text-highlight text-hero block w-fit">reimagined.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">
              NABL-ready documentation with permanent slide identity and instant Certificate of
              Analysis access.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary">
                Request a Demo
              </Button>
              <Button href="#contact" variant="ghost">
                Request a Sample Box
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ps-slate-200 bg-white">
        <Container wide className="py-12 md:py-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
