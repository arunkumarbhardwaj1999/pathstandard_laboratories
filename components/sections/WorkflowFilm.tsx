"use client";

import { useCallback, useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import WorkflowSceneVisual from "@/components/workflow/WorkflowSceneVisual";
import { workflowFilmScenes, workflowFilmEndCard } from "@/lib/content";

const END_CARD_MS = 3000;
const TOTAL_SCENES = workflowFilmScenes.length;

export default function WorkflowFilm() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [showEndCard, setShowEndCard] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [fadeKey, setFadeKey] = useState(0);

  const goToScene = useCallback((index: number) => {
    setShowEndCard(false);
    setSceneIndex(index);
    setFadeKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (!playing) return;

    const duration = showEndCard
      ? END_CARD_MS
      : (workflowFilmScenes[sceneIndex]?.duration ?? 8) * 1000;

    const timer = setTimeout(() => {
      if (showEndCard) {
        setShowEndCard(false);
        setSceneIndex(0);
        setFadeKey((k) => k + 1);
      } else if (sceneIndex >= TOTAL_SCENES - 1) {
        setShowEndCard(true);
        setFadeKey((k) => k + 1);
      } else {
        setSceneIndex((i) => i + 1);
        setFadeKey((k) => k + 1);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [sceneIndex, showEndCard, playing]);

  const scene = workflowFilmScenes[sceneIndex];

  return (
    <section
      id="workflow-film"
      className="relative bg-black py-16 md:py-20"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
    >
      <Container wide>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">
              Workflow Film
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              From anonymous glass to audit-ready documentation
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="self-start rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white/80 hover:border-white/40 hover:text-white transition-colors"
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-ps-navy-deep shadow-2xl">
          {!showEndCard ? (
            <div key={fadeKey} className="film-scene-enter absolute inset-0">
              <WorkflowSceneVisual sceneId={scene.id} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
              <div className="absolute left-6 top-6 md:left-10 md:top-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                  Scene {scene.id}
                </p>
                <p className="mt-1 text-sm font-medium text-white/70">{scene.title}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-6 pb-8 pt-16 md:px-12 md:pb-10">
                <p className="max-w-2xl text-base font-medium text-white md:text-lg">
                  {scene.caption}
                </p>
              </div>
            </div>
          ) : (
            <div key="endcard" className="film-scene-enter absolute inset-0 flex flex-col items-center justify-center bg-black px-8 text-center">
              <p className="text-xl font-bold text-white md:text-2xl">
                {workflowFilmEndCard.brand}
              </p>
              <p className="mt-3 font-mono text-sm text-white/60">
                {workflowFilmEndCard.url}
              </p>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60">
                {workflowFilmEndCard.tagline}
              </p>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
            <div
              className="h-full bg-white/70 transition-all duration-500"
              style={{
                width: showEndCard
                  ? "100%"
                  : `${((sceneIndex + 1) / TOTAL_SCENES) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {workflowFilmScenes.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goToScene(i)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                !showEndCard && i === sceneIndex
                  ? "bg-ps-navy text-white"
                  : "border border-white/15 text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              {s.id}. {s.title}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
