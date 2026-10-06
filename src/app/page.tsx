import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Problem } from "@/components/Problem";
import { Benefits } from "@/components/Benefits";
import { Capabilities } from "@/components/Capabilities";
import { Products } from "@/components/Products";
import { UseCases } from "@/components/UseCases";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Navbar />
      <Hero />
      <Integrations />
      <Problem />
      <Benefits />
      <Capabilities />
      <Products />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
