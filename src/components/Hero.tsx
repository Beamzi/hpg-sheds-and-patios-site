import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/data/pages/home";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative min-h-[calc(100vh-var(--navbar-height))] overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--background)] opacity-80" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-[var(--spacing-md)] px-[var(--spacing-md)] py-[var(--spacing-lg)] text-center md:items-start md:px-[var(--spacing-lg)] md:py-[var(--spacing-xl)] md:text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
          {hero.eyebrow}
        </p>
        <h1 className="text-4xl font-semibold text-[var(--foreground)] md:text-5xl">
          {hero.title}
        </h1>
        <p className="max-w-2xl text-base text-[var(--foreground)] md:text-lg">
          {hero.subtitle}
        </p>
        <div className="flex w-full flex-wrap justify-center gap-[var(--spacing-sm)] md:w-auto md:justify-start">
          <Link
            className="btn-primary w-full text-center sm:w-auto"
            href={hero.cta.href}
          >
            {hero.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
