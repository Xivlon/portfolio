import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id} className="brackets brackets-all fx-glow border border-border bg-card/70">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-accent">
                {group.label}
              </span>
              <span className="text-[10px] tracking-widest text-muted-foreground">
                MOD.{group.id}
              </span>
            </div>
            <ul className="divide-y divide-border/60">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-3 px-4 py-2.5 transition-colors hover:bg-secondary/40"
                >
                  <span className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <span className="inline-block h-1.5 w-1.5 bg-primary" />
                    {item.name}
                  </span>
                  <span
  className={`shrink-0 border px-2 py-0.5 text-[10px] tracking-widest ${
    {
      ADVANCED: 'border-alert/60 text-alert bg-alert/10',
      OPERATIONAL: 'border-primary/40 text-primary',
      INTERMEDIATE: 'border-accent/50 text-accent',
    }[item.level] ?? 'border-border text-muted-foreground'
  }`}
>
  {item.level}
                </span>

                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] tracking-widest text-muted-foreground">
        NOTE: LEVEL TAGS SHOW CURRENT PROFICIENCY. NO PERCENTAGE VALUES ARE USED.
      </p>
    </div>
  );
}
