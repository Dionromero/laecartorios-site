"use client";

import { motion } from "motion/react";

/**
 * Estrelas + pedaço de constelação dentro do header.
 * Continuação do céu do hero. Cintilam suavemente.
 */

const SCATTER = Array.from({ length: 22 }, (_, i) => {
  const rx = Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
  const ry = Math.abs((Math.sin(i * 78.233) * 43758.5453) % 1);
  const rr = Math.abs((Math.sin(i * 4.137) * 1000) % 1);
  const round = (n: number) => Math.round(n * 1000) / 1000;
  return {
    left: `${round(rx * 100)}%`,
    top: `${round(10 + ry * 75)}%`,
    size: round(0.8 + rr * 1.4),
    tw: round(2 + rr * 3),
    delay: round(rx * 2),
  };
});

// pedaço de constelação (uns pontos ligados) no canto
const C_STARS = [
  { x: 12, y: 30 },
  { x: 26, y: 18 },
  { x: 40, y: 36 },
  { x: 55, y: 24 },
];
const C_LINES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
];

export function HeaderStars({ visible }: { visible: boolean }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* estrelas soltas */}
      {SCATTER.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-lae-amber-deep"
          style={{ left: s.left, top: s.top, width: `${s.size}px`, height: `${s.size}px` }}
          animate={{ opacity: [0.5, 0.12, 0.5] }}
          transition={{
            delay: s.delay,
            duration: s.tw,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* pedaço de constelação no canto direito */}
      <svg
        viewBox="0 0 70 50"
        className="absolute right-[6%] top-1/2 h-10 w-auto -translate-y-1/2"
        fill="none"
      >
        {C_LINES.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={C_STARS[a].x}
            y1={C_STARS[a].y}
            x2={C_STARS[b].x}
            y2={C_STARS[b].y}
            stroke="#deca71"
            strokeWidth={0.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1, 0],
              opacity: [0, 0.4, 0.4, 0.4, 0],
            }}
            transition={{
              duration: 7,
              times: [0, 0.55, 0.75, 0.9, 1],
              delay: i * 0.08,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}
        {C_STARS.map((s, i) => (
          <motion.circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={i === 1 ? 1.8 : 1.2}
            fill={i === 1 ? "#f8c44f" : "#c9881a"}
            animate={{ opacity: [0.9, 0.35, 0.9], scale: [1, 0.8, 1] }}
            transition={{
              duration: 2.4 + i * 0.4,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </svg>
    </div>
  );
}