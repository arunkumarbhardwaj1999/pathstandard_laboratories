"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-ps-slate-50">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Common questions from lab buyers."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ps-slate-200 rounded-xl border border-ps-slate-200 bg-white">
          {faqs.map((faq, index) => (
            <div key={faq.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 font-semibold text-ps-slate-900">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-ps-navy transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-ps-slate-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
