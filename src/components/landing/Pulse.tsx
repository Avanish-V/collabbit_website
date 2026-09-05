import { Heart, MessageCircle } from "lucide-react";
import ananya from "@/assets/ananya.jpg";
import kabir from "@/assets/kabir.jpg";
import { Section } from "./shared";

const stats = [
  { n: "38k", label: "weekly builders" },
  { n: "4.1k", label: "teams formed" },
  { n: "920", label: "projects shipped" },
];

const posts = [
  {
    initials: "RS",
    name: "Rohan Sharma",
    meta: "CSE · 3rd year · 2h ago",
    body: "Looking for a backend developer for our college startup. Node or Go, ~10 hrs/week, real equity + stipend. We're two founders and a designer already.",
    tags: ["#Startup", "#Backend"],
    likes: 48,
    comments: 12,
  },
  {
    img: ananya,
    name: "Ananya Sen",
    meta: "Full-Stack · VIT · 5h ago",
    body: "Just shipped my first Android app 🚀 1,200 downloads in week one. Built the whole thing with a teammate I met on Collabbit. AMA.",
    tags: ["#Shipped"],
    likes: 132,
    comments: 34,
  },
  {
    img: kabir,
    name: "Kabir Mehta",
    meta: "AI · IIT Bombay · 8h ago",
    body: "Anyone participating in the upcoming hackathon? Looking for 2 teammates interested in AI + healthcare. We have a working prototype already.",
    tags: ["#Hackathon", "#AI + Health"],
    likes: 64,
    comments: 21,
  },
  {
    initials: "DC",
    name: "DevClub India",
    meta: "Community · Official · 1d ago",
    body: "Global 48h AI Agent Hackathon — $15k prize pool, mentors from 6 unicorns. Registrations close Friday. Team up on Collabbit first.",
    tags: [],
    likes: 210,
    comments: 45,
  },
];

export function Pulse() {
  return (
    <Section
      index="07"
      label="The Pulse"
      title="Don't just scroll. Discover something worth building."
      intro="A feed of asks, launches, and callouts from students who'd rather ship than doomscroll. Every post is a door into a team."
      className="bg-background"
    >
      <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-row gap-6 lg:flex-col lg:gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-foreground md:text-5xl">{s.n}</p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.name}
              className="rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-bold text-ink-foreground">
                    {p.initials}
                  </span>
                )}
                <div>
                  <p className="text-sm font-bold text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.meta}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{p.body}</p>
              {p.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-semibold text-brand">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5" /> {p.likes}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5" /> {p.comments}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
