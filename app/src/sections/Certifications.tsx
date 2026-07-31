import { completedCertifications, pendingCertifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <div>
      {/* ================================================
          PART A — COMPLETED CERTIFICATIONS (FULL COLOR)
          This block always renders before the tracker.
          ================================================ */}
      <div className="mb-4 flex items-center gap-3">
        <span className="hazard inline-block h-2 w-8" />
        <h3 className="text-xs font-semibold tracking-[0.3em] text-primary">
          PART A // CERTIFICATIONS — COMPLETED
        </h3>
        <span className="h-px flex-1 bg-primary/30" />
        <span className="text-[10px] tracking-widest text-primary tabular-nums">
          COUNT: {String(completedCertifications.length).padStart(2, '0')}
        </span>
      </div>

      {completedCertifications.length === 0 ? (
        <div className="brackets brackets-all fx-glow border border-primary/40 bg-card/70 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border border-primary bg-primary/15 px-2.5 py-1 text-[11px] font-semibold tracking-[0.25em] text-primary text-glow-amber">
              STATUS: ACTIVE
            </span>
            <span className="text-[11px] tracking-widest text-muted-foreground">
              ENTRIES ON RECORD: 00
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
            No completed certifications on record. This register is active.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
            An entry appears here in full color when a certification from the tracker
            below is complete.
          </p>
          <div className="mt-5 h-1.5 w-full bg-secondary">
            <div className="h-full w-0 bg-primary" />
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {completedCertifications.map((cert) => (
            <div key={cert.ref} className="brackets brackets-all fx-glow border border-primary/50 bg-card/80 p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="border border-primary bg-primary/15 px-2 py-0.5 text-[10px] font-semibold tracking-[0.25em] text-primary">
                  COMPLETE
                </span>
                <span className="text-[10px] tracking-widest text-muted-foreground">
                  {cert.ref}
                </span>
              </div>
              <h4 className="mt-3 font-display text-base font-semibold tracking-wide text-foreground">
                {cert.name}
              </h4>
              <p className="mt-1 text-xs tracking-wider text-accent">{cert.issuer}</p>
              <div className="mt-4 h-1.5 w-full bg-secondary">
                <div className="h-full w-full bg-primary" />
              </div>
              <p className="mt-1.5 text-[10px] tracking-widest text-primary">PROGRESS: 100%</p>
            </div>
          ))}
        </div>
      )}

      {/* ================================================
          PART B — CERTIFICATION TRACKER (GREYED OUT)
          Pending credentials. Full color moves to Part A.
          ================================================ */}
      <div className="mb-4 mt-10 flex items-center gap-3">
        <span className="hazard-grey inline-block h-2 w-8" />
        <h3 className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
          PART B // CERTIFICATION TRACKER — PENDING
        </h3>
        <span className="h-px flex-1 bg-border" />
        <span className="text-[10px] tracking-widest text-muted-foreground tabular-nums">
          QUEUED: {String(pendingCertifications.length).padStart(2, '0')}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {pendingCertifications.map((cert) => (
          <div
            key={cert.ref}
            className="brackets brackets-all brackets-grey fx-glow fx-glow-grey border border-border bg-card/40 p-5 opacity-60 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="border border-border bg-secondary/40 px-2 py-0.5 text-[10px] tracking-[0.25em] text-muted-foreground">
                PENDING
              </span>
              <span className="text-[10px] tracking-widest text-muted-foreground">
                {cert.ref}
              </span>
            </div>
            <h4 className="mt-3 font-display text-base font-semibold tracking-wide text-foreground/70">
              {cert.name}
            </h4>
            <p className="mt-1 text-xs tracking-wider text-muted-foreground">{cert.issuer}</p>
            <div className="mt-4 h-1.5 w-full bg-secondary">
              <div className="h-full w-0 bg-muted-foreground" />
            </div>
            <p className="mt-1.5 flex items-center gap-2 text-[10px] tracking-widest text-muted-foreground">
              <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground" />
              PROGRESS: 0% — ON STANDBY
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] tracking-widest text-muted-foreground">
        NOTE: PENDING ITEMS STAY GREY. A COMPLETED ITEM MOVES TO PART A IN FULL COLOR.
      </p>
    </div>
  );
}
