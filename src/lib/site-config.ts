type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const siteConfig = {
  name: "LAE Cartórios",
  tagline: "Autoridade contábil para o extrajudicial.",
  description:
    "LAE Cartórios — Autoridade e excelência contábil para o extrajudicial. Gestão administrativa, otimização tributária e atendimento personalizado para cartórios em todo o Brasil.",
  url: "https://laecartorios.com.br",
  ogImage: "/logolae3.png",

  nav: [
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog da LAE", href: "/blog" },
  ] as NavItem[],

  contact: {
    address: "Rua Solimões, 849 — Bairro Mercês, Curitiba/PR — Brasil",
    phoneCommercial: "(41) 3040-7171",
    phoneWhatsapp: "(41) 99292-2323",
    whatsappLink: "https://wa.me/5541992922323",
    email: "comercial@laecartorios.com",
    instagram: "@laecartorios",
    instagramLink: "https://instagram.com/laecartorios",
    linkedinLink: "https://linkedin.com/company/laecartorios",
  },

  footer: {
    principalLinks: [
      { label: "Quem somos", href: "/quem-somos" },
      { label: "Serviços", href: "/servicos" },
      { label: "Blog da LAE", href: "/blog" },
      { label: "Parceiros LAE", href: "/parceiros" },
      { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    ] as NavItem[],
    materiais: [
      { label: "Brandbook LAE", href: "/brandbook" },
    ] as NavItem[],
  },
} as const;

export type SiteConfig = typeof siteConfig;