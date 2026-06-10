import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { realResults } from "@/lib/content";

const badgeStyles: Record<string, string> = {
  "Case Study": "bg-ps-slate-600 text-white",
  Research: "bg-ps-navy-light text-white",
  Whitepaper: "bg-ps-slate-700 text-white",
};

export default function RealResults() {
  return (
    <section className="section-padding bg-ps-navy-deep text-white">
      <Container wide>
        <ScrollReveal>
          <h2 className="text-center text-section-title text-white">Real labs. Real results.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/70">
            Read how PathStandard helps pathology teams cut audit prep time, improve traceability,
            and meet compliance standards.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {realResults.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <article className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ps-navy-deep via-ps-navy-deep/70 to-ps-navy-deep/20" />
                <div className="relative p-6 md:p-8">
                  <span
                    className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      badgeStyles[item.badge] ?? "bg-ps-slate-600 text-white"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-5 inline-block text-sm font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-white/60">
            Explore more use cases, compliance guides, and lab outcomes.
          </p>
          <div className="mt-6">
            <Button href="#use-cases" variant="primary">
              Explore use cases
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
