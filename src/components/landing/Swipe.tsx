import { useEffect, useRef, useState } from "react";
import { Check, Sparkles, X } from "lucide-react";
import riya from "@/assets/riya.jpg";
import kabir from "@/assets/kabir.jpg";
import ananya from "@/assets/ananya.jpg";
import aarav from "@/assets/aarav.jpg";
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
  {
    name: "Design System Kit",
    kind: "OPEN SOURCE",
    ago: "3d ago",
    body: "A reusable UI kit for student builders. Components, tokens, and docs.",
    tags: ["React", "Storybook", "Figma"],
    person: { img: aarav, name: "Aarav Patel", role: "Android Developer · DTU", count: "5 in" },
  },
  {
    name: "Campus Marketplace",
    kind: "SIDE PROJECT",
    ago: "12h ago",
    body: "Buy, sell, and rent textbooks, gadgets, and cycles inside your campus.",
    tags: ["Flutter", "Node.js", "Payments"],
    person: { img: ananya, name: "Ananya Sen", role: "Full-Stack · VIT Vellore", count: "2 in" },
  },
  {
    name: "Mental Health Buddy",
    kind: "ACTIVE PROJECT",
    ago: "4d ago",
    body: "A safe peer-support space with mood tracking and guided journaling.",
    tags: ["iOS", "Python", "UI Design"],
    person: { img: riya, name: "Riya Sharma", role: "Product Lead · Design Guild", count: "3 in" },
  },
];

const bullets = [
  "Skill-complementary matching, not random feeds",
  "Verified student profiles only",
  "Chat opens only on mutual interest",
];

type Fly = "left" | "right" | null;
const SWIPE_PX = 90;

type CardData = (typeof deck)[number];

function CardContent({ card }: { card: CardData }) {
  return (
    <>
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
          <Chip key={t} tone={(["brand", "amber", "rose"] as const)[ti % 3]!}>
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
          draggable={false}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-foreground">{card.person.name}</p>
          <p className="text-xs text-muted-foreground">{card.person.role}</p>
        </div>
        <span className="font-mono text-xs text-muted-foreground">{card.person.count}</span>
      </div>
    </>
  );
}

export function Swipe() {
  const [i, setI] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [fly, setFly] = useState<Fly>(null);
  const startX = useRef<number | null>(null);
  const dragging = useRef(false);
  const interacted = useRef(false);
  const flying = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const card = deck[i % deck.length]!;
  const next = deck[(i + 1) % deck.length]!;

  const launch = (dir: Fly) => {
    if (!dir || flying.current) return;
    flying.current = true;
    setFly(dir);
    window.setTimeout(() => {
      setI((v) => v + 1);
      setFly(null);
      setDragX(0);
      flying.current = false;
    }, 320);
  };

  // Auto swipe until the user touches the card
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (interacted.current || dragging.current || flying.current) return;
      const dir: Fly = Math.random() > 0.35 ? "right" : "left";
      launch(dir);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (flying.current) return;
    interacted.current = true;
    dragging.current = true;
    startX.current = e.clientX;
    cardRef.current?.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || startX.current === null) return;
    setDragX(e.clientX - startX.current);
  };
  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    startX.current = null;
    if (dragX > SWIPE_PX) launch("right");
    else if (dragX < -SWIPE_PX) launch("left");
    else setDragX(0);
  };

  const exitX = fly === "right" ? 420 : fly === "left" ? -420 : 0;
  const tx = fly ? exitX : dragX;
  const rot = tx / 18;

  const likeOpacity = fly === "right" ? 1 : dragX > 0 ? Math.min(dragX / SWIPE_PX, 1) : 0;
  const nopeOpacity = fly === "left" ? 1 : dragX < 0 ? Math.min(-dragX / SWIPE_PX, 1) : 0;

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
        <div className="reveal-left">
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
            Drag the card — right to match, left to pass. It swipes on its own until you jump in →
          </p>
        </div>

        <div className="reveal-right delay-200 relative mx-auto w-full max-w-sm">
          <div className="relative h-[26rem]">
            {/* Next card stacked behind */}
            <div
              key={next.name}
              className="absolute inset-0 rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300"
              style={{ transform: "scale(0.93) translateY(-10px)", opacity: 0.55, zIndex: 0 }}
            >
              <CardContent card={next} />
            </div>

            {/* Current card */}
            <div
              ref={cardRef}
              key={card.name}
              role="button"
              aria-label={`${card.name} — swipe right if interested, left to pass`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{
                transform: `translateX(${tx}px) rotate(${rot}deg)`,
                transition: dragging.current ? "none" : "transform 0.32s ease",
                touchAction: "pan-y",
                zIndex: 10,
              }}
              className="absolute inset-0 cursor-grab select-none rounded-3xl border border-border bg-card p-6 shadow-float active:cursor-grabbing"
            >
              {/* Swipe stamps */}
              <span
                style={{ opacity: likeOpacity }}
                className="pointer-events-none absolute left-5 top-5 z-10 -rotate-12 rounded-lg border-4 border-[oklch(0.55_0.17_155)] px-3 py-1 text-lg font-black tracking-widest text-[oklch(0.55_0.17_155)]"
              >
                MATCH
              </span>
              <span
                style={{ opacity: nopeOpacity }}
                className="pointer-events-none absolute right-5 top-5 z-10 rotate-12 rounded-lg border-4 border-[oklch(0.6_0.2_20)] px-3 py-1 text-lg font-black tracking-widest text-[oklch(0.6_0.2_20)]"
              >
                PASS
              </span>

              <CardContent card={card} />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => {
                interacted.current = true;
                launch("left");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface-2"
            >
              <X className="h-4 w-4" /> Pass
            </button>
            <button
              onClick={() => {
                interacted.current = true;
                launch("right");
              }}
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
