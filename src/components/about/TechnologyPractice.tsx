"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { RevealStagger, staggerItem, Reveal } from "@/components/reveal";

const platforms = [
  "Oracle",
  "Microsoft",
  "AWS",
  "Pega-AI",
  "Anthropic Claude AI",
  "Microsoft AI Foundry",
  "ERP Cloud",
  "Oracle OBIEE",
  "Tableau",
  "Power BI",
  "Microsoft Azure",
  "Java",
  ".NET",
];

const differentiators = [
  {
    title: "Quality project management",
    body: "Proven methodology and governance that keep complex, mission-critical programs on track.",
  },
  {
    title: "Deep understanding of business practices",
    body: "Domain expertise across ERP, HCM, SCM, healthcare, and higher education.",
  },
  {
    title: "Technical proficiency",
    body: "Full-stack capability spanning Oracle, Microsoft, AWS, AI, BI, Java, and .NET.",
  },
  {
    title: "Global Delivery Model",
    body: "A sustainable cost-reduction model powered by an onshore/offshore delivery center.",
  },
];

export function TechnologyPractice() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.015] py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Technology Practice"
          title={
            <>
              End-to-end solutions across the{" "}
              <span className="text-gradient">enterprise stack</span>
            </>
          }
          description="Milletech delivers business solutions in Oracle, Microsoft, AWS, Artificial Intelligence, and Business Intelligence technologies."
        />

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          {platforms.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-white"
            >
              {p}
            </span>
          ))}
        </Reveal>

        <RevealStagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d) => (
            <motion.div
              key={d.title}
              variants={staggerItem}
              className="card-hover rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <CheckCircle2 className="h-6 w-6 text-secondary" />
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {d.body}
              </p>
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
