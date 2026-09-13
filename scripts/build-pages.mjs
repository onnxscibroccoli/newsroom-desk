import { mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "docs");

const CASH = "https://cash.app/$icoss";
const HALF = "https://half-a-mile.vercel.app";
const LIVE = "https://newsroom-desk-five.vercel.app";
const PAGES = "https://onnxscibroccoli.github.io/desk";
const GITHUB = "https://github.com/onnxscibroccoli/newsroom-desk";
const PHONE_DISPLAY = "(267) 667-2321";
const TEL = "tel:+12676672321";

const ARTICLES = [
  {
    slug: "weymouth-flock-cameras-surveillance",
    story: "7",
    kicker: "Investigation 7 · Public records",
    title: "Thirty-Five Cameras",
    dek: "Four cameras on two Cape Cod bridges were not a search. Thirty-five cameras in one Massachusetts city, logging more than half a million plates in 30 days, are the network the Supreme Judicial Court said would be. Weymouth is running it without a statute and without a warrant.",
    published: "12 September 2026",
  },
  {
    slug: "the-cost-of-proving-youre-right",
    story: "4",
    kicker: "Investigation 4 · Consumer rights",
    title: "Your credit-report rights are free. The receipt is not.",
    dek: "Federal law gives you a free reinvestigation, generally within 30 days. The agencies that police that right still tell you to buy a certified-mail receipt if you want proof the letter arrived.",
    published: "9 September 2026",
  },
  {
    slug: "android-can-see-the-button",
    story: "5",
    kicker: "Investigation 5 · Accessibility",
    title: "Android can see the button. It cannot finish the form.",
    dek: "The accessibility APIs on an Android phone are real, documented, and powerful. They are not a license for an ordinary app to plan and tap its way through someone else’s life.",
    published: "9 September 2026",
  },
  {
    slug: "the-invisible-phone",
    story: "6",
    kicker: "Investigation 6 · Platform",
    title: "Google built background phone control — for Google",
    dek: "Android can run apps the user is not looking at. The documented way to do it is not the accessibility tree. It is a privileged, screenshot-driven virtual device reserved for the OEM assistant.",
    published: "9 September 2026",
  },
];

const DO_NOT_PUBLISH = [
  "Disparate-impact findings about disabled consumers (hypothesis).",
  "“The bureaus refuse email to evade FCRA.”",
  "“Online disputes are fake.”",
  "“Certified mail is required.” (Recommended, not statutory.)",
  "Broccoli as proof a disabled user can complete a dispute.",
  "“Just enable AccessibilityService and an AI can use your phone.”",
  "FLAG_SECURE as an accessibility kill-switch.",
  "Computer Control as a third-party app API.",
  "A court has already held that Weymouth’s Flock cameras are unconstitutional. (McCarthy decided four Cape Cod bridges. This desk applies that test to a 35-camera city; it does not invent a Weymouth holding.)",
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

function chrome({ title, description, prefix, active, body, path }) {
  const css = `${prefix}site.css`;
  const home = prefix === "" ? "./" : prefix;
  const record = `${prefix}record/`;
  const privacy = `${prefix}privacy/`;
  const canonical = `${PAGES}${path}`;
  const navLink = (href, id, label) =>
    `<a href="${href}" class="inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium ${active === id ? "bg-ink text-paper" : "text-muted"}">${label}</a>`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" type="image/svg+xml" href="${prefix}favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&family=Public+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" />
  <link rel="stylesheet" href="${css}" />
</head>
<body class="bg-paper text-ink">
  <a href="#main" class="skip">Skip to content</a>
  <header class="sticky top-0 z-40 border-b border-rule bg-paper-95">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <a href="${home}" class="flex min-h-11 items-center gap-3">
        <span class="grid size-8 place-items-center rounded-xs bg-ink text-paper"><span class="font-display text-sm leading-none">N</span></span>
        <span>
          <span class="block font-display text-base font-semibold leading-tight">Newsroom Desk</span>
          <span class="block font-sans text-[0.7rem] uppercase tracking-[0.14em] text-muted">Independent reporting</span>
        </span>
      </a>
      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        ${navLink(home, "edition", "Edition")}
        ${navLink(record, "record", "The record")}
        ${navLink(privacy, "privacy", "Support")}
        <a href="${HALF}" class="inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium text-muted">Half a Mile</a>
      </nav>
      <details class="md:hidden">
        <summary class="grid size-11 place-items-center rounded-sm border border-rule">Menu</summary>
        <nav class="menu" aria-label="Mobile">
          <a href="${home}">Edition</a>
          <a href="${record}">The record</a>
          <a href="${privacy}">Support</a>
          <a href="${HALF}">Half a Mile</a>
        </nav>
      </details>
    </div>
  </header>
  <main id="main">${body}</main>
  <footer class="border-t border-rule">
    <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
      <div>
        <p class="font-display text-lg text-ink">Newsroom Desk</p>
        <p class="mt-2 max-w-md text-sm leading-relaxed text-muted">Published investigations and the reporting record behind them. Ads stay off unless you opt in. Buy me a coffee: Cash App $icoss. Paying ads, if you opt in, sit in a bar at the bottom of the screen.</p>
      </div>
      <div class="flex flex-col gap-2 text-sm">
        <a href="${home}" class="text-ink hover:underline">This edition</a>
        <a href="${record}" class="text-ink hover:underline">The record</a>
        <a href="${privacy}" class="text-ink hover:underline">Support and ads</a>
        <a href="${HALF}" class="text-ink hover:underline">Half a Mile</a>
        <a href="${CASH}" class="text-ink hover:underline">Cash App $icoss</a>
        <a href="${TEL}" class="text-ink hover:underline">${PHONE_DISPLAY}</a>
      </div>
    </div>
  </footer>
  <aside id="ad-rail" class="ad-rail" hidden aria-label="Advertisement"></aside>
  <script src="${prefix}consent.js"></script>
</body>
</html>
`;
}

function supportBox(privacyHref) {
  return `<aside class="rounded-lg border border-rule bg-paper-2 p-5 sm:p-6" data-support data-privacy="${privacyHref}">
  <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Keep the desk independent</p>
  <h2 class="mt-2 font-display text-2xl font-semibold">Buy me a coffee</h2>
  <p class="mt-2 max-w-xl text-sm leading-relaxed text-muted">Ads stay off unless you turn them on. Until then this slot is a tip jar — Cash App $icoss. If you would rather see a paying ad than tip, opt in and a bar appears at the bottom of the screen.</p>
  <div class="mt-4 flex flex-wrap gap-2">
    <a href="${CASH}" class="inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper">Cash App $icoss</a>
    <a href="${privacyHref}" class="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink">Ads settings</a>
  </div>
</aside>`;
}

function related(prefix, except) {
  const cards = ARTICLES.filter((a) => a.slug !== except)
    .map(
      (a) => `<a href="${prefix}story/${a.slug}/" class="rounded-md border border-rule p-5 hover:bg-paper-2">
      <p class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">Story ${a.story} · published</p>
      <h2 class="mt-2 font-display text-xl font-semibold leading-snug">${escapeHtml(a.title)}</h2>
      <p class="mt-2 text-sm leading-relaxed text-muted">${escapeHtml(a.dek)}</p>
    </a>`,
    )
    .join("");
  return `<section class="border-t border-rule py-12">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Also from the desk</p>
      <p class="mt-2 max-w-2xl text-sm text-muted">Every live piece back-links the others. Nothing here upgrades a hypothesis into a finding.</p>
      <div class="mt-5 grid gap-4 md:grid-cols-3">
        ${cards}
        <a href="${HALF}" class="rounded-md border border-rule p-5 hover:bg-paper-2">
          <p class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">Sister site · live</p>
          <h2 class="mt-2 font-display text-xl font-semibold leading-snug">Half a Mile</h2>
          <p class="mt-2 text-sm text-muted">A five-year-old walked to a neighborhood pond. Virginia made it a crime.</p>
        </a>
      </div>
    </div>
  </section>`;
}

const SITE_CSS = `:root {
  --paper: #f4f0e8;
  --paper-2: #ebe6dc;
  --ink: #1c1916;
  --muted: #6f6a63;
  --rule: #d4cdc2;
  --slate: #3d4a55;
}
* { box-sizing: border-box; }
html, body { margin: 0; background: var(--paper); color: var(--ink); }
body { font-family: "Public Sans", "Segoe UI", system-ui, sans-serif; line-height: 1.55; }
h1, h2, h3, .font-display { font-family: "Newsreader", Palatino, serif; letter-spacing: -0.02em; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; }
.skip { position: absolute; left: -999px; }
.skip:focus { left: 1rem; top: 1rem; z-index: 50; background: var(--ink); color: var(--paper); padding: 0.5rem 0.75rem; }
.bg-paper { background: var(--paper); }
.bg-paper-2 { background: var(--paper-2); }
.bg-paper-95 { background: color-mix(in oklab, var(--paper) 95%, transparent); }
.bg-ink { background: var(--ink); }
.text-ink { color: var(--ink); }
.text-muted { color: var(--muted); }
.text-paper { color: var(--paper); }
.text-slate { color: var(--slate); }
.border-rule { border-color: var(--rule); }
.border-ink { border-color: var(--ink); }
.border { border: 1px solid var(--rule); }
.border-t { border-top: 1px solid var(--rule); }
.border-b { border-bottom: 1px solid var(--rule); }
.border-l-2 { border-left: 2px solid var(--ink); }
.sticky { position: sticky; }
.top-0 { top: 0; }
.z-40 { z-index: 40; }
.mx-auto { margin-left: auto; margin-right: auto; }
.max-w-6xl { max-width: 72rem; }
.max-w-3xl { max-width: 48rem; }
.max-w-xl { max-width: 36rem; }
.max-w-md { max-width: 28rem; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.py-14 { padding-top: 3.5rem; padding-bottom: 3.5rem; }
.p-4 { padding: 1rem; }
.p-5 { padding: 1.25rem; }
.p-6 { padding: 1.5rem; }
.pt-4 { padding-top: 1rem; }
.pt-8 { padding-top: 2rem; }
.pb-14 { padding-bottom: 3.5rem; }
.pb-16 { padding-bottom: 4rem; }
.pl-5 { padding-left: 1.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 0.75rem; }
.mt-4 { margin-top: 1rem; }
.mt-5 { margin-top: 1.25rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.mt-10 { margin-top: 2.5rem; }
.mt-12 { margin-top: 3rem; }
.flex { display: flex; }
.grid { display: grid; }
.inline-flex { display: inline-flex; }
.block { display: block; }
.hidden { display: none; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-8 { gap: 2rem; }
.gap-10 { gap: 2.5rem; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.min-h-11 { min-height: 2.75rem; }
.size-8 { width: 2rem; height: 2rem; }
.size-11 { width: 2.75rem; height: 2.75rem; }
.place-items-center { display: grid; place-items: center; }
.rounded-xs { border-radius: 4px; }
.rounded-sm { border-radius: 8px; }
.rounded-md { border-radius: 12px; }
.rounded-lg { border-radius: 20px; }
.text-sm { font-size: 0.875rem; }
.text-xs { font-size: 0.75rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-4xl { font-size: 2.25rem; }
.text-[0.7rem] { font-size: 0.7rem; }
.text-[0.72rem] { font-size: 0.72rem; }
.text-[2.6rem] { font-size: 2.6rem; }
.font-semibold { font-weight: 600; }
.font-medium { font-weight: 500; }
.uppercase { text-transform: uppercase; }
.tracking-[0.14em] { letter-spacing: 0.14em; }
.tracking-[0.16em] { letter-spacing: 0.16em; }
.tracking-[0.2em] { letter-spacing: 0.2em; }
.leading-tight { line-height: 1.25; }
.leading-snug { line-height: 1.375; }
.leading-relaxed { line-height: 1.625; }
.leading-none { line-height: 1; }
.leading-[1.1] { line-height: 1.1; }
.leading-[1.08] { line-height: 1.08; }
.underline { text-decoration: underline; }
.decoration-rule { text-decoration-color: var(--rule); }
.underline-offset-2 { text-underline-offset: 2px; }
.hover\\:underline:hover { text-decoration: underline; }
.hover\\:bg-paper-2:hover { background: var(--paper-2); }
.space-y-3 > * + * { margin-top: 0.75rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.font-sans { font-family: "Public Sans", "Segoe UI", system-ui, sans-serif; }
.font-display { font-family: "Newsreader", Palatino, serif; }
details { position: relative; }
details summary { list-style: none; }
details summary::-webkit-details-marker { display: none; }
.menu { position: absolute; right: 1rem; margin-top: 0.5rem; display: grid; min-width: 12rem; gap: 0.25rem; border: 1px solid var(--rule); background: var(--paper); padding: 0.5rem; border-radius: 8px; }
.menu a { min-height: 2.75rem; display: flex; align-items: center; padding: 0 0.75rem; }
label.row { display: flex; align-items: center; gap: 0.75rem; min-height: 2.75rem; font-size: 0.875rem; }
.ad-rail { position: fixed; left: 0; right: 0; bottom: 0; z-index: 50; border-top: 1px solid var(--rule); background: color-mix(in oklab, var(--paper-2) 95%, transparent); }
.ad-rail-inner { max-width: 72rem; margin: 0 auto; padding: 0.7rem 1rem; display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; justify-content: space-between; }
body.has-ads { padding-bottom: 7rem; }
@media (min-width: 40rem) {
  .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .sm\\:py-16 { padding-top: 4rem; padding-bottom: 4rem; }
  .sm\\:py-20 { padding-top: 5rem; padding-bottom: 5rem; }
  .sm\\:p-6 { padding: 1.5rem; }
  .sm\\:text-5xl { font-size: 3rem; }
  .sm\\:text-6xl { font-size: 3.75rem; }
}
@media (min-width: 48rem) {
  .md\\:flex { display: flex; }
  .md\\:hidden { display: none; }
  .md\\:grid-cols-2 { grid-template-columns: 1fr 1fr; }
  .md\\:grid-cols-3 { grid-template-columns: 1fr 1fr 1fr; }
}
@media (min-width: 64rem) {
  .lg\\:grid-cols-\\[1\\.45fr_0\\.85fr\\] { grid-template-columns: 1.45fr 0.85fr; }
  .lg\\:items-end { align-items: end; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
`;

const CONSENT_JS = `(() => {
  const KEY = "newsroom-desk-consent-v1";
  const CASH = "https://cash.app/$icoss";
  const TEL = "tel:+12676672321";
  const PHONE = "(267) 667-2321";
  const BOX = { minLat: 41.98, maxLat: 42.32, minLng: -71.12, maxLng: -70.64 };
  function inSouthShore(lat, lng) {
    return lat >= BOX.minLat && lat <= BOX.maxLat && lng >= BOX.minLng && lng <= BOX.maxLng;
  }
  function read() {
    try {
      const parsed = JSON.parse(localStorage.getItem(KEY) || "{}");
      return { ads: parsed.ads === true, geo: parsed.geo === true, updatedAt: parsed.updatedAt || "" };
    } catch {
      return { ads: false, geo: false, updatedAt: "" };
    }
  }
  function write(partial) {
    const next = { ...read(), ...partial, updatedAt: new Date().toISOString() };
    if (!next.ads) next.geo = false;
    localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("desk-consent"));
    return next;
  }
  function coffee(privacy) {
    return \`
      <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Keep the desk independent</p>
      <h2 class="mt-2 font-display text-2xl font-semibold">Buy me a coffee</h2>
      <p class="mt-2 max-w-xl text-sm leading-relaxed text-muted">Ads stay off unless you turn them on. Until then this slot is a tip jar — Cash App $icoss. If you would rather see a paying ad than tip, opt in and a bar appears at the bottom of the screen.</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <a href="\${CASH}" class="inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper">Cash App $icoss</a>
        <button type="button" data-opt-in-ads class="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink">Show ads instead</button>
        <a href="\${privacy}" class="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink">Ads settings</a>
      </div>
    \`;
  }
  function adsOnCard(privacy) {
    return \`
      <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Ads are on</p>
      <h2 class="mt-2 font-display text-2xl font-semibold">Paying ads sit at the bottom</h2>
      <p class="mt-2 max-w-xl text-sm leading-relaxed text-muted">A non-intrusive bar funds the desk. Prefer to skip ads? Tip instead — Cash App $icoss.</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <a href="\${CASH}" class="inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper">Cash App $icoss</a>
        <a href="\${privacy}" class="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink">Ad settings</a>
      </div>
    \`;
  }
  function julesRail(privacy) {
    return \`<div class="ad-rail-inner">
      <div>
        <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Advertisement · Paid · South Shore</p>
        <p class="mt-1 font-display text-lg font-semibold">Jules Gutter Cleaning</p>
        <p class="text-sm text-muted">Gutters cleared. Downspouts flowing. South Shore Massachusetts.</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <a href="\${TEL}" rel="sponsored nofollow" class="inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper">\${PHONE}</a>
        <a href="\${CASH}" rel="sponsored nofollow" class="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink">Cash App $icoss</a>
        <a href="\${privacy}" class="inline-flex min-h-11 items-center text-xs text-muted underline">Ad settings</a>
      </div>
    </div>\`;
  }
  function houseRail(privacy) {
    return \`<div class="ad-rail-inner">
      <div>
        <p class="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Advertisement · Paid placement</p>
        <p class="mt-1 font-display text-lg font-semibold">Advertise on this desk</p>
        <p class="text-sm text-muted">A non-intrusive paying ad funds the next investigation. Tip if you want; this bar is the other door.</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <a href="\${CASH}" rel="sponsored nofollow" class="inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper">Buy this space $icoss</a>
        <a href="\${privacy}" class="inline-flex min-h-11 items-center text-xs text-muted underline">Ad settings</a>
      </div>
    </div>\`;
  }
  function renderSlots(consent, geo) {
    document.querySelectorAll("[data-support]").forEach((el) => {
      const privacy = el.getAttribute("data-privacy") || "privacy/";
      el.innerHTML = consent.ads ? adsOnCard(privacy) : coffee(privacy);
    });
    const rail = document.getElementById("ad-rail");
    if (rail) {
      const privacy = document.querySelector("[data-support]")?.getAttribute("data-privacy") || "privacy/";
      if (consent.ads) {
        rail.hidden = false;
        document.body.classList.add("has-ads");
        rail.innerHTML = geo === "south-shore" ? julesRail(privacy) : houseRail(privacy);
      } else {
        rail.hidden = true;
        document.body.classList.remove("has-ads");
        rail.innerHTML = "";
      }
    }
  }
  function syncForm(consent) {
    const ads = document.querySelector("[data-ads-toggle]");
    const geo = document.querySelector("[data-geo-toggle]");
    if (ads) ads.checked = consent.ads;
    if (geo) {
      geo.checked = consent.geo;
      geo.disabled = !consent.ads;
    }
  }
  function locateAndPaint() {
    const consent = read();
    syncForm(consent);
    if (!consent.ads || !consent.geo || !navigator.geolocation) {
      renderSlots(consent, "unknown");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        renderSlots(consent, inSouthShore(pos.coords.latitude, pos.coords.longitude) ? "south-shore" : "elsewhere");
      },
      () => renderSlots(consent, "unknown"),
      { maximumAge: 86400000, timeout: 8000, enableHighAccuracy: false },
    );
  }
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-opt-in-ads]")) write({ ads: true });
  });
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.matches("[data-ads-toggle]")) write({ ads: t.checked, geo: t.checked ? read().geo : false });
    if (t.matches("[data-geo-toggle]")) write({ geo: t.checked });
  });
  window.addEventListener("desk-consent", locateAndPaint);
  locateAndPaint();
})();
`;

mkdirSync(out, { recursive: true });
mkdirSync(join(out, "privacy"), { recursive: true });
mkdirSync(join(out, "record"), { recursive: true });
writeFileSync(join(out, ".nojekyll"), "");
copyFileSync(join(root, "public/favicon.svg"), join(out, "favicon.svg"));
copyFileSync(join(root, "public/google509c8bb541abfc72.html"), join(out, "google509c8bb541abfc72.html"));
const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${PAGES}/sitemap.xml\n`;
const lastmod = "2026-09-12";
const sitemapUrls = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/record/", changefreq: "weekly", priority: "0.9" },
  { path: "/privacy/", changefreq: "monthly", priority: "0.5" },
  ...ARTICLES.map((a) => ({ path: `/story/${a.slug}/`, changefreq: "monthly", priority: "0.8" })),
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${PAGES}${u.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(root, "public/robots.txt"), robotsTxt);
writeFileSync(join(root, "public/sitemap.xml"), sitemapXml);
writeFileSync(join(out, "robots.txt"), robotsTxt);
writeFileSync(join(out, "sitemap.xml"), sitemapXml);
try {
  copyFileSync(join(root, "public/og.jpg"), join(out, "og.jpg"));
} catch {
  /* optional */
}

writeFileSync(join(out, "site.css"), SITE_CSS);
writeFileSync(join(out, "consent.js"), CONSENT_JS);

const lead = ARTICLES[0];
const rest = ARTICLES.slice(1);
const homeBody = `
<section class="border-b border-rule">
  <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.45fr_0.85fr] lg:items-end">
    <div>
      <p class="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">Edition · 12 September 2026</p>
      <h1 class="mt-4 max-w-xl font-display text-[2.6rem] font-semibold leading-[1.08] text-ink sm:text-6xl">${escapeHtml(lead.title)}</h1>
      <p class="mt-6 max-w-xl font-display text-xl leading-snug text-muted">${escapeHtml(lead.dek)}</p>
      <a href="story/${lead.slug}/" class="mt-8 inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper">Read the story</a>
    </div>
    ${supportBox("privacy/")}
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
    <p class="mt-8 text-sm text-muted">The graded evidence lives in <a href="record/" class="text-ink underline">the record</a>. Every story back-links the others.</p>
  </div>
</section>
${related("", null)}
`;

writeFileSync(
  join(out, "index.html"),
  chrome({
    title: "Newsroom Desk — Edition",
    description: "Published investigations on Flock cameras in Weymouth, credit-report rights, Android accessibility, and background phone control. Ads off unless you opt in.",
    prefix: "",
    active: "edition",
    path: "/",
    body: homeBody,
  }),
);

writeFileSync(
  join(out, "privacy/index.html"),
  chrome({
    title: "Support and ads — Newsroom Desk",
    description: "Ads are off unless you opt in. Default support is Buy me a coffee via Cash App $icoss. Paying ads sit at the bottom of the screen. South Shore house ads for Jules Gutter Cleaning.",
    prefix: "../",
    active: "privacy",
    path: "/privacy/",
    body: `<div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p class="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">Support</p>
      <h1 class="mt-3 font-display text-4xl font-semibold">Tip, or a small ad at the bottom</h1>
      <p class="mt-5 font-display text-xl leading-snug text-muted">The desk has to be paid for. The default is Buy me a coffee via Cash App $icoss. If you would rather not tip, opt in and a non-intrusive paying ad sits at the bottom of the screen. No third-party ad network loads until you say so.</p>
      <div class="mt-10">${supportBox("./")}</div>
      <section class="mt-12 space-y-4 text-sm leading-relaxed">
        <h2 class="font-display text-2xl font-semibold">What you can choose</h2>
        <p><strong>Default.</strong> Tip jar only. <a href="${CASH}" class="underline decoration-rule underline-offset-2">Cash App $icoss</a>.</p>
        <p><strong>Paying ads, if you opt in.</strong> A first-party bar at the bottom of every page. That inventory funds the reporting when a reader does not want to buy a coffee. No Google Ads or other network script is attached yet.</p>
        <p><strong>Local South Shore ads, if you also opt in to location.</strong> Jules Gutter Cleaning is the house advertiser for Quincy, Braintree, Weymouth, Hingham, Hull, Cohasset, Scituate, Norwell, and nearby towns. The creative includes <a href="${TEL}" class="underline">${PHONE_DISPLAY}</a>. Outside that fence you still see the national paying bar, not Jules.</p>
        <p><strong>Location.</strong> Off unless you turn it on after ads. Coordinates are checked in the browser against a bounding box and are not sent to a broker.</p>
      </section>
      <section class="mt-10 rounded-lg border border-rule p-5">
        <h2 class="font-display text-xl font-semibold">Your settings</h2>
        <label class="row mt-4"><input type="checkbox" data-ads-toggle /> I opt in to paying ads at the bottom of the screen</label>
        <label class="row mt-2"><input type="checkbox" data-geo-toggle /> Allow location for local South Shore ads (Jules Gutter Cleaning)</label>
        <p class="mt-3 text-xs text-muted">Stored on this device only. Clearing site data resets to ads off.</p>
      </section>
    </div>`,
  }),
);

writeFileSync(
  join(out, "record/index.html"),
  chrome({
    title: "The record — Newsroom Desk",
    description: "Reporting record for investigations 4, 5, 6, and 7, with every published story linked.",
    prefix: "../",
    active: "record",
    path: "/record/",
    body: `<div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p class="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">Reporting record · 12 September 2026</p>
      <h1 class="mt-3 font-display text-4xl font-semibold">Stories 4, 5, 6, and 7 are live</h1>
      <p class="mt-5 font-display text-xl leading-snug text-muted">This record is the graded evidence behind the edition. Published copy uses only verified statute, agency, bureau, Android documentation, and departmental portals. Hypotheses stay hypotheses. Every live piece is linked here.</p>
      <p class="mt-6 text-sm leading-relaxed text-muted">Live: <a class="text-ink underline" href="${LIVE}">${LIVE.replace("https://", "")}</a> · <a class="text-ink underline" href="${PAGES}">static pages</a> · <a class="text-ink underline" href="${GITHUB}">source</a>.</p>
      <p class="mt-8 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">Live this edition</p>
      <ul class="mt-4 grid gap-3">
        ${ARTICLES.map(
          (a) => `<li><a class="block rounded-md border border-rule p-4 hover:bg-paper-2" href="../story/${a.slug}/"><span class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">Story ${a.story} · published</span><span class="mt-1 block font-display text-lg font-semibold leading-snug">${escapeHtml(a.title)}</span></a></li>`,
        ).join("")}
        <li><a class="block rounded-md border border-rule p-4 hover:bg-paper-2" href="${HALF}"><span class="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">Sister site · live</span><span class="mt-1 block font-display text-lg font-semibold leading-snug">Half a Mile</span></a></li>
      </ul>
      <p class="mt-8 text-sm leading-relaxed text-muted">Ads stay off unless you opt in. Buy me a coffee: <a class="text-ink underline" href="${CASH}">Cash App $icoss</a>. If you skip the tip, a paying ad sits at the bottom of the screen. South Shore Jules ads include <a class="text-ink underline" href="${TEL}">${PHONE_DISPLAY}</a>. Search index file: google509c8bb541abfc72.html. <a class="text-ink underline" href="../privacy/">Support and ads</a>.</p>
      <h2 class="mt-12 font-display text-2xl font-semibold">Do not publish yet</h2>
      <ol class="mt-4 space-y-3 text-sm leading-relaxed">
        ${DO_NOT_PUBLISH.map((item, i) => `<li>${i + 1}. ${escapeHtml(item)}</li>`).join("")}
      </ol>
    </div>${related("../", null)}`,
  }),
);

const bodies = {
  "weymouth-flock-cameras-surveillance": [
    ["p", "In thirty days ending around 10 September 2026, Weymouth Police Department’s Flock Safety portal reported 577,844 unique plate reads, 267 search sessions, and 4,297 hotlist hits across 35 cameras. That is not a stolen-car program. That is a warrantless location store of almost every car that moved through a 17-square-mile city. The same page says the data is owned by the department, is never sold, is purged after 30 days, and may not be used for immigration enforcement, ordinary traffic enforcement, harassment, or personal use. A vendor-hosted policy is not a warrant. It is not a statute. It does not answer the constitutional question the Supreme Judicial Court already wrote down."],
    ["q", "SJC", "With enough cameras in enough locations, the historic location data from an ALPR system in Massachusetts would invade a reasonable expectation of privacy and would constitute a search for constitutional purposes.", "Commonwealth v. McCarthy, 484 Mass. 493 (2020)"],
    ["p", "Four cameras at two Cape Cod bridges were not that search. Justice Gaziano said so, under the Fourth Amendment and art. 14 of the Massachusetts Declaration of Rights. He also said a person has “a constitutionally protected expectation of privacy in the whole of his public movements,” and that a dense enough historic ALPR network would invade it. Weymouth is not four cameras on two bridges. It is a citywide grid. This desk applies the test the Court wrote. On the department’s own numbers, the test is met."],
    ["h2", "What the cameras are"],
    ["p", "Flock Safety sells police departments a subscription: pole-mounted cameras, a cloud database, real-time alerts against stolen-car and missing-person hotlists, and the ability to search historical plate reads after a crime. Weymouth’s portal says the cameras do not detect facial recognition, people, gender, or race. That is a vendor assurance, not a laboratory finding published by the town. Massachusetts already treats face-matching as a constrained tool — G.L. c. 6, § 220. License plates are not faces. The constitutional question is not whether a single plate in public is private. It is whether enough stamps, kept long enough, reconstruct a life. That is Carpenter. That is Augustine. That is McCarthy."],
    ["p", "Over 80 Massachusetts police departments have contracted with Flock Safety, per the ACLU of Massachusetts (October 2025). Flock’s business model rewards sharing: departments that open their cameras to the national network can search that network in return. Whether Weymouth has done so is supposed to appear in a portal field labeled “Organizations granted access to Weymouth MA PD data.” This newsroom has not independently extracted the partner names from that page. That gap does not shrink the camera count. It means the dragnet may already be larger than the 35 poles."],
    ["h2", "The portal is not a warrant"],
    ["p", "Weymouth’s transparency page, last updated 10 September 2026, is the closest thing in public to a municipal ALPR policy. It is not a Town Council ordinance. It is not a special order on department letterhead. It is a Flock template filled in with Weymouth’s numbers and Weymouth’s stated rules, including: data for law enforcement purposes only; data owned by Weymouth MA PD and never sold to third parties; all system access requires a valid reason and is stored indefinitely; hotlist hits must be human verified prior to action. A chief can change a policy. A statute cannot. A constitutional limit cannot."],
    ["p", "Camera counts do not agree with one another. The portal says 35. South Shore News, in August, said 34. Finding Flock’s OpenStreetMap compilation listed 31 in Weymouth Town. MyTownView listed 33 documented locations. A Norwell detective briefing in December 2025 put Weymouth at 53. This newsroom leads with the operator’s own number. Even the low end is not four cameras at two bridges."],
    ["h2", "Apply McCarthy"],
    ["p", "In 2016 and 2017, Barnstable police queried automatic readers on the Bourne and Sagamore bridges — four cameras, two crossings, the only roads on or off Cape Cod. They looked at three months of history and turned on real-time alerts. The Court said no: not a search, not on those facts. It said yes to the larger principle. Electronic surveillance collected long enough “reveals far more than the sum of the parts.” ALPRs already exceed a patrol officer standing by the road: near-total capture of passing plates, twenty-four-hour coverage, and the binding of plate to place."],
    ["q", "SJC", "While the defendant has a constitutionally protected expectation of privacy in the whole of his public movements, an interest which potentially could be implicated by the widespread use of ALPRs, that interest is not invaded by the limited extent and use of ALPR data in this case.", "Commonwealth v. McCarthy, 484 Mass. 493 (2020)"],
    ["p", "The opinion is explicit about the next case. Placement: cameras near a home or a house of worship “reveal more of an individual’s life and associations than does an ALPR trained on an interstate highway.” Density: a network on “every residential side street” is not a network on a highway. Duration: a one-year store of historic reads was “certainly… long enough to warrant constitutional protection.” Weymouth lists thirty days, not a year. Thirty days is shorter. It is also long enough to reconstruct commuting, schooling, worship, medical visits, and overnight stays if the cameras sit in the right places. The department has not produced the location list that would let a court map those poles onto homes and churches. Until it does, the reasonable reading of a 35-camera city grid is the invasive network, not the two bridges."],
    ["p", "This desk’s conclusion, citing the Fourth Amendment, art. 14, Carpenter, Augustine, and McCarthy: a warrantless, suspicionless, citywide historic plate store of this density is a search. Operating it on a vendor webpage, with no ALPR statute in force, is the constitutional problem. A court has not yet captioned “Weymouth.” The test the Court already wrote does not wait for that caption."],
    ["h2", "What the cameras did in July"],
    ["p", "On or about 26 July 2026, Weymouth Police said Flock cameras flagged a stolen vehicle on Washington Street around 4 a.m. Mass Daily News, citing the department, reported four Boston juveniles arrested at the Hanover Weymouth, two stolen vehicles recovered, and six break-ins cleared. This newsroom has not independently obtained the incident report. That episode is the police case for the network. It does not answer McCarthy. The SJC’s question is not whether ALPRs ever catch thieves. It is whether the same system, running on every driver who is not a thief, reconstructs movements society still considers private. Those two facts can be true at once. Only one of them is a constitutional defense. It is not this one."],
    ["h2", "The statute that does not exist"],
    ["p", "Massachusetts has no ALPR-specific statute as of this edition. The facial-recognition searches the state does regulate sit in G.L. c. 6, § 220. H.3755 would cap ordinary retention at 14 days, bar monitoring of constitutionally protected activity, and require a warrant before police search another entity’s ALPR store. It sits in House Ways and Means. It is not the law that governs Weymouth’s cameras tonight. Guardrails that are not law are not guardrails."],
    ["p", "The ACLU of Massachusetts counted more than 25 municipalities that had rejected, ended, or declined to renew Flock deployments as of September 2026, including Cambridge, Salem, Watertown, Brookline, Natick, and Framingham. Weymouth kept the network. On 2 September 2026, a Suffolk Superior Court judge ruled that Massachusetts State Police cannot withhold the locations of its automated license plate readers or when troopers search the system. Camera locations and search logs are public records this month. Weymouth has not produced them into this package."],
    ["h2", "The contract that is not here"],
    ["p", "The ACLU of Massachusetts has published the template license many Flock customers signed. It grants the vendor a non-exclusive, worldwide, perpetual, royalty-free right and license to use aggregated data and to disclose agency footage for hotlist monitoring and investigative search. This newsroom does not know whether Weymouth signed the template, a rewrite, or something else. That is a records gap. It is not a reason to treat 35 cameras as four bridges."],
    ["p", "Public records requests go to the Weymouth Police Records Division, 140 Winter Street, East Weymouth, MA 02189, through the department’s NextRequest portal. Chief Richard M. Fuller is listed as police records access officer in a 2024 compilation; confirm before sending. G.L. c. 66, § 10 gives the division ten business days to answer in writing. Still missing: the signed Flock contract, a standalone departmental ALPR policy PDF, the sharing-partner list, the Town Council or mayoral authorization, and search audit logs. The cameras will keep reading plates while that paper moves. That is the point of applying the test now."],
    ["note", "This story applies Commonwealth v. McCarthy, 484 Mass. 493 (2020), the Fourth Amendment, and art. 14 to the department’s own portal. It does not invent a judicial holding that “Weymouth’s cameras have already been ruled unconstitutional.” No court has captioned this grid. The SJC already wrote the density test. Thirty-five cameras are not four bridges."],
  ],
  "the-cost-of-proving-youre-right": [
    ["p", "The Fair Credit Reporting Act does not charge you to be believed. If an item on a nationwide file is incomplete or inaccurate, Equifax, Experian, and TransUnion must reinvestigate, free of charge, generally within 30 days of notice. That is the statute, not a slogan."],
    ["q", "FCRA", "the agency shall, free of charge, conduct a reasonable reinvestigation … before the end of the 30-day period beginning on the date on which the agency receives the notice of the dispute", "15 U.S.C. § 1681i(a)(1)(A)"],
    ["p", "The Consumer Financial Protection Bureau’s public guidance, last reviewed 2 September 2026, lists three official doors: the bureaus’ websites, their phone lines, and the U.S. mail. Email is not on the list. Fax is not on the list."],
    ["h2", "The receipt the government recommends"],
    ["q", "FTC", "Send your letter by certified mail with “return receipt requested,” so you can document that the credit bureaus got it.", "FTC sample letter, April 2024"],
    ["p", "The investigation is free. The recommended paper trail is not. At the USPS July 2026 Notice 123 rates, a one-ounce stamped letter sent certified with electronic return receipt is $9.28. A three-bureau set is on the order of $28 in postage alone. Reconfirm Notice 123 before any later reprint."],
    ["h2", "The website is not always a complete path"],
    ["p", "TransUnion’s own dispute FAQ, rechecked 9 September 2026, caps online evidence at five documents and five megabytes, with a one-hour window to attach them. Public-record disputes cannot be documented through that upload. Neither can a change of name, Social Security number, date of birth, or address. Those go by mail."],
    ["p", "If you write the company that furnished the item, Regulation V is unforgiving about the envelope. A furnisher must investigate a direct dispute only if it arrives at an address the furnisher has specified. (12 CFR 1022.43(c).) The CFPB complaint door, as of April 2026, tells credit-reporting complainants to wait 45 days. As of June 2026, complaint accounts require email-and-mobile two-factor authentication."],
    ["note", "This story does not find that dispute rights are inaccessible to disabled people. That remains an investigative hypothesis. It does not find that the bureaus refuse email in order to evade the FCRA. It does not find that online disputes are “fake.” Those claims are not ready."],
  ],
  "android-can-see-the-button": [
    ["p", "If the remaining path to a consumer right is a smartphone, the next question is not whether Android has accessibility features. It does. The question is whether a person can tell an assistant what they want and have the phone carry the task through — safely, with the person still in charge."],
    ["p", "Android documents an accessibility service that, once the user turns it on in Settings, can read on-screen controls and perform actions. That is the same primitive set TalkBack uses. It is also the primitive set that Play treats as a malware surface."],
    ["q", "Play policy", "Any use of the Accessibility API that enables an app to autonomously initiate, plan, and execute actions or decisions is strictly prohibited.", "Google Play, Use of the AccessibilityService API"],
    ["p", "The ban is for ordinary apps. Genuine accessibility tools — whose core purpose is assisting people with disabilities — are carved out. Assistants, automation tools, password managers, and launchers do not qualify. Play still allows a non-tool to run a deterministic script. An LLM planner is the banned category."],
    ["p", "Google’s own AccessibilityService documentation states that many apps do not appropriately support ACTION_CLICK, and it describes a gesture-tap fallback. A true return from performAction does not prove the app did the thing."],
    ["q", "Voice Access", "If your device is awake and unlocked, anyone can control it with their voice.", "Android Accessibility Help"],
    ["note", "This story does not find that enabling an accessibility service lets an AI “use your phone.” It does not treat any automation testbed as evidence that a disabled consumer can complete a bureau dispute. Those claims are not ready."],
  ],
  "the-invisible-phone": [
    ["p", "There are two stacks. Journalism that collapses them will get the platform wrong."],
    ["p", "The public stack is AccessibilityService: a user-enabled service that reads the tree and acts on the display the user is looking at. It can run as a background service. It still occupies the screen."],
    ["p", "The privileged stack is Computer Control. Google documents it as a way for an OEM-preloaded assistant, holding ACCESS_COMPUTER_CONTROL, to run apps on a background virtual display. Third-party apps cannot hold that permission."],
    ["q", "Computer Control", "the assistant app determines how to navigate by analyzing screenshots of the target app’s UI.", "Android Developers, Computer Control"],
    ["p", "FLAG_SECURE blocks screenshots. It does not hide a view from the accessibility tree. The tree-side control in Android 16 is accessibilityDataSensitive."],
    ["note", "There is, in the public API surface, no general, root-free, provider-agnostic way for a third-party agent to operate Android without occupying the user’s screen. That is a verified absence, not a dare."],
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
      <p class="mt-6 text-sm text-muted">Newsroom Desk · ${escapeHtml(article.published)} · <a href="../../record/" class="underline">See the record</a></p>
    </header>
    <div class="mx-auto max-w-3xl space-y-6 px-4 pb-16 sm:px-6">
      ${blocks}
      <div class="pt-8">${supportBox("../../privacy/")}</div>
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
      path: `/story/${article.slug}/`,
      body,
    }),
  );
}

console.log("Wrote", out);
