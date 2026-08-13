import { useCallback, useEffect, useState } from 'react';
import Nav from '@/components/chrome/Nav';
import WheelNav from '@/components/chrome/WheelNav';
import Summary from '@/sections/Summary';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Deployments from '@/sections/Deployments';
import Education from '@/sections/Education';
import Certifications from '@/sections/Certifications';
import { identity, modules } from '@/data/portfolio';

const views = [
  <Summary />,
  <Skills />,
  <Experience />,
  <Projects />,
  <Deployments />,
  <Education />,
  <Certifications />,
  <Contact />,
];

export default function Home() {
  const [active, setActive] = useState(0);
  const activeModule = modules[active];

  const select = useCallback((index: number) => {
    setActive(((index % modules.length) + modules.length) % modules.length);
  }, []);

  // Arrow keys cycle the slices. Right steps forward, left steps back.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') select(active + 1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') select(active - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, select]);

  return (
    <div className="scanlines flex min-h-screen flex-col">
      <Nav />

      {/* Identity strip */}
      <div className="border-b border-border px-4 py-4 sm:px-6">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h1 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            NURUDDIN <span className="text-primary text-glow-amber">SATTAR</span>
          </h1>
          <span className="text-xs font-semibold tracking-[0.25em] text-accent text-glow-cyan">
            {identity.role}
          </span>
          <span className="text-[10px] tracking-widest text-muted-foreground">
            {identity.domain}
          </span>
        </div>
      </div>

      {/* Console: pie selector + module panel */}
      <main className="mx-auto grid w-full max-w-7xl flex-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[420px_1fr]">
        {/* Pie selector. Visible on large screens. */}
        <div className="hidden lg:block">
          <div className="sticky top-6">
            <WheelNav active={active} onSelect={select} />
            <p className="mt-4 text-center text-[10px] tracking-[0.3em] text-muted-foreground">
              SWEEP OR ARROW KEYS TO NAVIGATE
            </p>
          </div>
        </div>

        {/* Fallback selector for small screens */}
        <div className="flex flex-wrap gap-2 lg:hidden">
          {modules.map((mod, i) => (
            <button
              key={mod.id}
              onClick={() => select(i)}
              className={`border px-3 py-1.5 text-[11px] font-semibold tracking-[0.2em] transition-colors ${
                i === active
                  ? 'border-primary bg-primary/15 text-primary'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {mod.label}
            </button>
          ))}
        </div>

        {/* Module panel. Content swaps with an engage animation. */}
        <section className="brackets brackets-all flex h-[560px] flex-col border border-border bg-card/30 lg:h-[620px]">
          <div className="flex items-center gap-3 border-b border-border px-5 py-3">
            <span className="hazard inline-block h-2 w-8" />
            <div>
              <h2 className="font-display text-base font-bold tracking-wide text-foreground sm:text-lg">
                {activeModule.title}
              </h2>
              <p className="text-[10px] tracking-[0.25em] text-muted-foreground">
                {activeModule.subtitle}
              </p>
            </div>
            <span className="ml-auto text-[10px] tracking-widest text-primary tabular-nums">
              {activeModule.code}
            </span>
          </div>
          <div key={active} className="module-in flex-1 overflow-y-auto p-5 sm:p-6">
            {views[active]}
          </div>
        </section>
      </main>

      {/* Footer strip */}
      <footer>
        <div className="hazard h-1 w-full" />
      </footer>
    </div>
  );
}
