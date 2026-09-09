import type { Grade } from "@/lib/package-data";
import { cn } from "@/lib/utils";

const STYLES: Record<Grade, string> = {
  VERIFIED: "bg-ok/12 text-ok ring-ok/25",
  OBSERVED: "bg-slate/10 text-slate ring-slate/20",
  REPORTED: "bg-warn/12 text-warn ring-warn/25",
  INFERRED: "bg-muted/15 text-muted ring-rule",
  HYPOTHESIS: "bg-transparent text-muted ring-rule",
  FALSE: "bg-mark/10 text-mark ring-mark/25",
  ABSENCE: "bg-slate/10 text-slate ring-slate/20",
};

const LABELS: Record<Grade, string> = {
  VERIFIED: "Verified",
  OBSERVED: "Observed",
  REPORTED: "Reported",
  INFERRED: "Inferred",
  HYPOTHESIS: "Hypothesis",
  FALSE: "Not supported",
  ABSENCE: "Absence",
};

export function GradeBadge({ grade, className }: { grade: Grade; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs px-1.5 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.08em] ring-1 ring-inset",
        STYLES[grade],
        className,
      )}
    >
      {LABELS[grade]}
    </span>
  );
}
