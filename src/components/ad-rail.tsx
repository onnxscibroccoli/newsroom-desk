import { Link } from "@tanstack/react-router";
import { Phone, Megaphone } from "lucide-react";
import {
  CASH_APP_HANDLE,
  CASH_APP_URL,
  HOUSE_AD,
  JULES_AD,
} from "@/lib/catalog";
import { useConsent } from "@/lib/consent-store";
import { useGeoFence } from "@/lib/use-geo-fence";

export function AdRail() {
  const { consent, ready } = useConsent();
  const geo = useGeoFence(ready && consent.ads && consent.geo);

  if (!ready || !consent.ads) return null;

  const local = geo === "south-shore";

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper-2/95 text-ink shadow-sheet backdrop-blur-sm"
      aria-label="Advertisement"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate">
            Advertisement · {local ? JULES_AD.kicker : HOUSE_AD.kicker}
          </p>
          {local ? (
            <>
              <p className="mt-1 font-display text-lg font-semibold leading-snug">
                {JULES_AD.advertiser}
              </p>
              <p className="text-sm leading-relaxed text-muted">{JULES_AD.line}</p>
            </>
          ) : (
            <>
              <p className="mt-1 font-display text-lg font-semibold leading-snug">
                {HOUSE_AD.advertiser}
              </p>
              <p className="text-sm leading-relaxed text-muted">{HOUSE_AD.line}</p>
            </>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {local ? (
            <a
              href={JULES_AD.tel}
              rel="sponsored nofollow"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 text-sm font-medium text-paper"
            >
              <Phone className="size-4" />
              {JULES_AD.phoneDisplay}
            </a>
          ) : (
            <a
              href={HOUSE_AD.href}
              rel="sponsored nofollow"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 text-sm font-medium text-paper"
            >
              <Megaphone className="size-4" />
              {HOUSE_AD.cta} ${CASH_APP_HANDLE}
            </a>
          )}
          {local ? (
            <a
              href={CASH_APP_URL}
              rel="sponsored nofollow"
              className="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink"
            >
              Cash App ${CASH_APP_HANDLE}
            </a>
          ) : null}
          <Link
            to="/privacy"
            className="inline-flex min-h-11 items-center px-2 text-xs text-muted underline decoration-rule underline-offset-2"
          >
            Ad settings
          </Link>
        </div>
      </div>
    </aside>
  );
}
