import aarav from "@/assets/aarav.jpg";
import riya from "@/assets/riya.jpg";
import kabir from "@/assets/kabir.jpg";
import ananya from "@/assets/ananya.jpg";
import { Chip, Section } from "./shared";

const people = [
  {
    img: aarav,
    name: "Aarav Patel",
    role: "Android Developer",
    school: "Delhi Tech University",
    skills: ["Kotlin", "Jetpack Compose", "Firebase"],
    looking: "A designer + backend dev for a campus food app",
  },
  {
    img: riya,
    name: "Riya Sharma",
    role: "UI/UX Designer",
    school: "Design Guild · Pune",
    skills: ["Figma", "Design Systems", "Research"],
    looking: "Developers who care about craft, for a fintech side-project",
  },
  {
    img: kabir,
    name: "Kabir Mehta",
    role: "AI Developer",
    school: "IIT Bombay",
    skills: ["Python", "ML", "LLMs"],
    looking: "A frontend dev to ship an AI healthcare hackathon idea",
  },
  {
    img: ananya,
    name: "Ananya Sen",
    role: "Full-Stack Engineer",
    school: "VIT Vellore",
    skills: ["TypeScript", "Rust", "Postgres"],
    looking: "Co-builders for open-source dev tools",
  },
];

export function Builders() {
  return (
    <Section
      id="discover"
      index="04"
      label="The Builders"
      title="Meet people beyond your classroom."
      intro="Find your teammates."
      className="bg-surface"
    >
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((p, i) => (
          <div
            key={p.name}
            className={`reveal delay-${(i + 1) * 100} flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1.5`}
          >
            <img
              src={p.img}
              alt={`${p.name} avatar`}
              width={512}
              height={512}
              loading="lazy"
              className="h-16 w-16 rounded-2xl object-cover"
            />
            <h3 className="mt-5 text-lg font-bold text-foreground">{p.name}</h3>
            <p className="text-sm font-medium text-brand">{p.role}</p>
            <p className="text-xs text-muted-foreground">{p.school}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.skills.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em]">
                Looking for:{" "}
              </span>
              {p.looking}
            </p>
            <button className="mt-6 w-full rounded-full border border-border bg-background py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-brand hover:text-primary-foreground">
              Connect
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}
