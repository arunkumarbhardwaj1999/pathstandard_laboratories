"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { roleOptions, intentOptions } from "@/lib/content";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [intent, setIntent] = useState("Demo");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-padding bg-ps-navy text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Get Started"
              title="Start with one box. See the documentation value."
              description="Request a sample box of PathStandard slides. Scan the DataMatrix. Download a Certificate of Analysis in under 10 seconds."
              dark
            />

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact-form" variant="primary">
                Request a Demo →
              </Button>
              <Button
                href="#contact-form"
                variant="outline"
                className="border-ps-slate-600 text-white hover:border-ps-teal-light hover:text-ps-teal-light"
              >
                Request a Sample Box
              </Button>
            </div>

            <p className="mt-8 text-sm text-ps-slate-400">
              Manufactured in India · ISO 13485 aligned · Singapore HoldCo · CDSCO Class A IVD
            </p>
          </div>

          <div id="contact-form" className="rounded-xl border border-ps-slate-700 bg-ps-navy-light p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ps-teal/20 text-ps-teal-light">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
                <p className="mt-2 text-sm text-ps-slate-400">
                  We&apos;ll be in touch shortly. For immediate inquiries, email{" "}
                  <a href="mailto:hello@pathstandard.com" className="text-ps-teal-light hover:underline">
                    hello@pathstandard.com
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Us</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-ps-slate-600 bg-ps-navy px-3 py-2.5 text-sm text-white placeholder:text-ps-slate-500 focus:border-ps-teal focus:outline-none"
                      placeholder="Dr. Rajesh Kumar"
                    />
                  </div>
                  <div>
                    <label htmlFor="lab" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      Lab / Hospital Name *
                    </label>
                    <input
                      id="lab"
                      name="lab"
                      required
                      className="w-full rounded-lg border border-ps-slate-600 bg-ps-navy px-3 py-2.5 text-sm text-white placeholder:text-ps-slate-500 focus:border-ps-teal focus:outline-none"
                      placeholder="Apollo Diagnostics"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="role" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full rounded-lg border border-ps-slate-600 bg-ps-navy px-3 py-2.5 text-sm text-white focus:border-ps-teal focus:outline-none"
                    >
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
                      className="w-full rounded-lg border border-ps-slate-600 bg-ps-navy px-3 py-2.5 text-sm text-white focus:border-ps-teal focus:outline-none"
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
                    <input
                      id="city"
                      name="city"
                      required
                      className="w-full rounded-lg border border-ps-slate-600 bg-ps-navy px-3 py-2.5 text-sm text-white placeholder:text-ps-slate-500 focus:border-ps-teal focus:outline-none"
                      placeholder="Hyderabad, Telangana"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-xs font-medium text-ps-slate-400">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-lg border border-ps-slate-600 bg-ps-navy px-3 py-2.5 text-sm text-white placeholder:text-ps-slate-500 focus:border-ps-teal focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-medium text-ps-slate-400">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-ps-slate-600 bg-ps-navy px-3 py-2.5 text-sm text-white placeholder:text-ps-slate-500 focus:border-ps-teal focus:outline-none"
                    placeholder="you@lab.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-xs font-medium text-ps-slate-400">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-ps-slate-600 bg-ps-navy px-3 py-2.5 text-sm text-white placeholder:text-ps-slate-500 focus:border-ps-teal focus:outline-none resize-none"
                    placeholder="Tell us about your lab's needs..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  {intent === "Sample Box" ? "Request a Sample Box" : intent === "Demo" ? "Request a Demo" : "Submit Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
