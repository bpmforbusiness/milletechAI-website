"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, Phone, MapPin, Globe, Printer } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const interests = [
  "AI-eSpace (Space Studies)",
  "Oracle PeopleSoft / EBS",
  "Oracle Cloud Technology",
  "Artificial Intelligence Solutions",
  "Patient Revenue Management",
  "Business Intelligence",
  "Data Science & ML",
  "Lock Threat Governance & Compliance",
  "Other",
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Office",
    value: "11539 Park Woods Circle, Suite 201, Alpharetta, GA 30005",
  },
  { icon: Phone, label: "Phone", value: "770-619-0095" },
  { icon: Printer, label: "Fax", value: "770-619-2890" },
  { icon: Mail, label: "Email", value: "sales@milletechinc.com" },
  {
    icon: Globe,
    label: "Web",
    value: "milletechai.com · milletechinc.com",
  },
];

export function ContactSection() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-white">
                Get in touch
              </h2>
              <p className="text-muted">
                Reach our team for sales inquiries, demos, or partnership
                opportunities.
              </p>
              <div className="mt-2 flex flex-col gap-3">
                {contactDetails.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide text-muted">
                        {d.label}
                      </div>
                      <div className="mt-0.5 text-sm text-foreground">
                        {d.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    interest: interests[0],
    message: "",
  });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.interest}] Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nInterest: ${form.interest}\n\n${form.message}`,
    );
    window.location.href = `mailto:sales@milletechinc.com?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.05]";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name")(e.target.value)}
            placeholder="Your name"
            className={field}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email")(e.target.value)}
            placeholder="you@institution.edu"
            className={field}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="org" className="text-sm font-medium text-foreground">
            Organization
          </label>
          <input
            id="org"
            value={form.organization}
            onChange={(e) => update("organization")(e.target.value)}
            placeholder="Institution / company"
            className={field}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="interest" className="text-sm font-medium text-foreground">
            Area of interest
          </label>
          <select
            id="interest"
            value={form.interest}
            onChange={(e) => update("interest")(e.target.value)}
            className={field}
          >
            {interests.map((i) => (
              <option key={i} value={i} className="bg-[#0a0d1f]">
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message")(e.target.value)}
          placeholder="Tell us about your project or inquiry…"
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:shadow-primary/50 sm:w-auto"
      >
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        Send Message
      </button>
      <p className="mt-3 text-xs text-muted">
        This opens your email client addressed to sales@milletechinc.com.
      </p>
    </form>
  );
}
