# LAE Cartórios — Site Institucional

Site de marketing da **LAE Cartórios** com conteúdo gerenciável via MDX local. Construído com Next.js 15, Tailwind 4, shadcn/ui e deploy contínuo na Vercel via GitHub Actions.

## Stack

- **Next.js 15** (App Router, RSC, `generateStaticParams`)
- **TypeScript 5** strict
- **Tailwind CSS 4** com tokens customizados (`@theme inline`)
- **shadcn/ui** (Button, Card)
- **MDX** via `next-mdx-remote` + `gray-matter` + Zod schemas
- **Embla Carousel** para hero e depoimentos
- **Lucide React** para ícones
- **Inter** como fonte (next/font/google)

## Estrutura

```
src/
├── app/                       # App Router pages
│   ├── layout.tsx             # Root layout (Header + Footer + WhatsApp float)
│   ├── page.tsx               # Home (compõe seções)
│   ├── globals.css            # Design tokens LAE + utilities
│   └── blog/
│       ├── page.tsx           # /blog — listagem
│       └── [slug]/page.tsx    # /blog/[slug] — post individual
│
├── components/
│   ├── layout/                # Header, Footer, Logo, WhatsAppFloat
│   ├── sections/              # Hero, AboutVideo, BlogSection, etc.
│   └── ui/                    # Primitivos shadcn
│
└── lib/
    ├── content.ts             # Loader MDX com Zod
    ├── site-config.ts         # Nav, contato, metadata
    └── utils.ts               # cn() helper

content/                       # CMS local — edite aqui
├── posts/                     # Blog (MDX)
├── clients/                   # Depoimentos
└── services/                  # Cards "Como podemos ajudar?"

.github/workflows/
├── ci.yml                     # Lint + typecheck + build em PR
└── deploy.yml                 # Vercel preview (PR) + production (main)
```

## Quick start

```bash
# 1. Install deps
npm install

# 2. Dev server
npm run dev   # http://localhost:3000

# 3. Build & start (production local)
npm run build && npm run start
```

## Editando conteúdo (CMS local)

### Adicionar post no blog

Crie `content/posts/meu-novo-post.mdx`:

```mdx
---
title: "Título do post"
excerpt: "Resumo de 1-2 linhas exibido nos cards."
date: "2026-05-15"           # YYYY-MM-DD obrigatório
author: "Equipe LAE"
category: "Tributário"
cover: "/images/posts/meu-post.jpg"  # Opcional
featured: false
---

Conteúdo em **Markdown / MDX** completo aqui.

## Subtítulo

Parágrafo normal com [link](https://exemplo.com).
```

### Adicionar depoimento

`content/clients/cliente-X.mdx`:

```mdx
---
name: "Nome do Tabelião"
location: "Cidade, UF"
testimonial: "Depoimento de uma frase impactante."
order: 5     # Define ordem de exibição
---
```

### Adicionar serviço (card "Como podemos ajudar?")

`content/services/novo-servico.mdx`:

```mdx
---
title: "Título curto do serviço"
description: "Descrição do serviço em uma frase."
icon: "shield"     # settings | file-text | headphones | shield | trending-up | users
order: 4
---
```

> Frontmatter inválido **falha o build**. Schemas Zod garantem integridade.

## Deploy

### Setup inicial na Vercel (uma vez)

1. Crie projeto no [Vercel Dashboard](https://vercel.com/new) importando o repo do GitHub.
2. Pegue os 3 secrets necessários:
   - **`VERCEL_TOKEN`** → Account Settings → Tokens → Create
   - **`VERCEL_ORG_ID`** → Project Settings → General → Project ID (na verdade é o Team/Org ID; veja `.vercel/project.json` após `vercel link` local)
   - **`VERCEL_PROJECT_ID`** → mesmo arquivo `.vercel/project.json`

3. Adicione os 3 secrets no GitHub: Settings → Secrets and variables → Actions → New repository secret

### Fluxo CI/CD

| Evento | CI (`ci.yml`) | Deploy (`deploy.yml`) |
|---|---|---|
| PR aberto | Lint + typecheck + build | Preview na Vercel + comentário no PR |
| Push em `main` | Lint + typecheck + build | Deploy em produção |

### Deploy manual (fallback)

```bash
npm install -g vercel
vercel login
vercel link
vercel --prod
```

## Personalização

### Paleta de cores

Tokens em `src/app/globals.css` na seção `:root`:

```css
--lae-amber: #f8c44f;          /* Accent principal */
--lae-amber-deep: #b8861f;     /* Hover/destaque */
--lae-ink: #1c1917;            /* Texto principal */
--lae-stone: #57534e;          /* Texto secundário */
```

### Configuração do site

`src/lib/site-config.ts` — endereço, telefones, links sociais, navegação. Único ponto de edição.

### Vídeo institucional do YouTube

Em `src/app/page.tsx`, passe `youtubeId` para o `<AboutVideo />`:

```tsx
<AboutVideo youtubeId="SEU_VIDEO_ID" />
```

## Comandos úteis

```bash
npm run dev          # Dev server
npm run build        # Build de produção
npm run start        # Servidor de produção local
npm run lint         # ESLint
npm run typecheck    # TypeScript check
```

## Próximos passos

- [ ] Criar páginas `/quem-somos`, `/servicos`, `/parceiros`
- [ ] Substituir logo placeholder por SVG oficial em `src/components/layout/lae-logo.tsx`
- [ ] Substituir `youtubeId` placeholder em `src/app/page.tsx`
- [ ] Adicionar imagens de capa nos posts do `content/posts/`
- [ ] Configurar domínio customizado na Vercel
- [ ] Adicionar Vercel Analytics (opcional)

---

Construído por **Lucas Marques** — LAE Cartórios © 2026
