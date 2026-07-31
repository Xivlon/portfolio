import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {education.map((entry) => (
        <div key={entry.ref} className="brackets brackets-all fx-glow border border-border bg-card/70 p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-base font-semibold tracking-wide text-foreground sm:text-lg">
              {entry.school}
            </h3>
            <span className="shrink-0 text-[10px] tracking-widest text-muted-foreground">
              {entry.ref}
            </span>
          </div>
          <p className="mt-1 text-sm text-accent">{entry.degree}</p>
          <p className="mt-0.5 text-[11px] tracking-widest text-primary tabular-nums">
            {entry.period}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{entry.note}</p>
        </div>
      ))}
    </div>
  );
}
