import FeaturesGrid from "@/components/FeaturesGrid";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <Hero />
        <ProcessSection />
        <FeaturesGrid />
      </main>
    </div>
  );
}
