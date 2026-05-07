import { Star } from "lucide-react";

export function TaglineStars() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div
          className="mb-4 flex justify-center gap-1"
          role="img"
          aria-label="5 de 5 estrelas"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-5 fill-lae-amber text-lae-amber" />
          ))}
        </div>
        <p className="text-balance text-xl font-semibold tracking-tight text-lae-ink sm:text-2xl">
          Autoridade e excelência contábil para o extrajudicial.
        </p>
      </div>
    </section>
  );
}
