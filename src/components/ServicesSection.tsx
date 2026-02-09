import { FaBuilding, FaHome, FaLayerGroup, FaTree } from "react-icons/fa";

const iconMap = {
  shed: FaHome,
  patio: FaTree,
  mezzanine: FaLayerGroup,
  grannyFlat: FaBuilding,
};

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
};

type ServicesSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: ServiceItem[];
};

export default function ServicesSection({
  eyebrow,
  title,
  subtitle,
  items,
}: ServicesSectionProps) {
  return (
    <section className="bg-[var(--background)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-6xl px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <div className="flex flex-col gap-[var(--spacing-sm)] text-center">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-[var(--spacing-lg)] grid grid-cols-1 gap-[var(--spacing-md)] lg:grid-cols-2">
          {items.map((item) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap] ?? FaHome;

            return (
              <article key={item.title} className="service-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--background)]">
                  <Icon className="text-2xl text-[var(--color-primary)]" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.description}
                </p>
                <ul className="flex flex-col gap-[var(--spacing-xs)] pl-[var(--spacing-md)] text-sm text-[var(--foreground)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="list-disc">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
