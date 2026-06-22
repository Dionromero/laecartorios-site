"use client";

import { motion } from "motion/react";

/**
 * Céu estrelado dourado para fundos de cards/CTAs escuros.
 * Estrelas cintilando + uma constelação discreta + glow.
 */

const STARS = Array.from({ length: 26 }, (_, i) => {
  const rx = Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
  const ry = Math.abs((Math.sin(i * 78.233) * 43758.5453) % 1);
  const rr = Math.abs((Math.sin(i * 4.137) * 1000) % 1);
  const round = (n: number) => Math.round(n * 1000) / 1000;
  return {
    left: `${round(rx * 100)}%`,
    top: `${round(ry * 100)}%`,
    size: round(0.8 + rr * 1.6),
    tw: round(2 + rr * 3),
    delay: round(rx * 2),
  };
});

// constelações discretas (várias, espalhadas)
type Mini = {
  left: string;
  top: string;
  w: string;
  rotate: number;
  stars: { x: number; y: number }[];
  lines: [number, number][];
  bright?: number; // índice da estrela mais brilhante
};

const CONSTELLATIONS: Mini[] = [
  {
    // foice (canto superior esquerdo)
    left: "5%",
    top: "12%",
    w: "5.5rem",
    rotate: -4,
    stars: [
      { x: 12, y: 28 },
      { x: 26, y: 16 },
      { x: 42, y: 34 },
      { x: 58, y: 22 },
      { x: 72, y: 40 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    bright: 2,
  },
  {
    // triângulo (superior direito)
    left: "72%",
    top: "16%",
    w: "3.5rem",
    rotate: 8,
    stars: [
      { x: 14, y: 70 },
      { x: 86, y: 64 },
      { x: 50, y: 14 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    bright: 2,
  },
  {
    // "W" (Cassiopeia, inferior esquerdo)
    left: "10%",
    top: "62%",
    w: "4.5rem",
    rotate: 6,
    stars: [
      { x: 8, y: 30 },
      { x: 30, y: 60 },
      { x: 50, y: 32 },
      { x: 70, y: 62 },
      { x: 92, y: 34 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    // pequena linha (centro-direita)
    left: "62%",
    top: "58%",
    w: "4rem",
    rotate: -10,
    stars: [
      { x: 10, y: 20 },
      { x: 38, y: 40 },
      { x: 66, y: 30 },
      { x: 90, y: 56 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    bright: 1,
  },
];

export function CardSky() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
      {/* glow dourado suave */}
      <div className="absolute -right-10 -top-10 size-56 rounded-full bg-lae-amber/15 blur-3xl" />
      <div className="absolute -bottom-12 -left-8 size-48 rounded-full bg-lae-amber/10 blur-3xl" />

      {/* estrelas cintilando */}
      {STARS.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-lae-amber"
          style={{ left: s.left, top: s.top, width: `${s.size}px`, height: `${s.size}px` }}
          animate={{ opacity: [0.7, 0.2, 0.7] }}
          transition={{
            delay: s.delay,
            duration: s.tw,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* constelações discretas espalhadas */}
      {CONSTELLATIONS.map((c, ci) => (
        <svg
          key={ci}
          viewBox="0 0 100 80"
          className="absolute h-auto opacity-70"
          style={{
            left: c.left,
            top: c.top,
            width: c.w,
            transform: `rotate(${c.rotate}deg)`,
          }}
          fill="none"
        >
          {c.lines.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={c.stars[a].x}
              y1={c.stars[a].y}
              x2={c.stars[b].x}
              y2={c.stars[b].y}
              stroke="#deca71"
              strokeWidth={0.6}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 1, 0],
                opacity: [0, 0.45, 0.45, 0.45, 0],
              }}
              transition={{
                duration: 7,
                times: [0, 0.55, 0.75, 0.9, 1],
                delay: ci * 0.4 + i * 0.1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          ))}
          {c.stars.map((s, i) => (
            <motion.circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={c.bright === i ? 1.8 : 1.2}
              fill={c.bright === i ? "#f8c44f" : "#deca71"}
              animate={{ opacity: [0.9, 0.35, 0.9], scale: [1, 0.8, 1] }}
              transition={{
                duration: 2.6 + ((i + ci) % 5) * 0.3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </svg>
      ))}
    </div>
  );
}