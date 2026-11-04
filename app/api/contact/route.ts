import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Mirrors the prompt-pack pattern: delivery runs
 * through Resend when RESEND_API_KEY + LEAD_NOTIFY_EMAIL are set in the
 * project's environment; until then it answers `not_configured` and the
 * form offers the direct routes (email / call / book) instead — an honest
 * fallback, never a silent black hole.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: a filled "company" field means a bot — accept silently.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.comments === "string" ? body.comments.trim() : "";

  if (name.length < 1 || name.length > 120 || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }
  if (phone.length > 30 || message.length < 3 || message.length > 4000) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.LEAD_NOTIFY_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !notifyEmail) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail && fromEmail.length > 0 ? fromEmail : "Build AI From Here <onboarding@resend.dev>",
        to: [notifyEmail],
        reply_to: email,
        subject: `Website message from ${name}`,
        text: `New message from the Build AI From Here website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\nComments:\n${message}\n`,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
