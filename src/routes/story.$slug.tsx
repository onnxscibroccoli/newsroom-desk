import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { RelatedStories } from "@/components/related-stories";
import { SiteChrome } from "@/components/site-chrome";
import { SupportSlot } from "@/components/support-slot";
import { articleBySlug } from "@/lib/articles";
import { QuotePull } from "@/components/quote-pull";

export const Route = createFileRoute("/story/$slug")({
  component: StoryPage,
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData!.article.title} — Newsroom Desk` },
      { name: "description", content: loaderData!.article.dek },
    ],
  }),
});

function StoryPage() {
  const { article } = Route.useLoaderData();

  return (
    <SiteChrome>
      <article className="border-b border-rule">
        <header className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate">
            {article.kicker}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 font-display text-xl leading-snug text-muted">{article.dek}</p>
          <p className="mt-6 text-sm text-muted">
            Newsroom Desk · 9 September 2026 ·{" "}
            <Link to="/record" className="underline decoration-rule underline-offset-2">
              See the record
            </Link>
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-6 px-4 pb-16 sm:px-6">
          {article.blocks.map((block, i) => {
            if (block.type === "p") {
              return (
                <p key={i} className="font-display text-lg leading-relaxed">
                  {block.text}
                </p>
              );
            }
            if (block.type === "h2") {
              return (
                <h2 key={i} className="pt-4 font-display text-2xl font-semibold">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return <QuotePull key={i} kicker={block.kicker} text={block.text} cite={block.cite} />;
            }
            return (
              <p
                key={i}
                className="rounded-md border border-rule bg-paper-2 px-4 py-3 text-sm leading-relaxed text-muted"
              >
                {block.text}
              </p>
            );
          })}

          <div className="pt-8">
            <SupportSlot />
          </div>
        </div>
      </article>
      <RelatedStories except={article.slug} />
    </SiteChrome>
  );
}
