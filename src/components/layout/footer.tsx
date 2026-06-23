import Link from "next/link";
import { Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LaeLogo } from "./lae-logo";

export function Footer() {
  return (
    <footer className="border-t border-lae-ink/10 bg-lae-amber/25">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        {/* Logo no topo — centralizado no mobile, à direita no desktop (via ordem) */}
        <div className="mb-10 flex justify-center lg:hidden">
          <LaeLogo variant="footer" />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Principais Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-lae-ink">
              Principais Links
            </h3>
            <ul className="space-y-1">
              {siteConfig.footer.principalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="-mx-2 flex min-h-11 items-center rounded-md px-2 text-sm text-lae-stone transition-colors hover:bg-lae-amber/20 hover:text-lae-ink"
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

          {/* Redes Sociais + Materiais */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-lae-ink">Redes Sociais</h3>
            <div className="space-y-1">
              <a
                href={siteConfig.contact.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-2 flex min-h-11 items-center gap-2 rounded-md px-2 text-sm text-lae-stone transition-colors hover:bg-lae-amber/20 hover:text-lae-ink"
              >
                <Instagram className="size-4 shrink-0" />
                {siteConfig.contact.instagram}
              </a>
              <a
                href={siteConfig.contact.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-2 flex min-h-11 items-center gap-2 rounded-md px-2 text-sm text-lae-stone transition-colors hover:bg-lae-amber/20 hover:text-lae-ink"
              >
                <Linkedin className="size-4 shrink-0" />
                Linkedin
              </a>
            </div>

            <h3 className="mb-4 mt-6 text-sm font-bold text-lae-ink">Materiais</h3>
            <ul className="space-y-1">
              {siteConfig.footer.materiais.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="-mx-2 flex min-h-11 items-center rounded-md px-2 text-sm text-lae-stone transition-colors hover:bg-lae-amber/20 hover:text-lae-ink"
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
            <ul className="space-y-1 text-sm text-lae-stone">
              <li>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-2 flex min-h-11 items-start gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-lae-amber/20 hover:text-lae-ink"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <span>
                    <span className="block">
                      {siteConfig.contact.phoneCommercial}
                    </span>
                    <span className="text-xs text-lae-stone/70">Comercial</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-2 flex min-h-11 items-center gap-2 rounded-md px-2 transition-colors hover:bg-lae-amber/20 hover:text-lae-ink"
                >
                  <Phone className="size-4 shrink-0" />
                  <span>
                    <span className="block">
                      {siteConfig.contact.phoneWhatsapp}
                    </span>
                    <span className="text-xs text-lae-stone/70">WhatsApp</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="-mx-2 flex min-h-11 items-center gap-2 rounded-md px-2 transition-colors hover:bg-lae-amber/20 hover:text-lae-ink"
                >
                  <Mail className="size-4 shrink-0" />
                  <span className="break-all">{siteConfig.contact.email}</span>
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
              className="-mx-2 flex items-start gap-2 rounded-md px-2 py-1.5 text-sm text-lae-stone transition-colors hover:bg-lae-amber/20 hover:text-lae-ink"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </a>
          </div>

          {/* Logo — só no desktop, à direita */}
          <div className="hidden lg:flex lg:items-start lg:justify-end">
            <LaeLogo variant="footer" />
          </div>
        </div>

        <div className="mt-10 border-t border-lae-ink/15 pt-6 text-center sm:mt-12">
          <p className="text-xs font-semibold text-lae-ink">
            © {new Date().getFullYear()} LAE Cartórios. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}