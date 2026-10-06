import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function CTABand({
  title = "Ready to get started?",
  description = "Partner with Milletech to deliver measurable benefits across your enterprise.",
  primaryLabel = "Request a Demo",
  primaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/20 via-[#0a0d1f] to-secondary/15 p-8 text-center sm:p-14">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-indigo-100/80">
                {description}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={primaryHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-indigo-100"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
