"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigationContent } from "@/data/navigation";

export default function Navbar() {
  const content = navigationContent;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="group sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--background)] transition-[box-shadow] duration-300 data-[shrink=true]:shadow-[var(--shadow-sm)]"
      data-shrink={isScrolled}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-[var(--spacing-lg)] py-[var(--spacing-sm)] transition-[padding] duration-300 group-data-[shrink=true]:py-[var(--spacing-xs)]">
        <Link
          className="text-[var(--foreground)] text-lg font-semibold"
          href={content.brand.href}
        >
          {content.brand.name}
        </Link>
        <nav aria-label={content.ariaLabel}>
          <div className="hidden items-center gap-[var(--spacing-md)] md:flex">
            {content.items.map((item) =>
              item.subItems && item.subItems.length > 0 ? (
                <details className="relative" key={item.href}>
                  <summary className="flex cursor-pointer list-none items-center gap-[var(--spacing-xs)] text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)]">
                    <span>{item.label}</span>
                    <span className="text-[var(--color-muted)]">
                      <svg
                        aria-hidden="true"
                        className="h-[var(--spacing-xs)] w-[var(--spacing-xs)]"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                      >
                        <path d="M2.5 4.5l3.5 3.5 3.5-3.5" />
                      </svg>
                    </span>
                  </summary>
                  <div className="absolute left-0 z-10 mt-[var(--spacing-sm)] w-56 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background)] p-[var(--spacing-sm)] shadow-[var(--shadow-lg)]">
                    <div className="flex flex-col gap-[var(--spacing-xs)] text-sm font-medium text-[var(--foreground)]">
                      {item.subItems.map((subItem) => (
                        <Link
                          className="rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] transition-colors hover:bg-[var(--color-muted)]"
                          href={subItem.href}
                          key={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              ) : (
                <Link
                  className="text-[var(--foreground)] transition-colors hover:text-[var(--color-primary)]"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              )
            )}
            {content.cta ? (
              <Link
                className="btn-primary transition-[padding] duration-300 group-data-[shrink=true]:px-[var(--spacing-sm)] group-data-[shrink=true]:py-[var(--spacing-xs)]"
                href={content.cta.href}
              >
                {content.cta.label}
              </Link>
            ) : null}
          </div>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-[var(--radius-md)] border border-[var(--color-border)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-sm font-medium text-[var(--foreground)]">
              {content.mobileMenuLabel}
            </summary>
            <div className="absolute right-0 z-10 mt-[var(--spacing-sm)] w-56 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--background)] p-[var(--spacing-sm)] shadow-[var(--shadow-lg)]">
              <div className="flex flex-col gap-[var(--spacing-xs)] text-sm font-medium text-[var(--foreground)]">
                {content.items.map((item) => (
                  <div className="flex flex-col" key={item.href}>
                    <Link
                      className="rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] transition-colors hover:bg-[var(--color-muted)]"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && item.subItems.length > 0 ? (
                      <div className="flex flex-col gap-[var(--spacing-xs)] pl-[var(--spacing-sm)]">
                        {item.subItems.map((subItem) => (
                          <Link
                            className="rounded-[var(--radius-md)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[var(--color-muted)] transition-colors hover:bg-[var(--color-muted)] hover:text-[var(--foreground)]"
                            href={subItem.href}
                            key={subItem.href}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                {content.cta ? (
                  <Link
                    className="btn-primary text-center transition-[padding] duration-300 group-data-[shrink=true]:px-[var(--spacing-sm)] group-data-[shrink=true]:py-[var(--spacing-xs)]"
                    href={content.cta.href}
                  >
                    {content.cta.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
