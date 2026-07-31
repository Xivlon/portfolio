import { deployments } from '@/data/portfolio';

// Placeholder thumbnail. Themed "no signal" frame until real previews exist.
function PlaceholderThumb() {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-secondary/30">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, hsl(216 12% 17%) 0px, hsl(216 12% 17%) 1px, transparent 1px, transparent 8px)',
        }}
      />
      <div className="relative text-center">
        <div className="mx-auto mb-2 h-8 w-8 border border-muted-foreground/50">
          <div className="h-full w-full border-4 border-card bg-muted-foreground/30" />
        </div>
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground">NO SIGNAL</p>
        <p className="mt-0.5 text-[9px] tracking-[0.3em] text-muted-foreground/60">
          PREVIEW PENDING
        </p>
      </div>
    </div>
  );
}

export default function Deployments() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {deployments.map((item) => {
          const hasLink = item.link.length > 0;
          const card = (
            <div className="brackets brackets-all brackets-cyan fx-glow fx-glow-cyan flex h-full flex-col border border-border bg-card/70">
              {item.thumb ? (
                <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-secondary/30">
                  <img
                    src={item.thumb}
                    alt={`${item.name} icon`}
                    className="h-3/4 w-auto object-contain drop-shadow-[0_0_18px_hsl(41_100%_50%/0.15)] transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ) : (
                <PlaceholderThumb />
              )}
              <div className="flex flex-1 flex-col px-5 py-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-semibold tracking-wide text-foreground">
                    {item.name}
                  </h3>
                  <span className="shrink-0 text-[10px] tracking-widest text-muted-foreground">
                    {item.ref}
                  </span>
                </div>
                <p className="mt-1 text-[11px] tracking-widest text-accent">{item.kind}</p>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <span
                    className={`px-2 py-0.5 text-[10px] tracking-[0.25em] ${
                      hasLink
                        ? 'border border-primary bg-primary/15 text-primary'
                        : 'border border-border bg-secondary/40 text-muted-foreground'
                    }`}
                  >
                    {hasLink ? 'OPEN LINK' : 'LINK PENDING'}
                  </span>
                  <span className="text-[10px] tracking-widest text-muted-foreground">
                    {hasLink ? '>>' : '--'}
                  </span>
                </div>
              </div>
            </div>
          );
          return hasLink ? (
            <a key={item.ref} href={item.link} target="_blank" rel="noreferrer" className="block">
              {card}
            </a>
          ) : (
            <div key={item.ref}>{card}</div>
          );
        })}
      </div>
      <p className="mt-4 text-[11px] tracking-widest text-muted-foreground">
        NOTE: CARDS WITH A LIVE LINK OPEN IN A NEW TAB.
      </p>
    </div>
  );
}
