"use client";

import { useEffect, useState } from "react";

/**
 * Current time in milliseconds, driven by an interval. Starts as null so
 * the first render (and the server render) shows a static fallback —
 * wall-clock reads never happen during render, only in the interval.
 */
export function useNow(intervalMs = 1000): number | null {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return now;
}
