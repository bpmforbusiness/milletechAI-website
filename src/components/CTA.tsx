import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/20 via-[#0a0d1f] to-secondary/15 p-8 sm:p-14">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to modernize your space studies?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-indigo-100/80">
                  Deploy an agentic AI companion that eliminates manual
                  what-if analysis and gives you defensible, audit-ready
                  results — fast.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:sales@milletechinc.com?subject=AI-eSpace%20Demo%20Request"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-indigo-100"
                  >
                    <Mail className="h-4 w-4" />
                    sales@milletechinc.com
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="tel:+17706190095"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    770-619-0095
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div className="text-sm text-indigo-100/85">
                    <p className="font-semibold text-white">
                      Milletech Systems Inc.
                    </p>
                    <p className="mt-1 leading-relaxed">
                      11539 Park Woods Circle, Suite 201
                      <br />
                      Alpharetta, GA 30005
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div className="text-sm text-indigo-100/85">
                    <p className="font-semibold text-white">Office</p>
                    <p className="mt-1">
                      Tel: 770-619-0095 · Fax: 770-619-2890
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
