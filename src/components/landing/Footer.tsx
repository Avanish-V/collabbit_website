const columns = [
  {
    title: "Product",
    links: [
      { label: "Discover", href: "#discover" },
      { label: "Collaborate", href: "#collaborate" },
      { label: "Communities", href: "#communities" },
      { label: "Opportunities", href: "#opportunities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "#lifecycle" },
      { label: "Builders", href: "#builders" },
      { label: "Get started", href: "#join" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-foreground">
            Collabbit<span className="text-brand">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            The student network for finding teammates, projects, communities, and opportunities.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <p className="eyebrow text-muted-foreground">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-border/70 px-5 pt-6 md:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Collabbit. Built for students.
        </p>
        <p className="font-mono text-xs text-muted-foreground">Made in India</p>
      </div>
    </footer>
  );
}
