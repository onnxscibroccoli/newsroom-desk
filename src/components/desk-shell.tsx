import { useEffect, useState } from "react";
import { NAV } from "@/lib/package-data";
import { cn } from "@/lib/utils";

export function DeskShell({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("summary");

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <nav
        className="sticky top-[3.6rem] z-30 border-b border-rule bg-paper/95 backdrop-blur-sm"
        aria-label="Record sections"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-1.5 sm:px-6">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={cn(
                "min-h-10 shrink-0 rounded-sm px-3 text-xs font-medium transition-colors duration-150",
                active === item.id
                  ? "bg-ink text-paper"
                  : "text-muted hover:bg-paper-2 hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
      {children}
    </div>
  );
}

export function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-36 border-b border-rule py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {kicker ? (
          <p className="mb-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate">
            {kicker}
          </p>
        ) : null}
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
