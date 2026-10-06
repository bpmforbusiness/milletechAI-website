"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  active
                    ? "bg-white/5 text-white"
                    : "text-muted hover:text-white",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-white px-4.5 py-2 text-sm font-medium text-background transition hover:bg-indigo-100"
          >
            Request a Demo
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/5 bg-background/95 px-5 pb-6 pt-3 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-medium text-background"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
