import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Discover", href: "/#discover" },
  { label: "Collaborate", href: "/#collaborate" },
  { label: "Communities", href: "/#communities" },
  { label: "Opportunities", href: "/#opportunities" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-6 md:px-12 2xl:max-w-[1536px] 2xl:px-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-foreground transition-opacity hover:opacity-90"
        >
          Collabbit<span className="text-brand">.</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-2.5">
          {/* Collabbit Pro badge — always visible on sm+ */}
          <a
            href="https://pro.collabbit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-amber/40 bg-amber-soft px-4 py-2 text-xs font-bold text-[oklch(0.48_0.13_70)] transition-all hover:-translate-y-0.5 hover:shadow-sm sm:inline-flex"
          >
            <Briefcase className="h-3.5 w-3.5" />
            Collabbit Pro
          </a>

          {/* Get Started */}
          <a
            href="/#join"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <a
                href="https://pro.collabbit.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber-soft px-4 py-2.5 text-sm font-bold text-[oklch(0.48_0.13_70)]"
              >
                <Briefcase className="h-4 w-4" />
                Collabbit Pro — For Professionals
              </a>
              <a
                href="/#join"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
