import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const tiles = [
  { title: "Consistent tissue adhesion", image: "/images/tile-adhesion.png" },
  { title: "Reduced tissue loss", image: "/images/tile-tissueloss.png" },
  { title: "Digital pathology ready", image: "/images/tile-digital.png" },
  { title: "Permanent traceability", image: "/images/tile-traceability.png" },
];

export default function BetterPathology() {
  return (
    <section className="section-padding bg-ps-navy-deep">
      <Container>
        <SectionHeading
          align="center"
          label="Better Pathology"
          title="Designed for the pathology workflow."
          description="PathStandard isn't just traceability — it is a better slide for the people who depend on it every day."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 80}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ps-navy-deep/70 to-transparent" />
                </div>
                <p className="p-5 text-sm font-semibold text-white">{t.title}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
