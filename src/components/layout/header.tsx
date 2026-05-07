"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LaeLogo } from "./lae-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lae-ink/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="LAE Cartórios — Página inicial">
          <LaeLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {siteConfig.nav.map((item, idx) => (
            <div key={item.href} className="flex items-center gap-10">
              <Link
                href={item.href}
                className="nav-link text-sm font-medium text-lae-ink transition-colors hover:text-lae-amber-deep"
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </Link>
              {idx < siteConfig.nav.length - 1 && (
                <span className="text-lae-ink/20" aria-hidden>
                  |
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 lg:hidden"
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
              className="rounded-md px-3 py-3 text-base font-medium text-lae-ink hover:bg-lae-amber/10"
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              Falar com a LAE
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
