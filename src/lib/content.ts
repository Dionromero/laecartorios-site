import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content");

/* ----------------------------------------------------------------------------
 * Schemas — Single source of truth for content shape.
 * Frontmatter inválido falha o build (fail fast).
 * -------------------------------------------------------------------------- */

const PostSchema = z.object({
  title: z.string().min(1),
  excerpt: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve ser YYYY-MM-DD"),
  author: z.string().default("Equipe LAE"),
  cover: z.string().optional(),
  category: z.string().default("Geral"),
  featured: z.boolean().default(false),
});

const ClientSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  testimonial: z.string().min(1),
  avatar: z.string().optional(),
  order: z.number().default(0),
});

const ServiceSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.enum(["settings", "file-text", "headphones", "shield", "trending-up", "users"]),
  order: z.number().default(0),
});

export type Post = z.infer<typeof PostSchema> & {
  slug: string;
  content: string;
  readingTime: string;
};

export type Client = z.infer<typeof ClientSchema> & { slug: string };
export type Service = z.infer<typeof ServiceSchema> & { slug: string };

/* ----------------------------------------------------------------------------
 * Generic file readers
 * -------------------------------------------------------------------------- */

function readDir(subdir: string): string[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

function readFile(subdir: string, filename: string) {
  const fullPath = path.join(CONTENT_DIR, subdir, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  return matter(raw);
}

/* ----------------------------------------------------------------------------
 * Posts
 * -------------------------------------------------------------------------- */

export function getAllPosts(): Post[] {
  return readDir("posts")
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const { data, content } = readFile("posts", file);
      const parsed = PostSchema.parse(data);
      return {
        ...parsed,
        slug,
        content,
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const file = readDir("posts").find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;
  const { data, content } = readFile("posts", file);
  const parsed = PostSchema.parse(data);
  return {
    ...parsed,
    slug,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getRecentPosts(limit = 3): Post[] {
  return getAllPosts().slice(0, limit);
}

/* ----------------------------------------------------------------------------
 * Clients (testimonials)
 * -------------------------------------------------------------------------- */

export function getAllClients(): Client[] {
  return readDir("clients")
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const { data } = readFile("clients", file);
      return { ...ClientSchema.parse(data), slug };
    })
    .sort((a, b) => a.order - b.order);
}

/* ----------------------------------------------------------------------------
 * Services
 * -------------------------------------------------------------------------- */

export function getAllServices(): Service[] {
  return readDir("services")
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const { data } = readFile("services", file);
      return { ...ServiceSchema.parse(data), slug };
    })
    .sort((a, b) => a.order - b.order);
}
