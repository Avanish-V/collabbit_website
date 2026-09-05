import { useState } from "react";
import { Check, Sparkles, X } from "lucide-react";
import riya from "@/assets/riya.jpg";
import kabir from "@/assets/kabir.jpg";
import ananya from "@/assets/ananya.jpg";
import { Chip, Section } from "./shared";

const deck = [
  {
    name: "AI Study Assistant",
    kind: "ACTIVE PROJECT",
    ago: "2d ago",
    body: "We're building an AI-powered study companion for students.",
    tags: ["Android", "Backend", "AI / ML"],
    person: { img: riya, name: "Riya Sharma", role: "Product Lead · Design Guild", count: "3 in" },
  },
  {
    name: "RoboCampus IoT",
    kind: "ACTIVE PROJECT",
    ago: "5h ago",
    body: "Campus-wide sensor network with a live dashboard. Prototype is running.",
    tags: ["Embedded", "React", "Cloud"],
    person: { img: kabir, name: "Kabir Mehta", role: "AI Developer · IIT Bombay", count: "2 in" },
  },
  {
    name: "Campus Food Rescue",
    kind: "ACTIVE PROJECT",
    ago: "1d ago",
    body: "An app that redistributes surplus mess food to students and shelters.",
    tags: ["Flutter", "Maps", "Design"],
    person: { img: ananya, name: "Ananya Sen", role: "Full-Stack · VIT Vellore", count: "4 in" },
  },
];

const bullets = [
  "Skill-complementary matching, not random feeds",
  "Verified student profiles only",
  "Chat opens only on mutual interest",
];

export function Swipe() {
  const [i, setI] = useState(0);
  const card = deck[i % deck.length];
  const next = deck[(i + 1) % deck.length];

  return (
    <Section
      id="collaborate"
      index="03"
      label="Instant Matching"
      title="Your next teammate could be one swipe away."
      intro="Find people with complementary skills and build something neither of you could build alone."
      className="bg-background"
    >
      <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-grass-soft text-[oklch(0.45_0.12_155)]">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-base text-foreground">{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            Try it — hit the buttons →
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-x-6 -top-4 rounded-3xl border border-border bg-surface-2 py-3 text-center text-sm font-semibold text-muted-foreground">
            {next.name}
          </div>
          <div className="relative rounded-3xl border border-border bg-card p-6 shadow-float">
            <div className="flex items-center justify-between">
              <Chip tone="violet">
                <Sparkles className="h-3 w-3" /> {card.kind}
              </Chip>
              <span className="font-mono text-[0.65rem] text-muted-foreground">{card.ago}</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-foreground">{card.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            <p className="eyebrow mt-5 text-muted-foreground">Looking for</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {card.tags.map((t, ti) => (
                <Chip key={t} tone={(["brand", "amber", "rose"] as const)[ti % 3]}>
                  {t}
                </Chip>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <img
                src={card.person.img}
                alt={card.person.name}
                width={512}
                height={512}
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-foreground">{card.person.name}</p>
                <p className="text-xs text-muted-foreground">{card.person.role}</p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{card.person.count}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((v) => v + 1)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface-2"
            >
              <X className="h-4 w-4" /> Pass
            </button>
            <button
              onClick={() => setI((v) => v + 1)}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              <Check className="h-4 w-4" /> Interested
            </button>
          </div>
          <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
            {(i % deck.length) + 1} / {deck.length}
          </p>
        </div>
      </div>
    </Section>
  );
}
