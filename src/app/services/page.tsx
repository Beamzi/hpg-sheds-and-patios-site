import ServicesSection from "@/components/ServicesSection";
import { servicesSectionContent } from "@/data/sections/services";
import type { ComponentProps } from "react";

export default function ServicesPage() {
  const servicesProps =
    servicesSectionContent as ComponentProps<typeof ServicesSection>;

  return (
    <div className="bg-[var(--background)]">
      <main>
        <ServicesSection {...servicesProps} />
      </main>
    </div>
  );
}
