"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import type { Post } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

const PER_PAGE = 5;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogList({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const start = page * PER_PAGE;
  const current = posts.slice(start, start + PER_PAGE);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (posts.length === 0) {
    return (
      <p className="text-center text-sm text-lae-stone">
        Em breve, novas notícias.
      </p>
    );
  }

  return (
    <>
      <div className="divide-y divide-lae-ink/10">
        {current.map((post, i) => (
          <Reveal key={post.slug}>
            <article
              className={`grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Texto */}
              <div>
                <div className="flex items-center gap-3 text-xs font-medium text-lae-stone">
                  <span className="rounded-full bg-lae-amber/20 px-2.5 py-1 font-semibold uppercase tracking-wider text-lae-amber-deep">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-lae-ink sm:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-lae-stone">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 border-b-2 border-lae-amber-deep pb-1 text-[15px] font-semibold text-lae-ink transition-colors hover:text-lae-amber-deep"
                >
                  Saiba mais
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Foto destaque */}
              <Link
                href={`/blog/${post.slug}`}
                className="group relative block aspect-[16/10] overflow-hidden rounded-xl border border-lae-ink/10 bg-lae-amber/30"
              >
                {post.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.cover}
                    alt=""
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center font-display text-5xl font-bold text-lae-amber-deep/30">
                    {post.title.charAt(0)}
                  </div>
                )}
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            className="inline-flex items-center gap-1 text-sm font-semibold text-lae-ink transition-colors hover:text-lae-amber-deep disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="size-4" />
            Anterior
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Página ${i + 1}`}
                className={`size-9 rounded-lg text-sm font-semibold transition-colors ${
                  page === i
                    ? "bg-lae-ink text-white"
                    : "bg-lae-amber/15 text-lae-ink hover:bg-lae-amber/30"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages - 1}
            className="inline-flex items-center gap-1 text-sm font-semibold text-lae-ink transition-colors hover:text-lae-amber-deep disabled:cursor-not-allowed disabled:opacity-30"
          >
            Próxima Página
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </>
  );
}