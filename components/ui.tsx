import type { ReactNode } from "react";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-extrabold tracking-[0.18em] text-brand-orange uppercase">
      <span aria-hidden="true" className="inline-block h-2.5 w-2.5 bg-brand-orange" />
      {children}
    </p>
  );
}

export function PixelMotif({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      <span className="absolute h-2 w-2 bg-brand-sky" style={{ top: 0, left: 0 }} />
      <span className="absolute h-3 w-3 bg-brand-amber" style={{ top: 14, left: 22 }} />
      <span className="absolute h-2 w-2 bg-brand-orange" style={{ top: 4, left: 48 }} />
      <span className="absolute h-2.5 w-2.5 bg-brand-sky" style={{ top: 30, left: 8 }} />
      <span className="absolute h-2 w-2 bg-brand-amber" style={{ top: 38, left: 40 }} />
    </div>
  );
}
