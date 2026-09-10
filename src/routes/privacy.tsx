import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { SupportSlot } from "@/components/support-slot";
import {
  CASH_APP_HANDLE,
  CASH_APP_URL,
  DESK_PHONE_DISPLAY,
  DESK_PHONE_TEL,
  SOUTH_SHORE_TOWNS,
} from "@/lib/catalog";
import { useConsent } from "@/lib/consent-store";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Support and ads — Newsroom Desk" },
      {
        name: "description",
        content:
          "Ads are off unless you opt in. Default support is Buy me a coffee via Cash App $icoss. Opt-in paying ads sit at the bottom of the screen. South Shore house ads for Jules Gutter Cleaning.",
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
        <h1 className="mt-3 font-display text-4xl font-semibold">
          Tip, or a small ad at the bottom
        </h1>
        <p className="mt-5 font-display text-xl leading-snug text-muted">
          The desk has to be paid for. The default is Buy me a coffee via Cash App $
          {CASH_APP_HANDLE}. If you would rather not tip, opt in and a non-intrusive
          paying ad sits at the bottom of the screen. No third-party ad network
          loads until you say so.
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
            . No ads, no location prompt.
          </p>
          <p>
            <strong>Paying ads, if you opt in.</strong> A first-party bar at the
            bottom of every page. That inventory is how the reporting gets funded
            when a reader does not want to buy a coffee. The open national slot is
            a paid placement for the desk. No Google Ads, Carbon, or other network
            script is attached yet.
          </p>
          <p>
            <strong>Local South Shore ads, if you also opt in to location.</strong>{" "}
            Jules Gutter Cleaning is the house advertiser for Quincy, Braintree,
            Weymouth, Hingham, Hull, Cohasset, Scituate, Norwell, and nearby towns
            ({SOUTH_SHORE_TOWNS.slice(0, 8).join(", ")}, and the rest of the list).
            The creative includes{" "}
            <a href={DESK_PHONE_TEL} className="underline decoration-rule underline-offset-2">
              {DESK_PHONE_DISPLAY}
            </a>
            . Outside that fence you still see the national paying bar, not Jules.
          </p>
          <p>
            <strong>Location.</strong> Off unless you turn it on after ads.
            Coordinates are checked in the browser against a bounding box and are
            not sent to a broker.
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
                onChange={(e) =>
                  update({ ads: e.target.checked, geo: e.target.checked ? consent.geo : false })
                }
              />
              I opt in to paying ads at the bottom of the screen
            </label>
            <label className="mt-2 flex min-h-11 items-center gap-3 text-sm">
              <input
                type="checkbox"
                className="size-4"
                checked={consent.geo}
                disabled={!consent.ads}
                onChange={(e) => update({ geo: e.target.checked })}
              />
              Allow location for local South Shore ads (Jules Gutter Cleaning)
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
