import { identity } from '@/data/portfolio';

export default function Contact() {
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
