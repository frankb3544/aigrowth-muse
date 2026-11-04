"use client";

import { useState } from "react";
import { diagnosticStages } from "@/lib/data";
import { SectionTag } from "./ui";

export default function Diagnostic({ variant }: { variant?: "spec" }) {
  const [activeId, setActiveId] = useState(diagnosticStages[1].id);
  const active =
    diagnosticStages.find((stage) => stage.id === activeId) ??
    diagnosticStages[0];
  const spec = variant === "spec";

  return (
    <section
      id="diagnostic"
      className={`py-16 text-white lg:py-24 ${spec ? "blueprint" : "bg-brand-navy-deep"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionTag>Find your bottleneck</SectionTag>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Where is work <span className="marker">slipping through</span>?
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/72">
            Every business leaks somewhere. Pick the line that sounds most
            like you — we&apos;ll show you the system we&apos;d build first.
            This is the same walk we do on the audit call.
          </p>
        </div>

        {spec && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-y-2 border-dashed border-brand-sky/40 py-3.5">
            <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-sky uppercase">
              WO-01 · Diagnostic
            </p>
            <p className="text-[11px] font-extrabold tracking-[0.22em] text-white/50 uppercase">
              Scope — the RACE walk
            </p>
          </div>
        )}

        <div
          role="tablist"
          aria-label="Business stages"
          className={`${spec ? "mt-6" : "mt-10"} grid gap-3 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {diagnosticStages.map((stage) => {
            const selected = stage.id === activeId;
            return (
              <button
                key={stage.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(stage.id)}
                className={`rounded-2xl border-2 px-5 py-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber ${
                  selected
                    ? "border-brand-amber bg-brand-amber text-brand-navy-deep shadow-lg shadow-black/25"
                    : "border-white/20 bg-white/5 text-white hover:border-white/45 hover:bg-white/10"
                }`}
              >
                <span
                  className={`text-xs font-extrabold tracking-[0.16em] uppercase ${
                    selected ? "text-brand-navy-deep/60" : "text-brand-sky"
                  }`}
                >
                  {stage.race}
                </span>
                <span className="mt-1 block text-lg leading-snug font-extrabold">
                  {stage.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          className={`relative mt-6 grid gap-8 rounded-3xl border border-white/14 bg-white/[0.07] p-7 sm:p-9 lg:grid-cols-2 ${spec ? "border-dashed" : ""}`}
        >
          {spec && (
            <span className="absolute -top-3 left-6 bg-brand-navy-deep px-2 text-[11px] font-extrabold tracking-[0.22em] text-brand-sky uppercase">
              Spec sheet · the RACE walk
            </span>
          )}
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-brand-sky uppercase">
              If this sounds familiar
            </p>
            <p className="mt-3 text-xl leading-9 font-medium text-white/88">
              {active.symptom}
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-brand-amber uppercase">
              The system we&apos;d build first
            </p>
            <p className="mt-3 font-display text-2xl font-black text-balance">
              {active.systemName}
            </p>
            <p className="mt-3 leading-7 text-white/75">{active.systemDetail}</p>
            <a
              href="#book"
              className="mt-6 inline-block rounded-full bg-brand-orange px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-black/25 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
            >
              Book an Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
