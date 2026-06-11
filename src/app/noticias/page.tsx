import type { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";
import { getAllPosts } from "@/lib/content";
import { NoticiasList } from "./noticias-list";

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "Todas as notícias, análises e atualizações regulatórias da LAE Cartórios para a gestão do seu cartório.",
};

export default function NoticiasPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <header className="mb-6">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-lae-ink sm:text-5xl">
            Blog da <span className="heading-accent">LAE</span>
          </h1>
          <ArrowDownRight
            className="mt-2 size-6 text-lae-stone/50"
            aria-hidden="true"
          />
          <p className="mt-5 max-w-xl text-pretty text-base text-lae-stone">
            Todas as notícias, análises e atualizações regulatórias para a gestão
            do seu cartório.
          </p>
        </header>

        <NoticiasList posts={posts} />
      </div>
    </div>
  );
}