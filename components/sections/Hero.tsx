import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { heroStats } from "@/lib/content";

const heroCards = [
  {
    title: "Serialized Slides",
    description: "Permanent barcode identity on every slide — survives all staining protocols.",
    image: "/images/brand-spec.png",
    href: "#slide-portfolio",
    cta: "View slides",
  },
  {
    title: "CoA & Quality Portal",
    description: "Scan any slide with a phone. Download a PDF quality certificate in under 10 seconds.",
    image: "/images/packaging-hero.png",
    href: "https://cert.pathstandard.com",
    cta: "Open portal",
  },
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-ps-navy-deep text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-ps-navy-deep via-ps-navy to-ps-navy-light opacity-90" aria-hidden />
        <div className="hero-glow-dark absolute right-0 top-0 h-[500px] w-[500px] rounded-full" aria-hidden />

        <Container wide className="relative py-16 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="animate-fade-up">
              <p className="text-eyebrow mb-5 !text-white/60">PathStandard Serialized Slides</p>
              <h1 className="text-hero text-white">
                Bringing traceability into your assessment, diagnosis, and treatment.
              </h1>
            </div>
            <div className="animate-fade-up lg:pt-4">
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                PathStandard integrates serialized slide identity with cloud-linked quality records
                and NABL-ready documentation — no new hardware required in your lab.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#contact" variant="primary">
                  Get a demo
                </Button>
                <Button href="#contact" variant="ghost">
                  Request a sample box
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
            {heroCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-white/20"
              >
                <div className="relative h-52 overflow-hidden md:h-56">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ps-navy-deep/90 via-ps-navy-deep/20 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-white md:text-2xl">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{card.description}</p>
                  <a
                    href={card.href}
                    className="mt-5 inline-block text-sm font-bold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    {card.cta} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ps-slate-200 bg-ps-slate-50">
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
