"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-lae-ink/10 bg-lae-amber/25">
      {/* ===================== MOBILE ===================== */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-md px-6 py-10">
          {/* Brasão */}
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imagem/logolae3.png"
              alt="LAE Cartórios"
              className="h-20 w-auto"
            />
          </div>

          {/* Ações rápidas: ligar + email */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneWhatsapp.replace(/\D/g, "")}`}
              className={buttonVariants({ variant: "gold" })}
            >
              <Phone className="size-4" />
              Ligar
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className={buttonVariants({ variant: "gold" })}
            >
              <Mail className="size-4" />
              E-mail
            </a>
          </div>

          {/* Accordions de links */}
          <div className="mt-8 divide-y divide-lae-ink/10 border-y border-lae-ink/10">
            <AccordionSection title="Principais Links">
              <ul className="pb-2">
                {siteConfig.footer.principalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex min-h-11 items-center text-[15px] text-lae-stone transition-colors active:text-lae-ink"
                      {...("external" in l && l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            <AccordionSection title="Materiais">
              <ul className="pb-2">
                {siteConfig.footer.materiais.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="flex min-h-11 items-center text-[15px] text-lae-stone transition-colors active:text-lae-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            <AccordionSection title="Contato e endereço">
              <ul className="space-y-1 pb-3 text-[15px] text-lae-stone">
                <li className="flex items-start gap-2.5 py-1.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-lae-amber-deep" />
                  <span>
                    <span className="block">
                      {siteConfig.contact.phoneCommercial}
                    </span>
                    <span className="text-xs text-lae-stone/70">Comercial</span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 py-1.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-lae-amber-deep" />
                  <a
                    href="https://www.google.com/maps?q=Rua+Solim%C3%B5es+849+Merc%C3%AAs+Curitiba+PR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors active:text-lae-ink"
                  >
                    {siteConfig.contact.address}
                  </a>
                </li>
              </ul>
            </AccordionSection>
          </div>

          {/* Redes sociais centralizadas */}
          <div className="mt-8 flex justify-center gap-3">
            <a
              href={siteConfig.contact.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={cn(buttonVariants({ variant: "gold" }), "size-12 rounded-full p-0")}
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={siteConfig.contact.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={cn(buttonVariants({ variant: "gold" }), "size-12 rounded-full p-0")}
            >
              <Linkedin className="size-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-center text-xs font-semibold text-lae-ink">
            © {new Date().getFullYear()} LAE Cartórios.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>

    <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid grid-cols-[auto_1fr] gap-16 xl:gap-24">
            {/* Coluna da marca — brasão + redes */}
            <div className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imagem/logolae2.png"
                alt="LAE Cartórios"
                className="h-32 w-auto"
              />
              <div className="mt-6 flex justify-center gap-3">
                <a
                  href={siteConfig.contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={cn(buttonVariants({ variant: "gold" }), "size-11 rounded-full p-0")}

                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href={siteConfig.contact.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={cn(buttonVariants({ variant: "gold" }), "size-11 rounded-full p-0")}
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
 
            {/* Colunas de links */}
            <div className="grid grid-cols-4 gap-8">
              {/* Principais Links */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-lae-ink">
                  Principais Links
                </h3>
                <ul className="space-y-2.5">
                  {siteConfig.footer.principalLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-lae-stone transition-colors hover:text-lae-amber-deep"
                        {...("external" in l && l.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materiais */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-lae-ink">
                  Materiais
                </h3>
                <ul className="space-y-2.5">
                  {siteConfig.footer.materiais.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-lae-stone transition-colors hover:text-lae-amber-deep"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contatos */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-lae-ink">Contatos</h3>
                <ul className="space-y-2.5 text-sm text-lae-stone">
                  <li className="flex items-start gap-2">
                    <Phone className="mt-0.5 size-4 shrink-0 text-lae-amber-deep" />
                    <div>
                      <span className="block">
                        {siteConfig.contact.phoneCommercial}
                      </span>
                      <span className="text-xs text-lae-stone/70">
                        Comercial
                      </span>
                    </div>
                  </li>
                  <li>
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-lae-amber-deep"
                    >
                      {siteConfig.contact.phoneWhatsapp}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="mt-0.5 size-4 shrink-0 text-lae-amber-deep" />
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="break-words transition-colors hover:text-lae-amber-deep"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Endereço */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-lae-ink">Endereço</h3>
                <a
                  href="https://www.google.com/maps?q=Rua+Solim%C3%B5es+849+Merc%C3%AAs+Curitiba+PR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-justify items-start gap-2 text-sm text-lae-stone transition-colors hover:text-lae-amber-deep"                  
                    >
                    <MapPin className="mt-0.5 size-4 shrink-0 text-lae-amber-deep" />
                    <span className="flex-1">{siteConfig.contact.address}</span>
                  </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-lae-ink/15 pt-6 text-center">
            <p className="text-xs font-semibold text-lae-ink">
              © {new Date().getFullYear()} LAE Cartórios. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AccordionSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-14 w-full items-center justify-between text-left text-sm font-bold text-lae-ink"
      >
        {title}
        <ChevronDown
          className={`size-5 text-lae-stone transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}