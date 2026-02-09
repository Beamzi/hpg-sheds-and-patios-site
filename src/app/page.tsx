import FeaturesGrid from "@/components/FeaturesGrid";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Hero from "@/components/Hero";
import ComplianceSection from "@/components/ComplianceSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ServicesSection from "@/components/ServicesSection";
import { homeContent } from "@/data/pages/home";
import type { ComponentProps } from "react";

export default function Home() {
  const servicesProps =
    homeContent.services as ComponentProps<typeof ServicesSection>;
  const featuresCarouselProps =
    homeContent.features as ComponentProps<typeof FeaturesCarousel>;

  return (
    <div className="bg-[var(--background)]">
      <main>
        <Hero />
        <ServicesSection {...servicesProps} />
        <ProcessSection />
        <ComplianceSection />
        <FeaturesGrid />
        <TestimonialsCarousel />
        <FeaturesCarousel {...featuresCarouselProps} />
      </main>
    </div>
  );
}
