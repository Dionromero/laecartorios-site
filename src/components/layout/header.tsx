"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { HeaderStars } from "./header-stars";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // dark = topo (sobre o hero, céu); light = rolou (sobre seções claras)
  const dark = !scrolled;

  return (
    <header
      style={{
        background: dark ? "rgba(255,253,247,0.6)" : "rgba(255,255,255,0.8)",
      }}
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-500",
        scrolled
          ? "h-20 border-lae-ink/10 shadow-[0_4px_24px_-12px_rgba(22,24,24,0.2)]"
          : "h-28 border-transparent",
      )}
    >
      {/* Estrelas + constelação (só no topo, somem ao rolar) */}
      <HeaderStars visible={dark} />

      {/* grid de 3 colunas: logo | nav centralizado | cta */}
      <div className="relative mx-auto grid h-full max-w-7xl grid-cols-2 items-center px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        {/* Logo (esquerda) — texto, sem imagem */}
        <Link
          href="/"
          aria-label="LAE Cartórios — Página inicial"
          className="flex flex-col justify-self-start leading-none transition-transform duration-300 hover:scale-[1.02]"
        >
          <span
            className={cn(
              "font-display text-2xl font-bold tracking-tight transition-colors duration-500",
              "text-lae-ink",
            )}
          >
            LAE{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #f8c44f 0%, #d99f1f 45%, #b8861f 70%, #f0c652 100%)",
              }}
            >
              Cartórios
            </span>
          </span>
          <span
            className={cn(
              "mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors duration-500",
              "text-lae-stone",
            )}
          >
            Autoridade contábil para o extrajudicial
          </span>
        </Link>

        {/* Nav centralizado */}
        <nav className="hidden items-center gap-9 justify-self-center lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "nav-link text-[15px] font-medium transition-colors duration-500 hover:text-lae-amber-deep",
                "text-lae-ink",
              )}
              {...("external" in item && item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA (direita) */}
        <div className="hidden justify-self-end lg:block">
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-lae-amber px-6 py-3 text-[15px] font-semibold text-lae-ink shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:brightness-105"
          >
            <MessageCircle className="size-4" />
            Falar com a LAE
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "justify-self-end rounded-md p-2 transition-colors duration-500 lg:hidden",
            "text-lae-ink",
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{ backgroundColor: "#ffffff" }}
        className={cn(
          "relative overflow-hidden border-t lg:hidden",
          "border-lae-ink/10",
          open ? "max-h-96" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-lae-amber/10 hover:text-lae-amber-deep",
                "text-lae-ink",
              )}
              {...("external" in item && item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-lae-amber px-6 py-3 text-base font-semibold text-lae-ink"
          >
            <MessageCircle className="size-4" />
            Falar com a LAE
          </a>
        </nav>
      </div>
    </header>
  );
}