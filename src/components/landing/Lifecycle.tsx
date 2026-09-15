import { Section } from "./shared";

const steps = [
  {
    n: "01",
    title: "Create your profile",
    body: "Tell Collabbit what you know, what you love, and what you're looking for.",
  },
  {
    n: "02",
    title: "Discover",
    body: "Find people, projects, communities, internships, and sessions that match your interests.",
  },
  {
    n: "03",
    title: "Connect",
    body: "Like, match, join, message, and collaborate with people who share your goals.",
  },
  {
    n: "04",
    title: "Build",
    body: "Turn conversations into projects, experience, and opportunities.",
  },
];

export function Lifecycle() {
  return (
    <Section
      id="lifecycle"
      index="02"
      label="The Lifecycle"
      title={<>From “I want to build” to “We built it.”</>}
      intro="Four steps. No cold DMs, no dead group chats, no building alone."
      className="bg-surface"
    >
      <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
        {steps.map((s, i) => (
          <div key={s.n} className={`reveal delay-${(i + 1) * 100} relative`}>
            <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card font-mono text-sm font-semibold text-brand shadow-card">
              {s.n}
            </span>
            <h3 className="mt-6 text-xl font-bold text-foreground">{s.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
