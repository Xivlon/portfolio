import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return (
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
          <ul className="space-y-1 px-4 py-3">
            {group.items.map((item) => (
              <li key={item.name} className="text-sm text-foreground">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
