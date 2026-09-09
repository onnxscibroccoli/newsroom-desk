import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Ban, Check, FileText, ShieldAlert } from "lucide-react";
import { SiteChrome } from "@/components/site-chrome";
import { DeskShell, Section } from "@/components/desk-shell";
import { GradeBadge } from "@/components/grade";
import { QuotePull } from "@/components/quote-pull";
import { RelatedStories } from "@/components/related-stories";
import { ARTICLES } from "@/lib/articles";
import { CASH_APP_HANDLE, CASH_APP_URL, SISTER_SITES } from "@/lib/catalog";
import {
  CHANNELS,
  CONTRADICTIONS,
  DO_NOT_PUBLISH,
  DOCUMENTS,
  EVIDENCE,
  EXPERIMENTS,
  FEES,
  HEADLINES,
  PEOPLE,
  PUBLISHABLE,
  QUOTES,
  SOURCES,
  UNKNOWNS,
} from "@/lib/package-data";

export const Route = createFileRoute("/record")({
  component: RecordPage,
  head: () => ({
    meta: [
      { title: "The record — Newsroom Desk" },
      {
        name: "description",
        content:
          "Reporting record for investigations 4, 5, and 6: evidence grades, unknowns, and what may not yet run.",
      },
    ],
  }),
});

function RecordPage() {
  return (
    <SiteChrome>
      <DeskShell>
        <Cover />
        <Summary />
        <StoryFour />
        <StoryFive />
        <StorySix />
        <Evidence />
        <Contradictions />
        <Unknowns />
        <Reporting />
        <Claims />
        <Sources />
      </DeskShell>
      <RelatedStories />
    </SiteChrome>
  );
}

function Cover() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">
            Reporting record · updated 9 September 2026
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[2.6rem] font-semibold leading-[1.08] text-ink sm:text-6xl">
            The cost of digital autonomy
          </h1>
          <p className="mt-6 max-w-xl font-display text-xl leading-snug text-muted">
            Stories 4, 5, and 6 are live. This record is the graded evidence, the
            unknowns, and the lines that still may not run.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            Ads stay off unless you opt in. Buy me a coffee via{" "}
            <a href={CASH_APP_URL} className="text-ink underline decoration-rule underline-offset-2">
              Cash App ${CASH_APP_HANDLE}
            </a>
            . South Shore house ads for Jules Gutter Cleaning are ready if you opt in.{" "}
            <Link to="/privacy" className="text-ink underline decoration-rule underline-offset-2">
              Support and ads
            </Link>
            .
          </p>
        </div>
        <ul className="grid gap-3">
          {ARTICLES.map((article) => (
            <li key={article.slug}>
              <Link
                to="/story/$slug"
                params={{ slug: article.slug }}
                className="block rounded-md border border-rule p-4 hover:bg-paper-2"
              >
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">
                  Story {article.story} · published
                </span>
                <span className="mt-1 block font-display text-lg font-semibold leading-snug">
                  {article.title}
                </span>
              </Link>
            </li>
          ))}
          {SISTER_SITES.map((site) => (
            <li key={site.slug}>
              <a
                href={site.href}
                className="block rounded-md border border-rule p-4 hover:bg-paper-2"
              >
                <span className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">
                  Sister site · live
                </span>
                <span className="mt-1 block font-display text-lg font-semibold leading-snug">
                  {site.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PublishedLink({ story }: { story: "4" | "5" | "6" }) {
  const article = ARTICLES.find((a) => a.story === story);
  if (!article) return null;
  return (
    <Link
      to="/story/$slug"
      params={{ slug: article.slug }}
      className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 text-sm font-medium text-paper"
    >
      Read the published story
      <ArrowRight className="size-4" />
    </Link>
  );
}

function Summary() {
  return (
    <Section id="summary" kicker="1. Executive summary" title="What is presently supportable">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-5 font-display text-lg leading-relaxed text-ink">
          <p>
            Formal consumer-dispute rights exist and are, on paper, free. Exercising them
            still means documents, identity proofing, three bureaus, and — if you want a
            usable record — postage. Whether that burden falls disproportionately on
            disabled and low-resource people is a hypothesis, not a finding.
          </p>
          <p>
            Android’s accessibility APIs are a real primitive set. They are not a reliable
            autonomous task-completion layer. Play policy bans ordinary apps from using
            that API to plan and execute on their own.
          </p>
          <p>
            Google’s documented “invisible phone” is Computer Control: an OEM assistant,
            a privileged permission, a virtual device, and screenshot analysis. Third
            parties cannot hold it. It is not the accessibility tree.
          </p>
        </div>
        <aside className="rounded-lg border border-rule bg-paper-2 p-5 sm:p-6">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">
            Classification
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li>
              <GradeBadge grade="VERIFIED" /> Directly established by statute, regulation,
              official guidance, or Android documentation.
            </li>
            <li>
              <GradeBadge grade="REPORTED" /> From a participant or journalist; not
              independently verified here.
            </li>
            <li>
              <GradeBadge grade="HYPOTHESIS" /> Investigative question, not a finding.
            </li>
            <li>
              <GradeBadge grade="FALSE" /> Claim is not supported. Do not publish.
            </li>
          </ul>
          <p className="mt-5 border-t border-rule pt-4 text-sm text-muted">
            Broccoli Core is a testbed only. It is not used as proof of any broader claim.
          </p>
        </aside>
      </div>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        <ChainCard
          n="4"
          title="Human / system"
          body="Can a person with limited money, mobility, or disability actually use the dispute rights that exist on paper?"
        />
        <ChainCard
          n="5"
          title="Accessibility layer"
          body="If the remaining path is a smartphone, can that person tell an AI what they want and have the phone safely do it?"
        />
        <ChainCard
          n="6"
          title="Platform layer"
          body="Can an agent operate through documented semantic interfaces without taking over the screen, without root, and without crossing security boundaries?"
        />
      </ol>
    </Section>
  );
}

function ChainCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <article className="rounded-lg border border-rule bg-paper p-5">
      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">
        Story {n}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}

function StoryFour() {
  return (
    <Section
      id="story-4"
      kicker="2a. Investigation 4"
      title="The cost of proving you’re right"
    >
      <p className="max-w-3xl font-display text-xl leading-snug text-muted">
        Do not begin by asserting that the system is inaccessible. Begin with
        channels, fees, documents, records, and time.
      </p>
      <PublishedLink story="4" />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {QUOTES.slice(0, 2).map((q) => (
          <QuotePull key={q.kicker} {...q} />
        ))}
      </div>

      <h3 className="mt-12 font-display text-2xl font-semibold">Official channels</h3>
      <p className="mt-2 max-w-3xl text-sm text-muted">
        CFPB Ask CFPB, last reviewed 2 September 2026, lists three channels only:
        online, mail, and phone. Email and fax are not on the list.
      </p>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink text-[0.7rem] uppercase tracking-[0.12em] text-muted">
              <th className="py-3 pr-4 font-medium">Bureau</th>
              <th className="py-3 pr-4 font-medium">Online</th>
              <th className="py-3 pr-4 font-medium">Phone</th>
              <th className="py-3 pr-4 font-medium">Mail</th>
              <th className="py-3 font-medium">Email / fax</th>
            </tr>
          </thead>
          <tbody>
            {CHANNELS.map((row) => (
              <tr key={row.bureau} className="border-b border-rule align-top">
                <td className="py-3 pr-4 font-medium">{row.bureau}</td>
                <td className="py-3 pr-4">{row.online}</td>
                <td className="py-3 pr-4">{row.phone}</td>
                <td className="py-3 pr-4">{row.mail}</td>
                <td className="py-3 text-muted">{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-12 font-display text-2xl font-semibold">Fees vs. the receipt</h3>
      <ul className="mt-5 divide-y divide-rule border-y border-rule">
        {FEES.map((row) => (
          <li key={row.item} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="font-medium">{row.item}</p>
              <p className="text-sm text-muted">{row.note}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm tabular-nums">{row.fee}</span>
              <GradeBadge grade={row.grade} />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Fact
          title="The legal trap"
          body="A furnisher must investigate a direct dispute only if it arrives at a specified address. Wrong address → no duty. 12 CFR 1022.43(c)."
        />
        <Fact
          title="Circular 2022-07"
          body="CRAs and furnishers may not refuse to investigate because the consumer skipped their preferred form, format, or a preferred attachment."
        />
        <Fact
          title="TransUnion’s incomplete web path"
          body="Five documents, 5 MB total, one hour to attach. No online upload for public records or for name, SSN, date of birth, or address. Those go by mail."
        />
        <Fact
          title="CFPB’s 2026 gates"
          body="Wait 45 days after the bureau dispute. Two-factor authentication (email and mobile) is official as of 24 June 2026. Address validation is planned, not confirmed live."
        />
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
        ADA Title II WCAG 2.1 AA binds state and local government, not private
        bureaus. DOJ extended large-entity compliance from 24 April 2026 to 26
        April 2027. Do not write that Equifax must meet WCAG.
      </p>
    </Section>
  );
}

function Fact({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-md border border-rule p-5">
      <h4 className="font-display text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}

function StoryFive() {
  return (
    <Section
      id="story-5"
      kicker="2b. Investigation 5"
      title="The accessible phone that doesn’t exist yet"
    >
      <p className="max-w-3xl font-display text-xl leading-snug text-muted">
        Android exposes substantial accessibility primitives. Reliable autonomous
        task completion remains constrained by permissions, app behavior, safety,
        and the lack of a provider-independent automation layer.
      </p>
      <PublishedLink story="5" />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {QUOTES.slice(2, 3).map((q) => (
          <QuotePull key={q.kicker} {...q} />
        ))}
        {QUOTES.slice(4).map((q) => (
          <QuotePull key={q.kicker} {...q} />
        ))}
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink text-[0.7rem] uppercase tracking-[0.12em] text-muted">
              <th className="py-3 pr-4 font-medium">Primitive</th>
              <th className="py-3 pr-4 font-medium">API</th>
              <th className="py-3 font-medium">Bound</th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr className="border-b border-rule">
              <td className="py-3 pr-4 font-medium">Tree + events</td>
              <td className="py-3 pr-4 font-mono text-xs">getRootInActiveWindow, onAccessibilityEvent</td>
              <td className="py-3">User must enable the service in Settings</td>
            </tr>
            <tr className="border-b border-rule">
              <td className="py-3 pr-4 font-medium">Actions</td>
              <td className="py-3 pr-4 font-mono text-xs">performAction, ACTION_SET_TEXT</td>
              <td className="py-3">True return ≠ the app did the thing</td>
            </tr>
            <tr className="border-b border-rule">
              <td className="py-3 pr-4 font-medium">Gesture fallback</td>
              <td className="py-3 pr-4 font-mono text-xs">dispatchGesture</td>
              <td className="py-3">Docs admit ACTION_CLICK is often unimplemented</td>
            </tr>
            <tr className="border-b border-rule">
              <td className="py-3 pr-4 font-medium">Screenshots</td>
              <td className="py-3 pr-4 font-mono text-xs">takeScreenshot (API 30)</td>
              <td className="py-3">Fails on FLAG_SECURE windows</td>
            </tr>
            <tr className="border-b border-rule">
              <td className="py-3 pr-4 font-medium">Sensitive views</td>
              <td className="py-3 pr-4 font-mono text-xs">accessibilityDataSensitive</td>
              <td className="py-3">Hidden from services that are not accessibility tools</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed">
        Play still allows deterministic, rule-based scripts (“If Trigger X, Action Y”)
        for non-tools. An LLM planner is the banned category unless the app is a
        genuine disability tool whose core purpose is assisting people with
        disabilities. Assistants, automation tools, password managers, and launchers
        do not qualify.
      </p>
    </Section>
  );
}

function StorySix() {
  return (
    <Section
      id="story-6"
      kicker="2c. Investigation 6"
      title="Can an AI operate a phone without taking over the screen?"
    >
      <p className="max-w-3xl font-display text-xl leading-snug text-muted">
        Two stacks. Do not collapse them. Semantic accessibility occupies the
        user’s display. Computer Control is a privileged, screenshot-driven
        virtual device for the OEM assistant.
      </p>
      <PublishedLink story="6" />

      <div className="mt-10">
        <QuotePull {...QUOTES[3]} />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <StackCard
          title="Public APIs"
          items={[
            "AccessibilityService — tree, actions, gestures. Occupies the user’s screen.",
            "MediaProjection — pixels, consent dialog, not an input API.",
            "Foreground services — visible notification.",
          ]}
        />
        <StackCard
          title="Privileged"
          items={[
            "Computer Control — ACCESS_COMPUTER_CONTROL.",
            "Assistant role + agent allowlist.",
            "Screenshot analysis on a virtual device. Max six apps, one session.",
          ]}
        />
        <StackCard
          title="ADB / experimental"
          items={[
            "Shizuku / rish = user-paired wireless debugging.",
            "dumpsys, rish_display.py — preserve, do not generalize.",
            "Not a public app API. Not root. Not “Android supports this.”",
          ]}
        />
      </div>

      <p className="mt-8 max-w-3xl font-display text-lg leading-relaxed">
        Android lets a trusted OEM assistant drive apps the user is not looking at,
        by analyzing screenshots. Android lets a user-enabled accessibility service
        drive the UI the user is looking at, by reading the tree. Between those poles
        there is no public, provider-agnostic, root-free, invisible control plane.
      </p>
    </Section>
  );
}

function StackCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-rule p-5">
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function Evidence() {
  return (
    <Section id="evidence" kicker="4. Evidence matrix" title="Every headline claim, graded">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink text-[0.7rem] uppercase tracking-[0.12em] text-muted">
              <th className="py-3 pr-3 font-medium">#</th>
              <th className="py-3 pr-3 font-medium">Statement</th>
              <th className="py-3 pr-3 font-medium">Grade</th>
              <th className="py-3 pr-3 font-medium">Source</th>
              <th className="py-3 font-medium">Story</th>
            </tr>
          </thead>
          <tbody>
            {EVIDENCE.map((row) => (
              <tr key={row.n} className="border-b border-rule align-top">
                <td className="py-3 pr-3 font-mono text-xs tabular-nums text-muted">{row.n}</td>
                <td className="py-3 pr-3">{row.statement}</td>
                <td className="py-3 pr-3">
                  <GradeBadge grade={row.grade} />
                </td>
                <td className="py-3 pr-3 text-muted">{row.source}</td>
                <td className="py-3 font-mono text-xs">{row.story}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function Contradictions() {
  return (
    <Section
      id="contradictions"
      kicker="5. Contradictions"
      title="Do not pick a side in copy"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {CONTRADICTIONS.map((item) => (
          <article key={item.title} className="rounded-md border border-rule p-5">
            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Unknowns() {
  return (
    <Section id="unknowns" kicker="6. Unknowns" title="What this package does not know">
      <ol className="columns-1 gap-8 sm:columns-2">
        {UNKNOWNS.map((item, i) => (
          <li key={item} className="mb-3 break-inside-avoid text-sm leading-relaxed">
            <span className="mr-2 font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Reporting() {
  return (
    <Section id="reporting" kicker="7–10. Field kit" title="Experiments, documents, people, red lines">
      <h3 className="font-display text-2xl font-semibold">Experiments</h3>
      <p className="mt-2 max-w-3xl text-sm text-muted">
        Own data, own test app, Settings. No login screens, no credential fields,
        no FLAG_SECURE bypass, no hidden MediaProjection.
      </p>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink text-[0.7rem] uppercase tracking-[0.12em] text-muted">
              <th className="py-3 pr-3 font-medium">ID</th>
              <th className="py-3 pr-3 font-medium">What to run</th>
              <th className="py-3 font-medium">Red line</th>
            </tr>
          </thead>
          <tbody>
            {EXPERIMENTS.map((row) => (
              <tr key={row.id} className="border-b border-rule align-top">
                <td className="py-3 pr-3 font-mono text-xs">{row.id}</td>
                <td className="py-3 pr-3">{row.what}</td>
                <td className="py-3 text-muted">{row.red}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-display text-2xl font-semibold">
            <FileText className="size-5 text-slate" />
            Documents
          </h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed">
            {DOCUMENTS.map((d) => (
              <li key={d} className="border-b border-rule py-2">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold">People</h3>
          <ul className="mt-4 space-y-4">
            {PEOPLE.map((p) => (
              <li key={p.group}>
                <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate">
                  {p.group}
                </p>
                <p className="mt-1 text-sm leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Do not interview Broccoli as the protagonist of Story 4.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-mark/30 bg-mark/5 p-5 sm:p-6">
        <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-mark">
          <ShieldAlert className="size-5" />
          Red lines
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed">
          Do not implement, describe how to implement, or publish instructions for
          credential harvesting, login or 2FA bypass, hidden MediaProjection,
          tapjacking, FLAG_SECURE or Computer Control allowlist evasion, silent
          AccessibilityService enablement, or using Shizuku against other users,
          work profiles, or payment UIs. Do not coach readers to disable Advanced
          Protection or Restricted Settings. Do not upgrade a hypothesis into a
          verified claim in copy.
        </p>
      </div>
    </Section>
  );
}

function Claims() {
  return (
    <Section id="claims" kicker="11–13. Copy discipline" title="What may run, what must not">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-display text-2xl font-semibold">
            <Check className="size-5 text-ok" />
            Publication-ready
          </h3>
          <ol className="mt-5 space-y-3">
            {PUBLISHABLE.map((item, i) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 font-mono text-xs text-muted">{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-display text-2xl font-semibold">
            <Ban className="size-5 text-mark" />
            Do not publish yet
          </h3>
          <ol className="mt-5 space-y-3">
            {DO_NOT_PUBLISH.map((item, i) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 font-mono text-xs text-muted">{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <h3 className="mt-12 font-display text-2xl font-semibold">Headlines that can work</h3>
      <div className="mt-5 grid gap-6 md:grid-cols-3">
        <HeadlineCol story="4" items={HEADLINES.four} />
        <HeadlineCol story="5" items={HEADLINES.five} />
        <HeadlineCol story="6" items={HEADLINES.six} />
      </div>
      <p className="mt-6 text-sm text-muted">
        Reject anything with “exposed,” “secret API,” “bypass,” or Broccoli as hero.
      </p>

      <h3 className="mt-12 font-display text-2xl font-semibold">Reporting order</h3>
      <ol className="mt-5 max-w-3xl space-y-4">
        <li className="flex gap-3">
          <ArrowRight className="mt-1 size-4 shrink-0 text-slate" />
          <span className="text-sm leading-relaxed">
            <strong>Story 4 in the field.</strong> Mystery-shop the reporter’s own
            reports. Photograph the 45-day gate, TransUnion’s mail-only categories,
            a real certified-mail receipt. Interview three consumers who are not
            Broccoli users.
          </span>
        </li>
        <li className="flex gap-3">
          <ArrowRight className="mt-1 size-4 shrink-0 text-slate" />
          <span className="text-sm leading-relaxed">
            <strong>Story 5 in the lab.</strong> Run tree and Voice Access experiments
            on those same portals. Ask Google whether a genuine accessibility-tool
            agent may plan-and-execute assistive tasks under current Play policy.
          </span>
        </li>
        <li className="flex gap-3">
          <ArrowRight className="mt-1 size-4 shrink-0 text-slate" />
          <span className="text-sm leading-relaxed">
            <strong>Story 6 as the platform closer.</strong> Quote Computer Control’s
            screenshot sentence and Play’s autonomous-agent sentence. Do not demo a
            hidden display.
          </span>
        </li>
      </ol>
    </Section>
  );
}

function HeadlineCol({ story, items }: { story: string; items: string[] }) {
  return (
    <div>
      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate">
        Story {story}
      </p>
      <ul className="mt-3 space-y-3">
        {items.map((h) => (
          <li key={h} className="font-display text-lg font-medium leading-snug">
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sources() {
  return (
    <Section id="sources" kicker="3. Bibliography" title="Primary sources first">
      <div className="grid gap-8 md:grid-cols-2">
        {SOURCES.map((group) => (
          <div key={group.group}>
            <h3 className="font-display text-xl font-semibold">{group.group}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {group.items.map((item) => (
                <li key={item} className="border-b border-rule py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm text-muted">
        Full annotated memo, experiment IDs, and the 9 September 2026 source-by-source
        verification log sit behind this desk. Live pages were rechecked before this
        package was filed.
      </p>
    </Section>
  );
}
