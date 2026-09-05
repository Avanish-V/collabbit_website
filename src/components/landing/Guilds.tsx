import {
  Boxes,
  Brain,
  Code2,
  GitFork,
  Palette,
  Rocket,
  Smartphone,
  Trophy,
} from "lucide-react";
import { Section } from "./shared";

const guilds = [
  { icon: Smartphone, name: "Android Developers", meta: "4.2k builders" },
  { icon: Brain, name: "AI & ML", meta: "8.9k builders" },
  { icon: Code2, name: "Web Development", meta: "11.4k builders" },
  { icon: Trophy, name: "Hackathon Builders", meta: "6.3k builders" },
  { icon: Rocket, name: "Startup Builders", meta: "3.7k founders" },
  { icon: Palette, name: "UI/UX Designers", meta: "5.1k designers" },
  { icon: GitFork, name: "Open Source", meta: "4.8k contributors" },
  { icon: Boxes, name: "Internship Hunters", meta: "9.2k students" },
];

export function Guilds() {
  return (
    <Section
      id="communities"
      index="05"
      label="Guilds & Clans"
      title="Find your people. Find your community."
      intro="Niche rooms full of students who take your weird idea seriously."
      className="bg-background"
    >
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guilds.map((g) => (
          <div
            key={g.name}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-brand"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <g.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-foreground">{g.name}</p>
              <p className="font-mono text-xs text-muted-foreground">{g.meta}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
