import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SISTER_SITES } from "@/lib/catalog";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Edition", exact: true },
  { to: "/record", label: "The record", exact: false },
  { to: "/privacy", label: "Support", exact: false },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-h-11 items-center gap-3">
            <span className="grid size-8 place-items-center rounded-xs bg-ink text-paper">
              <span className="font-display text-sm leading-none">N</span>
            </span>
            <span>
              <span className="block font-display text-base font-semibold leading-tight">
                Newsroom Desk
              </span>
              <span className="block font-sans text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                Independent reporting
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = item.exact
                ? pathname === item.to
                : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium",
                    active ? "bg-ink text-paper" : "text-muted hover:bg-paper-2 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            {SISTER_SITES.map((site) => (
              <a
                key={site.slug}
                href={site.href}
                className="inline-flex min-h-11 items-center rounded-sm px-3 text-sm font-medium text-muted hover:bg-paper-2 hover:text-ink"
              >
                {site.title}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-sm border border-rule md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <nav className="border-t border-rule px-4 py-3 md:hidden" aria-label="Mobile">
            <div className="grid gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex min-h-11 items-center rounded-sm bg-paper-2 px-3 text-sm"
                >
                  {item.label}
                </Link>
              ))}
              {SISTER_SITES.map((site) => (
                <a
                  key={site.slug}
                  href={site.href}
                  className="flex min-h-11 items-center rounded-sm px-3 text-sm text-muted"
                >
                  {site.title}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main id="main">{children}</main>

      <footer className="border-t border-rule">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2">
          <div>
            <p className="font-display text-lg text-ink">Newsroom Desk</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              Published investigations and the reporting record behind them. Not
              legal advice. Not a product pitch. Ads stay off unless you opt in.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="text-ink hover:underline">
              This edition
            </Link>
            <Link to="/record" className="text-ink hover:underline">
              The record
            </Link>
            <Link to="/privacy" className="text-ink hover:underline">
              Support and ads
            </Link>
            {SISTER_SITES.map((site) => (
              <a key={site.slug} href={site.href} className="text-ink hover:underline">
                {site.title}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
