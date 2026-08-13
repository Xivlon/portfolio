import { modules } from '@/data/portfolio';

interface Props {
  active: number;
  onSelect: (index: number) => void;
}

// Pie-slice selector. 8 equal wedges. Active wedge is pulled out and lit.
const CX = 210;
const CY = 210;
const R_OUT = 178;
const R_PULL = 12;
const WEDGE = 360 / modules.length;
function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function wedgePath(index: number) {
  const start = index * WEDGE - 90; // first wedge centered on top
  const end = start + WEDGE;
  const a = polar(start, R_OUT);
  const b = polar(end, R_OUT);
  return `M ${CX} ${CY} L ${a.x} ${a.y} A ${R_OUT} ${R_OUT} 0 0 1 ${b.x} ${b.y} Z`;
}

export default function WheelNav({ active, onSelect }: Props) {
  const activeModule = modules[active];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] select-none">
      <svg viewBox="0 0 420 420" className="wheel-svg h-auto w-full">
        {/* Base ring guides */}
        <circle cx={CX} cy={CY} r={R_OUT} fill="none" stroke="hsl(216 12% 17%)" strokeWidth="1" />
        <circle cx={CX} cy={CY} r={R_OUT * 0.62} fill="none" stroke="hsl(216 12% 14%)" strokeWidth="1" strokeDasharray="4 6" />

        {modules.map((mod, i) => {
          const isActive = i === active;
          const mid = i * WEDGE - 90 + WEDGE / 2;
          const pull = polar(mid, isActive ? R_PULL : 0);
          const labelPos = polar(mid, R_OUT * 0.62);
          return (
            <g
              key={mod.id}
              onClick={() => onSelect(i)}
              onMouseEnter={() => onSelect(i)}
              className={isActive ? 'wedge wedge-active' : 'wedge'}
              style={{
                transform: `translate(${pull.x - CX}px, ${pull.y - CY}px)`,
                transition: 'transform 0.35s cubic-bezier(0.34,1.2,0.5,1)',
              }}
            >
              <path
                d={wedgePath(i)}
                className="wedge-face"
                style={{
                  fill: isActive
                    ? 'hsl(41 100% 50% / 0.16)'
                    : 'hsl(220 13% 7% / 0.7)',
                  stroke: isActive ? 'hsl(41 100% 50%)' : 'hsl(216 12% 17%)',
                  strokeWidth: isActive ? 2 : 1,
                  filter: isActive
                    ? 'drop-shadow(0 0 10px hsl(41 100% 50% / 0.45))'
                    : undefined,
                }}
              />
              <text
                x={labelPos.x}
                y={labelPos.y - 4}
                textAnchor="middle"
                className="wedge-code pointer-events-none"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  fill: isActive ? 'hsl(41 100% 50% / 0.85)' : 'hsl(215 9% 52% / 0.8)',
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {mod.code}
              </text>
              <text
                x={labelPos.x}
                y={labelPos.y + 11}
                textAnchor="middle"
                className="wedge-label pointer-events-none"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  fill: isActive ? 'hsl(41 100% 50%)' : 'hsl(215 9% 52%)',
                  fontFamily: "'IBM Plex Mono', monospace",
                  textShadow: isActive
                    ? '0 0 12px hsl(41 100% 50% / 0.6)'
                    : undefined,
                }}
              >
                {mod.label}
              </text>
            </g>
          );
        })}

        {/* Center hub */}
        <circle className="hub-ring" cx={CX} cy={CY} r={72} fill="hsl(220 13% 7%)" stroke="hsl(41 100% 50% / 0.5)" strokeWidth="1.5" style={{ transition: 'stroke 0.3s ease, filter 0.3s ease' }} />
        <circle cx={CX} cy={CY} r={64} fill="none" stroke="hsl(216 12% 17%)" strokeWidth="1" strokeDasharray="3 5" />
        <text
          x={CX}
          y={CY - 22}
          textAnchor="middle"
          style={{ fontSize: 9, letterSpacing: '0.3em', fill: 'hsl(215 9% 52%)', fontFamily: "'IBM Plex Mono', monospace" }}
        >
          MODULE
        </text>
        <text
          x={CX}
          y={CY + 4}
          textAnchor="middle"
          style={{ fontSize: 22, fontWeight: 700, letterSpacing: '0.15em', fill: 'hsl(41 100% 50%)', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {activeModule.code}
        </text>
        <text
          x={CX}
          y={CY + 24}
          textAnchor="middle"
          style={{ fontSize: 11, letterSpacing: '0.25em', fill: 'hsl(210 12% 82% / 0.85)', fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {activeModule.label}
        </text>
      </svg>
    </div>
  );
}
