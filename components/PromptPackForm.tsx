"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error" | "notConfigured";

/** Optional email capture for the prompt pack — the pack itself stays free on the page either way. */
export default function PromptPackForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/prompt-pack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setStatus(data.error === "not_configured" ? "notConfigured" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-2xl bg-brand-amber/25 px-5 py-4 leading-7 font-semibold text-brand-navy-deep">
        Done — the pack is on its way to {email}. Check your inbox (and the
        spam folder, just in case).
      </p>
    );
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <label className="sr-only" htmlFor="prompt-pack-email">
          Email address
        </label>
        <input
          id="prompt-pack-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border-2 border-brand-navy/25 bg-white px-5 py-3 text-base text-brand-navy-deep placeholder:text-brand-navy-deep/40 focus:border-brand-orange focus:outline-none sm:max-w-sm"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-brand-orange px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-brand-orange/30 transition hover:bg-orange-600 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
        >
          {status === "sending" ? "Sending…" : "Email me the pack"}
        </button>
      </form>
      {status === "notConfigured" && (
        <p className="mt-4 inline-block rotate-[-1deg] rounded-md bg-brand-amber px-3 py-1.5 font-hand text-xl leading-tight text-brand-navy-deep">
          Email delivery switches on soon — the whole pack is right below,
          free either way.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 leading-7 font-semibold text-brand-navy-deep">
          That didn&apos;t send — please check the address and try again. The
          pack below is yours regardless.
        </p>
      )}
      <p className="mt-4 text-sm leading-6 text-brand-navy-deep/60">
        We email you the pack and let you know when new packs land. Never
        sold, never spammed — and the pack on this page asks for nothing.
      </p>
    </div>
  );
}
