import { ArrowRight, BadgeCheck, Briefcase, Play, Smartphone, Sparkles, Users } from "lucide-react";
import aarav from "@/assets/aarav.jpg";
import riya from "@/assets/riya.jpg";
import { Chip } from "./shared";

function GooglePlayButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.iota.campusX"
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-ink-foreground transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <Play className="h-6 w-6 fill-current text-brand" />
      <span className="text-left leading-tight">
        <span className="block font-mono text-[0.6rem] uppercase tracking-[0.2em] opacity-70">
          Get it on
        </span>
        <span className="block text-base font-bold">Google Play</span>
      </span>
    </a>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_75%_10%,oklch(0.93_0.05_255/60%),transparent_70%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-5 pb-24 pt-16 md:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-grass" />
            12,400+ students building this week
          </span>

          <h1 className="mt-7 text-[2.6rem] font-extrabold leading-[1.02] text-foreground sm:text-6xl">
            Find your people<span className="text-brand">.</span>
            <br />
            Build something
            <br />
            <span className="text-brand">real.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Discover teammates, projects, communities, internships, and opportunities that match
            what you want to learn and build.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#lifecycle"
              className="inline-flex items-center rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-surface-2"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <GooglePlayButton />
            <p className="font-mono text-xs text-muted-foreground">
              Free for students · Android now, iOS soon
            </p>
          </div>
        </div>

        {/* Floating card collage */}
        <div className="relative min-h-[520px] lg:min-h-[560px]">
          <div className="animate-float absolute left-0 top-0 w-[19rem] max-w-full rounded-3xl border border-border bg-card p-5 shadow-float">
            <div className="absolute -right-6 -top-4 rotate-6 rounded-full bg-amber px-3 py-1.5 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink">
              <span className="inline-flex items-center gap-1.5">
                <Smartphone className="h-3 w-3" /> Built on Collabbit
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={aarav}
                alt="Aarav Patel"
                width={512}
                height={512}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-foreground">Aarav Patel</p>
                <p className="text-xs text-muted-foreground">Android Developer · DTU</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <Chip>Kotlin</Chip>
              <Chip>Jetpack Compose</Chip>
              <Chip>Firebase</Chip>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-grass">
                <BadgeCheck className="h-4 w-4" /> Verified student
              </span>
              <span className="rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                Connect
              </span>
            </div>
          </div>

          <div
            className="animate-float absolute right-0 top-20 w-[19rem] max-w-full rounded-3xl border border-border bg-card p-5 shadow-float"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex items-center justify-between">
              <Chip tone="violet">
                <Sparkles className="h-3 w-3" /> ACTIVE PROJECT
              </Chip>
              <span className="font-mono text-[0.65rem] text-muted-foreground">2d ago</span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-foreground">AI Study Assistant</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              We're building an AI-powered study companion for students.
            </p>
            <p className="eyebrow mt-4 text-muted-foreground">Looking for</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Chip tone="brand">Android</Chip>
              <Chip tone="amber">Backend</Chip>
              <Chip tone="rose">AI / ML</Chip>
            </div>
          </div>

          <div
            className="animate-float absolute left-8 top-[19rem] flex w-[17rem] max-w-full items-center gap-3 rounded-2xl bg-ink px-4 py-3 shadow-float"
            style={{ animationDelay: "0.6s" }}
          >
            <img
              src={riya}
              alt="Riya Sharma"
              width={512}
              height={512}
              loading="lazy"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="text-ink-foreground">
              <p className="flex items-center gap-1.5 text-sm font-bold">
                <Sparkles className="h-3.5 w-3.5 text-brand" /> New match
              </p>
              <p className="text-[0.7rem] opacity-70">Riya wants to collab on your idea</p>
            </div>
          </div>

          <div
            className="animate-float absolute bottom-2 left-0 w-[17rem] max-w-full rounded-2xl border border-border bg-card p-4 shadow-float"
            style={{ animationDelay: "1.8s" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-soft text-amber">
                <Briefcase className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">Product Design Intern</p>
                <p className="text-xs text-muted-foreground">Remote · ₹25k/mo · 3 mo</p>
              </div>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div className="h-full w-[72%] rounded-full bg-amber" />
            </div>
            <p className="mt-2 font-mono text-[0.65rem] text-muted-foreground">
              72% skill match with your profile
            </p>
          </div>

          <div
            className="animate-float absolute bottom-16 right-0 flex w-[15rem] max-w-full items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-float"
            style={{ animationDelay: "2.4s" }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-soft text-rose">
              <Users className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">Hackathon Builders</p>
              <p className="text-xs text-muted-foreground">6.3k members · 214 online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { GooglePlayButton };
