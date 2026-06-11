"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { roleOptions, intentOptions } from "@/lib/content";

function scrollToForm() {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [intent, setIntent] = useState("Demo");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const intentParam = params.get("intent");
    if (intentParam && intentOptions.includes(intentParam)) {
      setIntent(intentParam);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send your request. Please email hello@pathstandard.com."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-padding bg-ps-navy text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Get Started"
              title="Start with one box. See the value yourself."
              description="Request a sample box of PathStandard slides. Scan the barcode. Download a quality certificate (CoA) in under 10 seconds."
              dark
            />

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="primary"
                onClick={() => {
                  setIntent("Demo");
                  scrollToForm();
                }}
              >
                Request a Demo →
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIntent("Sample Box");
                  scrollToForm();
                }}
              >
                Request a Sample Box
              </Button>
            </div>

            <p className="mt-8 text-sm text-ps-slate-400">
              Made in India · ISO 13485 aligned · Singapore HQ · CDSCO Class A IVD
            </p>
          </div>

          <div id="contact-form" className="rounded-xl border border-ps-slate-700 bg-ps-navy-light p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
                <p className="mt-2 text-sm text-ps-slate-400">
                  We&apos;ll be in touch shortly. For immediate inquiries, email{" "}
                  <a href="mailto:hello@pathstandard.com" className="text-white underline hover:text-ps-slate-200">
                    hello@pathstandard.com
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Us</h3>

                {/* Honeypot — hidden from real users, catches bots */}
                <div className="absolute left-[-9999px]" aria-hidden>
                  <label htmlFor="company">Company (leave blank)</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      Full Name *
                    </label>
                    <input id="name" name="name" required className="form-input-dark" placeholder="Dr. Rajesh Kumar" />
                  </div>
                  <div>
                    <label htmlFor="lab" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      Lab / Hospital Name *
                    </label>
                    <input id="lab" name="lab" required className="form-input-dark" placeholder="Apollo Diagnostics" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="role" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      Your Role *
                    </label>
                    <select id="role" name="role" required className="form-input-dark">
                      <option value="">Select role</option>
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="intent" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      What are you looking for? *
                    </label>
                    <select
                      id="intent"
                      name="intent"
                      required
                      value={intent}
                      onChange={(e) => setIntent(e.target.value)}
                      className="form-input-dark"
                    >
                      {intentOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      City & State *
                    </label>
                    <input id="city" name="city" required className="form-input-dark" placeholder="Hyderabad, Telangana" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      Phone Number *
                    </label>
                    <input id="phone" name="phone" type="tel" required className="form-input-dark" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-medium text-ps-slate-400">
                    Email Address *
                  </label>
                  <input id="email" name="email" type="email" required className="form-input-dark" placeholder="you@lab.com" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-xs font-medium text-ps-slate-400">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="form-input-dark resize-none"
                    placeholder="Tell us about your lab's needs..."
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200"
                  >
                    {error}
                  </p>
                )}

                <Button type="submit" variant="primary" className="w-full" disabled={loading}>
                  {loading
                    ? "Sending..."
                    : intent === "Sample Box"
                    ? "Request a Sample Box"
                    : intent === "Demo"
                    ? "Request a Demo"
                    : "Submit Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
