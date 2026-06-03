import { CountUp } from "@/components/ui/count-up";

interface Stat {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { to: 200, prefix: "+", label: "Cartórios atendidos" },
  { to: 15, suffix: " anos", label: "De especialização" },
  { to: 100, suffix: "%", label: "Conformidade" },
];

export function StatsBar() {
  return (
    <section className="border-y border-lae-ink/10 bg-lae-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-lae-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-6 py-10 text-center">
            <p className="font-display text-4xl font-bold text-lae-ink sm:text-5xl">
              <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-lae-stone">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}