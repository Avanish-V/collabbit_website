import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import {
  Trash2,
  AlertTriangle,
  Smartphone,
  Globe,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Send,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/account/delete")({
  head: () => ({
    meta: [
      { title: "Delete Your Account & Data — Collabbit" },
      {
        name: "description",
        content:
          "Official Collabbit page to request deletion of your account, personal data, project listings, and profile records in accordance with Google Play and privacy guidelines.",
      },
    ],
  }),
  component: AccountDeletePage,
});

function AccountDeletePage() {
  const [email, setEmail] = useState("");
  const [phoneOrUsername, setPhoneOrUsername] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !confirmed) return;
    setSubmitting(true);
    // Simulate web submission request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-brand selection:text-white">
      <Nav />

      <main className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          {/* Header */}
          <div className="border-b border-border/80 pb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
              <Trash2 className="h-3.5 w-3.5" />
              <span>Account &amp; Data Management</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Delete Collabbit Account &amp; Data
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              We respect your right to control your personal information. You can permanently delete
              your Collabbit account and associated builder data either directly inside the mobile
              app or via the web request form below.
            </p>
          </div>

          {/* Warning Banner */}
          <div className="my-8 rounded-2xl border border-destructive/20 bg-destructive/5 p-5 text-sm leading-relaxed">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div>
                <p className="font-semibold text-foreground">Permanent and irreversible action</p>
                <p className="mt-1 text-muted-foreground">
                  Once your account is deleted, your builder profile, campus credentials, project
                  showcases, collaborations, and community discussions cannot be recovered.
                </p>
              </div>
            </div>
          </div>

          {/* Two Deletion Pathways */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Method 1: In-App */}
            <div className="flex flex-col rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                    Option 1 • Instant
                  </span>
                  <h2 className="text-lg font-bold text-foreground">Inside Collabbit Mobile App</h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                If you have the Collabbit app installed on your smartphone, you can instantly erase
                your account and data:
              </p>

              <ol className="mt-6 space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface font-mono text-xs font-bold text-foreground border border-border">
                    1
                  </span>
                  <span>
                    Open the <strong>Collabbit</strong> app on your Android or iOS device.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface font-mono text-xs font-bold text-foreground border border-border">
                    2
                  </span>
                  <span>
                    Tap on the <strong>Profile</strong> tab in the bottom navigation bar.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface font-mono text-xs font-bold text-foreground border border-border">
                    3
                  </span>
                  <span>
                    Tap the <strong>Settings</strong> icon (⚙️) in the top-right corner.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface font-mono text-xs font-bold text-foreground border border-border">
                    4
                  </span>
                  <span>
                    Select <strong>Account &amp; Privacy</strong> &rarr; scroll to bottom &rarr; tap{" "}
                    <strong>Delete Account</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface font-mono text-xs font-bold text-foreground border border-border">
                    5
                  </span>
                  <span>
                    Confirm deletion. Your session terminates immediately and data is scheduled for
                    purge.
                  </span>
                </li>
              </ol>

              <div className="mt-8 rounded-xl bg-surface p-3 text-xs text-muted-foreground border border-border">
                ⚡ Fastest method: In-app deletion executes immediately without manual
                administrative verification.
              </div>
            </div>

            {/* Method 2: Web Form */}
            <div className="flex flex-col rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Option 2 • Web Request
                  </span>
                  <h2 className="text-lg font-bold text-foreground">
                    Submit Online Deletion Request
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                If you no longer have access to the app or have uninstalled it, submit a deletion
                request below:
              </p>

              {submitted ? (
                <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    Deletion Request Received
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    We have received your account deletion request for{" "}
                    <strong className="text-foreground">{email}</strong>. Our safety team will
                    verify ownership and process the complete data wipe within{" "}
                    <strong>7 business days</strong>.
                  </p>
                  <p className="mt-4 font-mono text-xs text-muted-foreground">
                    Reference ID: CLB-DEL-{Math.random().toString(36).substring(2, 9).toUpperCase()}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setEmail("");
                      setPhoneOrUsername("");
                      setReason("");
                      setConfirmed(false);
                    }}
                    className="mt-6 text-xs font-semibold text-brand hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Registered Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@college.edu"
                      className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Username or Registered Phone (Optional)
                    </label>
                    <input
                      type="text"
                      value={phoneOrUsername}
                      onChange={(e) => setPhoneOrUsername(e.target.value)}
                      placeholder="@handle or +91..."
                      className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Reason for Leaving (Optional)
                    </label>
                    <select
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    >
                      <option value="">Select a reason...</option>
                      <option value="graduated">Graduated / No longer a student</option>
                      <option value="privacy">Privacy concerns</option>
                      <option value="not_using">Not using the platform frequently</option>
                      <option value="multiple_accounts">Duplicate account</option>
                      <option value="other">Other reason</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="confirm-delete"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border text-brand focus:ring-brand"
                    />
                    <label
                      htmlFor="confirm-delete"
                      className="text-xs leading-normal text-muted-foreground"
                    >
                      I understand that this request will permanently delete my profile, project
                      showcases, comments, and messages.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!confirmed || !email || submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-destructive px-4 py-3 text-sm font-semibold text-destructive-foreground shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? (
                      "Processing Request..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Submit Deletion Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Data Breakdown Cards */}
          <div className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              What Happens When You Delete Your Account
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2.5 text-destructive">
                  <Trash2 className="h-5 w-5" />
                  <h3 className="font-bold text-foreground">Data that is Permanently Deleted</h3>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  <li>
                    <strong>Account Credentials:</strong> Email, phone number, and authentication
                    tokens are unlinked and destroyed.
                  </li>
                  <li>
                    <strong>Profile &amp; Identity:</strong> Name, university affiliation, avatar,
                    graduation year, headline, and bio.
                  </li>
                  <li>
                    <strong>Projects &amp; Portfolios:</strong> All project listings, showcases, and
                    collaboration invites created by you.
                  </li>
                  <li>
                    <strong>Direct Messages:</strong> Private chat threads and direct conversation
                    logs.
                  </li>
                  <li>
                    <strong>Community Contributions:</strong> Guild posts, comments, likes, and
                    badges.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2.5 text-amber">
                  <Clock className="h-5 w-5" />
                  <h3 className="font-bold text-foreground">Data Retention &amp; Timelines</h3>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  <li>
                    <strong>Processing Time:</strong> In-app deletions take effect immediately. Web
                    submissions are processed within 7 business days.
                  </li>
                  <li>
                    <strong>Security Backups:</strong> Residual cached copies in encrypted system
                    backups are automatically overwritten within 30 to 90 days.
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> Aggregated, non-personally identifiable
                    diagnostic statistics or records required by law (e.g., fraud prevention logs)
                    are retained strictly as required by applicable statutory regulations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Direct Support Section */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-foreground">
                  Need help or have questions about your data?
                </h3>
                <p className="text-xs text-muted-foreground md:text-sm">
                  If you encounter any difficulties deleting your account or want to confirm the
                  removal of your records, you can directly email our data protection team:
                </p>
                <div className="font-mono text-xs text-foreground">
                  <p>
                    Support Email:{" "}
                    <a
                      href="mailto:support@collabbit.in"
                      className="text-brand hover:underline font-semibold"
                    >
                      support@collabbit.in
                    </a>
                  </p>
                  <p>
                    Alternate:{" "}
                    <a
                      href="mailto:byteappstudiopvt@gmail.com"
                      className="text-brand hover:underline"
                    >
                      byteappstudiopvt@gmail.com
                    </a>
                  </p>
                </div>
                <div className="pt-2">
                  <Link to="/privacy" className="text-xs text-brand hover:underline font-semibold">
                    Read our full Privacy Policy &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
