"use client";

import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  Cloud,
  HeartPulse,
  Workflow,
  BarChart3,
  FlaskConical,
  ShieldCheck,
  Check,
  Sparkles,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { RevealStagger, staggerItem, Reveal } from "@/components/reveal";

const practices = [
  {
    id: "oracle",
    icon: Database,
    title: "Oracle PeopleSoft / EBS",
    subtitle: "ERP, HCM & SCM system integration",
    description:
      "Milletech was conceived to provide Oracle Cloud system integration services in the ERP world, delivering statement-of-work based services for over a decade.",
    features: [
      "Enterprise Resource Planning (ERP)",
      "Human Capital Management (HCM)",
      "Supply Chain Management (SCM)",
      "Deployment, configuration & fit-gap analysis",
      "Application development & production support",
    ],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "Artificial Intelligence Solutions",
    subtitle: "Pega AI for healthcare, higher ed & public sector",
    description:
      "AI-based solutions for Banking, Healthcare, Public Sector, and Higher Education, built on the Pega AI platform.",
    features: [
      "Automate & optimize case management for smarter revenue cycles",
      "Streamline billing and revenue with enhanced reconciliation",
      "Smart customer on-boarding cycles",
      "AI Companions & Compliance for Space Studies, Cost Transfers & Retro payroll",
    ],
    highlight:
      "AI Companions & Compliance for the public sector — including AI-eSpace for Space Studies.",
  },
  {
    id: "oracle-cloud",
    icon: Cloud,
    title: "Oracle Cloud Technology",
    subtitle: "Healthcare & large hospitals",
    description:
      "Deployment, migration, and integration services across HCM & Talent Management Cloud and Financial Cloud.",
    features: [
      "Project Portfolio Management",
      "Revenue & Billing Management",
      "Configuration, integration & user access security",
      "Data conversion & custom integrations (Oracle Cloud Integration Services)",
      "Reporting — Business Analytics, SmartView & Accounting Hub",
    ],
  },
  {
    id: "revenue",
    icon: HeartPulse,
    title: "Patient Revenue Management & AI for Patient Billing",
    subtitle: "Business process outsourcing + AI",
    description:
      "Extensive services in patient revenue and patient billing management, from front-end access to collections.",
    features: [
      "Patient access & front-end services, scheduling & prior authorization",
      "Real-time insurance eligibility, coverage & benefits",
      "Charge entries with compliance & billing-code validation",
      "Payment posting (manual & ACH), denial management & A/R follow-up",
      "Patient billing, collections & financial assistance programs",
    ],
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "AI Business Process Workflow",
    subtitle: "Healthcare & hospitals",
    description:
      "AI-driven business process workflows with intelligent scheduling and patient interaction management.",
    features: [
      "AI business process workflow for healthcare",
      "AI scheduling management",
      "Patient interaction management",
    ],
  },
  {
    id: "bi",
    icon: BarChart3,
    title: "Business Intelligence Practice",
    subtitle: "Healthcare data & analytics",
    description:
      "In-house BI resources with domain knowledge to deliver accurate and powerful insights into operations and finances.",
    features: [
      "Planning, ETL design & development",
      "Reporting analysis, dashboards & data source integration",
      "Warehouses, hierarchies, snapshots, aggregates & dimensions",
      "Row-level security, level-based measures & aggregate navigation",
      "Change Data Capture & Slowly Changing Dimensions",
      "Oracle OBIEE, Tableau & Power BI",
    ],
  },
  {
    id: "data-science",
    icon: FlaskConical,
    title: "Data Science, ML & Predictive Analytics",
    subtitle: "Trustworthy models from the right data",
    description:
      "A strong pool of data science professionals skilled in large-scale analysis, data mining, and programming across the full data science life cycle.",
    features: [
      "Large-scale data analysis & data mining",
      "Hadoop & Spark storage and processing platforms",
      "Data preparation for trustworthy models",
      "Predictive analytics & machine learning",
    ],
  },
  {
    id: "lockthreat",
    icon: ShieldCheck,
    title: "Lock Threat Governance & Compliance",
    subtitle: "GRC for government, healthcare & universities",
    description:
      "Technology and system integration partner for Lock Threat Governance and Compliance monitoring solutions.",
    features: [
      "AI-driven Governance, Risk & Compliance (GRC) optimization",
      "Automated GRC processes in minutes",
      "Configurable workflows with drag-and-drop & workflow variables",
      "Faster time-to-value for compliance programs",
    ],
  },
];

export function ServicesList() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Practice"
          title={
            <>
              Solutions for the{" "}
              <span className="text-gradient">enterprise segment</span>
            </>
          }
          description="From Oracle systems and AI to healthcare revenue management, business intelligence, and data science — Milletech delivers end-to-end business solutions."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {practices.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted transition-colors hover:border-primary/40 hover:text-white"
            >
              {p.title}
            </a>
          ))}
        </Reveal>

        <div className="mt-16 flex flex-col gap-6">
          {practices.map((p, i) => (
            <ServiceCard key={p.id} practice={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({
  practice,
  index,
}: {
  practice: (typeof practices)[number];
  index: number;
}) {
  const Icon = practice.icon;
  return (
    <Reveal delay={0}>
      <div
        id={practice.id}
        className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02]"
      >
        <div
          className={`grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
            index % 2 === 1 ? "lg:grid-flow-dense" : ""
          }`}
        >
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/20 text-secondary">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">
              {practice.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-secondary">
              {practice.subtitle}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {practice.description}
            </p>
            {practice.highlight ? (
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/10 p-4">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <p className="text-sm text-indigo-100">{practice.highlight}</p>
              </div>
            ) : null}
          </div>

          <RevealStagger className="grid gap-3 sm:grid-cols-2">
            {practice.features.map((f) => (
              <motion.div
                key={f}
                variants={staggerItem}
                className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span className="text-sm leading-snug text-foreground/90">
                  {f}
                </span>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </div>
    </Reveal>
  );
}
