import { mkdirSync, writeFileSync, copyFileSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "docs");

const CASH = "https://cash.app/$icoss";
const HALF = "https://half-a-mile.vercel.app";

const ARTICLES = [
  {
    slug: "the-cost-of-proving-youre-right",
    story: "4",
    kicker: "Investigation 4 · Consumer rights",
    title: "Your credit-report rights are free. The receipt is not.",
    dek: "Federal law gives you a free reinvestigation, generally within 30 days. The agencies that police that right still tell you to buy a certified-mail receipt if you want proof the letter arrived.",
  },
  {
    slug: "android-can-see-the-button",
    story: "5",
    kicker: "Investigation 5 · Accessibility",
    title: "Android can see the button. It cannot finish the form.",
    dek: "The accessibility APIs on an Android phone are real, documented, and powerful. They are not a license for an ordinary app to plan and tap its way through someone else’s life.",
  },
  {
    slug: "the-invisible-phone",
    story: "6",
    kicker: "Investigation 6 · Platform",
    title: "Google built background phone control — for Google",
    dek: "Android can run apps the user is not looking at. The documented way to do it is not the accessibility tree. It is a privileged, screenshot-driven virtual device reserved for the OEM assistant.",
  },
];

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => {
    if (c === "&") return "&" + "amp;";
    if (c === "<") return "&" + "lt;";
    if (c === ">") return "&" + "gt;";
    if (c === '"') return "&" + "quot;";
    return "&#39;";
  });
}

function chrome({ title, description, prefix, active, body }) {
  const css = `${prefix}site.css`;
  const home = `${prefix}`;
  const record = `${prefix}record/`;
  const privacy = `${prefix}privacy/`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="icon" type="image/svg+xml" href="${prefix}favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&family=Public+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" />
  <link rel="stylesheet" href="${css}" />
</head>
<body class="bg-paper text-ink">
  <header class="sticky top-0 z-40 border-b border-rule bg-paper/95">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <a href="${home}" class="flex min-h-11 items-center gap-3">
        <span class="grid size-8 place-items-center rounded-xs bg-ink text-paper"><span class="font-display text-sm leading-none">N</span></span>
        <span>
          <span class="block font-display text-base font-semibold leading-tight">Newsroom Desk</span>
          <span class="block font-sans text-[0.7rem] uppercase tracking-[0.14em] text-muted">Independent reporting</span>
        </span>
      </a>
      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <a href="${home}" class="inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium ${active === "edition" ? "bg-ink text-paper" : "text-muted"}">Edition</a>
        <a href="${record}" class="inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium ${active === "record" ? "bg-ink text-paper" : "text-muted"}">The record</a>
        <a href="${privacy}" class="inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium ${active === "privacy" ? "bg-ink text-paper" : "text-muted"}">Support</a>
        <a href="${HALF}" class="inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium text-muted">Half a Mile</a>
      </nav>
    </div>
  </header>
  <main>${body}</main>
  <footer class="border-t border-rule">
    <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
      <div>
        <p class="font-display text-lg text-ink">Newsroom Desk</p>
        <p class="mt-2 max-w-md text-sm leading-relaxed text-muted">Published investigations and the reporting record behind them. Ads stay off unless you opt in. Buy me a coffee: Cash App $icoss.</p>
      </div>
      <div class="flex flex-col gap-2 text-sm">
        <a href="${home}" class="text-ink hover:underline">This edition</a>
        <a href="${record}" class="text-ink hover:underline">The record</a>
        <a href="${privacy}" class="text-ink hover:underline">Support and ads</a>
        <a href="${HALF}" class="text-ink hover:underline">Half a Mile</a>
        <a href="${CASH}" class="text-ink hover:underline">Cash App $icoss</a>
      </div>
    </div>
  </footer>
  <script src="${prefix}consent.js"></script>
</body>
</html>
`;
}

function supportBox() {
  return `<aside class="rounded-lg border border-rule bg-paper-2 p-5 sm:p-6" data-support>
  <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Keep the desk independent</p>
  <h2 class="mt-2 font-display text-2xl font-semibold">Buy me a coffee</h2>
  <p class="mt-2 max-w-xl text-sm leading-relaxed text-muted">Ads stay off unless you turn them on. Until then this slot is a tip jar — Cash App $icoss.</p>
  <div class="mt-4 flex flex-wrap gap-2">
    <a href="${CASH}" class="inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper">Cash App $icoss</a>
    <a href="./privacy/" class="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink">Ads settings</a>
  </div>
</aside>`;
}

function related(prefix, except) {
  const cards = ARTICLES.filter((a) => a.slug !== except)
    .map(
      (a) => `<a href="${prefix}story/${a.slug}/" class="rounded-md border border-rule p-5 hover:bg-paper-2">
      <p class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">Story ${a.story}</p>
      <h2 class="mt-2 font-display text-xl font-semibold leading-snug">${escapeHtml(a.title)}</h2>
    </a>`,
    )
    .join("");
  return `<section class="border-t border-rule py-12">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Also from the desk</p>
      <div class="mt-5 grid gap-4 md:grid-cols-3">
        ${cards}
        <a href="${HALF}" class="rounded-md border border-rule p-5 hover:bg-paper-2">
          <p class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">Sister site</p>
          <h2 class="mt-2 font-display text-xl font-semibold leading-snug">Half a Mile</h2>
          <p class="mt-2 text-sm text-muted">A five-year-old walked to a neighborhood pond. Virginia made it a crime.</p>
        </a>
      </div>
    </div>
  </section>`;
}

mkdirSync(out, { recursive: true });
mkdirSync(join(out, "privacy"), { recursive: true });
mkdirSync(join(out, "record"), { recursive: true });
writeFileSync(join(out, ".nojekyll"), "");
copyFileSync(join(root, "public/favicon.svg"), join(out, "favicon.svg"));
try {
  copyFileSync(join(root, "public/og.jpg"), join(out, "og.jpg"));
} catch {
  /* optional */
}

const cssDir = join(root, ".vercel/output/static/assets");
let css = "";
try {
  const name = readdirSync(cssDir).find((f) => f.startsWith("styles-") && f.endsWith(".css"));
  if (name) css = readFileSync(join(cssDir, name), "utf8");
} catch {
  css = "";
}
if (!css) {
  css = `body{background:#f4f0e8;color:#1c1916;font-family:"Public Sans",system-ui,sans-serif}h1,h2{font-family:"Newsreader",serif}`;
}
writeFileSync(join(out, "site.css"), css);

writeFileSync(
  join(out, "consent.js"),
  `(() => {
  const KEY = "newsroom-desk-consent-v1";
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
  }
  window.deskConsent = {
    read,
    write(next) {
      localStorage.setItem(KEY, JSON.stringify({ ...read(), ...next, updatedAt: new Date().toISOString() }));
    }
  };
})();`,
);

const lead = ARTICLES[0];
const rest = ARTICLES.slice(1);
const homeBody = `
<section class="border-b border-rule">
  <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.45fr_0.85fr] lg:items-end">
    <div>
      <p class="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">Edition · 9 September 2026</p>
      <h1 class="mt-4 max-w-xl font-display text-[2.6rem] font-semibold leading-[1.08] text-ink sm:text-6xl">${escapeHtml(lead.title)}</h1>
      <p class="mt-6 max-w-xl font-display text-xl leading-snug text-muted">${escapeHtml(lead.dek)}</p>
      <a href="story/${lead.slug}/" class="mt-8 inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper">Read the story</a>
    </div>
    ${supportBox().replace("./privacy/", "privacy/")}
  </div>
</section>
<section class="border-b border-rule py-12">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Also published</p>
    <div class="mt-6 grid gap-4 md:grid-cols-2">
      ${rest
        .map(
          (a) => `<a href="story/${a.slug}/" class="rounded-lg border border-rule p-6 hover:bg-paper-2">
        <p class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">Story ${a.story}</p>
        <h2 class="mt-2 font-display text-2xl font-semibold leading-snug">${escapeHtml(a.title)}</h2>
        <p class="mt-3 text-sm leading-relaxed text-muted">${escapeHtml(a.dek)}</p>
      </a>`,
        )
        .join("")}
    </div>
    <p class="mt-8 text-sm text-muted">The graded evidence lives in <a href="record/" class="text-ink underline">the record</a>.</p>
  </div>
</section>
${related("", null)}
`;

writeFileSync(
  join(out, "index.html"),
  chrome({
    title: "Newsroom Desk — Edition",
    description: "Published investigations on credit-report rights, Android accessibility, and background phone control.",
    prefix: "",
    active: "edition",
    body: homeBody,
  }),
);

writeFileSync(
  join(out, "privacy/index.html"),
  chrome({
    title: "Support and ads — Newsroom Desk",
    description: "Ads are off unless you opt in. Default support is Buy me a coffee via Cash App $icoss.",
    prefix: "../",
    active: "privacy",
    body: `<div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p class="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">Support</p>
      <h1 class="mt-3 font-display text-4xl font-semibold">Ads stay off until you say so</h1>
      <p class="mt-5 font-display text-xl leading-snug text-muted">The default on every page is a Buy me a coffee banner and Cash App $icoss. No ad network script loads unless you opt in. House ads for Jules Gutter Cleaning are geo-fenced to the Massachusetts South Shore.</p>
      <div class="mt-10">${supportBox().replace("./privacy/", "./")}</div>
      <p class="mt-8 text-sm leading-relaxed">Location is requested only after ads are on, and only to decide whether a South Shore house ad may show. Coordinates stay in the browser.</p>
    </div>`,
  }),
);

writeFileSync(
  join(out, "record/index.html"),
  chrome({
    title: "The record — Newsroom Desk",
    description: "Reporting record for investigations 4, 5, and 6.",
    prefix: "../",
    active: "record",
    body: `<div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p class="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">Reporting record · 9 September 2026</p>
      <h1 class="mt-3 font-display text-4xl font-semibold">Stories 4, 5, and 6 are live</h1>
      <p class="mt-5 font-display text-xl leading-snug text-muted">This record is the graded evidence behind the edition. Published copy uses only verified statute, agency, bureau, and Android documentation. Hypotheses stay hypotheses.</p>
      <ul class="mt-8 space-y-4 text-sm leading-relaxed">
        ${ARTICLES.map((a) => `<li><a class="font-display text-lg text-ink underline decoration-rule" href="../story/${a.slug}/">${escapeHtml(a.title)}</a> — published.</li>`).join("")}
        <li><a class="font-display text-lg text-ink underline decoration-rule" href="${HALF}">Half a Mile</a> — sister essay, also live.</li>
      </ul>
      <p class="mt-8 text-sm text-muted">Do not publish: disparate-impact findings, “bureaus refuse email to evade FCRA,” Broccoli as proof, FLAG_SECURE as an accessibility kill-switch, or Computer Control as a third-party app API.</p>
    </div>${related("../", null)}`,
  }),
);

const bodies = {
  "the-cost-of-proving-youre-right": [
    ["p", "The Fair Credit Reporting Act does not charge you to be believed. If an item on a nationwide file is incomplete or inaccurate, Equifax, Experian, and TransUnion must reinvestigate, free of charge, generally within 30 days of notice."],
    ["q", "FCRA", "the agency shall, free of charge, conduct a reasonable reinvestigation … before the end of the 30-day period beginning on the date on which the agency receives the notice of the dispute", "15 U.S.C. § 1681i(a)(1)(A)"],
    ["p", "The CFPB’s public guidance, last reviewed 2 September 2026, lists three official doors: websites, phone lines, and the U.S. mail. Email is not on the list."],
    ["h2", "The receipt the government recommends"],
    ["q", "FTC", "Send your letter by certified mail with “return receipt requested,” so you can document that the credit bureaus got it.", "FTC sample letter, April 2024"],
    ["p", "The investigation is free. The recommended paper trail is not. At July 2026 USPS rates, a one-ounce certified letter with electronic return receipt is $9.28. Reconfirm Notice 123 before any later reprint."],
    ["h2", "The website is not always a complete path"],
    ["p", "TransUnion’s dispute FAQ, rechecked 9 September 2026, caps online evidence at five documents and five megabytes. Public-record disputes and changes of name, SSN, date of birth, or address go by mail."],
    ["p", "A furnisher must investigate a direct dispute only if it arrives at a specified address. Wrong box, no duty. 12 CFR 1022.43(c). The CFPB complaint door, as of April 2026, tells credit-reporting complainants to wait 45 days. As of June 2026, complaint accounts require email-and-mobile two-factor authentication."],
    ["note", "This story does not find that dispute rights are inaccessible to disabled people. That remains a hypothesis. It does not find that the bureaus refuse email to evade the FCRA."],
  ],
  "android-can-see-the-button": [
    ["p", "Android documents an accessibility service that, once the user turns it on in Settings, can read on-screen controls and perform actions. Play treats the same primitive as a malware surface."],
    ["q", "Play policy", "Any use of the Accessibility API that enables an app to autonomously initiate, plan, and execute actions or decisions is strictly prohibited.", "Google Play, Use of the AccessibilityService API"],
    ["p", "Genuine accessibility tools are carved out. Assistants, automation tools, password managers, and launchers are not. A deterministic if-X-then-Y script can still ship. An LLM planner cannot, unless the app is a disability-core tool."],
    ["p", "Google’s own docs state that many apps do not appropriately support ACTION_CLICK, and describe a gesture-tap fallback. A true return from performAction does not prove the app did the thing."],
    ["q", "Voice Access", "If your device is awake and unlocked, anyone can control it with their voice.", "Android Accessibility Help"],
    ["note", "This story does not find that enabling an accessibility service lets an AI use your phone. It does not treat any automation testbed as evidence that a disabled consumer can complete a bureau dispute."],
  ],
  "the-invisible-phone": [
    ["p", "There are two stacks. Journalism that collapses them will get the platform wrong."],
    ["p", "The public stack is AccessibilityService: it reads the tree and acts on the display the user is looking at. The privileged stack is Computer Control: an OEM assistant, ACCESS_COMPUTER_CONTROL, a virtual device, and screenshot analysis. Third parties cannot hold that permission."],
    ["q", "Computer Control", "the assistant app determines how to navigate by analyzing screenshots of the target app’s UI.", "Android Developers, Computer Control"],
    ["p", "FLAG_SECURE blocks screenshots, not the accessibility tree. The tree-side control in Android 16 is accessibilityDataSensitive."],
    ["note", "There is, in the public API surface, no general, root-free, provider-agnostic way for a third-party agent to operate Android without occupying the user’s screen."],
  ],
};

for (const article of ARTICLES) {
  const dir = join(out, "story", article.slug);
  mkdirSync(dir, { recursive: true });
  const blocks = (bodies[article.slug] || [])
    .map((b) => {
      if (b[0] === "p") return `<p class="font-display text-lg leading-relaxed">${escapeHtml(b[1])}</p>`;
      if (b[0] === "h2") return `<h2 class="pt-4 font-display text-2xl font-semibold">${escapeHtml(b[1])}</h2>`;
      if (b[0] === "note") return `<p class="rounded-md border border-rule bg-paper-2 px-4 py-3 text-sm leading-relaxed text-muted">${escapeHtml(b[1])}</p>`;
      return `<figure class="border-l-2 border-ink pl-5"><figcaption class="mb-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">${escapeHtml(b[1])}</figcaption><blockquote class="font-display text-xl font-medium leading-snug">${escapeHtml(b[2])}</blockquote><p class="mt-3 font-sans text-xs text-muted">${escapeHtml(b[3])}</p></figure>`;
    })
    .join("\n");
  const body = `<article class="border-b border-rule">
    <header class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p class="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">${escapeHtml(article.kicker)}</p>
      <h1 class="mt-4 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">${escapeHtml(article.title)}</h1>
      <p class="mt-5 font-display text-xl leading-snug text-muted">${escapeHtml(article.dek)}</p>
      <p class="mt-6 text-sm text-muted">Newsroom Desk · 9 September 2026 · <a href="../../record/" class="underline">See the record</a></p>
    </header>
    <div class="mx-auto max-w-3xl space-y-6 px-4 pb-16 sm:px-6">
      ${blocks}
      <div class="pt-8">${supportBox().replace("./privacy/", "../../privacy/")}</div>
    </div>
  </article>
  ${related("../../", article.slug)}`;
  writeFileSync(
    join(dir, "index.html"),
    chrome({
      title: `${article.title} — Newsroom Desk`,
      description: article.dek,
      prefix: "../../",
      active: "edition",
      body,
    }),
  );
}

console.log("Wrote", out);
