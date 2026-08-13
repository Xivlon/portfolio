import Panel from '@/components/chrome/Panel';
import { identity, summary } from '@/data/portfolio';
export default function Summary() {
  return (
    <div>
      <Panel className="p-6 sm:p-8">
        <div className="space-y-3">
          {summary.map((line, i) => (
            <p key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
              <span className="shrink-0 text-primary">[{String(i + 1).padStart(2, '0')}]</span>
              {line}
            </p>
          ))}
        </div>
      </Panel>

      <div className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-3">
        <div className="bg-card/80 px-4 py-3">
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground">STATUS</p>
          <p className="mt-1 flex items-center gap-2 text-xs font-semibold tracking-widest text-primary">
            <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {identity.status}
          </p>
        </div>
        <div className="bg-card/80 px-4 py-3">
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground">COMM // EMAIL</p>
          <a
            href={`mailto:${identity.email}`}
            className="mt-1 block break-all text-xs tracking-wider text-foreground/90 transition-colors hover:text-primary"
          >
            {identity.email}
          </a>
        </div>
        <div className="bg-card/80 px-4 py-3">
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground">COMM // PHONE</p>
          <p className="mt-1 text-xs tracking-wider text-foreground/90">{identity.phone}</p>
        </div>
      </div>
    </div>
  );
}
  return (
    <div>
      <div className="grid gap-px border border-border bg-border">
        <a
          href={`mailto:${identity.email}`}
          className="group fx-glow bg-card/80 px-5 py-5 transition-colors hover:bg-secondary/50"
        >
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground">CHANNEL 01 // EMAIL</p>
          <p className="mt-2 break-all text-sm text-foreground/90 transition-colors group-hover:text-primary">
            {identity.email}
          </p>
        </a>
        <a
          href={identity.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group fx-glow bg-card/80 px-5 py-5 transition-colors hover:bg-secondary/50"
        >
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground">CHANNEL 02 // LINKEDIN</p>
          <p className="mt-2 break-all text-sm text-foreground/90 transition-colors group-hover:text-primary">
            {identity.linkedinLabel}
          </p>
        </a>
        <a
          href={identity.github}
          target="_blank"
          rel="noreferrer"
          className="group fx-glow bg-card/80 px-5 py-5 transition-colors hover:bg-secondary/50"
        >
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground">CHANNEL 03 // GITHUB</p>
          <p className="mt-2 break-all text-sm text-foreground/90 transition-colors group-hover:text-primary">
            {identity.githubLabel}
          </p>
        </a>
      </div>
      <p className="mt-4 text-[11px] tracking-widest text-muted-foreground">
        NOTE: THIS CHANNEL IS OPEN FOR SOFTWARE ENGINEER POSITIONS.
      </p>
    </div>
  );
}
