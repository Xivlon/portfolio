interface Props {
  code: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ code, title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center gap-3">
        <span className="hazard inline-block h-2.5 w-10" />
        <span className="text-[11px] font-semibold tracking-[0.3em] text-primary">
          {code}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="font-display text-2xl font-bold tracking-wide text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-xs tracking-widest text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
