import FeaturesGrid from "@/components/FeaturesGrid";
import Hero from "@/components/Hero";
import ComplianceSection from "@/components/ComplianceSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <Hero />
        <ProcessSection />
        <ComplianceSection />
        <FeaturesGrid />
        <TestimonialsCarousel />
      </main>
    </div>
  );
}
