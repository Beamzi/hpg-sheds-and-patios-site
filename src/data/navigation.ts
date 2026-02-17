export type NavItem = {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
};

export const navigationContent = {
  ariaLabel: "Primary",
  mobileMenuLabel: "Menu",
  brand: {
    href: "/",
    logoLight: "/logo/light-mode.svg",
    logoDark: "/logo/dark-mode.svg",
    logoAlt: "HPG Sheds & Patios",
  },
  items: [
    {
      label: "Custom Sheds",
      href: "/design-shed",
      // subItems: [
      //   {
      //     label: "Pergolas",
      //     href: "/custom-builds/pergolas",
      //   },
      //   {
      //     label: "Outdoor Kitchens",
      //     href: "/custom-builds/outdoor-kitchens",
      //   },
      // ],
    } as NavItem,
    {
      label: "Services",
      href: "/services",
    } as NavItem,
    {
      label: "Gallery",
      href: "/gallery",
    } as NavItem,
    {
      label: "About",
      href: "/about",
    } as NavItem,
    {
      label: "Contact",
      href: "/contact",
    } as NavItem,
  ],
  cta: {
    label: "Get a Quote",
    href: "/contact",
  },
};
