import { NextResponse } from "next/server";

// Lead capture endpoint for the contact form.
//
// TODO (client decision): plug in an email/CRM provider where marked below.
//   Option A — Web3Forms: set WEB3FORMS_ACCESS_KEY in .env and uncomment the block.
//   Option B — Resend:    set RESEND_API_KEY + install `resend`, then send from here.
// Until a provider is wired, submissions are validated and logged server-side so
// the form already works end-to-end (no lead silently lost in the browser).

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
    return NextResponse.json({ ok: true }); // silently accept, ignore bot
  }

  // Server-side validation (never trust the client).
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

  // --- WIRE A PROVIDER HERE -------------------------------------------------
  // Example (Web3Forms):
  // const key = process.env.WEB3FORMS_ACCESS_KEY;
  // if (key) {
  //   await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ access_key: key, subject: `New lead: ${data.intent}`, ...data }),
  //   });
  // }
  // -------------------------------------------------------------------------

  // Fallback so leads are never lost during development / pre-provider.
  console.log("[contact] new lead:", {
    name: data.name,
    lab: data.lab,
    role: data.role,
    intent: data.intent,
    city: data.city,
    phone: data.phone,
    email: data.email,
    message: data.message ?? "",
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
