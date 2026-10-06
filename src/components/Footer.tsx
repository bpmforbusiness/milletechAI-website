import Link from "next/link";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Container } from "@/components/ui";
import { Logo } from "@/components/Logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Milletech", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "AI-eSpace", href: "/" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "eSpace Chat Bot", href: "/#products" },
      { label: "eSpace AI Dashboard", href: "/#products" },
      { label: "AI Smart Reporting", href: "/#products" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/30">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The Artificial Intelligence Companion for Space Studies — agentic
              answers and reports that combine your data sources with AI
              infrastructure.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/#") ? (
                      <a
                        href={l.href}
                        className="text-sm text-muted transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-muted transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-white">Milletech Systems Inc.</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>
                  11539 Park Woods Circle, Suite 201
                  <br />
                  Alpharetta, GA 30005
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a href="tel:+17706190095" className="hover:text-white">
                  770-619-0095
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href="mailto:sales@milletechinc.com"
                  className="hover:text-white"
                >
                  sales@milletechinc.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 shrink-0 text-secondary" />
                <span className="flex flex-col">
                  <a href="https://www.milletechai.com" className="hover:text-white">
                    milletechai.com
                  </a>
                  <a href="https://www.milletechinc.com" className="hover:text-white">
                    milletechinc.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Milletech Systems Inc. All rights
            reserved.
          </p>
          <p className="text-xs">
            AI-eSpace is proprietary Intellectual Property Rights © 2025 of
            Milletech Systems Inc.
          </p>
        </div>
      </Container>
    </footer>
  );
}
