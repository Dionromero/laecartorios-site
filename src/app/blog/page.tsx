import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog da LAE",
  description:
    "Análises, atualizações regulatórias e boas práticas para a gestão do seu cartório.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-lae-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <header className="mb-14 text-center">
          <span className="section-eyebrow">Conteúdo</span>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-lae-ink sm:text-5xl">
            Blog da LAE
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-lae-stone">
            Análises, atualizações regulatórias e boas práticas para a gestão do
            seu cartório.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-center text-sm text-lae-stone">
            Em breve, novos artigos.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="flex h-full flex-col overflow-hidden border-lae-amber/40">
                  <div className="relative aspect-[4/3] overflow-hidden bg-lae-amber/40">
                    {post.cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.cover}
                        alt=""
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center text-6xl font-bold text-lae-amber-deep/30">
                        {post.title.charAt(0)}
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-lae-ink">
                      {post.category}
                    </span>
                  </div>
                  <CardContent className="flex flex-1 flex-col">
                    <time
                      dateTime={post.date}
                      className="text-xs font-medium text-lae-stone"
                    >
                      {formatDate(post.date)} · {post.readingTime}
                    </time>
                    <h2 className="mt-2 text-lg font-semibold leading-snug text-lae-ink group-hover:text-lae-amber-deep">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm text-lae-stone">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium italic text-lae-amber-deep">
                      Saiba +
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
