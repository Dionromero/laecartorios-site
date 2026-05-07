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

  // Auto-advance every 7 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 7000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section
      aria-label="Banner principal"
      className="relative overflow-hidden bg-lae-amber grain"
    >
      {/* Decorative editorial frame */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full border-[3px] border-lae-ink" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full border-[3px] border-lae-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_100%]"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} de ${slides.length}`}
              >
                <div className="mx-auto max-w-3xl text-center">
                  <span className="section-eyebrow">{slide.eyebrow}</span>
                  <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-lae-ink sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-lae-ink/80">
                    {slide.description}
                  </p>
                  <div className="mt-10 flex justify-center gap-4">
                    <Button asChild variant="ink" size="lg">
                      <a href={slide.ctaHref}>{slide.ctaLabel}</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          aria-label="Slide anterior"
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-lae-ink/10 p-3 text-lae-ink transition-colors hover:bg-lae-ink hover:text-white lg:left-8"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          aria-label="Próximo slide"
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-lae-ink/10 p-3 text-lae-ink transition-colors hover:bg-lae-ink hover:text-white lg:right-8"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                selected === i ? "w-8 bg-lae-ink" : "w-2 bg-lae-ink/30",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
