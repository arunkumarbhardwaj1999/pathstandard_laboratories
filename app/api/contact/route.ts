import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Lead capture endpoint — sends two emails via Hostinger SMTP:
//   1) Admin notification (to LEAD_TO) with the full lead details.
//   2) Auto-reply to the visitor confirming we received their request.
//
// Configure these environment variables (Vercel → Settings → Environment Variables):
//   SMTP_HOST   = smtp.hostinger.com
//   SMTP_PORT   = 465
//   SMTP_USER   = hello@pathstandard.in
//   SMTP_PASS   = <your Hostinger mailbox password>
//   MAIL_FROM   = PathStandard <hello@pathstandard.in>
//   LEAD_TO     = iftekhar@pathstandard.in,hello@pathstandard.in   (comma-separated)

interface ContactPayload {
  name?: string;
  lab?: string;
  role?: string;
  intent?: string;
  city?: string;
  phone?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot — must stay empty
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Bots do.
  if (data.company && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Server-side validation.
  const required: (keyof ContactPayload)[] = ["name", "email", "phone"];
  const missing = required.filter((f) => !data[f] || `${data[f]}`.trim() === "");
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Please fill all required fields: ${missing.join(", ")}.` },
      { status: 422 }
    );
  }
  if (!EMAIL_RE.test(data.email!)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, LEAD_TO } = process.env;

  // If SMTP isn't configured yet, log the lead so nothing is lost.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[contact] new lead (SMTP not configured):", { ...data, at: new Date().toISOString() });
    return NextResponse.json({ ok: true });
  }

  const from = MAIL_FROM || `PathStandard <${SMTP_USER}>`;
  const adminTo = (LEAD_TO || SMTP_USER).split(",").map((s) => s.trim());
  const port = Number(SMTP_PORT) || 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  const safe = (v?: string) => (v && v.trim() ? v : "—");
  const adminHtml = `
    <h2 style="margin:0 0 12px">New website enquiry</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Name</td><td><b>${safe(data.name)}</b></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Email</td><td>${safe(data.email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Phone</td><td>${safe(data.phone)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Lab / Hospital</td><td>${safe(data.lab)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Role</td><td>${safe(data.role)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">City &amp; State</td><td>${safe(data.city)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b">Looking for</td><td>${safe(data.intent)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748b;vertical-align:top">Message</td><td>${safe(data.message)}</td></tr>
    </table>`;

  const replyHtml = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#0f2340;line-height:1.6">
      <p>Hi ${safe(data.name)},</p>
      <p>Thank you for reaching out to <b>PathStandard Technologies</b>. We've received your request and our team will contact you shortly.</p>
      <p>If it's urgent, you can reply to this email or write to us at contact@pathstandard.in.</p>
      <p style="margin-top:20px">Warm regards,<br/>The PathStandard Team<br/>
      <span style="color:#1fa6c9">cert.pathstandard.in</span></p>
    </div>`;

  // Plain-text alternatives — emails with both HTML + text are far less likely
  // to be flagged as spam.
  const adminText =
    `New website enquiry\n\n` +
    `Name: ${safe(data.name)}\n` +
    `Email: ${safe(data.email)}\n` +
    `Phone: ${safe(data.phone)}\n` +
    `Lab / Hospital: ${safe(data.lab)}\n` +
    `Role: ${safe(data.role)}\n` +
    `City & State: ${safe(data.city)}\n` +
    `Looking for: ${safe(data.intent)}\n` +
    `Message: ${safe(data.message)}\n`;
  const replyText =
    `Hi ${safe(data.name)},\n\n` +
    `Thank you for reaching out to PathStandard Technologies. We've received your request and our team will contact you shortly.\n\n` +
    `If it's urgent, reply to this email or write to contact@pathstandard.in.\n\n` +
    `Warm regards,\nThe PathStandard Team\ncert.pathstandard.in`;

  // 1) Notify the admin/team — this is the critical send.
  try {
    await transporter.sendMail({
      from,
      to: adminTo,
      replyTo: data.email,
      subject: `New PathStandard lead: ${data.intent ?? "Enquiry"} — ${data.name}`,
      text: adminText,
      html: adminHtml,
    });
  } catch (err) {
    console.error("[contact] admin email failed:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Could not send your request right now. Please email contact@pathstandard.in." },
      { status: 502 }
    );
  }

  // 2) Auto-reply to the visitor — best-effort, never block lead capture.
  try {
    await transporter.sendMail({
      from,
      to: data.email!,
      replyTo: "contact@pathstandard.in",
      subject: "We've received your request — PathStandard Technologies",
      text: replyText,
      html: replyHtml,
    });
  } catch (err) {
    console.error("[contact] auto-reply failed (non-fatal):", err instanceof Error ? err.message : err);
  }

  return NextResponse.json({ ok: true });
}
