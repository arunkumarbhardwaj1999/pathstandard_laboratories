"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { ecosystemNodes, ecosystemWithoutNodes } from "@/lib/content";

type EcosystemMode = "with" | "without";

const ROTATION_MS = 48_000;
const ORBIT_RADIUS = 42;

export default function PlatformEcosystem() {
  const [mode, setMode] = useState<EcosystemMode>("with");
  const [activeId, setActiveId] = useState(ecosystemNodes[0].id);
  const [paused, setPaused] = useState(false);
  const [rotation, setRotation] = useState(0);

  const startTimeRef = useRef(Date.now());
  const pausedOffsetRef = useRef(0);
  const pauseStartRef = useRef<number | null>(null);

  const nodes = mode === "with" ? ecosystemNodes : ecosystemWithoutNodes;
  const active = nodes.find((n) => n.id === activeId) ?? nodes[0];
  const nodeCount = nodes.length;

  function switchMode(next: EcosystemMode) {
    setMode(next);
    setActiveId(next === "with" ? ecosystemNodes[0].id : ecosystemWithoutNodes[0].id);
  }

  useEffect(() => {
    if (paused) {
      pauseStartRef.current = Date.now();
      return;
    }

    if (pauseStartRef.current !== null) {
      pausedOffsetRef.current += Date.now() - pauseStartRef.current;
      pauseStartRef.current = null;
    }

    let frame = 0;
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current - pausedOffsetRef.current;
      setRotation((elapsed / ROTATION_MS) * 360);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  function nodePosition(index: number) {
    const baseAngle = (index / nodeCount) * 360 - 90;
    const angleRad = ((baseAngle + rotation) * Math.PI) / 180;
    return {
      left: `${50 + ORBIT_RADIUS * Math.cos(angleRad)}%`,
      top: `${50 + ORBIT_RADIUS * Math.sin(angleRad)}%`,
    };
  }

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
                onClick={() => switchMode("with")}
                className={`pb-1 transition-colors ${
                  mode === "with"
                    ? "border-b-2 border-ps-teal-light text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
                aria-pressed={mode === "with"}
              >
                With PathStandard →
              </button>
              <button
                type="button"
                onClick={() => switchMode("without")}
                className={`pb-1 transition-colors ${
                  mode === "without"
                    ? "border-b-2 border-red-400 text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
                aria-pressed={mode === "without"}
              >
                Without PathStandard →
              </button>
            </div>

            <div key={`${mode}-${active.id}`} className="mt-8 animate-fade-up">
              <p
                className={`text-lg font-semibold ${
                  mode === "with" ? "text-ps-teal-light" : "text-red-300"
                }`}
              >
                {active.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                {active.description}
              </p>
            </div>
          </div>

          <div
            className="relative mx-auto aspect-square w-full max-w-[420px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={`absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-colors duration-500 ${
                mode === "with"
                  ? "border-white/30 bg-ps-navy"
                  : "border-red-400/30 bg-ps-navy"
              }`}
            >
              <span
                className={`text-xs font-bold tracking-widest transition-colors duration-500 ${
                  mode === "with" ? "text-white" : "text-red-300"
                }`}
              >
                {mode === "with" ? "PS" : "?"}
              </span>
            </div>

            <div
              className="pointer-events-none absolute inset-0"
              style={{ transform: `rotate(${rotation}deg)` }}
              aria-hidden
            >
              <div className="ecosystem-ring absolute inset-8 rounded-full border border-white/10" />
              <div
                className={`absolute inset-12 rounded-full transition-colors duration-500 ${
                  mode === "with" ? "ecosystem-ring-glow" : "ecosystem-ring-glow ecosystem-ring-glow--muted"
                }`}
              />
            </div>

            {nodes.map((node, i) => {
              const pos = nodePosition(i);
              const isActive = node.id === activeId;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className="absolute z-20 will-change-[left,top]"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    transform: "translate(-50%, -50%)",
                  }}
                  aria-label={node.label}
                  aria-pressed={isActive}
                >
                  <div
                    className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                      isActive ? "scale-110" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isActive
                          ? mode === "with"
                            ? "border-ps-teal-light bg-ps-teal/20 text-white"
                            : "border-red-400 bg-red-500/15 text-red-200"
                          : mode === "with"
                            ? "border-white/25 bg-ps-navy/80 text-white/80"
                            : "border-white/15 bg-ps-navy/60 text-white/50"
                      }`}
                    >
                      <FeatureIcon name={node.icon} variant="dark" />
                    </div>
                    <span
                      className={`hidden max-w-[88px] text-center text-[10px] font-semibold leading-tight sm:block ${
                        isActive
                          ? mode === "with"
                            ? "text-ps-teal-light"
                            : "text-red-300"
                          : "text-white/60"
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
