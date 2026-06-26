// Quick test: does the Hostinger mailbox send email?
// 1) Fill .env.local with SMTP_* values (see .env.example)
// 2) Run:  node test-email.mjs
// 3) Check the hello@pathstandard.in inbox — if the test mail arrives, it works.

import fs from "node:fs";
import nodemailer from "nodemailer";

// --- load env from .env.local (preferred) or .env.example (fallback) ---
const env = {};
const envFile = fs.existsSync(".env.local") ? ".env.local" : ".env.example";
try {
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    if (line.trim().startsWith("#")) continue;
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2];
  }
  console.log(`→ Using ${envFile}`);
} catch {
  console.error("❌ No .env.local or .env.example found.");
  process.exit(1);
}

// Send the test to an address passed on the command line, else LEAD_TO.
const testTo = process.argv[2];

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, LEAD_TO } = env;
if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.error("❌ Missing SMTP_HOST / SMTP_USER / SMTP_PASS in .env.local");
  process.exit(1);
}

const port = Number(SMTP_PORT) || 465;
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port,
  secure: port === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

console.log(`→ Connecting to ${SMTP_HOST}:${port} as ${SMTP_USER} ...`);

try {
  await transporter.verify();
  console.log("✅ SMTP login successful — mailbox credentials are correct.");

  const recipient = testTo || LEAD_TO || SMTP_USER;
  const info = await transporter.sendMail({
    from: MAIL_FROM || `PathStandard <${SMTP_USER}>`,
    to: recipient,
    subject: "✅ PathStandard SMTP test",
    text: "If you can read this, your Hostinger email is wired correctly. 🎉",
  });

  console.log("✅ Test email sent! Message id:", info.messageId);
  console.log(`📩 Check the inbox of: ${recipient}`);
} catch (err) {
  console.error("❌ FAILED:", err.message);
  console.error("\nCommon fixes:");
  console.error(" • Wrong password → reset the mailbox password in Hostinger");
  console.error(" • Port 465 blocked → try SMTP_PORT=587 in .env.local");
  console.error(" • Email not fully provisioned yet → wait a few minutes after creating it");
  process.exit(1);
}
