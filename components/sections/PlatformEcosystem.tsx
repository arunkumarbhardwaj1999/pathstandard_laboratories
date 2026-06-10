"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { ecosystemNodes } from "@/lib/content";

const NODE_COUNT = ecosystemNodes.length;

export default function PlatformEcosystem() {
  const [activeId, setActiveId] = useState(ecosystemNodes[0].id);
  const active = ecosystemNodes.find((n) => n.id === activeId) ?? ecosystemNodes[0];

  return (
    <section className="section-padding bg-ps-navy-deep text-white overflow-hidden">
      <Container wide>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-medium text-white/70">Why choose PathStandard?</p>
            <h2 className="mt-3 text-section-title text-white">
              Transforming pathology slide traceability.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              One platform connects serialized slides, quality records, CoA access, audit
              documentation, and digital pathology — built for labs that can&apos;t afford
              traceability gaps.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
              <button
                type="button"
                className="border-b-2 border-white pb-1 text-white"
              >
                With PathStandard →
              </button>
              <a href="#problem" className="text-white/50 transition-colors hover:text-white/80">
                Without PathStandard →
              </a>
            </div>
            <p className="mt-8 text-lg font-semibold text-white">{active.label}</p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div className="ecosystem-ring absolute inset-8 rounded-full border border-white/10" aria-hidden />
            <div className="ecosystem-ring-glow absolute inset-12 rounded-full" aria-hidden />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ps-navy border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <span className="text-xs font-bold tracking-widest text-white">PS</span>
            </div>

            {ecosystemNodes.map((node, i) => {
              const angle = (i / NODE_COUNT) * 360 - 90;
              const radius = 42;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
              const isActive = node.id === activeId;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={node.label}
                  aria-pressed={isActive}
                >
                  <div
                    className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                      isActive ? "scale-110" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                        isActive
                          ? "border-white bg-white/15 text-white"
                          : "border-white/25 bg-ps-navy/80 text-white/80"
                      }`}
                    >
                      <FeatureIcon name={node.icon} variant="dark" />
                    </div>
                    <span
                      className={`hidden max-w-[88px] text-center text-[10px] font-semibold leading-tight sm:block ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    >
                      {node.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
