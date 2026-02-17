import FeaturesGrid from "@/components/FeaturesGrid";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import GalleryCarousel from "@/components/GalleryCarousel";
import Hero from "@/components/Hero";
import ComplianceSection from "@/components/ComplianceSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ServicesSection from "@/components/ServicesSection";
import { homeContent } from "@/data/pages/home";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <Hero />
        <ProcessSection />

        <ServicesSection content={homeContent.services} />
        <TestimonialsCarousel />

        <ComplianceSection />
        <GalleryCarousel
          content={homeContent.gallery}
          hasControls={true}
          hasPredominateInfo={true}
        />

        {/* <FeaturesGrid content={homeContent.features} /> */}
      </main>
    </div>
  );
}
