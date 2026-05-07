import { Play } from "lucide-react";

interface AboutVideoProps {
  youtubeId?: string;
}

export function AboutVideo({ youtubeId = "dQw4w9WgXcQ" }: AboutVideoProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto */}
          <div>
            <span className="section-eyebrow">Sobre a LAE</span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-lae-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Especialistas em contabilidade cartorial há mais de uma década.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-lae-stone">
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
          </div>

          {/* Vídeo */}
          <div className="relative aspect-video overflow-hidden rounded-lg border border-lae-amber/40 bg-lae-amber/40 shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
              title="Apresentação institucional LAE Cartórios"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
              loading="lazy"
            />
            {/* Decorative play badge — visível só sobre placeholder */}
            <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full bg-lae-ink px-3 py-1.5 text-xs font-medium text-white">
              <Play className="size-3 fill-current" />
              Vídeo institucional
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
