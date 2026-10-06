"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  LayoutDashboard,
  LineChart,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="bg-grid absolute inset-0 -z-20" />
      <div className="bg-glow absolute inset-0 -z-10" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-indigo-200">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                By Milletech Systems Inc.
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              The AI Companion for{" "}
              <span className="text-gradient">Space Studies</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Agentic, intelligent answers and reports that combine data from
              across your legacy systems, grants management, and facility
              management — with minimum investment and fast deployment.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:shadow-primary/50"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Capabilities
              </a>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
            >
              {[
                "Audit-ready results",
                "No manual what-if analysis",
                "Built-in data validation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-secondary/10 blur-2xl" />
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0a0d1f]/90 p-4 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-white/5 pb-3">
        <span className="h-3 w-3 rounded-full bg-rose-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-2 text-xs font-medium text-muted">
          eSpace AI Dashboard
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 py-4">
        {[
          { label: "Total Assignable Sq Ft", value: "1.24M", icon: LayoutDashboard },
          { label: "Utilization Rate", value: "78.4%", icon: LineChart },
          { label: "Rooms w/o Activity", value: "142", icon: FileText },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
          >
            <m.icon className="h-4 w-4 text-secondary" />
            <div className="mt-2 font-display text-xl font-semibold text-white">
              {m.value}
            </div>
            <div className="mt-0.5 text-[11px] leading-tight text-muted">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
        <div className="mb-2 flex items-center justify-between text-[11px] text-muted">
          <span>Space allocation by department</span>
          <span className="text-secondary">Live</span>
        </div>
        <div className="flex h-24 items-end gap-2">
          {[40, 65, 50, 80, 60, 95, 70, 55, 85, 75].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-secondary/70" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 p-3">
        <Bot className="h-4 w-4 shrink-0 text-secondary" />
        <p className="text-xs leading-snug text-indigo-100">
          <span className="font-semibold text-white">Agentic Chat:</span>{" "}
          Show rooms with no sponsored activity in the College of Engineering.
        </p>
      </div>
    </div>
  );
}
