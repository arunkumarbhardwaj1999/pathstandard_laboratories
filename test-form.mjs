// Simulates a real contact-form submission and sends BOTH emails (admin + auto-reply)
// to a demo address so you can see exactly what each one looks like.
// Run:  node test-form.mjs arunkumarbhardwaj1999@gmail.com

import fs from "node:fs";
import nodemailer from "nodemailer";

const env = {};
const envFile = fs.existsSync(".env.local") ? ".env.local" : ".env.example";
for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
  if (line.trim().startsWith("#")) continue;
  const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
  if (m) env[m[1]] = m[2];
}
const demoTo = process.argv[2] || env.SMTP_USER;
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM } = env;
const port = Number(SMTP_PORT) || 465;

// --- sample data, as if a lab filled the form ---
const data = {
  name: "Dr. Arun Kumar",
  email: demoTo,
  phone: "+91 98765 43210",
  lab: "Apollo Diagnostics",
  role: "Lab Owner / Director",
  city: "Hyderabad, Telangana",
  intent: "Demo",
  message: "Interested in serialized slides for our NABL-accredited lab.",
};

const safe = (v) => (v && `${v}`.trim() ? v : "—");
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

const transporter = nodemailer.createTransport({
  host: SMTP_HOST, port, secure: port === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});
const from = MAIL_FROM || `PathStandard <${SMTP_USER}>`;

console.log(`Sending both demo emails to ${demoTo} ...`);
// 1) what the ADMIN (hello@ / Iftekhar) receives
await transporter.sendMail({
  from, to: demoTo, replyTo: data.email,
  subject: `[ADMIN COPY] New PathStandard lead: ${data.intent} — ${data.name}`,
  html: adminHtml,
});
console.log("✅ Sent: ADMIN lead-notification email");
// 2) what the VISITOR (user) receives
await transporter.sendMail({
  from, to: demoTo,
  subject: "We've received your request — PathStandard Technologies",
  html: replyHtml,
});
console.log("✅ Sent: VISITOR auto-reply email");
console.log(`📩 Check ${demoTo} — you'll see 2 emails.`);
