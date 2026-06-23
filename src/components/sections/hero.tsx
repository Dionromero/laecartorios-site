"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { StarField } from "./star-field";

interface Slide {
  eyebrow: string;
  titleDark: string;
  titleGold: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  ctaLabel: string;
  ctaHref: string;
}

const slides: Slide[] = [
  {
    eyebrow: "Gestão Cartorial",
    titleDark: "Autoridade contábil",
    titleGold: "para o extrajudicial.",
    description:
      "Soluções 360° em contabilidade, fiscal e administrativa para cartórios em todo o Brasil. Onboarding personalizado e prestação de contas impecável.",
    linkLabel: "Solicitar diagnóstico",
    linkHref: "#solucoes",
    ctaLabel: "Conheça os serviços",
    ctaHref: "/servicos",
  },
  {
    eyebrow: "Otimização Tributária",
    titleDark: "Planejamento que reduz a carga,",
    titleGold: "sem riscos.",
    description:
      "Equipe especializada em tributação cartorial com revisões trimestrais e relatórios técnicos compreensíveis pelo titular.",
    linkLabel: "Ver nossos serviços",
    linkHref: "/servicos",
    ctaLabel: "Conheça os serviços",
    ctaHref: "/servicos",
  },
  {
    eyebrow: "Atendimento Exclusivo",
    titleDark: "Um time só seu,",
    titleGold: "com hora marcada.",
    description:
      "Você fala direto com quem entende do seu cartório. Sem call center, sem tickets perdidos, sem retrabalho.",
    linkLabel: "Conheça a LAE",
    linkHref: "/quem-somos",
    ctaLabel: "Conheça os serviços",
    ctaHref: "/servicos",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 7000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section
      aria-label="Banner principal"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(140% 120% at 50% -10%, #fffdf7 0%, #fbf3e0 55%, #f7ecd3 100%)",
      }}
    >
      {/* Luzes volumétricas (god rays) descendo do topo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="lae-ray absolute -top-20 left-[20%] h-[120%] w-40 -rotate-[18deg] blur-2xl"
          style={{
            background:
              "linear-gradient(to bottom, rgba(248,196,79,0.55), rgba(248,196,79,0) 75%)",
          }}
        />
        <div
          className="lae-ray-2 absolute -top-20 left-[42%] h-[120%] w-56 -rotate-[12deg] blur-3xl"
          style={{
            background:
              "linear-gradient(to bottom, rgba(222,202,113,0.5), rgba(222,202,113,0) 70%)",
          }}
        />
        <div
          className="lae-ray absolute -top-20 right-[18%] h-[120%] w-44 rotate-[14deg] blur-2xl"
          style={{
            background:
              "linear-gradient(to bottom, rgba(248,196,79,0.45), rgba(248,196,79,0) 72%)",
          }}
        />
      </div>

      {/* Glows dourados flutuando */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="lae-float absolute left-[10%] top-[8%] size-72 rounded-full bg-lae-amber/35 blur-[90px]" />
        <div className="lae-float-slow absolute right-[8%] top-[15%] size-80 rounded-full bg-lae-gold/40 blur-[100px]" />
        <div className="lae-float absolute bottom-[5%] left-[35%] size-72 rounded-full bg-lae-amber/30 blur-[110px]" />
      </div>

      {/* Brasão gigante de marca d'água, bem sutil */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/imagem/brasao-linha.png"
          alt=""
          aria-hidden="true"
          className="h-[42rem] w-auto"
        />
      </div>

      {/* Céu de constelações discretas no fundo */}
      <StarField />

      <div className="relative mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
        {/* ===== Carrossel ===== */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex min-h-[22rem] min-w-0 flex-[0_0_100%] flex-col items-center"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} de ${slides.length}`}
              >
                {selected === i && (
                  <div className="mx-auto max-w-3xl text-center">
                    <span
                      className="lae-slide-in block text-xs font-semibold uppercase tracking-[0.3em] text-lae-amber-deep"
                      style={{ animationDelay: "0ms" }}
                    >
                      {slide.eyebrow}
                    </span>

                    <h1
                      className="lae-slide-in mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
                      style={{ animationDelay: "120ms" }}
                    >
                      <span className="text-lae-ink">{slide.titleDark}</span>{" "}
                      <span
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(120deg, #e0a92e 0%, #c9881a 50%, #e8b94a 100%)",
                        }}
                      >
                        {slide.titleGold}
                      </span>
                    </h1>

                    <p
                      className="lae-slide-in mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-lae-stone"
                      style={{ animationDelay: "260ms" }}
                    >
                      {slide.description}
                    </p>

                    <div
                      className="lae-slide-in mt-9 flex flex-wrap items-center justify-center gap-4"
                      style={{ animationDelay: "400ms" }}
                    >
                      {/* Botão dourado principal */}
                    <a
                      href={slide.linkHref}
                      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-br from-lae-amber via-amber-300 to-lae-amber px-7 py-4 text-[15px] font-semibold tracking-wide text-lae-ink shadow-[0_4px_14px_0_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-3px_rgba(212,175,55,0.5)] hover:brightness-105 border border-amber-300/80"
                    >
                      {/* Brilho interno sutil no hover */}
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <span className="relative">{slide.linkLabel}</span>

                      <ArrowRight className="relative size-4 text-lae-ink transition-transform duration-500 group-hover:translate-x-1" />
                    </a>

                      {/* Botão contorno claro secundário */}
                    <a
                      href={slide.ctaHref}
                      className="group inline-flex items-center gap-3 rounded-xl border border-lae-ink/15 bg-amber-300/30 px-7 py-4 text-[15px] font-semibold tracking-wide text-lae-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-lae-amber hover:bg-amber-200 hover:shadow-lg hover:shadow-lae-amber/10"
                    >
                      {slide.ctaLabel}

                      <ArrowRight className="size-4 text-lae-ink transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dots centralizados */}
        <div className="mt-12 flex justify-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                selected === i ? "w-9 bg-lae-amber-deep" : "w-2.5 bg-lae-ink/25",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}