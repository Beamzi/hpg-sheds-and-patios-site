import {
  FaHammer,
  FaHome,
  FaPencilRuler,
  FaShieldAlt,
  FaTree,
  FaTruck,
} from "react-icons/fa";
import { homeContent } from "@/data/pages/home";

const iconMap = {
  durableBuilds: FaHammer,
  customDesign: FaPencilRuler,
  backyardReady: FaTree,
  storageSolutions: FaHome,
  weatherReady: FaShieldAlt,
  deliveredReady: FaTruck,
};

export default function FeaturesGrid() {
  const { features } = homeContent;

  return (
    <section className="bg-[var(--background)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-6xl px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <div className="flex flex-col gap-[var(--spacing-sm)] text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            {features.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            {features.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg">
            {features.subtitle}
          </p>
        </div>
        <div className="mt-[var(--spacing-lg)] grid grid-cols-1 gap-[var(--spacing-md)] md:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? FaHome;

            return (
              <div
                key={item.title}
                className="card group  flex flex-col gap-[var(--spacing-sm)] transition-shadow hover:shadow-[var(--shadow-lg)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]  bg-[var(--background)]">
                  <Icon className="text-2xl text-[var(--color-primary)] transition-transform duration-200 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
