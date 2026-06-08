"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

const slides: Slide[] = [
  {
    eyebrow: "Gestão Cartorial",
    title: "Autoridade contábil para o extrajudicial.",
    description:
      "Soluções 360° em contabilidade, fiscal e administrativa para cartórios em todo o Brasil. Onboarding personalizado e prestação de contas impecável.",
    ctaLabel: "Solicitar diagnóstico",
    ctaHref: "#solucoes",
  },
  {
    eyebrow: "Otimização Tributária",
    title: "Planejamento que reduz a carga, sem riscos.",
    description:
      "Equipe especializada em tributação cartorial com revisões trimestrais e relatórios técnicos compreensíveis pelo titular.",
    ctaLabel: "Ver nossos serviços",
    ctaHref: "/servicos",
  },
  {
    eyebrow: "Atendimento Exclusivo",
    title: "Um time só seu, com hora marcada.",
    description:
      "Você fala direto com quem entende do seu cartório. Sem call center, sem tickets perdidos, sem retrabalho.",
    ctaLabel: "Conheça a LAE",
    ctaHref: "/quem-somos",
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
      className="relative overflow-hidden bg-lae-amber"
    >
      {/* Brilho diagonal sutil (tunada comercial) */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-lae-gold/40 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-[28rem] w-[28rem] rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_100%]"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} de ${slides.length}`}
              >
                <div className="max-w-2xl text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lae-ink/70">
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-lae-ink sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-lae-ink/80">
                    {slide.description}
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button asChild variant="ghost" size="lg">
                      <a href={slide.ctaHref}>{slide.ctaLabel}</a>
                    </Button>
                    <Button asChild variant="ink" size="lg">
                      <a href="/servicos">Conheça os serviços</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-12 flex justify-start gap-2">
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