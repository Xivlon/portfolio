import { skillGroups } from '@/data/portfolio';
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
                  </li>
                ))}
            </ul>
          </div>
        ))};
    </div>
  );
}
