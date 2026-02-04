import {
  FaClipboardCheck,
  FaDraftingCompass,
  FaPaperPlane,
  FaTruck,
} from "react-icons/fa";
import { homeContent } from "@/data/pages/home";

const iconMap = {
  design: FaDraftingCompass,
  submit: FaPaperPlane,
  review: FaClipboardCheck,
  delivery: FaTruck,
};

export default function ProcessSection() {
  const { process } = homeContent;

  return (
    <section className="bg-[var(--background)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-6xl px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <div className="flex flex-col gap-[var(--spacing-sm)] text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            {process.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            {process.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg">
            {process.subtitle}
          </p>
        </div>
        <div className="mt-[var(--spacing-lg)] grid grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] ?? FaTruck;

            return (
              <div
                key={step.title}
                className="card flex h-full flex-col gap-[var(--spacing-sm)]"
              >
                <div className="flex items-center justify-between gap-[var(--spacing-sm)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--background)]">
                    <Icon className="text-2xl text-[var(--color-primary)]" />
                  </div>
                  <span className="rounded-[var(--radius-md)] bg-[var(--background)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
