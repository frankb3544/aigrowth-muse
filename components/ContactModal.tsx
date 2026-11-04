"use client";

import { useEffect, useState } from "react";
import {
  auditBookingHref,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  phoneHref,
  hasPhone,
  hasEmail,
} from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

/**
 * Site-wide contact popup: a floating "Contact us" button, plus any element
 * anywhere with a `data-contact-open` attribute opens the same modal
 * (event delegation — server components can carry the attribute freely).
 */
export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", comments: "" });

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-contact-open]");
      if (target) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [ open ]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus(data.error === "not_configured" ? "fallback" : "error");
      }
    } catch {
      setStatus("error");
    }
  };

  const mailtoHref =
    hasEmail &&
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Website message from " + (form.name || "a visitor"),
    )}&body=${encodeURIComponent(
      `${form.comments}\n\n— ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}`,
    )}`;

  const field =
    "w-full rounded-xl border border-brand-navy/20 bg-white px-4 py-3 text-[15px] font-medium text-brand-navy-deep placeholder:text-brand-navy-deep/40 focus:border-brand-orange focus:outline-none";

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        data-contact-open
        className="fixed right-4 bottom-24 z-40 flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-brand-navy/30 transition hover:bg-brand-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange lg:right-6 lg:bottom-6"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12a8 8 0 0 1-8 8c-1.2 0-2.4-.25-3.4-.7L4 20l.8-3.3A8 8 0 1 1 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        Contact us
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Contact us"
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-brand-navy-deep/60 backdrop-blur-[2px]"
          />
          <div className="hero-rise relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-brand-paper p-6 shadow-2xl sm:rounded-3xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-black text-brand-navy-deep">
                  Send us a message
                </h2>
                <p className="mt-1.5 leading-6 font-medium text-brand-navy-deep/70">
                  Frank reads every message himself and replies personally.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close contact form"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy-deep transition hover:border-brand-orange hover:text-brand-orange"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {status === "sent" ? (
              <div className="mt-6 rounded-2xl bg-brand-cream px-5 py-5">
                <p className="font-display text-xl font-black text-brand-navy-deep">
                  Got it — thank you, {form.name.split(" ")[0] || "friend"}.
                </p>
                <p className="mt-1.5 leading-6 font-medium text-brand-navy-deep/75">
                  Your message is on its way. Expect a personal reply within
                  one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-extrabold text-white transition hover:bg-brand-navy-deep"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    autoComplete="name"
                    className={field}
                  />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Your email"
                    autoComplete="email"
                    className={field}
                  />
                </div>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Your phone (optional)"
                  autoComplete="tel"
                  className={field}
                />
                <textarea
                  required
                  value={form.comments}
                  onChange={(e) => setForm({ ...form, comments: e.target.value })}
                  placeholder="Your comments — what can we help with?"
                  rows={4}
                  className={`${field} resize-none`}
                />
                {/* honeypot — humans never see or fill this */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-brand-orange px-6 py-3.5 text-base font-extrabold text-white shadow-lg shadow-brand-orange/30 transition hover:bg-orange-600 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                {status === "fallback" && (
                  <div className="rounded-2xl bg-brand-amber/20 px-5 py-4 ring-1 ring-brand-amber">
                    <p className="leading-6 font-semibold text-brand-navy-deep">
                      Our form delivery is still being connected — your message
                      isn&apos;t lost, it just needs the direct route:
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {mailtoHref && (
                        <a href={mailtoHref} className="rounded-full bg-brand-navy px-5 py-2.5 text-sm font-extrabold text-white">
                          Email it instead — {CONTACT_EMAIL}
                        </a>
                      )}
                      {hasPhone && (
                        <a href={phoneHref} className="rounded-full border-2 border-brand-navy px-5 py-2.5 text-sm font-extrabold text-brand-navy">
                          Call {CONTACT_PHONE}
                        </a>
                      )}
                      <a href={auditBookingHref} className="rounded-full border-2 border-brand-navy px-5 py-2.5 text-sm font-extrabold text-brand-navy">
                        Or book a call
                      </a>
                    </div>
                  </div>
                )}
                {status === "error" && (
                  <p className="rounded-2xl bg-red-50 px-5 py-3.5 font-semibold text-red-800">
                    Something went wrong sending that. Please try again, or
                    email us at {CONTACT_EMAIL}.
                  </p>
                )}
                <p className="text-center text-xs leading-5 font-medium text-brand-navy-deep/55">
                  Only used to reply to you. Never sold, never spammed.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
