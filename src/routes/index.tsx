import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { RelatedStories } from "@/components/related-stories";
import { SiteChrome } from "@/components/site-chrome";
import { SupportSlot } from "@/components/support-slot";
import { ARTICLES } from "@/lib/articles";

export const Route = createFileRoute("/")({
  component: Edition,
  head: () => ({
    meta: [
      { title: "Newsroom Desk — Edition" },
      {
        name: "description",
        content:
          "Published investigations on credit-report rights, Android accessibility, and background phone control. Ads off unless you opt in.",
      },
    ],
  }),
});

function Edition() {
  const [lead, ...rest] = ARTICLES;

  return (
    <SiteChrome>
      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.45fr_0.85fr] lg:items-end">
          <div>
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">
              Edition · 9 September 2026
            </p>
            <h1 className="mt-4 max-w-xl font-display text-[2.6rem] font-semibold leading-[1.08] text-ink sm:text-6xl">
              {lead.title}
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl leading-snug text-muted">
              {lead.dek}
            </p>
            <Link
              to="/story/$slug"
              params={{ slug: lead.slug }}
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 text-sm font-medium text-paper"
            >
              Read the story
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <SupportSlot compact />
        </div>
      </section>

      <section className="border-b border-rule py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">
            Also published
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rest.map((article) => (
              <Link
                key={article.slug}
                to="/story/$slug"
                params={{ slug: article.slug }}
                className="rounded-lg border border-rule p-6 hover:bg-paper-2"
              >
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">
                  Story {article.story}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold leading-snug">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{article.dek}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            The graded evidence, unknowns, and kill list live in{" "}
            <Link to="/record" className="text-ink underline decoration-rule underline-offset-2">
              the record
            </Link>
            . Nothing here upgrades a hypothesis into a finding.
          </p>
        </div>
      </section>

      <RelatedStories includeSister slugs={[]} />
    </SiteChrome>
  );
}
