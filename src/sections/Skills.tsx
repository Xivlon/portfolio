import { skillGroups } from '@/data/portfolio';

const LEVEL_ORDER: Record<string, number> = {
  ADVANCED: 3,
  INTERMEDIATE: 2,
  OPERATIONAL: 1,
};

const LEVEL_STYLE: Record<string, string> = {
  ADVANCED: 'border-red-500/60 text-red-500 bg-red-500/10',
  INTERMEDIATE: 'border-accent/50 text-accent',
  OPERATIONAL: 'border-primary/40 text-primary',
};

// 3-segment signal bar. Lit segments match the tag color.
function SignalBar({ level }: { level: string }) {
  const lit = LEVEL_ORDER[level] ?? 0;
  const litColor =
    level === 'ADVANCED'
      ? 'bg-red-500'
      : level === 'INTERMEDIATE'
        ? 'bg-accent'
        : 'bg-primary';
  return (
    <span className="flex items-end gap-[3px]" aria-hidden="true">
      {[1, 2, 3].map((seg) => (
        <span
          key={seg}
          className={`w-[3px] ${seg <= lit ? litColor : 'bg-border'}`}
          style={{ height: `${4 + seg * 3}px` }}
        />
      ))}
    </span>
  );
}

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
              {[...group.items]
                .sort((a, b) => (LEVEL_ORDER[b.level] ?? 0) - (LEVEL_ORDER[a.level] ?? 0))
                .map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 px-4 py-2.5 transition-colors hover:bg-secondary/40"
                  >
                    <span className="flex items-center gap-2.5 text-sm text-foreground/90">
                      <span className="inline-block h-1.5 w-1.5 bg-primary" />
                      {item.name}
                    </span>
                    <span className="flex shrink-0 items-center gap-2.5">
                      <SignalBar level={item.level} />
                      <span
                        className={`border px-2 py-0.5 text-[10px] tracking-widest ${
                          LEVEL_STYLE[item.level] ?? 'border-border text-muted-foreground'
                        }`}
                      >
                        {item.level}
                      </span>
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] tracking-widest text-muted-foreground">
        NOTE: BARS SHOW SIGNAL STRENGTH. 3 = ADVANCED. 2 = INTERMEDIATE. 1 = OPERATIONAL.
      </p>
    </div>
  );
}
