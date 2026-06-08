"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { useCases } from "@/lib/content";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const item = useCases[active];

  return (
    <section className="section-padding bg-ps-slate-50">
      <Container wide>
        <p className="text-eyebrow mb-10 text-center">Hear what the workflow delivers</p>

        <div className="relative overflow-hidden rounded-2xl bg-ps-navy min-h-[320px] md:min-h-[380px]">
          <div className="absolute inset-0 bg-gradient-to-br from-ps-navy via-ps-navy-light to-ps-blue opacity-90" />
          <div className="pattern-dashed absolute inset-0 opacity-10" />

          <div className="relative flex min-h-[320px] flex-col items-center justify-center px-8 py-16 text-center md:min-h-[380px] md:px-20">
            <p className="text-quote max-w-3xl text-2xl leading-snug text-white md:text-3xl lg:text-4xl">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className="mt-8 text-sm font-medium text-white/70">{item.audience}</p>
            <p className="mt-1 text-base font-semibold text-white">{item.title}</p>
          </div>

          <div className="absolute right-6 top-6 flex gap-2 md:right-8 md:top-8">
            <button
              type="button"
              onClick={() => setActive((p) => (p === 0 ? useCases.length - 1 : p - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setActive((p) => (p === useCases.length - 1 ? 0 : p + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {useCases.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-ps-navy" : "w-2 bg-ps-slate-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
