import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { customerTrust } from "@/lib/content";

export default function CustomerTrust() {
  return (
    <section className="section-padding-sm bg-white border-b border-ps-slate-200">
      <Container wide>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-section-title text-ps-navy">{customerTrust.headline}</h2>
            <p className="text-lead mt-4">{customerTrust.subheadline}</p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {customerTrust.stats.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <a href={item.href} className="benchling-stat-card group block overflow-hidden rounded-3xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ps-navy/60 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ps-navy">
                    {item.partner}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-6 md:p-8">
                  <div>
                    <p className="text-4xl font-bold tracking-tight text-ps-navy md:text-5xl">
                      {item.stat}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ps-slate-600">{item.label}</p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-ps-navy opacity-0 transition-opacity group-hover:opacity-100">
                    Read more →
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
