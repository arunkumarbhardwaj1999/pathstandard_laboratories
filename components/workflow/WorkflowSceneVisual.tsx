// Cinematic animated scenes for the Workflow Film.
// Style: dark navy / black, GOLD (#E8A820) single accent — per the client's video brief.
const GOLD = "#E8A820";

export default function WorkflowSceneVisual({ sceneId }: { sceneId: number }) {
  const base = "absolute inset-0 flex items-center justify-center overflow-hidden";

  switch (sceneId) {
    // Scene 1 — The Problem: a tray of anonymous, blank slides
    case 1:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-gradient-to-b from-ps-navy-light to-ps-navy-deep" />
          <div className="relative flex flex-col gap-2 opacity-80">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-4 w-44 rounded-sm border border-white/10 bg-white/[0.04]"
                style={{ transform: `rotate(-1.5deg) translateX(${i * 3}px)` }}
              />
            ))}
          </div>
          <p className="absolute bottom-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
            No identifier · No documentation
          </p>
        </div>
      );

    // Scene 2 — The Slide Arrives: identity zone etched in glass
    case 2:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy-deep" />
          <div className="relative w-72 rounded-md border border-white/10 bg-gradient-to-br from-white/[0.06] to-ps-navy/80 p-5 shadow-2xl backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div className="grid grid-cols-6 gap-0.5">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className={`h-2 w-2 ${i % 3 === 0 ? "bg-white/80" : "bg-white/20"}`} />
                ))}
              </div>
              {/* fiducial crosshairs */}
              <div className="flex flex-col gap-3">
                {[0, 1].map((i) => (
                  <div key={i} className="relative h-4 w-4">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/50" />
                    <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/50" />
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 font-mono text-[10px] tracking-wider text-white/60">APS-240601-00847</p>
          </div>
          <div
            className="film-accent-pulse absolute right-10 top-10 h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: GOLD }}
          />
        </div>
      );

    // Scene 3 — Through the Workflow: xylene → stain → coverslip
    case 3:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy" />
          <div className="flex items-end gap-6 opacity-95">
            {["Xylene", "Stain", "Coverslip"].map((label, i) => (
              <div key={label} className="text-center">
                <div
                  className="h-24 w-16 rounded border border-white/15 bg-gradient-to-b from-white/[0.10] to-white/[0.02]"
                  style={i === 1 ? { background: "linear-gradient(to bottom, rgba(168,85,200,0.25), rgba(232,80,150,0.18))" } : undefined}
                />
                <p className="mt-2 text-[9px] uppercase tracking-wider text-white/50">{label}</p>
              </div>
            ))}
          </div>
          {/* identity stays visible */}
          <div className="absolute right-6 top-6 rounded border border-white/10 bg-black/40 px-2 py-1">
            <div className="grid grid-cols-4 gap-px">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="h-1 w-1 bg-white/50" />
              ))}
            </div>
          </div>
          <div
            className="film-accent-pulse absolute bottom-10 left-10 h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: GOLD }}
          />
        </div>
      );

    // Scene 4 — The Scan Moment: phone reading the identity zone
    case 4:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy-deep" />
          <div className="relative">
            <div className="h-52 w-30 rounded-2xl border-2 border-ps-slate-600 bg-ps-slate-800 p-2 shadow-xl">
              <div className="relative h-full w-28 overflow-hidden rounded-xl bg-black">
                <div
                  className="film-scan-frame absolute rounded border-2"
                  style={{ borderColor: GOLD }}
                />
                <div className="flex h-full flex-col items-center justify-center gap-2 p-2">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-ps-navy-deep"
                    style={{ backgroundColor: GOLD }}
                  >
                    ✓
                  </div>
                  <p className="font-mono text-[8px] text-white/70">cert.pathstandard.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // Scene 5 — The Certificate
    case 5:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy-deep" />
          <div className="w-60 overflow-hidden rounded-lg border border-white/10 bg-white shadow-2xl">
            <div className="bg-ps-navy px-3 py-2 text-[10px] font-bold tracking-widest text-white">
              PATHSTANDARD
            </div>
            <div className="space-y-2 p-3 text-[8px] text-ps-slate-600">
              <div className="flex justify-between border-b border-ps-slate-100 pb-1">
                <span>Lot</span><span className="font-mono">APS-240601</span>
              </div>
              <div className="flex justify-between border-b border-ps-slate-100 pb-1">
                <span>Contact angle</span><span>8.4°</span>
              </div>
              <div className="flex justify-between border-b border-ps-slate-100 pb-1">
                <span>Surface energy</span><span>68.2 mJ/m²</span>
              </div>
              <div className="flex justify-between">
                <span>QC</span><span className="font-bold text-green-600">PASS</span>
              </div>
            </div>
            <div className="bg-ps-navy px-2 py-1 text-center text-[7px] font-bold text-white">
              ISO 15189:2022 Clause 6.6
            </div>
            <div
              className="px-2 py-1.5 text-center text-[8px] font-bold text-ps-navy-deep"
              style={{ backgroundColor: GOLD }}
            >
              ↓ Download PDF
            </div>
          </div>
        </div>
      );

    // Scene 6 — Chain of Custody timeline
    case 6:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy" />
          <div className="relative flex h-64 items-stretch gap-6">
            <div className="relative w-px bg-white/10">
              <div
                className="absolute top-0 w-full"
                style={{ height: "100%", backgroundColor: GOLD, animation: "film-timeline-fill 3s ease-out infinite" }}
              />
            </div>
            <div className="flex flex-col justify-between py-2">
              {["Manufactured", "QC Recorded", "Delivered", "CoA Accessed"].map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="film-accent-pulse h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: GOLD, animationDelay: `${i * 0.5}s` }}
                  />
                  <span className="text-xs font-medium text-white/85">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    // Scene 7 — The Outcome: audit-ready documents
    case 7:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-gradient-to-b from-ps-navy-light to-ps-navy-deep" />
          <div className="relative flex items-end gap-8">
            <div className="h-32 w-48 rounded border border-white/15 bg-white/[0.04]" />
            <div className="mb-4 flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 w-11 rounded-sm border border-white/20 bg-white/90 shadow-lg" />
              ))}
            </div>
          </div>
          <div
            className="absolute right-12 top-12 flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold text-ps-navy-deep"
            style={{ backgroundColor: GOLD }}
          >
            ✓
          </div>
        </div>
      );

    default:
      return null;
  }
}
