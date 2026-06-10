import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { productCategories, productsSectionIntro } from "@/lib/content";

export default function ProductsServices() {
  return (
    <section className="section-padding bg-white">
      <Container wide>
        <ScrollReveal>
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-end">
            <div className="flex gap-5">
              <div className="accent-bar" />
              <h2 className="text-section-title text-ps-navy">{productsSectionIntro.title}</h2>
            </div>
            <p className="text-lead lg:pb-1">{productsSectionIntro.description}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {productCategories.map((product, i) => (
            <ScrollReveal key={product.title} delay={i * 100}>
              <article className="illumina-product-card group flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <h3 className="text-xl font-bold text-ps-navy md:text-2xl">{product.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ps-slate-600 md:text-base">
                    {product.description}
                  </p>
                  <a href={product.href} className="text-link-underline mt-6 inline-block w-fit">
                    {product.cta}
                  </a>
                </div>
                <div className="relative mt-auto h-56 overflow-hidden bg-gradient-to-br from-ps-slate-100 to-ps-slate-50 md:h-64">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
