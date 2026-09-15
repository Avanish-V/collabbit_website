import { ArrowRight } from "lucide-react";
import { GooglePlayButton } from "./Hero";

export function CTA() {
  return (
    <section
      id="join"
      className="relative overflow-hidden border-t border-border/70 bg-ink py-24 md:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-10" />
      <div className="reveal-scale relative mx-auto w-full max-w-7xl px-6 text-center md:px-12 2xl:max-w-[1536px] 2xl:px-20">
        <p className="eyebrow text-ink-foreground/60">
          <span className="text-brand">09</span>
          <span className="mx-2">//</span>
          Your Move
        </p>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-ink-foreground md:text-6xl">
          Stop scrolling. Start building<span className="text-brand">.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-foreground/70">
          Join thousands of students turning ideas into projects, teams, and opportunities.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/search?q=finder%20connec&c=apps"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Join Collabbit <ArrowRight className="h-4 w-4" />
          </a>
          <GooglePlayButton className="border border-ink-foreground/20" />
        </div>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/50">
          Free for students · Android now, iOS soon
        </p>
      </div>
    </section>
  );
}
