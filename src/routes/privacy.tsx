import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { SupportSlot } from "@/components/support-slot";
import { CASH_APP_HANDLE, CASH_APP_URL, SOUTH_SHORE_TOWNS } from "@/lib/catalog";
import { useConsent } from "@/lib/consent-store";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Support and ads — Newsroom Desk" },
      {
        name: "description",
        content:
          "Ads are off unless you opt in. Default support is Buy me a coffee via Cash App $icoss. South Shore house ads for Jules Gutter Cleaning.",
      },
    ],
  }),
});

function PrivacyPage() {
  const { consent, ready, update } = useConsent();

  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">
          Support
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Ads stay off until you say so</h1>
        <p className="mt-5 font-display text-xl leading-snug text-muted">
          The default on every page is a Buy me a coffee banner and Cash App $
          {CASH_APP_HANDLE}. No ad network script loads from this site unless you
          opt in.
        </p>

        <div className="mt-10">
          <SupportSlot />
        </div>

        <section className="mt-12 space-y-4 text-sm leading-relaxed">
          <h2 className="font-display text-2xl font-semibold">What you can choose</h2>
          <p>
            <strong>Default.</strong> Tip jar only.{" "}
            <a href={CASH_APP_URL} className="underline decoration-rule underline-offset-2">
              Cash App ${CASH_APP_HANDLE}
            </a>
            .
          </p>
          <p>
            <strong>Ads, if you opt in.</strong> Ready for a house ad, not a third-party
            network yet. The only creative on file is Jules Gutter Cleaning, and it
            is geo-fenced to the Massachusetts South Shore
            ({SOUTH_SHORE_TOWNS.slice(0, 8).join(", ")}, and nearby towns). If you
            are outside that fence, you still see the tip jar.
          </p>
          <p>
            <strong>Location.</strong> Off unless you turn it on after ads. The desk
            does not request geolocation to serve coffee. It requests it only to
            decide whether a South Shore house ad may show. Coordinates are checked
            in the browser against a bounding box and are not sent to a broker.
          </p>
        </section>

        {ready ? (
          <section className="mt-10 rounded-lg border border-rule p-5">
            <h2 className="font-display text-xl font-semibold">Your settings</h2>
            <label className="mt-4 flex min-h-11 items-center gap-3 text-sm">
              <input
                type="checkbox"
                className="size-4"
                checked={consent.ads}
                onChange={(e) => update({ ads: e.target.checked, geo: e.target.checked ? consent.geo : false })}
              />
              I opt in to ads
            </label>
            <label className="mt-2 flex min-h-11 items-center gap-3 text-sm">
              <input
                type="checkbox"
                className="size-4"
                checked={consent.geo}
                disabled={!consent.ads}
                onChange={(e) => update({ geo: e.target.checked })}
              />
              Allow location for South Shore house ads
            </label>
            <p className="mt-3 text-xs text-muted">
              Stored on this device only. Clearing site data resets to ads off.
            </p>
          </section>
        ) : null}
      </div>
    </SiteChrome>
  );
}
