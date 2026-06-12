"use client";

import { useState, useRef } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="section-eyebrow">Sobre a LAE</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-lae-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Especialistas em contabilidade cartorial há mais de uma década.
            </h2>
            <div className="mt-4 gold-rule" />
            <div className="mt-6 space-y-4 text-base text-justify leading-relaxed text-lae-stone">
              <p>
                A LAE Cartórios nasceu da necessidade de um atendimento contábil que
                entendesse a realidade do extrajudicial brasileiro. Trabalhamos com
                tabelionatos, registros civis, de imóveis e de protesto em todo o país.
              </p>
              <p>
                Nossa metodologia combina rigor técnico, otimização tributária dentro
                da legalidade e canais de atendimento exclusivos &mdash; sem call
                center, sem tickets, sem retrabalho.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-lae-ink/10 bg-lae-amber/30 shadow-2xl lg:scale-105">
              <video
                ref={videoRef}
                src="/videos/lae.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 size-full object-cover"
              />
              <button
                onClick={toggleMute}
                aria-label={muted ? "Ativar som" : "Desativar som"}
                className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-lae-ink/80 text-white backdrop-blur transition-all hover:bg-lae-ink hover:scale-105"
              >
                {muted ? (
                  <VolumeX className="size-5" />
                ) : (
                  <Volume2 className="size-5" />
                )}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}