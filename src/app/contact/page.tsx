import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Milletech Systems Inc.",
  description:
    "Contact Milletech Systems Inc. for sales inquiries, AI-eSpace demos, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start a <span className="text-gradient">conversation</span>
          </>
        }
        description="Sales inquiries, demos, and partnership opportunities — our team is ready to help."
      />
      <ContactSection />
    </>
  );
}
