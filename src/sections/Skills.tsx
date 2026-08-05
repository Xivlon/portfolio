import { skillGroups } from '@/data/portfolio';

// Signal strength scale: 1 bar = OPERATIONAL, 2 = INTERMEDIATE, 3 = ADVANCED.
const LEVEL_ORDER: Record<string, number> = {
  OPERATIONAL: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
};
const LEVEL_COLOR: Record<string, string> = {
  OPERATIONAL: 'bg-red-500',
  INTERMEDIATE: 'bg-primary',
  ADVANCED: 'bg-accent',
};

function SignalBar({ level }: { level: string }) {
  const lit = LEVEL_ORDER[level] ?? 0;
  const litColor = LEVEL_COLOR[level] ?? 'bg-border';
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

// Legend: one key for the whole module, not a tag per row.
const legend = [
  { level: 'OPERATIONAL', bars: 1, color: 'text-red-500' },
  { level: 'INTERMEDIATE', bars: 2, color: 'text-primary' },
  { level: 'ADVANCED', bars: 3, color: 'text-accent' },
];
export default function Skills() {
  return (
    <div>
      {/* Key */}
      <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 border border-border bg-card/50 px-4 py-2.5">
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground">KEY</span>
        {legend.map((entry) => (
          <span key={entry.level} className="flex items-center gap-2">
            <span className="flex items-end gap-[3px]">
              {[1, 2, 3].map((seg) => (
                <span
                  key={seg}
                  className={`w-[3px] ${
                    seg <= entry.bars ? LEVEL_COLOR[entry.level] : 'bg-border'
                  }`}
                  style={{ height: `${4 + seg * 3}px` }}
                />
              ))}
            </span>
            <span className={`text-[10px] tracking-[0.2em] ${entry.color}`}>
              {entry.level}
            </span>
          </span>
        ))}
      </div>

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
                    <SignalBar level={item.level} />
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
