import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServicesList } from "@/components/services/ServicesList";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services — Milletech Systems Inc.",
  description:
    "Oracle systems, AI solutions, patient revenue management, business intelligence, data science, and Lock Threat GRC — Milletech's full enterprise practice.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            End-to-end <span className="text-gradient">business solutions</span>
          </>
        }
        description="Oracle, Microsoft, AWS, Artificial Intelligence, and Business Intelligence — delivered on contract or statement-of-work with a global delivery model."
      />
      <ServicesList />
      <CTABand
        title="Find your practice fit"
        description="Tell us your challenge — our team will mobilize the right people, skills, and technologies."
      />
    </>
  );
}
