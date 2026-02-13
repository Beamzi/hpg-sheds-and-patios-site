export const navigationContent = {
  ariaLabel: "Primary",
  mobileMenuLabel: "Menu",
  brand: {
    href: "/",
    logo: "/logo/group-3.svg",
    logoAlt: "HPG Sheds & Patios",
  },
  items: [
    {
      label: "Sheds",
      href: "/sheds",
    },
    {
      label: "Patios",
      href: "/patios",
    },
    {
      label: "Custom Builds",
      href: "/custom-builds",
      subItems: [
        {
          label: "Pergolas",
          href: "/custom-builds/pergolas",
        },
        {
          label: "Outdoor Kitchens",
          href: "/custom-builds/outdoor-kitchens",
        },
      ],
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  cta: {
    label: "Get a Quote",
    href: "/contact",
  },
};
