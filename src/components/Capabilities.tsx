"use client";

import {
  GitMerge,
  GitBranch,
  ArrowLeftRight,
  Gauge,
  Radar,
  BrainCircuit,
  Plug,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal, RevealStagger, staggerItem } from "@/components/reveal";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: GitMerge,
    title: "Multiple data source integration",
    body: "Enter information in various levels of detail across legacy space studies data, facility management, and grants management applications.",
  },
  {
    icon: GitBranch,
    title: "What-if scenarios",
    body: "Model room transfers, resources, and hypothetical changes before committing to a decision.",
  },
  {
    icon: ArrowLeftRight,
    title: "Allocation & reallocation analysis",
    body: "Run what-if analysis of space allocations and reallocations with confidence.",
  },
  {
    icon: Gauge,
    title: "Utilization analysis",
    body: "Identify under- and over-space utilization for precise executive decision support.",
  },
  {
    icon: Radar,
    title: "Dynamic reporting",
    body: "Instant reporting on rooms with no sponsored activity — no more stale spreadsheets.",
  },
  {
    icon: BrainCircuit,
    title: "Adaptive AI & machine learning",
    body: "Machine-learning competency that improves answers and recommendations over time.",
  },
  {
    icon: Plug,
    title: "Standalone AI infrastructure",
    body: "Works with any legacy space studies app, grants ERP, or facility management system.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Intelligence Capability"
          title={
            <>
              Intelligence at your{" "}
              <span className="text-gradient">fingertips</span>
            </>
          }
          description="From data integration to what-if analysis and adaptive AI, AI-eSpace gives your team the analytical depth needed for executive decision support."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <motion.div
              key={c.title}
              variants={staggerItem}
              className="card-hover rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-secondary">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            </motion.div>
          ))}

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 to-secondary/10 p-6">
              <p className="font-display text-lg font-semibold text-white">
                Need a custom workflow?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-indigo-100/80">
                AI-eSpace adapts to your institution, not the other way around.
              </p>
            </div>
          </Reveal>
        </RevealStagger>
      </Container>
    </section>
  );
}
