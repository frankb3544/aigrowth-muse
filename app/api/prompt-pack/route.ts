import { NextResponse } from "next/server";
import { promptPack } from "@/lib/data";

/**
 * Prompt-pack email capture (Phase 3 lead magnet, Resend-delivered).
 * Env-configured, same pattern as the Stripe link: while RESEND_API_KEY
 * or LEAD_NOTIFY_EMAIL is unset, the endpoint answers "not_configured"
 * and the form falls back honestly — the pack stays readable on the page.
 * The lead's only CRM record in v1 is the notification email itself.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function packAsText(): string {
  const lines: string[] = [
    "Your Build AI From Here starter prompt pack",
    "Copy a prompt, swap the [bracketed] parts, paste it into any AI chat.",
    "",
  ];
  for (const item of promptPack) {
    lines.push(`— ${item.track}: ${item.title} —`);
    lines.push(item.prompt);
    lines.push(`Tip: ${item.tip}`);
    lines.push("");
  }
  lines.push(
    "The full library (and a pack personalised to your path) lives in the community: https://skool.com/build-ai-from-here-5063",
  );
  return lines.join("\n");
}

async function sendEmail(args: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  text: string;
}): Promise<boolean> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${args.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: args.from,
      to: [args.to],
      subject: args.subject,
      text: args.text,
    }),
  });
  return res.ok;
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = (body.email ?? "").trim();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY ?? "";
  const notify = process.env.LEAD_NOTIFY_EMAIL ?? "";
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Build AI From Here <onboarding@resend.dev>";

  if (!apiKey || !notify) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const sentToLead = await sendEmail({
      apiKey,
      from,
      to: email,
      subject: "Your starter prompt pack — Build AI From Here",
      text: packAsText(),
    });
    if (!sentToLead) {
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    // Lead record: notification to the owner. A failure here must not
    // fail the visitor's request — the pack already reached them.
    await sendEmail({
      apiKey,
      from,
      to: notify,
      subject: `New prompt-pack lead: ${email}`,
      text: `A new lead asked for the starter prompt pack by email.\n\nEmail: ${email}\nSource: /prompt-pack form\nTime: ${new Date().toISOString()}`,
    }).catch(() => undefined);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
