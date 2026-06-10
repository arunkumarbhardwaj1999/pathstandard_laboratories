"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { exploreTabs } from "@/lib/content";

export default function ExplorePlatform() {
  const [activeId, setActiveId] = useState(exploreTabs[0].id);
  const active = exploreTabs.find((t) => t.id === activeId) ?? exploreTabs[0];

  return (
    <section className="section-padding-sm bg-ps-slate-50 border-y border-ps-slate-200">
      <Container wide>
        <div className="text-center">
          <h2 className="text-section-title text-ps-navy">Explore PathStandard</h2>
          <p className="text-lead mx-auto mt-4 max-w-2xl">
            Solutions for histology, cytology, digital pathology, and NABL compliance teams.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-ps-slate-100 p-2 md:p-3">
          <div className="flex flex-wrap gap-1 md:gap-2">
            {exploreTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  activeId === tab.id
                    ? "bg-white text-ps-navy shadow-sm"
                    : "text-ps-slate-600 hover:text-ps-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-3 grid gap-8 rounded-2xl bg-white p-6 md:grid-cols-2 md:p-10 lg:gap-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-ps-navy md:text-2xl">{active.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ps-slate-600">{active.description}</p>
              <div className="mt-8">
                <Button href={active.href} variant="secondary" pill>
                  Learn more
                </Button>
              </div>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-ps-slate-200 bg-ps-slate-50">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
