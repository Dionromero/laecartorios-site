"use client";

import { motion } from "motion/react";

/**
 * Céu de constelações reais, em dourado, no fundo do hero.
 * Tons mais fortes para contraste no creme. Cintilam continuamente.
 */

type Star = { x: number; y: number; r?: number };
type Constellation = {
  id: string;
  left: string;
  top: string;
  width: string;
  rotate?: number;
  opacity?: number;
  stars: Star[];
  lines: [number, number][];
};

const CONSTELLATIONS: Constellation[] = [
  {
    id: "cruzeiro",
    left: "7%",
    top: "55%",
    width: "9rem",
    rotate: -8,
    opacity: 0.7,
    stars: [
      { x: 50, y: 8, r: 1.6 },
      { x: 50, y: 78, r: 1.8 },
      { x: 20, y: 46, r: 1.3 },
      { x: 80, y: 50, r: 1.3 },
      { x: 60, y: 60, r: 0.9 },
    ],
    lines: [
      [0, 1],
      [2, 3],
    ],
  },
  {
    id: "orion",
    left: "77%",
    top: "10%",
    width: "11rem",
    rotate: 6,
    opacity: 0.65,
    stars: [
      { x: 20, y: 12, r: 1.5 },
      { x: 78, y: 16, r: 1.4 },
      { x: 42, y: 50, r: 1.1 },
      { x: 50, y: 54, r: 1.1 },
      { x: 58, y: 58, r: 1.1 },
      { x: 26, y: 90, r: 1.5 },
      { x: 80, y: 88, r: 1.2 },
    ],
    lines: [
      [0, 2],
      [1, 4],
      [2, 3],
      [3, 4],
      [2, 5],
      [4, 6],
    ],
  },
  {
    id: "ursa",
    left: "28%",
    top: "6%",
    width: "10rem",
    rotate: -4,
    opacity: 0.6,
    stars: [
      { x: 8, y: 60, r: 1.2 },
      { x: 30, y: 64, r: 1.2 },
      { x: 50, y: 58, r: 1.2 },
      { x: 70, y: 50, r: 1.2 },
      { x: 78, y: 28, r: 1.1 },
      { x: 58, y: 22, r: 1.1 },
      { x: 40, y: 38, r: 1.1 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 3],
    ],
  },
  {
    id: "cassiopeia",
    left: "58%",
    top: "60%",
    width: "8rem",
    rotate: 10,
    opacity: 0.6,
    stars: [
      { x: 8, y: 30, r: 1.1 },
      { x: 30, y: 60, r: 1.1 },
      { x: 50, y: 32, r: 1.1 },
      { x: 70, y: 64, r: 1.1 },
      { x: 92, y: 34, r: 1.1 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    id: "escorpiao", // Escorpião (curva com cauda)
    left: "84%",
    top: "60%",
    width: "9rem",
    rotate: -6,
    opacity: 0.55,
    stars: [
      { x: 10, y: 18, r: 1.4 },
      { x: 24, y: 28, r: 1.1 },
      { x: 38, y: 38, r: 1.5 },
      { x: 52, y: 50, r: 1.0 },
      { x: 60, y: 64, r: 1.0 },
      { x: 56, y: 80, r: 1.0 },
      { x: 44, y: 88, r: 1.2 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
  },
  {
    id: "cisne", // Cisne / Cruzeiro do Norte
    left: "44%",
    top: "8%",
    width: "8rem",
    rotate: 4,
    opacity: 0.5,
    stars: [
      { x: 50, y: 8, r: 1.4 },
      { x: 50, y: 40, r: 1.0 },
      { x: 50, y: 74, r: 1.5 },
      { x: 20, y: 30, r: 1.1 },
      { x: 80, y: 34, r: 1.1 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [3, 1],
      [1, 4],
    ],
  },
  {
    id: "triangulo", // Triângulo
    left: "16%",
    top: "20%",
    width: "5.5rem",
    rotate: 8,
    opacity: 0.5,
    stars: [
      { x: 14, y: 70, r: 1.1 },
      { x: 86, y: 64, r: 1.1 },
      { x: 50, y: 18, r: 1.2 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  },
  {
    id: "lira", // Lira (paralelogramo + Vega)
    left: "67%",
    top: "30%",
    width: "5.5rem",
    rotate: -10,
    opacity: 0.5,
    stars: [
      { x: 50, y: 10, r: 1.5 },
      { x: 30, y: 40, r: 1.0 },
      { x: 66, y: 44, r: 1.0 },
      { x: 36, y: 76, r: 1.0 },
      { x: 72, y: 80, r: 1.0 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 4],
    ],
  },
];

const SCATTER = Array.from({ length: 58 }, (_, i) => {
  const rx = (Math.sin(i * 12.9898) * 43758.5453) % 1;
  const ry = (Math.sin(i * 78.233) * 43758.5453) % 1;
  const rr = (Math.sin(i * 4.137) * 1000) % 1;
  const round = (n: number) => Math.round(n * 1000) / 1000;
  return {
    left: `${round(Math.abs(rx) * 100)}%`,
    top: `${round(Math.abs(ry) * 100)}%`,
    size: round(0.9 + Math.abs(rr) * 1.8),
    tw: round(2 + Math.abs(rr) * 3),
    delay: round(Math.abs(rx) * 2),
  };
});

function ScatterStars() {
  return (
    <>
      {SCATTER.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-lae-amber-deep"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
          }}
          initial={{ opacity: 0 }}
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
    </>
  );
}

function MiniConstellation({ c, baseIndex }: { c: Constellation; baseIndex: number }) {
  return (
    <div
      className="pointer-events-none absolute"
      style={{
        left: c.left,
        top: c.top,
        width: c.width,
        transform: `rotate(${c.rotate ?? 0}deg)`,
        opacity: c.opacity ?? 0.5,
      }}
    >
      <svg viewBox="0 0 100 100" className="h-auto w-full" fill="none" aria-hidden="true">
        {c.lines.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={c.stars[a].x}
            y1={c.stars[a].y}
            x2={c.stars[b].x}
            y2={c.stars[b].y}
            stroke="#b8861f"
            strokeWidth={0.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1, 0],
              opacity: [0, 0.5, 0.5, 0.5, 0],
            }}
            transition={{
              duration: 7,
              times: [0, 0.55, 0.75, 0.9, 1],
              delay: baseIndex * 0.15 + i * 0.08,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />
        ))}
        {c.stars.map((s, i) => {
          const tw = 2.4 + ((i * 7 + baseIndex * 3) % 18) / 10;
          return (
            <motion.circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r ?? 1.1}
              fill="#a8750f"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0.75, 0.3, 0.75], scale: [1, 0.78, 1] }}
              transition={{
                delay: 0.5 + baseIndex * 0.15 + i * 0.06,
                duration: tw,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

export function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <ScatterStars />
      {CONSTELLATIONS.map((c, i) => (
        <MiniConstellation key={c.id} c={c} baseIndex={i} />
      ))}
    </div>
  );
}