import ContactSection from "@/components/ContactSection";
import { contactContent } from "@/data/pages/contact";
import type { ComponentProps } from "react";

export default function ContactPage() {
  const contactProps: ComponentProps<typeof ContactSection> = contactContent;

  return (
    <div className="bg-[var(--background)]">
      <main>
        <ContactSection {...contactProps} />
      </main>
    </div>
  );
}
