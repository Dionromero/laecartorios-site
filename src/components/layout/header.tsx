"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { HeaderStars } from "./header-stars";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled;

  return (
    <header
      style={{
        background: dark ? "rgba(255,253,247,0.6)" : "rgba(255,255,255,0.8)",
      }}
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-500",
        scrolled
          ? "h-24 border-lae-ink/10 shadow-[0_4px_24px_-12px_rgba(22,24,24,0.2)]"
          : "h-36 border-transparent",
      )}
    >
      {/* Estrelas + constelação (só no topo, somem ao rolar) */}
      <HeaderStars visible={dark} />

      {/* grid de 3 colunas: logo | nav centralizado | cta */}
      <div className="relative mx-auto grid h-full max-w-7xl grid-cols-2 items-center px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        {/* Logo (esquerda) — imagem única */}
        <Link
          href="/"
          aria-label="LAE Cartórios — Página inicial"
          className="flex items-center justify-self-start transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imagem/logolae2.png"
            alt="LAE Cartórios — Autoridade contábil para o extrajudicial"
            className={cn(
              "w-auto transition-all duration-500",
              scrolled ? "h-16" : "h-24",
            )}
          />
        </Link>

        {/* Nav centralizado */}
        <nav className="hidden items-center gap-9 justify-self-center lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[15px] font-medium text-lae-ink transition-colors duration-500 hover:text-lae-amber-deep"
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
          className="justify-self-end rounded-md p-2 text-lae-ink transition-colors duration-500 lg:hidden"
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
          "relative overflow-hidden border-t border-lae-ink/10 lg:hidden",
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
              className="rounded-md px-3 py-3 text-base font-medium text-lae-ink transition-colors hover:bg-lae-amber/10 hover:text-lae-amber-deep"
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