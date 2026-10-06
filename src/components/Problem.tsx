"use client";

import {
  AlertTriangle,
  ClipboardList,
  FileSpreadsheet,
  ShieldAlert,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { RevealStagger, staggerItem } from "@/components/reveal";
import { motion } from "framer-motion";

const pains = [
  {
    icon: ClipboardList,
    title: "Resource-intensive surveys",
    body: "Conducting a space functional usage survey is a burdensome task for both the research community and central administration.",
  },
  {
    icon: FileSpreadsheet,
    title: "Manual, error-prone analysis",
    body: "Analytics built on spreadsheets and rudimentary databases require laborious manual calculations and reviews.",
  },
  {
    icon: AlertTriangle,
    title: "Inaccurate & indefensible decisions",
    body: "Executive decisions on space requirements, forecasting, and what-if analysis are often inaccurate when scrutinized.",
  },
  {
    icon: ShieldAlert,
    title: "Disallowances & sanctions",
    body: "Institutions face administrative sanctions and reductions in F&A cost recoveries under close examination.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Challenge"
          title={
            <>
              Space studies are critical —{" "}
              <span className="text-gradient">and painfully manual</span>
            </>
          }
          description="Space functional usage statistics drive the allocation of building depreciation, equipment depreciation, interest expense, and operations & maintenance costs. Yet the survey process today is resource-intensive and risky."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="card-hover rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/10 text-rose-300">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
