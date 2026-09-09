import { Link } from "@tanstack/react-router";
import { ARTICLES, articlesBySlugs } from "@/lib/articles";
import { SISTER_SITES } from "@/lib/catalog";

export function RelatedStories({ slugs, includeSister = true }: { slugs?: string[]; includeSister?: boolean }) {
  const related = slugs ? articlesBySlugs(slugs) : ARTICLES;

  return (
    <section className="border-t border-rule py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">
          Also from the desk
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {related.map((article) => (
            <Link
              key={article.slug}
              to="/story/$slug"
              params={{ slug: article.slug }}
              className="rounded-md border border-rule p-5 hover:bg-paper-2"
            >
              <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">
                Story {article.story}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold leading-snug">
                {article.title}
              </h2>
            </Link>
          ))}
          {includeSister
            ? SISTER_SITES.map((site) => (
                <a
                  key={site.slug}
                  href={site.href}
                  className="rounded-md border border-rule p-5 hover:bg-paper-2"
                >
                  <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-slate">
                    Sister site
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold leading-snug">
                    {site.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{site.dek}</p>
                </a>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
