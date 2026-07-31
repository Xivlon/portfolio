import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.ref}
          className="brackets brackets-all brackets-cyan fx-glow fx-glow-cyan flex flex-col border border-border bg-card/70"
        >
          <div className="border-b border-border px-5 py-3">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold tracking-wide text-foreground">
                {project.name}
              </h3>
              <span className="text-[10px] tracking-widest text-muted-foreground">
                {project.ref}
              </span>
            </div>
            <p className="mt-1 text-[11px] tracking-widest text-accent">{project.type}</p>
            <p className="mt-0.5 text-[11px] tracking-widest text-muted-foreground tabular-nums">
              {project.period}
            </p>
          </div>
          <ul className="flex-1 space-y-2.5 px-5 py-4">
            {project.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <span className="shrink-0 text-accent">+</span>
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 border-t border-border px-5 py-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="border border-border bg-secondary/40 px-2 py-0.5 text-[10px] tracking-widest text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
