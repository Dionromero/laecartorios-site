import {
  Settings,
  FileText,
  Headphones,
  Shield,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";
import type { Service } from "@/lib/content";

const ICON_MAP: Record<Service["icon"], LucideIcon> = {
  settings: Settings,
  "file-text": FileText,
  headphones: Headphones,
  shield: Shield,
  "trending-up": TrendingUp,
  users: Users,
};

interface SolutionsSectionProps {
  services: Service[];
}

export function SolutionsSection({ services }: SolutionsSectionProps) {
  return (
    <section id="solucoes" className="bg-background/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Coluna esquerda — Como podemos ajudar */}
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold leading-tight tracking-tight text-lae-ink sm:text-4xl">
              Como podemos <span className="heading-accent">ajudar?</span>
            </h2>

            <ul className="m-8 grid grid-cols-3 gap-5">
              {services.slice(0, 3).map((service) => {
                const Icon = ICON_MAP[service.icon];
                return (
                  <li key={service.slug} className="group text-center">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-lae-ink ring-2 ring-lae-amber/40 transition-transform group-hover:-translate-y-1">
                      <Icon className="size-7 text-lae-amber" />
                    </div>
                    <p className="mt-3 text-balance text-xs font-semibold text-lae-ink">
                      {service.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Coluna direita — Soluções 360° */}
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-lae-ink sm:text-4xl">
              Soluções 360°{" "}
              <span className="block heading-accent">para a sua Gestão</span>
            </h2>

            <p className="mt-8 text-justify text-base leading-relaxed text-lae-stone">
              Ao contratar a LAE, você adquire atendimento exclusivo, onboarding
              personalizado dos serviços e a tranquilidade de uma gestão blindada
              com prestação de contas impecável.
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-lae-ink">
              Solicite hoje um diagnóstico técnico com nossos especialistas!
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="primary">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar diagnóstico
                </a>
              </Button>
              <Button asChild size="lg" variant="soft">
                <a href="/servicos">Ver todos os serviços</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}