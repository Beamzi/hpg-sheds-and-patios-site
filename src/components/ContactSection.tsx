import {
  FaBuilding,
  FaIdCard,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClipboardCheck,
} from "react-icons/fa";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  note?: string;
};

type ContactGroup = {
  title: string;
  items: ContactItem[];
};

type ContactSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  contactDetails: ContactGroup;
  businessDetails: ContactGroup;
};

function ContactItemRow({ label, value, href, note }: ContactItem) {
  const iconMap = {
    Phone: FaPhoneAlt,
    Email: FaEnvelope,
    Location: FaMapMarkerAlt,
    "Business name": FaBuilding,
    ABN: FaIdCard,
    "QBCC licence": FaClipboardCheck,
  };
  const Icon = iconMap[label as keyof typeof iconMap] ?? FaClipboardCheck;

  return (
    <div className="flex flex-col gap-[var(--spacing-xs)]">
      <dt className="flex items-center gap-[var(--spacing-xs)] text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
        <span className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] bg-[var(--background)]">
          <Icon className="text-base text-[var(--color-primary)]" />
        </span>
        <span>{label}</span>
      </dt>
      <dd className="text-base text-[var(--foreground)]">
        {href ? (
          <a
            href={href}
            className="text-[var(--color-primary)] transition-opacity hover:opacity-80"
          >
            {value}
          </a>
        ) : (
          <span>{value}</span>
        )}
        {note ? (
          <span className="mt-[var(--spacing-xs)] block text-sm text-[var(--color-muted)]">
            {note}
          </span>
        ) : null}
      </dd>
    </div>
  );
}

function ContactGroupCard({ title, items }: ContactGroup) {
  return (
    <div className="card flex flex-col">
      <h3 className="text-xl font-semibold text-[var(--foreground)]">
        {title}
      </h3>
      <dl className="mt-[var(--spacing-md)] flex flex-col">
        {items.map((item, index) => {
          const showDivider = index < items.length - 1;

          return (
            <div key={`${item.label}-${item.value}`}>
              <ContactItemRow {...item} />
              {showDivider ? (
                <div
                  className="my-[var(--spacing-md)] h-px w-full bg-[var(--color-border)]"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export default function ContactSection({
  eyebrow,
  title,
  subtitle,
  contactDetails,
  businessDetails,
}: ContactSectionProps) {
  return (
    <section className="bg-[var(--background)] py-[var(--spacing-xl)]">
      <div className="mx-auto w-full max-w-5xl px-[var(--spacing-md)] md:px-[var(--spacing-lg)]">
        <div className="flex flex-col gap-[var(--spacing-sm)] text-center">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto max-w-2xl text-base text-[var(--foreground)] md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-[var(--spacing-lg)] grid grid-cols-1 gap-[var(--spacing-md)] lg:grid-cols-2">
          <ContactGroupCard {...contactDetails} />
          <ContactGroupCard {...businessDetails} />
        </div>
      </div>
    </section>
  );
}
