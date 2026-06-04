import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { BlogSection } from "@/components/sections/blog-section";
import { TaglineStars } from "@/components/sections/tagline-stars";
import { ClientsSection } from "@/components/sections/clients-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { getAllClients, getAllServices } from "@/lib/content";

export default function HomePage() {
  const clients = getAllClients();
  const services = getAllServices();

  return (
    <>
      <Hero />
      <StatsBar />
      <BlogSection />
      <TaglineStars />
      <ClientsSection clients={clients} />
      <SolutionsSection services={services} />
    </>
  );
}