import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function TaglineStars() {
  return (
    <section className="bg-lae-paper py-16">
      <Reveal>
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div
            className="mb-5 flex justify-center gap-1.5"
            role="img"
            aria-label="5 de 5 estrelas"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-lae-amber text-lae-amber" />
            ))}
          </div>
          <p className="text-balance font-display text-xl font-bold tracking-tight text-lae-ink sm:text-2xl">
            Autoridade e excelência contábil para o extrajudicial.
          </p>
        </div>
      </Reveal>
    </section>
  );
}