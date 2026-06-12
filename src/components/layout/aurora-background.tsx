"use client";

/**
 * Estrelas cadentes discretas nas laterais do body.
 * Riscos de luz dourada que cruzam rápido e somem, espaçados.
 * Fixo, pointer-events-none, não afeta o hero (que tem z maior).
 */

// posições/tempos das estrelas cadentes (lado, topo inicial, delay, duração)
const SHOOTERS = [
  { side: "left", top: "8%", delay: "0s", dur: "1.1s", cycle: "5s" },
  { side: "left", top: "28%", delay: "1.8s", dur: "1.3s", cycle: "6s" },
  { side: "left", top: "48%", delay: "3.2s", dur: "1.0s", cycle: "5.5s" },
  { side: "left", top: "66%", delay: "2.2s", dur: "1.2s", cycle: "6.5s" },
  { side: "left", top: "84%", delay: "4s", dur: "1.1s", cycle: "5s" },
  { side: "right", top: "16%", delay: "1s", dur: "1.2s", cycle: "5.5s" },
  { side: "right", top: "36%", delay: "2.6s", dur: "1.1s", cycle: "6s" },
  { side: "right", top: "54%", delay: "0.6s", dur: "1.3s", cycle: "5s" },
  { side: "right", top: "72%", delay: "3.6s", dur: "1.0s", cycle: "6.5s" },
  { side: "right", top: "90%", delay: "1.4s", dur: "1.2s", cycle: "5.5s" },
];

export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {SHOOTERS.map((s, i) => (
        <span
          key={i}
          className={`lae-shooter lae-shooter-${s.side}`}
          style={{
            top: s.top,
            [s.side]: "6%",
            animationDelay: s.delay,
            animationDuration: s.cycle,
            ["--shoot-dur" as string]: s.dur,
          }}
        />
      ))}
    </div>
  );
}