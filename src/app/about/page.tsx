import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AboutOverview } from "@/components/about/AboutOverview";
import { TechnologyPractice } from "@/components/about/TechnologyPractice";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About — Milletech Systems Inc.",
  description:
    "Milletech Systems Inc. is an 18-year-old Woman and Minority owned software development and solutions company with a global delivery center in India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Corporate Profile"
        title={
          <>
            Enterprise software,{" "}
            <span className="text-gradient">global delivery</span>
          </>
        }
        description="Development, customization, and integration services for the enterprise segment — delivered with deep industry experience and a proven global delivery model."
      />
      <AboutOverview />
      <TechnologyPractice />
      <CTABand
        title="Let's build something measurable"
        description="Partner with Milletech to realize your business objectives and create tangible value across your enterprise."
      />
    </>
  );
}
