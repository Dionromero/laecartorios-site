import type { Metadata } from "next";
import { ArrowDownRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Especialistas em contabilidade cartorial. Conheça a missão, visão e valores da LAE Cartórios e o time por trás da autoridade contábil para o extrajudicial.",
};

const diretores = [
  {
    nome: "Diretor",
    bio: "Evandro Oliveira é contador, CEO e cofundador da LAE Cartórios. Com mais de 30 anos de experiência em auditoria, consultoria empresarial e planejamento tributário, é referência em contabilidade para o setor extrajudicial. Sua trajetória é marcada pela integração entre estratégia, gestão e desenvolvimento de pessoas, impulsionando resultados sustentáveis e a evolução das organizações que assessora.",
    foto: "/imagem/evandro.jpeg",
  },
];

export default function QuemSomosPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* ===== Quem somos ===== */}
        <section className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-lae-ink sm:text-5xl">
              Quem <span className="heading-accent">somos</span>
            </h1>
            <ArrowDownRight
              className="mt-2 size-6 text-lae-stone/50"
              aria-hidden="true"
            />
            <div className="mt-6 space-y-4 text-justify text-base leading-relaxed text-lae-stone">
              <p>
                A LAE Cartórios é uma assessoria contábil especializada no setor
                extrajudicial brasileiro. Atendemos tabelionatos, registros civis,
                de imóveis e de protesto em todo o país, com soluções 360° em
                contabilidade, fiscal e administrativo.
              </p>
              <p>
                Combinamos rigor técnico, otimização tributária dentro da
                legalidade e atendimento exclusivo — sem call center, sem tickets,
                sem retrabalho. Cada cartório fala diretamente com quem entende da
                sua realidade.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-lae-ink/10 bg-lae-amber/30">
              {/* Troque por uma foto real em /public/sobre/foto-lae.jpg */}
              <div className="flex size-full items-center justify-center text-sm font-medium text-lae-ink/50">
                Foto LAE
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== Missão / Valores / Visão ===== */}
        <section className="mt-20">
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            <Reveal className="h-full">
              <PilarCard
                titulo="Missão"
                texto="Desenvolver soluções contábeis, administrativas e jurídicas voltadas exclusivamente ao setor extrajudicial, com excelência técnica, inovação, eficiência operacional, segurança da informação e atendimento personalizado, sempre em estrita observância à legalidade e à ética profissional."
              />
            </Reveal>
            <Reveal delay={100} className="h-full">
              <PilarCard
                titulo="Valores"
                texto="Ética, transparência, comprometimento, confidencialidade e busca contínua pela excelência. Princípios que orientam cada entrega e cada relação com os cartórios que atendemos."
              />
            </Reveal>
            <Reveal delay={200} className="h-full">
              <PilarCard
                titulo="Visão"
                texto="Ser referência nacional na prestação de serviços especializados a cartórios, reconhecida pela qualidade técnica, confiabilidade, conformidade normativa e respeito às boas práticas profissionais."
              />
            </Reveal>
          </div>

          {/* ===== Localização ===== */}
          <Reveal>
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-lae-ink">
                Localização
              </h2>
              <div className="mt-5 overflow-hidden rounded-xl border border-lae-ink/10 shadow-sm">
                <iframe
                  title="Localização da LAE Cartórios"
                  src="https://www.google.com/maps?q=Rua+Solim%C3%B5es+849+Merc%C3%AAs+Curitiba+PR&output=embed"
                  className="aspect-[16/9] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 flex items-center justify-center gap-2 text-sm text-lae-stone">
                <MapPin className="size-4 shrink-0 text-lae-amber-deep" />
                {siteConfig.contact.address}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ===== Nossos Diretores ===== */}
        <section className="mt-24">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-lae-ink sm:text-4xl">
              Nosso <span className="heading-accent">Diretor</span>
            </h2>
            <ArrowDownRight
              className="mt-2 size-6 text-lae-stone/50"
              aria-hidden="true"
            />
          </Reveal>

          <div className="mt-12 space-y-16">
            {diretores.map((d, i) => (
              <Reveal key={d.nome}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-lae-ink/10 bg-lae-amber/30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.foto}
                      alt={`Foto de ${d.nome}`}
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-lae-ink">
                      {d.nome}
                    </h3>
                    <div className="mt-3 h-1 w-12 rounded-full bg-lae-amber-deep" />
                    <p className="mt-5 text-justify text-base leading-relaxed text-lae-stone">
                      {d.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function PilarCard({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-lae-ink/10 bg-card p-7 shadow-xl transition-all hover:-translate-y-1 hover:border-lae-amber/40 hover:shadow-lg">
      <span className="inline-block self-start rounded-full bg-lae-amber px-6 py-2 font-display text-lg font-bold text-lae-ink shadow-sm">
        {titulo}
      </span>
      <p className="mt-5 text-justify text-base leading-relaxed text-lae-stone">
        {texto}
      </p>
    </div>
  );
}