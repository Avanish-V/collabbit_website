import { MapPin } from "lucide-react";
import kabir from "@/assets/kabir.jpg";
import { Chip, Section } from "./shared";

const stats = [
  { n: "85%", label: "Builder Score" },
  { n: "4", label: "Projects shipped" },
  { n: "6", label: "Communities" },
];

export function Identity() {
  return (
    <Section
      index="08"
      label="The Identity"
      title="Don't just show what you know. Show what you want to build."
      intro="A Collabbit profile is a builder's passport — skills, goals, works-in-progress, and the kind of people you want in the room."
      className="bg-surface"
    >
      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-foreground md:text-4xl">{s.n}</p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-7 shadow-float">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={kabir}
                alt="Kabir Mehta profile"
                width={512}
                height={512}
                loading="lazy"
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div>
                <p className="text-lg font-bold text-foreground">Kabir Mehta</p>
                <p className="text-sm text-muted-foreground">AI Developer · IIT Bombay</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> Mumbai · Remote-friendly
                </p>
              </div>
            </div>
            <Chip tone="amber">TOP 5% BUILDER</Chip>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Profile completion</span>
              <span className="font-semibold text-foreground">85%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-2">
              <div className="h-full w-[85%] rounded-full bg-brand" />
            </div>
          </div>

          <p className="eyebrow mt-6 text-muted-foreground">Skills</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Python", "PyTorch", "LLMs", "FastAPI", "RAG"].map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>

          <p className="eyebrow mt-6 text-muted-foreground">Goals · 2026</p>
          <p className="mt-2 text-sm text-foreground">
            Ship 3 real products, win one national hackathon, land a summer ML internship.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-surface p-4">
            <div className="flex items-center justify-between text-sm font-semibold text-foreground">
              <span>AI Study Assistant</span>
              <span className="text-brand">68%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div className="h-full w-[68%] rounded-full bg-violet" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Currently building · with 3 teammates from Collabbit
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            <Chip tone="grass">Weekend builds</Chip>
            <Chip tone="violet">Hackathon regular</Chip>
            <Chip tone="brand">2 internships done</Chip>
          </div>
        </div>
      </div>
    </Section>
  );
}
