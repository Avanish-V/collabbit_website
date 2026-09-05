import { ArrowRight, Briefcase, Check, FolderGit2, Radio } from "lucide-react";
import { Section } from "./shared";

const cols = [
  {
    kicker: "Internships",
    icon: Briefcase,
    tone: "bg-amber-soft text-[oklch(0.55_0.13_70)]",
    title: "Opportunities that fit your skills",
    body: "Discover opportunities relevant to your skills and interests.",
    points: [
      "Early-stage startup roles",
      "Verified stipends, no ghost listings",
      "Remote-friendly & semester-aware",
    ],
    cta: "Explore internships",
  },
  {
    kicker: "Live Sessions",
    icon: Radio,
    tone: "bg-rose-soft text-rose",
    title: "Learn from people who ship",
    body: "Learn directly from developers, professionals, and industry experts.",
    points: ["Weekend hack teardowns", "AMAs with senior engineers", "Live portfolio critiques"],
    cta: "Explore live sessions",
  },
  {
    kicker: "Projects",
    icon: FolderGit2,
    tone: "bg-brand-soft text-brand",
    title: "Experience beyond your resume",
    body: "Work on real projects and build experience beyond your resume.",
    points: ["Open-source bounties", "Sponsored client briefs", "Public launch showcases"],
    cta: "Explore projects",
  },
];

export function Launchpad() {
  return (
    <Section
      id="opportunities"
      index="06"
      label="Launchpad"
      title="Turn your skills into opportunities."
      className="bg-surface"
    >
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {cols.map((c) => (
          <div
            key={c.kicker}
            className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.tone}`}>
                <c.icon className="h-5 w-5" />
              </span>
              <span className="eyebrow text-muted-foreground">{c.kicker}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-grass" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#join"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              {c.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
