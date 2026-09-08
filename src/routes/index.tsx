import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Gap } from "@/components/landing/Gap";
import { Lifecycle } from "@/components/landing/Lifecycle";
import { Swipe } from "@/components/landing/Swipe";
import { Builders } from "@/components/landing/Builders";
import { Guilds } from "@/components/landing/Guilds";
import { Launchpad } from "@/components/landing/Launchpad";
import { Pulse } from "@/components/landing/Pulse";
import { Identity } from "@/components/landing/Identity";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Gap />
        <Lifecycle />
        <Swipe />
        <Builders />
        <Guilds />
        <Launchpad />
        <Pulse />
        <Identity />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
