import { Hero } from "@/components/sections/home/hero";
import { FeaturedWork } from "@/components/sections/home/featured-work";
import { Skills } from "@/components/sections/home/skills";
import { Services } from "@/components/sections/home/services";
import { Experience } from "@/components/sections/home/experience";
import { CTA } from "@/components/sections/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Skills />
      <Services />
      <Experience />
      <CTA />
    </>
  );
}
