import { Database, Building2, HandCoins, Boxes } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

const sources = [
  { icon: Database, label: "Legacy Space Studies Data" },
  { icon: Building2, label: "Facility Management" },
  { icon: HandCoins, label: "Grants Management (Pre & Post Award)" },
  { icon: Boxes, label: "ERP & Other Applications" },
];

export function Integrations() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.015] py-12">
      <Container>
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-widest text-muted">
            Integrates with your existing data sources
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {sources.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-secondary">
                  <s.icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
