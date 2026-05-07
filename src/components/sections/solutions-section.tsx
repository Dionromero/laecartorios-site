import {
  Settings,
  FileText,
  Headphones,
  Shield,
  TrendingUp,
  Users,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section id="solucoes" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Coluna esquerda — Como podemos ajudar */}
          <div>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-lae-ink sm:text-4xl">
              Como podemos{" "}
              <span className="italic text-lae-amber-deep">ajudar?</span>
            </h2>
            <ChevronDown
              className="mt-2 size-6 text-lae-stone/50"
              aria-hidden="true"
            />

            <ul className="mt-8 grid grid-cols-3 gap-4">
              {services.slice(0, 3).map((service) => {
                const Icon = ICON_MAP[service.icon];
                return (
                  <li key={service.slug} className="text-center">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-lae-stone/15 ring-2 ring-lae-amber/40">
                      <Icon className="size-7 text-lae-stone" />
                    </div>
                    <p className="mt-3 text-balance text-xs font-semibold text-lae-ink">
                      {service.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Coluna direita — Soluções 360° */}
          <div>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-lae-ink sm:text-4xl">
              Soluções 360°{" "}
              <span className="block text-lae-amber-deep">para a sua Gestão.</span>
            </h2>
            <ChevronDown
              className="mt-2 size-6 text-lae-stone/50"
              aria-hidden="true"
            />

            <p className="mt-8 text-base leading-relaxed text-lae-stone">
              Ao contratar a LAE, você adquire atendimento exclusivo, onboarding
              personalizado dos serviços e a tranquilidade de uma gestão blindada
              com prestação de contas impecável.
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-lae-ink">
              Solicite hoje um diagnóstico técnico com nossos especialistas!
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar diagnóstico
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/servicos">Ver todos os serviços</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
