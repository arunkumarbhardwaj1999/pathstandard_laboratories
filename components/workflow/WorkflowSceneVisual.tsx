export default function WorkflowSceneVisual({ sceneId }: { sceneId: number }) {
  const base = "absolute inset-0 flex items-center justify-center overflow-hidden";

  switch (sceneId) {
    case 1:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-gradient-to-b from-ps-navy-light to-ps-navy-deep" />
          <div className="relative flex gap-2 opacity-80">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-3 w-20 rounded-sm border border-white/10 bg-white/5"
                style={{ transform: `rotate(-2deg) translateY(${i * 2}px)` }}
              />
            ))}
          </div>
          <div className="absolute bottom-1/3 left-1/2 h-16 w-28 -translate-x-1/2 rounded-sm border border-white/15 bg-white/5" />
          <p className="absolute bottom-8 text-[10px] tracking-widest text-white/30 uppercase">
            No identifier
          </p>
        </div>
      );

    case 2:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy-deep" />
          <div className="relative w-64 rounded border border-white/10 bg-gradient-to-br from-ps-slate-800/80 to-ps-navy/90 p-4 shadow-2xl">
            <div className="mb-3 grid grid-cols-5 gap-0.5">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className={`h-1.5 w-1.5 ${i % 3 === 0 ? "bg-white/70" : "bg-white/20"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full border border-white/40" />
              <div className="h-3 w-3 rounded-full border border-white/40" />
            </div>
            <p className="mt-2 font-mono text-[9px] text-white/50">APS-240601-00847</p>
          </div>
          <div className="film-accent-pulse absolute top-8 right-8 h-2 w-2 rounded-full bg-white/80" />
        </div>
      );

    case 3:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy" />
          <div className="flex gap-6 opacity-90">
            {["Xylene", "Stain", "Coverslip"].map((label) => (
              <div key={label} className="text-center">
                <div className="h-24 w-16 rounded border border-white/15 bg-white/5" />
                <p className="mt-2 text-[9px] text-white/50 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
          <div className="absolute top-6 right-6 rounded border border-white/10 bg-black/40 px-2 py-1">
            <div className="grid grid-cols-4 gap-px">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="h-1 w-1 bg-white/40" />
              ))}
            </div>
          </div>
          <div className="film-accent-pulse absolute bottom-10 left-10 h-2 w-2 rounded-full bg-white/80" />
        </div>
      );

    case 4:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy-deep" />
          <div className="relative">
            <div className="h-48 w-28 rounded-2xl border-2 border-ps-slate-600 bg-ps-slate-800 shadow-xl">
              <div className="relative m-2 h-[calc(100%-16px)] overflow-hidden rounded-xl bg-black">
                <div className="film-scan-frame absolute rounded border-2 border-white/60" />
                <div className="flex h-full flex-col items-center justify-center gap-2 p-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs text-white">✓</div>
                  <p className="font-mono text-[8px] text-white/70">cert.pathstandard.com</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 h-12 w-24 -translate-x-1/2 rounded-sm border border-white/10 bg-white/5" />
          </div>
        </div>
      );

    case 5:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy-deep" />
          <div className="w-56 overflow-hidden rounded-lg border border-white/10 bg-white shadow-2xl">
            <div className="bg-ps-navy px-3 py-2 text-[10px] font-bold tracking-widest text-white">
              PATHSTANDARD
            </div>
            <div className="space-y-2 p-3 text-[8px] text-ps-slate-600">
              <div className="flex justify-between border-b border-ps-slate-100 pb-1">
                <span>Lot</span>
                <span className="font-mono">APS-240601</span>
              </div>
              <div className="flex justify-between border-b border-ps-slate-100 pb-1">
                <span>Contact angle</span>
                <span>8.4°</span>
              </div>
              <div className="flex justify-between border-b border-ps-slate-100 pb-1">
                <span>Surface energy</span>
                <span>68.2 mJ/m²</span>
              </div>
              <div className="flex justify-between">
                <span>QC</span>
                <span className="font-bold text-ps-navy">PASS</span>
              </div>
            </div>
            <div className="bg-ps-navy px-2 py-1 text-center text-[7px] font-bold text-white">
              ISO 15189:2022 Clause 6.6
            </div>
            <div className="border-t border-ps-slate-200 p-2 text-center text-[8px] font-semibold text-ps-navy">
              Download PDF
            </div>
          </div>
        </div>
      );

    case 6:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-ps-navy" />
          <div className="relative flex h-64 items-stretch gap-6">
            <div className="relative w-px bg-white/10">
              <div
                className="absolute top-0 w-full bg-white/60"
                style={{ height: "100%", animation: "film-timeline-fill 3s ease-out infinite" }}
              />
            </div>
            <div className="flex flex-col justify-between py-2">
              {["Manufactured", "QC Recorded", "Delivered", "CoA Accessed"].map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="film-accent-pulse h-2.5 w-2.5 shrink-0 rounded-full bg-white/80"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                  <span className="text-xs font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={base}>
          <div className="absolute inset-0 bg-gradient-to-b from-ps-navy-light to-ps-navy-deep" />
          <div className="relative flex items-end gap-8">
            <div className="h-32 w-48 rounded border border-white/15 bg-white/5" />
            <div className="mb-4 flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 w-10 rounded-sm border border-white/20 bg-white/90 shadow-lg" />
              ))}
            </div>
          </div>
          <div className="absolute top-12 right-12 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/40 text-lg text-white">
            ✓
          </div>
        </div>
      );

    default:
      return null;
  }
}
