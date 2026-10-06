import {
  Bot,
  LayoutDashboard,
  FileText,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const products = [
  {
    icon: Bot,
    name: "eSpace Chat Bot",
    tagline: "Dynamic replies to complex queries",
    description:
      "A powerful AI chatbot for space studies queries with automated data analysis and agentic chat.",
    features: [
      "Automated data analysis",
      "Powerful AI for space studies queries",
      "Dynamic replies with Agentic Chat",
      "Interprets facilities, allocations, grants, departments & PIs",
    ],
    accent: "from-secondary/20 to-primary/10",
  },
  {
    icon: LayoutDashboard,
    name: "eSpace AI Dashboard",
    tagline: "A complete overview at a glance",
    description:
      "A space studies dashboard that highlights the most important metrics for executive decision support.",
    features: [
      "Space studies overview",
      "Summary of space allocations",
      "Key metrics, charts & status indicators",
      "Highlights the most important metrics",
    ],
    accent: "from-primary/20 to-secondary/10",
  },
  {
    icon: FileText,
    name: "AI Smart Reporting",
    tagline: "Narrative-driven insights",
    description:
      "AI reporting automates data analysis, visualization, and narrative generation for faster, more insightful reports.",
    features: [
      "Automates analysis & visualization",
      "Narrative generation with minimal effort",
      "Enhances traditional reporting tasks",
      "Fast deployment with customizable templates",
    ],
    accent: "from-indigo-500/20 to-cyan-400/10",
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="relative border-y border-white/5 bg-white/[0.015] py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="The Platform"
          title={
            <>
              One platform, <span className="text-gradient">three products</span>
            </>
          }
          description="Chat, dashboards, and smart reporting — built on a standalone AI infrastructure that works with your existing systems."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="card-hover group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-7">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white`}
                >
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-secondary">
                  {p.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-white/5 pt-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-secondary"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
