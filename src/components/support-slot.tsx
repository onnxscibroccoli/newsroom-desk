import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Coffee, MapPin } from "lucide-react";
import { CASH_APP_HANDLE, CASH_APP_URL, JULES_AD, inSouthShore } from "@/lib/catalog";
import { useConsent } from "@/lib/consent-store";

export function SupportSlot({ compact = false }: { compact?: boolean }) {
  const { consent, ready, update } = useConsent();
  const [geo, setGeo] = useState<"unknown" | "south-shore" | "elsewhere">("unknown");

  useEffect(() => {
    if (!ready || !consent.ads || !consent.geo) {
      setGeo("unknown");
      return;
    }
    if (!navigator.geolocation) {
      setGeo("unknown");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeo(
          inSouthShore(pos.coords.latitude, pos.coords.longitude)
            ? "south-shore"
            : "elsewhere",
        );
      },
      () => setGeo("unknown"),
      { maximumAge: 86_400_000, timeout: 8_000, enableHighAccuracy: false },
    );
  }, [ready, consent.ads, consent.geo]);

  if (!ready) return null;

  if (consent.ads && geo === "south-shore") {
    return (
      <aside className="rounded-lg border border-rule bg-paper-2 p-5 sm:p-6">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">
          {JULES_AD.kicker}
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold">{JULES_AD.advertiser}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{JULES_AD.line}</p>
        <a
          href={JULES_AD.href}
          className="mt-4 inline-flex min-h-11 items-center rounded-sm bg-ink px-4 text-sm font-medium text-paper"
        >
          {JULES_AD.cta} ${CASH_APP_HANDLE}
        </a>
        <p className="mt-3 text-xs text-muted">
          Shown because you opted into ads and this device looks like South Shore
          Massachusetts.{" "}
          <Link to="/privacy" className="underline decoration-rule underline-offset-2">
            Change this
          </Link>
          .
        </p>
      </aside>
    );
  }

  return (
    <aside className="rounded-lg border border-rule bg-paper-2 p-5 sm:p-6">
      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">
        Keep the desk independent
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold">Buy me a coffee</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
        Ads stay off unless you turn them on. Until then this slot is a tip jar —
        Cash App ${CASH_APP_HANDLE}.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={CASH_APP_URL}
          className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 text-sm font-medium text-paper"
        >
          <Coffee className="size-4" />
          Cash App ${CASH_APP_HANDLE}
        </a>
        {compact ? null : (
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink hover:bg-paper"
            onClick={() => update({ ads: true })}
          >
            Opt in to ads
          </button>
        )}
      </div>
      {consent.ads && geo !== "south-shore" ? (
        <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted">
          <MapPin className="mt-0.5 size-3.5 shrink-0" />
          {consent.geo
            ? "House ads for Jules Gutter Cleaning are geo-fenced to the South Shore. This device is outside that fence, so you still see the tip jar."
            : "Ads are on, but location is off. Local South Shore ads will not load without it."}{" "}
          <Link to="/privacy" className="underline decoration-rule underline-offset-2">
            Privacy
          </Link>
        </p>
      ) : compact ? null : (
        <p className="mt-3 text-xs text-muted">
          Future ads, if you opt in, can be geo-fenced to the South Shore for Jules
          Gutter Cleaning. No ad network loads until you say so.{" "}
          <Link to="/privacy" className="underline decoration-rule underline-offset-2">
            How this works
          </Link>
        </p>
      )}
    </aside>
  );
}
