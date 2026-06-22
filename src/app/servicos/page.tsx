import type { Metadata } from "next";
import {
  Settings,
  FileText,
  Headphones,
  Shield,
  TrendingUp,
  Users,
  ArrowDownRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { getAllServices } from "@/lib/content";
import type { Service } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { CardSky } from "@/components/ui/card-sky";
import { siteConfig } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Soluções 360° para cartórios: gestão administrativa, otimização tributária e atendimento personalizado. Conheça os serviços da LAE Cartórios.",
};

const ICON_MAP: Record<Service["icon"], LucideIcon> = {
  settings: Settings,
  "file-text": FileText,
  headphones: Headphones,
  shield: Shield,
  "trending-up": TrendingUp,
  users: Users,
};

// Logos de parceiros — troque por imagens reais em /public/parceiros/
const PARCEIROS = [
  "CNR",
  "ANOREG/BR",
  "ANOREG/PR",
  "ANOREG/RS",
  "ANOREG/CE",
  "ANOREG/AM",
  "ANOREG/PE",
  "ANOREG/MT",
  "ANOREG/ES",
  "SERJUS-ANOREG/MG",
  "SINOREG/PR",
  "SINOREG/ES",
  "ARIPE",
  "Colégio Notarial do Brasil",
  "ARIPAR",
  "Colégio Registral RS",
];

export default function ServicosPage() {
  const services = getAllServices();

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* ===== Cabeçalho ===== */}
        <header className="mb-14">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-lae-ink sm:text-5xl">
            Serviços
          </h1>
          <ArrowDownRight
            className="mt-2 size-6 text-lae-stone/50"
            aria-hidden="true"
          />
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-lae-stone">
            Soluções 360° em contabilidade, fiscal e administrativo, pensadas
            exclusivamente para a realidade do extrajudicial brasileiro.
          </p>
        </header>

        {/* ===== Cards de serviços ===== */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 100}>
                <div className="group flex h-full flex-col rounded-2xl shadow-xl border border-lae-ink/10 bg-card p-8 transition-all hover:-translate-y-1 hover:border-lae-amber/50 hover:shadow-xl">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-lae-amber/15 ring-1 ring-lae-amber/30 transition-colors group-hover:bg-lae-amber/25">
                    <Icon className="size-7 text-lae-amber-deep" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-bold leading-snug text-lae-ink">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-lae-stone">
                    {service.description}
                  </p>
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lae-amber-deep"
                  >
                    Falar sobre este serviço
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </section>

        {/* ===== CTA ===== */}
        <Reveal>
          <div
            className="relative mt-16 flex flex-col items-center gap-5 overflow-hidden rounded-2xl px-8 py-12 text-center"
            style={{
              background:
                "radial-gradient(120% 140% at 50% -20%, #24211d 0%, #1b1916 55%, #121110 100%)",
            }}
          >
            <CardSky />
            <h2 className="relative max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl">
              Solicite hoje um diagnóstico técnico com nossos especialistas.
            </h2>
            <p className="relative max-w-xl text-sm leading-relaxed text-white/70">
              Atendimento exclusivo, onboarding personalizado e a tranquilidade de
              uma gestão blindada com prestação de contas impecável.
            </p>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Solicitar diagnóstico
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>

        {/* ===== Parceiros ===== */}
        <section className="mt-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-lae-ink sm:text-4xl">
              Parceiros
            </h2>
            <ArrowDownRight
              className="mt-2 size-6 text-lae-stone/50"
              aria-hidden="true"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-lae-ink/10 bg-lae-ink/10 sm:grid-cols-3 lg:grid-cols-4">
              {PARCEIROS.map((nome) => (
                <div
                  key={nome}
                  className="flex aspect-[3/2] items-center justify-center bg-background p-6 text-center transition-colors hover:bg-lae-amber/5"
                >
                  {/* Troque por <img src="/parceiros/xxx.png" /> quando tiver os logos */}
                  <span className="text-xs font-semibold uppercase tracking-wide text-lae-stone">
                    {nome}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-10 text-center font-display text-lg font-semibold italic text-lae-ink">
              Para você que, assim como nós, dá valor ao resultado.
            </p>
          </Reveal>
        </section>
      </div>
    </div>
  );
}