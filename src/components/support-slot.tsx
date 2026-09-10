import { Link } from "@tanstack/react-router";
import { Coffee } from "lucide-react";
import { CASH_APP_HANDLE, CASH_APP_URL } from "@/lib/catalog";
import { useConsent } from "@/lib/consent-store";

export function SupportSlot({ compact = false }: { compact?: boolean }) {
  const { consent, ready, update } = useConsent();

  if (!ready) return null;

  if (consent.ads) {
    return (
      <aside className="rounded-lg border border-rule bg-paper-2 p-5 sm:p-6">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">
          Ads are on
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold">Paying ads sit at the bottom</h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          A non-intrusive bar funds the desk. Prefer to skip ads? Tip instead —
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
          <Link
            to="/privacy"
            className="inline-flex min-h-11 items-center rounded-sm border border-rule px-4 text-sm font-medium text-ink hover:bg-paper"
          >
            Ad settings
          </Link>
        </div>
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
        Cash App ${CASH_APP_HANDLE}. If you would rather see a paying ad than
        tip, opt in and a bar appears at the bottom of the screen.
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
            Show ads instead
          </button>
        )}
      </div>
      {compact ? null : (
        <p className="mt-3 text-xs text-muted">
          No ad network loads until you opt in. Local Jules Gutter Cleaning ads
          stay geo-fenced to the South Shore.{" "}
          <Link to="/privacy" className="underline decoration-rule underline-offset-2">
            How this works
          </Link>
        </p>
      )}
    </aside>
  );
}
