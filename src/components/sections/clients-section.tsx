"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Client } from "@/lib/content";

interface ClientsSectionProps {
  clients: Client[];
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  if (clients.length === 0) return null;

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">Quem confia</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-lae-ink sm:text-4xl">
            Nossos Clientes
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex">
              {clients.map((client) => (
                <article
                  key={client.slug}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="flex h-full items-start gap-4">
                    {/* Avatar — círculo âmbar com inicial */}
                    <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-lae-amber/70 text-2xl font-bold text-lae-ink">
                      {client.avatar ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={client.avatar}
                          alt=""
                          className="size-full rounded-full object-cover"
                        />
                      ) : (
                        client.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lae-ink">{client.name}</h3>
                      <p className="text-sm text-lae-stone">{client.location}</p>
                      <Quote className="mt-2 size-4 text-lae-amber" />
                      <p className="mt-1 text-sm leading-relaxed text-lae-stone">
                        {client.testimonial}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Arrow controls */}
          <button
            aria-label="Cliente anterior"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-lae-ink/15 bg-white p-2 text-lae-ink transition-colors hover:bg-lae-amber lg:block"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            aria-label="Próximo cliente"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-lae-ink/15 bg-white p-2 text-lae-ink transition-colors hover:bg-lae-amber lg:block"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
