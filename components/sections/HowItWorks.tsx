"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { howItWorksSteps } from "@/lib/content";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const step = howItWorksSteps[activeStep];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <Container wide>
        <ScrollReveal>
          <SectionHeading
            label="Process"
            title="How it works"
            description="Walk through the complete chain of custody — from manufacture to permanent archive."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {howItWorksSteps.map((s, index) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`step-pill ${activeStep === index ? "step-pill-active" : "step-pill-inactive"}`}
              >
                Step {s.step}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="clinical-card relative overflow-hidden">
              <span className="absolute -right-4 -top-4 text-[8rem] font-bold leading-none text-ps-slate-100 select-none">
                {String(step.step).padStart(2, "0")}
              </span>
              <div className="relative">
                <p className="text-eyebrow mb-3">Chain of Custody</p>
                <h3 className="text-2xl font-bold text-ps-slate-900 md:text-3xl">{step.title}</h3>
                <div className="mt-8 flex gap-1.5">
                  {howItWorksSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                        index <= activeStep ? "bg-ps-navy" : "bg-ps-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-lead !text-base md:!text-lg">{step.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                  disabled={activeStep === 0}
                  className="rounded-full border border-ps-slate-300 px-5 py-2.5 text-sm font-semibold text-ps-slate-700 disabled:opacity-30 hover:bg-ps-slate-50 transition-colors"
                >
                  Previous
                </button>
                {activeStep < howItWorksSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep((p) => p + 1)}
                    className="rounded-full border border-ps-slate-300 px-5 py-2.5 text-sm font-semibold text-ps-slate-700 hover:bg-ps-slate-50 transition-colors"
                  >
                    Next step
                  </button>
                ) : (
                  <Button href="#contact" variant="primary" className="!py-2.5 !px-6">
                    Request a Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
