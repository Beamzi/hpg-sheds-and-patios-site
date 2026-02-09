import SplitImageText from "@/components/SplitImageText";
import { contactContent } from "@/data/pages/contact";
import { FaBuilding, FaEnvelope, FaIdCard, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const contactIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone: FaPhone,
  Email: FaEnvelope,
  Location: FaMapMarkerAlt,
  "Business name": FaBuilding,
  ABN: FaIdCard,
  "QBCC licence": FaIdCard,
};

export default function AboutContactSection() {
  const contactCards = (
    <div className="grid gap-[var(--spacing-md)]">
      <div className="card">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">
          {contactContent.contactDetails.title}
        </h3>
        <ul className="mt-[var(--spacing-sm)] grid gap-[var(--spacing-xs)] text-sm text-[var(--foreground)]">
          {contactContent.contactDetails.items.map((item) => {
            const Icon = contactIconMap[item.label];

            return (
            <li key={`${item.label}-${item.value}`}>
              <div className="flex items-center gap-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                {Icon ? <Icon className="text-[var(--color-primary)]" /> : null}
                <span>{item.label}</span>
              </div>
              {item.href ? (
                <a className="mt-[var(--spacing-xs)] inline-flex hover:underline" href={item.href}>
                  {item.value}
                </a>
              ) : (
                <p className="mt-[var(--spacing-xs)]">{item.value}</p>
              )}
              {item.note ? (
                <p className="mt-[var(--spacing-xs)] text-xs text-[var(--color-muted)]">
                  {item.note}
                </p>
              ) : null}
            </li>
          );
          })}
        </ul>
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold text-[var(--foreground)]">
          {contactContent.businessDetails.title}
        </h3>
        <ul className="mt-[var(--spacing-sm)] grid gap-[var(--spacing-xs)] text-sm text-[var(--foreground)]">
          {contactContent.businessDetails.items.map((item) => {
            const Icon = contactIconMap[item.label];

            return (
            <li key={`${item.label}-${item.value}`}>
              <div className="flex items-center gap-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                {Icon ? <Icon className="text-[var(--color-primary)]" /> : null}
                <span>{item.label}</span>
              </div>
              <p className="mt-[var(--spacing-xs)]">{item.value}</p>
            </li>
          );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <SplitImageText
      eyebrow={contactContent.eyebrow}
      title={contactContent.title}
      description={contactContent.subtitle}
      media={contactCards}
      imagePosition="right"
    />
  );
}
