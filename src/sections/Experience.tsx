import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <div className="relative space-y-6 border-l border-border pl-6">
      {experience.map((job) => (
        <article key={job.ref} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 border-2 border-primary bg-background" />
          <div className="brackets brackets-all fx-glow border border-border bg-card/70 p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold tracking-wide text-foreground">
                {job.role}
              </h3>
              <span className="text-[11px] tracking-widest text-primary tabular-nums">
                {job.period}
              </span>
            </div>
            <p className="mt-1 text-xs tracking-wider text-accent">
              {job.org} <span className="text-muted-foreground">// {job.location}</span>
            </p>
            <p className="mt-0.5 text-[10px] tracking-[0.3em] text-muted-foreground">
              REF: {job.ref}
            </p>
            <ul className="mt-4 space-y-2.5">
              {job.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="shrink-0 text-primary">+</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
