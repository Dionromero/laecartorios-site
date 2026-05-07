import Link from "next/link";
import { Instagram, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LaeLogo } from "./lae-logo";

export function Footer() {
  return (
    <footer className="border-t border-lae-ink/10 bg-lae-amber/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Principais Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-lae-ink">Principais Links</h3>
            <ul className="space-y-2.5">
              {siteConfig.footer.principalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-lae-stone hover:text-lae-ink hover:underline"
                    {...(l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-lae-ink">Redes Sociais</h3>
            <a
              href={siteConfig.contact.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-lae-stone hover:text-lae-ink"
            >
              <Instagram className="size-4" />
              {siteConfig.contact.instagram}
            </a>
          </div>

          {/* Contatos */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-lae-ink">Contatos</h3>
            <ul className="space-y-2.5 text-sm text-lae-stone">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <div>
                  <span className="block">{siteConfig.contact.phoneCommercial}</span>
                  <span className="text-xs text-lae-stone/70">Comercial</span>
                </div>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lae-ink hover:underline"
                >
                  {siteConfig.contact.phoneWhatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-lae-ink">Endereço</h3>
            <p className="flex items-start gap-2 text-sm text-lae-stone">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </p>
          </div>

          {/* Logo */}
          <div className="flex items-start lg:justify-end">
            <LaeLogo variant="footer" />
          </div>
        </div>

        <div className="mt-12 border-t border-lae-ink/15 pt-6 text-center">
          <p className="text-xs font-medium text-lae-ink">
            © {new Date().getFullYear()} LAE Cartórios. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
