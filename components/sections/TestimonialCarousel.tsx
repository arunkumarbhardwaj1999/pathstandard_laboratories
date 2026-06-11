"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useCases } from "@/lib/content";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const item = useCases[active];

  return (
    <section className="section-padding bg-ps-navy-deep">
      <Container wide>
        <p className="mb-8 text-center text-sm font-semibold text-white/80">
          Real outcomes from pathology workflows
        </p>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative min-h-[420px] md:min-h-[480px]">
            <Image
              src="/images/packaging-hero.png"
              alt="Pathology laboratory using PathStandard serialized slides for NABL-ready traceability"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-ps-navy-deep/75" />

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-8 py-16 text-center md:min-h-[480px] md:px-20">
              <p className="max-w-3xl text-xl font-medium leading-relaxed text-white md:text-2xl lg:text-3xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-8 text-base font-bold text-white">{item.audience}</p>
              <p className="mt-1 text-sm text-white/60">{item.title}</p>
            </div>

            <button
              type="button"
              onClick={() => setActive((p) => (p === 0 ? useCases.length - 1 : p - 1))}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:left-6"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setActive((p) => (p === useCases.length - 1 ? 0 : p + 1))}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:right-6"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {useCases.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
