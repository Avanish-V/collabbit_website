import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import {
  FileCheck2,
  ShieldAlert,
  Scale,
  Code,
  Users2,
  Briefcase,
  AlertTriangle,
  Mail,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/term-condition")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Collabbit" },
      {
        name: "description",
        content:
          "Review the Collabbit Terms and Conditions governing use of our website, mobile application, project collaboration platform, and builder services.",
      },
    ],
  }),
  component: TermsConditionPage,
});

function TermsConditionPage() {
  const lastUpdated = "March 15, 2025";

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-brand selection:text-white">
      <Nav />

      <main className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          {/* Header */}
          <div className="border-b border-border/80 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">
              <FileCheck2 className="h-3.5 w-3.5 text-brand" />
              <span>Terms of Service</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: <span className="font-semibold text-foreground">{lastUpdated}</span> •
              Applies to all Collabbit Platforms
            </p>
          </div>

          {/* Quick Notice */}
          <div className="my-8 rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              Please read these Terms and Conditions carefully before using Collabbit (&ldquo;the
              Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, operated by Byte App Studio Pvt
              Ltd). By accessing our website (
              <a href="https://collabbit.in" className="text-brand hover:underline font-medium">
                collabbit.in
              </a>
              ) or installing and using the Collabbit mobile application, you agree to be legally
              bound by these terms.
            </p>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12 text-sm leading-relaxed text-muted-foreground md:text-base">
            {/* 1. Acceptance */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-brand" />
                1. Acceptance of Terms
              </h2>
              <p>
                By creating an account, browsing public listings, joining guilds, submitting
                collaboration proposals, or using any feature of Collabbit, you confirm that you are
                at least 13 years of age, possess the legal capacity to enter into these terms, and
                agree to adhere to them in full. If you do not agree with any part of these terms,
                you must discontinue use immediately.
              </p>
            </section>

            {/* 2. User Accounts */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <Scale className="h-5 w-5 text-brand" />
                2. User Accounts &amp; Security
              </h2>
              <p>
                To access team matching, community guilds, and project submission tools, you must
                register for an account. You agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide truthful, accurate, and current profile information regarding your name,
                  skills, and academic background.
                </li>
                <li>
                  Maintain the confidentiality and security of your login credentials and device.
                </li>
                <li>
                  Promptly notify us at{" "}
                  <a href="mailto:support@collabbit.in" className="text-brand hover:underline">
                    support@collabbit.in
                  </a>{" "}
                  if you suspect any unauthorized access or breach of your account.
                </li>
                <li>
                  Accept full responsibility for all activities conducted under your account
                  credentials.
                </li>
              </ul>
            </section>

            {/* 3. Acceptable Use & Conduct */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <ShieldAlert className="h-5 w-5 text-brand" />
                3. Acceptable Use &amp; Community Guidelines
              </h2>
              <p>
                Collabbit is a collaborative space dedicated to builders, designers, and students.
                You agree NOT to:
              </p>
              <div className="rounded-2xl border border-border bg-card p-5">
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Harass, stalk, threaten, intimidate, or bully any member of the community.
                  </li>
                  <li>
                    Post discriminatory, hate speech, violent, defamatory, or sexually explicit
                    content.
                  </li>
                  <li>
                    Spam members with unsolicited commercial offers, unrelated multi-level
                    marketing, or repetitive links.
                  </li>
                  <li>
                    Reverse-engineer, decompile, disassemble, or extract source code from any part
                    of the Collabbit applications.
                  </li>
                  <li>
                    Scrape, crawl, or harvest user data, portfolio details, or email addresses
                    through automated mechanisms without our prior written consent.
                  </li>
                  <li>
                    Impersonate any student, campus organization, mentor, company representative, or
                    entity.
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. Intellectual Property & Code Ownership */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <Code className="h-5 w-5 text-brand" />
                4. Intellectual Property &amp; Your Code
              </h2>
              <div className="rounded-xl border border-brand/20 bg-brand/5 p-4 text-foreground">
                <p className="font-semibold text-sm">
                  You retain full ownership of what you build.
                </p>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  Collabbit does not claim ownership of the code, designs, pitches, or creative
                  projects you create or showcase on the platform.
                </p>
              </div>
              <p>
                <strong className="text-foreground">License to Collabbit:</strong> By publishing
                your profile, portfolio items, and project showcases on Collabbit, you grant us a
                worldwide, non-exclusive, royalty-free license to host, display, and promote your
                showcase within the Collabbit application and marketing channels to highlight
                student builders.
              </p>
              <p>
                <strong className="text-foreground">Collabbit Intellectual Property:</strong> All
                Collabbit branding, logos, website layout, graphics, features, and source code are
                protected by intellectual property laws and remain the exclusive property of
                Collabbit and Byte App Studio Pvt Ltd.
              </p>
            </section>

            {/* 5. Team Collaborations Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <Users2 className="h-5 w-5 text-brand" />
                5. Project Collaborations &amp; Teammate Dynamics
              </h2>
              <p>
                Collabbit acts solely as a discovery platform to connect students and builders. We
                do not participate in, supervise, or legally manage projects formed between users.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Collaborating teams are solely responsible for agreeing upon project governance,
                  roles, repository permissions, and intellectual property arrangements.
                </li>
                <li>
                  Collabbit is not liable for project abandonment, interpersonal conflicts,
                  intellectual property disputes between co-collaborators, or unfinished project
                  milestones.
                </li>
              </ul>
            </section>

            {/* 6. Opportunities & Internships */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <Briefcase className="h-5 w-5 text-brand" />
                6. Opportunities, Internships &amp; External Links
              </h2>
              <p>
                The platform may display student internship postings, hackathon links, live session
                invitations, and company hiring notices. These opportunities are provided for
                informational and networking purposes.
              </p>
              <p>
                Collabbit does not guarantee job placement, interview calls, or compensation from
                third-party employers. Users should exercise reasonable diligence before entering
                into agreements or sharing private credentials with third parties.
              </p>
            </section>

            {/* 7. Disclaimers & Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <AlertTriangle className="h-5 w-5 text-brand" />
                7. Disclaimers &amp; Limitation of Liability
              </h2>
              <p>
                THE PLATFORM IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
                BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE
                UNINTERRUPTED, ERROR-FREE, OR FULLY SECURE SERVICE AT ALL TIMES.
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COLLABBIT, ITS DIRECTORS, EMPLOYEES, AND
                AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR
                CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF OR INABILITY TO USE THE PLATFORM.
              </p>
            </section>

            {/* 8. Termination */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                8. Account Termination &amp; Suspension
              </h2>
              <p>
                We reserve the right to suspend, disable, or terminate any user account without
                prior notice if we determine that the user has violated these Terms, engaged in
                fraudulent or harmful conduct, or compromised the security of the community.
              </p>
              <p>
                You may delete your account and remove your personal data at any time directly
                through the app or by visiting our{" "}
                <Link to="/account/delete" className="text-brand hover:underline font-medium">
                  Account Deletion Page
                </Link>
                .
              </p>
            </section>

            {/* 9. Governing Law */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                9. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms and any disputes arising out of or related to them shall be governed by
                and construed in accordance with the laws of India, without regard to its conflict
                of law principles. Any legal actions shall be subject to the exclusive jurisdiction
                of the competent courts in India.
              </p>
            </section>

            {/* 10. Contact */}
            <section className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Mail className="h-5 w-5 text-brand" />
                10. Contact Information
              </h2>
              <p>
                If you have questions, feedback, or legal inquiries regarding these Terms &amp;
                Conditions, please reach out:
              </p>
              <div className="space-y-1 font-mono text-sm">
                <p>
                  <span className="text-muted-foreground">Organization:</span> Collabbit (Byte App
                  Studio Pvt Ltd)
                </p>
                <p>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <a href="mailto:support@collabbit.in" className="text-brand hover:underline">
                    support@collabbit.in
                  </a>{" "}
                  /{" "}
                  <a href="mailto:akv1042003@gmail.com" className="text-brand hover:underline">
                    akv1042003@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">Website:</span>{" "}
                  <a href="https://collabbit.in" className="text-brand hover:underline">
                    https://collabbit.in
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
