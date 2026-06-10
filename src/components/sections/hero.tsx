"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  eyebrow: string;
  /** Parte do título em preto/grafite */
  titleDark: string;
  /** Parte final do título em dourado */
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
      style={{ backgroundColor: "#f2b536" }}
    >
      {/* Arcos / curvas sutis no fundo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] top-[-30%] h-[140%] w-[60%] rounded-full border border-white/15" />
        <div className="absolute -right-[20%] top-[-10%] h-[120%] w-[55%] rounded-full border border-white/10" />
        <div className="absolute left-[-15%] bottom-[-40%] h-[90%] w-[50%] rounded-full border border-black/5" />
      </div>

      {/* Brasão gigante (versão linha) como marca d'água à direita */}
      <div className="pointer-events-none absolute right-[3%] top-1/2 hidden -translate-y-1/2 lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/imagem/logolae3.png"
          alt=""
          aria-hidden="true"
          className="h-[42rem] w-auto opacity-80"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex min-h-[26rem] min-w-0 flex-[0_0_100%] items-center"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} de ${slides.length}`}
              >
                <div className="max-w-2xl text-left">
                  {selected === i && (
                    <>
                      {/* Eyebrow com risquinho dourado embaixo */}
                      <span
                        className="lae-slide-in block text-xs font-semibold uppercase tracking-[0.3em] text-lae-ink/80"
                        style={{ animationDelay: "0ms" }}
                      >
                        {slide.eyebrow}
                      </span>
                      <div
                        className="lae-slide-in mt-3 h-1 w-12 rounded-full bg-lae-amber-deep"
                        style={{ animationDelay: "100ms" }}
                      />

                      {/* Título: parte preta + parte dourada */}
                      <h1
                        className="lae-slide-in mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
                        style={{ animationDelay: "200ms" }}
                      >
                        <span className="text-lae-ink">{slide.titleDark}</span>{" "}
                        <span className="text-lae-amber-deep">
                          {slide.titleGold}
                        </span>
                      </h1>

                      <p
                        className="lae-slide-in mt-7 max-w-xl text-pretty text-lg leading-relaxed text-lae-ink/85"
                        style={{ animationDelay: "350ms" }}
                      >
                        {slide.description}
                      </p>

                      {/* CTAs */}
                      <div
                        className="lae-slide-in mt-10 flex flex-wrap items-center gap-6"
                        style={{ animationDelay: "500ms" }}
                      >
                        {/* Link sublinhado dourado + seta */}
                        <a
                          href={slide.linkHref}
                          className="group inline-flex items-center gap-2 border-b-2 border-lae-amber-deep pb-1 text-[15px] font-semibold text-lae-ink transition-colors hover:text-lae-amber-deep"
                        >
                          {slide.linkLabel}
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </a>

                        {/* Botão preto com seta dourada */}
                        <a
                          href={slide.ctaHref}
                          className="group inline-flex items-center gap-3 rounded-xl bg-lae-ink px-7 py-4 text-[15px] font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                        >
                          {slide.ctaLabel}
                          <ArrowRight className="size-4 text-lae-amber transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots à esquerda */}
        <div className="mt-14 flex justify-start gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                selected === i ? "w-9 bg-lae-ink" : "w-2.5 bg-lae-ink/30",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}