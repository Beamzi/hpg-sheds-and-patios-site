import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import { homeContent } from "@/data/pages/home";

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <AboutSection />
        <FeaturesCarousel
          content={homeContent.features}
          hasControls={true}
          hasPredominateInfo={true}
          cardsPerView={3}
        />
        <ContactSection />
      </main>
    </div>
  );
}
