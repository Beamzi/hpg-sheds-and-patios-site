import AboutSection from "@/components/AboutSection";
import AboutContactSection from "@/components/AboutContactSection";

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      <main>
        <AboutSection />
        <AboutContactSection />
      </main>
    </div>
  );
}
