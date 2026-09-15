import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Server,
  Trash2,
  Mail,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Collabbit" },
      {
        name: "description",
        content:
          "Read the Collabbit Privacy Policy to understand how we collect, use, and protect your personal data across our web platform and mobile apps.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const lastUpdated = "March 15, 2025";

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-brand selection:text-white">
      <Nav />

      <main className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          {/* Header */}
          <div className="border-b border-border/80 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-brand" />
              <span>Legal & Compliance</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: <span className="font-semibold text-foreground">{lastUpdated}</span> •
              Effective for Collabbit Web & Mobile Applications
            </p>
          </div>

          {/* Intro notice banner */}
          <div className="my-8 rounded-2xl border border-brand/20 bg-brand/5 p-5 text-sm leading-relaxed text-foreground">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="font-semibold text-foreground">
                  Your privacy is fundamental to how we build Collabbit.
                </p>
                <p className="mt-1 text-muted-foreground">
                  This Privacy Policy explains how Collabbit (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                  &ldquo;our&rdquo;), operated by Byte App Studio Pvt Ltd, collects, uses, protects,
                  and discloses information when you use the Collabbit website (collabbit.in) and
                  the Collabbit mobile applications.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-12 text-sm leading-relaxed text-muted-foreground md:text-base">
            {/* 1. Information Collection */}
            <section id="collection" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <Eye className="h-5 w-5 text-brand" />
                1. Information We Collect
              </h2>
              <p>
                We collect information that you voluntarily provide to us when registering for an
                account, building your builder profile, interacting with other students, and posting
                projects.
              </p>

              <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                <h3 className="font-semibold text-foreground">
                  A. Information You Provide Directly:
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li>
                    <strong className="text-foreground">Account Credentials:</strong> Email address,
                    mobile phone number, name, and authentication tokens.
                  </li>
                  <li>
                    <strong className="text-foreground">Builder Profile:</strong> University or
                    college name, graduation year, degree/major, bio, headline, skills, portfolio
                    URLs, GitHub profile links, and profile photos.
                  </li>
                  <li>
                    <strong className="text-foreground">User Content:</strong> Project listings,
                    collaboration pitches, guild posts, comments, community discussions, and
                    messages sent to peers.
                  </li>
                  <li>
                    <strong className="text-foreground">Support Communications:</strong> Inquiries,
                    feedback, or reports submitted to our customer care or safety channels.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                <h3 className="font-semibold text-foreground">
                  B. Automatically Collected Information:
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li>
                    <strong className="text-foreground">Device & Connection Data:</strong> IP
                    address, device type, operating system version, browser type, and preferred
                    language.
                  </li>
                  <li>
                    <strong className="text-foreground">Usage Metrics:</strong> Features accessed,
                    pages visited, time spent, interaction timestamps, and referral links.
                  </li>
                  <li>
                    <strong className="text-foreground">Diagnostic Data:</strong> Application crash
                    logs, performance traces, and system error events used strictly for resolving
                    bugs and maintaining stability.
                  </li>
                </ul>
              </div>

              <p className="text-xs italic bg-surface p-3 rounded-lg border border-border/60">
                Note: Collabbit does not collect precise GPS real-time location from your mobile
                device.
              </p>
            </section>

            {/* 2. How We Use Information */}
            <section id="use" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <FileText className="h-5 w-5 text-brand" />
                2. How We Use Your Information
              </h2>
              <p>We use your information for the following legitimate purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-foreground">Teammate & Project Matching:</strong>{" "}
                  Connecting you with developers, designers, and creators who possess complementary
                  skills for hackathons, startups, and hobby projects.
                </li>
                <li>
                  <strong className="text-foreground">Community & Guild Facilitation:</strong>{" "}
                  Enabling student communities to host discussions, coordinate events, and discover
                  campus peers.
                </li>
                <li>
                  <strong className="text-foreground">Internship & Opportunity Discovery:</strong>{" "}
                  Allowing verified companies and startup founders to explore student portfolios and
                  extend project opportunities.
                </li>
                <li>
                  <strong className="text-foreground">Safety & Integrity:</strong> Monitoring and
                  preventing harassment, fraud, spam, impersonation, and unauthorized activities.
                </li>
                <li>
                  <strong className="text-foreground">Notifications & Communication:</strong>{" "}
                  Sending critical security updates, collaboration invites, and platform updates.
                </li>
              </ul>
            </section>

            {/* 3. Third-Party Services */}
            <section id="third-party" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <Server className="h-5 w-5 text-brand" />
                3. Third-Party Service Providers
              </h2>
              <p>
                Collabbit relies on trusted infrastructure providers to run our backend systems,
                process authentication, and analyze app stability. These providers only have access
                to information necessary to perform their functions:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand/50 hover:bg-surface"
                >
                  <div>
                    <p className="font-semibold text-foreground">Google Play Services & Firebase</p>
                    <p className="text-xs text-muted-foreground">
                      Authentication, database & analytics
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="font-semibold text-foreground">Cloudflare & Edge Hosting</p>
                  <p className="text-xs text-muted-foreground">
                    DDoS protection, CDN, and secure routing
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Data Sharing and Disclosure */}
            <section id="sharing" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <UserCheck className="h-5 w-5 text-brand" />
                4. Data Sharing & Public Information
              </h2>
              <p>
                Collabbit is a collaborative network. When you publish a profile or post a project,
                that information is visible to other verified members on the platform.
              </p>
              <p>
                <strong className="text-foreground">We never sell your personal data.</strong> We
                may share data under the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  With your explicit consent or direction (e.g., submitting an application to an
                  internship).
                </li>
                <li>
                  To comply with applicable laws, judicial proceedings, court orders, or enforceable
                  governmental requests.
                </li>
                <li>
                  To enforce our Terms and Conditions, investigate potential violations, or protect
                  the rights, safety, and property of our users.
                </li>
              </ul>
            </section>

            {/* 5. Data Retention & Account Deletion */}
            <section id="retention" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <Trash2 className="h-5 w-5 text-brand" />
                5. Data Retention & Account Deletion
              </h2>
              <p>
                We retain your account data for as long as your account remains active or as needed
                to provide our services. You have the right to request deletion of your account and
                all associated personal data at any time.
              </p>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-semibold text-foreground">
                  Need to delete your account or wipe your data?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  You can delete your account directly inside the Collabbit Mobile App (Profile
                  &rarr; Settings &rarr; Delete Account) or by submitting a request via our
                  dedicated deletion page:
                </p>
                <div className="mt-4">
                  <Link
                    to="/account/delete"
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition-opacity hover:opacity-90"
                  >
                    Go to Account Deletion Page &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* 6. Children's Privacy */}
            <section id="children" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <AlertCircle className="h-5 w-5 text-brand" />
                6. Children&apos;s Privacy
              </h2>
              <p>
                Collabbit is designed for college, university students, and independent builders. We
                do not knowingly solicit or collect personally identifiable information from
                children under the age of 13. If we become aware that personal information of a
                child under 13 has been collected without parental consent, we take immediate steps
                to delete that data from our servers.
              </p>
            </section>

            {/* 7. Security Safeguards */}
            <section id="security" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                <Lock className="h-5 w-5 text-brand" />
                7. Security of Your Data
              </h2>
              <p>
                We implement physical, technical, and administrative safeguards designed to protect
                personal information against unauthorized access, loss, misuse, or alteration. All
                communication is encrypted via TLS/HTTPS, and access to internal databases is
                strictly restricted to authorized personnel.
              </p>
            </section>

            {/* 8. Updates & Changes */}
            <section id="changes" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect changes in our practices
                or applicable legal requirements. We will notify you of any material changes by
                updating the &ldquo;Last updated&rdquo; date at the top of this policy and, where
                feasible, posting an in-app notice.
              </p>
            </section>

            {/* 9. Contact Us */}
            <section
              id="contact"
              className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4"
            >
              <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Mail className="h-5 w-5 text-brand" />
                9. Contact Us
              </h2>
              <p>
                If you have questions, feedback, or privacy-related requests regarding this policy,
                please reach out to our privacy officer:
              </p>
              <div className="space-y-1 font-mono text-sm">
                <p>
                  <span className="text-muted-foreground">Entity:</span> Collabbit (Byte App Studio
                  Pvt Ltd)
                </p>
                <p>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <a href="mailto:support@collabbit.in" className="text-brand hover:underline">
                    support@collabbit.in
                  </a>{" "}
                  /{" "}
                  <a
                    href="mailto:byteappstudiopvt@gmail.com"
                    className="text-brand hover:underline"
                  >
                    byteappstudiopvt@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-muted-foreground">Location:</span> India
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
