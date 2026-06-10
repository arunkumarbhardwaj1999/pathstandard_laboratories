"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { howItWorksSteps } from "@/lib/content";

export default function ScrollWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(index);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const step = howItWorksSteps[activeStep];

  return (
    <section id="how-it-works" className="bg-white border-y border-ps-slate-200">
      <Container wide className="py-16 md:py-20">
        <div className="mb-12 text-center">
          <p className="text-eyebrow mb-3">Compliance Workflow</p>
          <h2 className="text-section-title text-ps-navy">
            See how traceability works step by step
          </h2>
          <p className="text-lead mx-auto mt-4 max-w-2xl">
            Scroll through each stage — from manufacture to permanent archive.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-ps-slate-200 bg-ps-slate-50 p-8 md:p-10 transition-all duration-500">
              <span className="text-6xl font-bold text-ps-slate-200">
                {String(step.step).padStart(2, "0")}
              </span>
              <p className="text-eyebrow mt-4 mb-2">Step {step.step} of {howItWorksSteps.length}</p>
              <h3 className="text-2xl font-bold text-ps-navy md:text-3xl">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ps-slate-600">{step.description}</p>
              <div className="mt-8 flex gap-1.5">
                {howItWorksSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      index <= activeStep ? "bg-ps-navy" : "bg-ps-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {howItWorksSteps.map((s, index) => (
              <div
                key={s.step}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`scroll-workflow-step rounded-2xl border p-6 md:p-8 transition-all duration-500 ${
                  activeStep === index
                    ? "border-ps-navy/30 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
                    : "border-ps-slate-200 bg-ps-slate-50/50 opacity-60"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-ps-slate-500">
                  Step {s.step}
                </span>
                <h4 className="mt-2 text-xl font-bold text-ps-navy">{s.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-ps-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
