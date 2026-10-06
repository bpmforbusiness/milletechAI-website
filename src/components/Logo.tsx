"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  const id = useId();
  const grad = `espace-grad-${id}`;

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={grad} x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b7cff" />
          <stop offset="55%" stopColor="#6d5cff" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* Orbit ring */}
      <g transform="rotate(-28 20 20)">
        <circle
          cx="20"
          cy="20"
          r="15.5"
          stroke={`url(#${grad})`}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="78 24"
          opacity="0.9"
        />
        {/* Satellite node on the orbit */}
        <circle cx="20" cy="4.5" r="2.7" fill="#22d3ee" />
        <circle cx="20" cy="4.5" r="4.2" fill="#22d3ee" opacity="0.25" />
      </g>

      {/* AI core */}
      <circle cx="20" cy="20" r="9" fill={`url(#${grad})`} />
      <circle cx="17.4" cy="17" r="3.2" fill="#ffffff" opacity="0.3" />
    </svg>
  );
}

export function Logo({
  className,
  wordmark = "AI-eSpace",
}: {
  className?: string;
  wordmark?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-lg font-semibold tracking-tight text-white">
        {wordmark}
      </span>
    </span>
  );
}
