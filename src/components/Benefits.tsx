"use client";

import {
  FileCheck2,
  ShieldCheck,
  Rocket,
  SlidersHorizontal,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { RevealStagger, staggerItem } from "@/components/reveal";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: FileCheck2,
    title: "Eliminates manual what-if analysis",
    body: "Removes the manual what-if analysis and paper trail, significantly reducing reporting inefficiencies tied to the survey process.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate, validated results",
    body: "Integrated business rules and data validation ensure every output is accurate, consistent, and defensible.",
  },
  {
    icon: Rocket,
    title: "Fast-track AI deployment",
    body: "Built-in data integration from various sources accelerates AI capabilities with minimum investment.",
  },
  {
    icon: SlidersHorizontal,
    title: "A one-to-one experience",
    body: "Customizable to meet your institution's individual needs and wants — from templates to workflows.",
  },
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Tangible Benefits"
          title={
            <>
              Outcomes you can <span className="text-gradient">defend</span>
            </>
          }
          description="AI-eSpace is a cost-effective, prebuilt, and easy-to-deploy AI tool with customizable user templates for dashboards and reporting — plus an agentic Space Studies chatbot."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              className="card-hover flex gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-7"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary">
                <b.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
