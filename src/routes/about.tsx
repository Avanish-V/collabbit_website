import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import {
  Sparkles,
  Users,
  Rocket,
  Compass,
  Zap,
  Target,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Code2,
  Palette,
  Laptop,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Collabbit | The Student Builder Network" },
      {
        name: "description",
        content:
          "Learn about Collabbit's mission to connect ambitious student builders, designers, and creators to collaborate on real projects and launch their careers.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Rocket,
    title: "Ship Over Talk",
    desc: "We believe execution is everything. Collabbit is built for students who want to go beyond class assignments and turn ideas into live products.",
  },
  {
    icon: Users,
    title: "Radical Collaboration",
    desc: "Great things are never built alone. We eliminate campus borders so developers, designers, and marketers can team up effortlessly.",
  },
  {
    icon: Target,
    title: "Proof of Work Matters",
    desc: "Traditional resumes don't reflect your true capabilities. Your GitHub commits, Figma files, and shipped projects speak for themselves.",
  },
  {
    icon: HeartHandshake,
    title: "Peer-Driven Growth",
    desc: "Learn in public, give constructive feedback, and grow alongside fellow creators who challenge you to raise your standards.",
  },
];

const pillars = [
  {
    icon: Code2,
    badge: "Matching",
    title: "Intelligent Team Discovery",
    desc: "Match with teammates based on complementary skills, tech stacks, availability, and project goals. Whether you need a backend lead, a Flutter dev, or a UI specialist, find them here.",
  },
  {
    icon: Palette,
    badge: "Portfolio",
    title: "Project Launchpad & Showcase",
    desc: "Document your build journey, ship updates, gather feedback from the builder community, and assemble a portfolio that impresses startup founders and recruiters.",
  },
  {
    icon: Compass,
    badge: "Community",
    title: "Campus Guilds & Niches",
    desc: "Join specialized student communities centered around AI/ML, Web3, Systems, Mobile, Open Source, and UI/UX design. Share knowledge, attend live sessions, and stay inspired.",
  },
  {
    icon: Laptop,
    badge: "Opportunities",
    title: "Internships & Live Sessions",
    desc: "Direct access to real internship opportunities, live founder AMAs, design reviews, and hackathon squads designed to jumpstart your career.",
  },
];

const stats = [
  { value: "10,000+", label: "Student Builders" },
  { value: "500+", label: "Projects Shipped" },
  { value: "120+", label: "Colleges & Universities" },
  { value: "40+", label: "Live Builder Sessions" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-brand selection:text-white">
      <Nav />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-border/40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              <span>Our Mission & Vision</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              We empower student builders to <span className="text-brand">find their crew</span> and
              ship real things.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Collabbit was born from a simple observation: universities are filled with ambitious
              developers, designers, and innovators, but they are trapped in silos. We are breaking
              those barriers down.
            </p>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="border-b border-border/60 bg-surface/50 py-10">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                <Zap className="h-4 w-4" /> The Story
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Why we built Collabbit
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  Every semester, thousands of brilliant students start hackathons or hobby
                  projects. They have the passion and technical drive, but hitting roadblocks is
                  inevitable when working solo. Finding a designer who understands product thinking
                  or a backend architect who can scale APIs often meant scrolling endless random
                  Discord servers or asking classmates who had different interests.
                </p>
                <p>
                  Collabbit transforms that experience into a focused, vibrant network. Here,
                  students showcase proof of work, discover collaborators with complementary skill
                  sets, form cross-campus squads, and build things that real users love.
                </p>
                <p>
                  We are building the springboard where the next generation of software engineers,
                  product designers, and startup founders connect before the world knows who they
                  are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Collabbit Offers */}
        <section className="border-t border-border/60 bg-surface/30 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="text-center">
              <span className="eyebrow text-muted-foreground">The Ecosystem</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Built specifically for student momentum
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                Everything you need to turn raw enthusiasm into tangible products and real career
                opportunities.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-surface px-2.5 py-0.5 font-mono text-[11px] font-semibold text-muted-foreground">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-bold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="text-center">
              <span className="eyebrow text-muted-foreground">Our Philosophy</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Values that drive how we build
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="flex gap-4 rounded-2xl border border-border/80 bg-card p-6 shadow-xs"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{v.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 bg-ink py-16 text-ink-foreground">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Ready to find your crew and start shipping?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-ink-foreground/80 md:text-base">
              Join thousands of students across top colleges building real projects, sharing proof
              of work, and discovering opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#join"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Join Collabbit Now <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-6 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
              >
                Explore Platform
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
