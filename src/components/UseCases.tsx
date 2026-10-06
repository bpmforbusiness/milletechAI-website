"use client";

import {
  GraduationCap,
  Building2,
  FlaskConical,
  Landmark,
  ArrowLeftRight,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal, RevealStagger, staggerItem } from "@/components/reveal";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: GraduationCap,
    title: "Research Administration",
    body: "Defensible space usage data that stands up to federal agency scrutiny.",
  },
  {
    icon: Building2,
    title: "Facilities Management",
    body: "Align room allocations and transfers with actual functional usage.",
  },
  {
    icon: FlaskConical,
    title: "Sponsored Programs",
    body: "Track rooms with no sponsored activity and model what-if scenarios.",
  },
  {
    icon: Landmark,
    title: "Finance & F&A Recovery",
    body: "Protect F&A cost recoveries with accurate, audit-ready allocations.",
  },
];

export function UseCases() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Decision Support"
              title={
                <>
                  From survey burden to{" "}
                  <span className="text-gradient">what-if clarity</span>
                </>
              }
              description="Model reallocations and room transfers before you commit. AI-eSpace turns tedious, manual what-if analysis into instant, defensible scenarios."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-secondary">
                  <ArrowLeftRight className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    What-if scenarios built in
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Room transfers, resource changes, and space reallocations —
                    evaluated with integrated business rules and data
                    validation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-5 sm:grid-cols-2">
            {audiences.map((a) => (
              <motion.div
                key={a.title}
                variants={staggerItem}
                className="card-hover rounded-2xl border border-white/5 bg-white/[0.02] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-secondary">
                  <a.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {a.body}
                </p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  );
}
