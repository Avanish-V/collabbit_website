import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Discover", href: "#discover" },
  { label: "Collaborate", href: "#collaborate" },
  { label: "Communities", href: "#communities" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Live Sessions", href: "#opportunities" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="text-xl font-extrabold tracking-tight text-foreground">
          Collabbit<span className="text-brand">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="flex items-center gap-2">
          <a
            href="#join"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
