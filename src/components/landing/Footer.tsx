import { Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Discover", href: "/#discover" },
      { label: "Collaborate", href: "/#collaborate" },
      { label: "Communities", href: "/#communities" },
      { label: "Opportunities", href: "/#opportunities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Collabbit", href: "/about" },
      { label: "How it works", href: "/#lifecycle" },
      { label: "Builders", href: "/#builders" },
      { label: "Get started", href: "/#join" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/term-condition" },
      { label: "Delete Account", href: "/account/delete" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:px-12 2xl:max-w-[1536px] 2xl:px-20">
        <div>
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tight text-foreground transition-opacity hover:opacity-90"
          >
            Collabbit<span className="text-brand">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            The student network for finding teammates, projects, communities, and opportunities.
          </p>
          <a
            href="https://pro.collabbit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber-soft px-4 py-2 text-xs font-bold text-[oklch(0.48_0.13_70)] transition-all hover:-translate-y-0.5 hover:shadow-sm"
          >
            <Briefcase className="h-3.5 w-3.5" />
            Collabbit Pro
            <span className="rounded-full bg-amber/20 px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider">
              For Professionals
            </span>
          </a>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <p className="eyebrow text-muted-foreground">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/") && !l.href.includes("#") ? (
                    <Link
                      to={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-border/70 px-6 pt-6 md:px-12 2xl:max-w-[1536px] 2xl:px-20">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Collabbit. Built for students. Made in India 🇮🇳
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://pro.collabbit.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[oklch(0.48_0.13_70)] transition-opacity hover:opacity-80"
          >
            <Briefcase className="h-3 w-3" />
            Collabbit Pro
          </a>
          <Link
            to="/privacy"
            className="font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            to="/term-condition"
            className="font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
