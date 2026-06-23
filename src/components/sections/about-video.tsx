"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  // Só inicia o vídeo depois que o site carregou (experiência mais fluida)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const start = () => {
      v.play().then(() => setPlaying(true)).catch(() => {});
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
      return () => window.removeEventListener("load", start);
    }
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    // se desmutou e o volume estava em 0, sobe um pouco
    if (!v.muted && v.volume === 0) {
      v.volume = 0.5;
      setVolume(0.5);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const val = Number(e.target.value);
    v.volume = val;
    setVolume(val);
    // ajusta o mudo conforme o volume
    const shouldMute = val === 0;
    v.muted = shouldMute;
    setMuted(shouldMute);
  };

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="section-eyebrow">Sobre a LAE</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-lae-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Especialistas em contabilidade cartorial.
            </h2>
            <div className="mt-4 gold-rule" />
            <div className="mt-6 space-y-4 text-justify text-base leading-relaxed text-lae-stone">
              <p>
                A LAE Cartórios nasceu da necessidade de um atendimento contábil
                que entendesse a realidade do extrajudicial brasileiro. Trabalhamos
                com tabelionatos, registros civis, de imóveis e de protesto em todo
                o país.
              </p>
              <p>
                Nossa metodologia combina rigor técnico, otimização tributária
                dentro da legalidade e canais de atendimento exclusivos &mdash; sem
                call center, sem tickets, sem retrabalho.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="group relative aspect-video overflow-hidden rounded-2xl border border-lae-ink/10 bg-lae-amber/30 shadow-2xl lg:scale-105">
              <video
                ref={videoRef}
                src="/videos/lae.mp4"
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 size-full object-cover"
                onClick={togglePlay}
              />

              {/* Controles — escondidos, aparecem no hover */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/40 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  onClick={togglePlay}
                  aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
                  className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-lae-ink/80 text-white backdrop-blur transition-all hover:scale-105 hover:bg-lae-ink"
                >
                  {playing ? (
                    <Pause className="size-5" />
                  ) : (
                    <Play className="size-5 translate-x-px" />
                  )}
                </button>

                <div className="pointer-events-auto flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Ativar som" : "Desativar som"}
                    className="flex size-10 items-center justify-center rounded-full bg-lae-ink/80 text-white backdrop-blur transition-all hover:scale-105 hover:bg-lae-ink"
                  >
                    {muted ? (
                      <VolumeX className="size-5" />
                    ) : (
                      <Volume2 className="size-5" />
                    )}
                  </button>

                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={muted ? 0 : volume}
                    onChange={handleVolume}
                    aria-label="Volume"
                    className="lae-volume h-1.5 w-20 cursor-pointer appearance-none rounded-full bg-white/40 accent-lae-amber"
                  />
                </div>
              </div>

              {/* Indicador central de play quando pausado */}
              {!playing && (
                <button
                  onClick={togglePlay}
                  aria-label="Reproduzir vídeo"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-lae-ink/70 text-white backdrop-blur transition-transform hover:scale-105">
                    <Play className="size-7 translate-x-0.5" />
                  </span>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}