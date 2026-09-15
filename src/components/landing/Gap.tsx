import { Lightbulb, UsersRound, Rocket } from "lucide-react";
import { Section } from "./shared";

const cards = [
  {
    icon: Lightbulb,
    title: "Have an idea",
    quote: "But don't have the right people to build it with?",
    tone: "bg-amber-soft text-[oklch(0.55_0.13_70)]",
  },
  {
    icon: UsersRound,
    title: "Need a team",
    quote: "Finding developers, designers, and builders shouldn't require endless group chats.",
    tone: "bg-brand-soft text-brand",
  },
  {
    icon: Rocket,
    title: "Want experience",
    quote: "Courses teach you skills. Real projects help you prove them.",
    tone: "bg-grass-soft text-[oklch(0.48_0.12_155)]",
  },
];

export function Gap() {
  return (
    <Section
      index="01"
      label="The Collaboration Gap"
      title="Having the skills isn't enough."
      className="bg-background"
    >
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className={`reveal delay-${(i + 1) * 100} group relative rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1.5`}
          >
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${c.tone}`}
            >
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-xl font-bold text-foreground">{c.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">“{c.quote}”</p>
            <span className="absolute right-6 top-6 font-mono text-xs text-border">0{i + 1}</span>
          </div>
        ))}
      </div>
      <p className="reveal delay-400 mt-10 text-center text-lg font-semibold text-foreground">
        Collabbit connects all three.
      </p>
    </Section>
  );
}
