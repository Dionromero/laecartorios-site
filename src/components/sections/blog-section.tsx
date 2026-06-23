import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getRecentPosts } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogSection() {
  const posts = getRecentPosts(3);

  return (
    <section id="blog" className="bg-lae-paper/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">Conteúdo</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-lae-ink sm:text-4xl">
            Blog da LAE
          </h2>
          <div className="mx-auto mt-5 gold-rule" />
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-lae-stone">
            Análises, atualizações regulatórias e boas práticas para a gestão do
            seu cartório.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-sm text-lae-stone">
            Em breve, novos artigos.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all hover:shadow-2xl">
                    <div className="relative aspect-[4/3] overflow-hidden bg-lae-amber/40">
                      {post.cover ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.cover}
                          alt=""
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center font-display text-6xl font-bold text-lae-amber-deep/30">
                          {post.title.charAt(0)}
                        </div>
                      )}
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-lae-ink backdrop-blur-sm">
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
                      <h3 className="mt-2 text-lg font-semibold leading-snug text-lae-ink transition-colors group-hover:text-lae-amber-deep">
                        {post.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm text-lae-stone">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-lae-amber-deep">
                        Saiba mais
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-lae-stone transition-colors hover:text-lae-ink"
          >
            Acesse todas as notícias
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}