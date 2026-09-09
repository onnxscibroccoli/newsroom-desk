export function QuotePull({
  kicker,
  text,
  cite,
}: {
  kicker: string;
  text: string;
  cite: string;
}) {
  return (
    <figure className="border-l-2 border-ink pl-5">
      <figcaption className="mb-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate">
        {kicker}
      </figcaption>
      <blockquote className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
        {text}
      </blockquote>
      <p className="mt-3 font-sans text-xs text-muted">{cite}</p>
    </figure>
  );
}
