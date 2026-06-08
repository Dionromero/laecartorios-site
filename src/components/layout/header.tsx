"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LaeLogo } from "./lae-logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        scrolled
          ? "h-24 border-lae-ink/10 bg-background/90 shadow-[0_4px_24px_-12px_rgba(22,24,24,0.25)]"
          : "h-36 border-transparent bg-background/70",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label="LAE Cartórios — Página inicial"
          className="transition-transform duration-300 hover:scale-[1.02]"
        >
          <LaeLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item, idx) => (
            <div key={item.href} className="flex items-center gap-9">
              <Link
                href={item.href}
                className="nav-link text-[15px] font-medium tracking-wide text-lae-ink transition-colors hover:text-lae-amber-deep"
                {...("external" in item && item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </Link>
              {idx < siteConfig.nav.length - 1 && (
                <span className="text-lae-ink/15" aria-hidden>
                  |
                </span>
              )}
            </div>
          ))}
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="lae-cta-spin ml-2 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold"
          >
            <MessageCircle className="size-4" />
            Falar com a LAE
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-lae-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-lae-ink/10 bg-background lg:hidden",
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
            className="lae-cta-spin mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold"
          >
            <MessageCircle className="size-4" />
            Falar com a LAE
          </a>
        </nav>
      </div>
    </header>
  );
}