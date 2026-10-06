"use client";

import { motion } from "framer-motion";
import { Building2, Users, Globe2, Award } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { RevealStagger, staggerItem } from "@/components/reveal";

const stats = [
  { icon: Award, value: "18+", label: "Years of delivery" },
  { icon: Users, value: "W/M", label: "Woman & Minority owned" },
  { icon: Globe2, value: "Global", label: "Delivery center in India" },
  { icon: Building2, value: "Enterprise", label: "Software & services" },
];

export function AboutOverview() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title={
              <>
                An enterprise software partner,{" "}
                <span className="text-gradient">built for the long run</span>
              </>
            }
            description="Milletech Systems, Inc. is an 18-year-old Woman and Minority owned software development and solutions company with a global software development and delivery center in India."
          />
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted">
            <p>
              Milletech is an enterprise software solutions and services
              company, providing state-of-the-art development, customization,
              and integration services for the enterprise segment. We
              collaborate with our customers to help them realize their
              business objectives and create tangible value.
            </p>
            <p>
              Leveraging deep industry experience, broad technical expertise,
              global resources, and a proven track record, Milletech mobilizes
              the right people, skills, alliances, and technologies to deliver
              measurable benefits.
            </p>
          </div>
        </div>

        <RevealStagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="card-hover rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary">
                <s.icon className="h-6 w-6" />
              </span>
              <div className="mt-4 font-display text-2xl font-semibold text-white">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
