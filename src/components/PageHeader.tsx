"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="bg-grid absolute inset-0 -z-20" />
      <div className="bg-glow absolute inset-0 -z-10" />
      <Container className="relative">
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-indigo-200">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

export function BackLink({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Link>
  );
}
