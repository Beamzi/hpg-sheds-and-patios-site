import { featuresSectionContent } from "@/data/sections/features";
import { servicesSectionContent } from "@/data/sections/services";

export const homeContent = {
  hero: {
    eyebrow: "Built for Backyards",
    title: "Sheds, Patios & Outdoor Structures Built Your Way",
    subtitle:
      "Design your perfect shed in minutes with our interactive builder. Choose your size, style, and features - then get an instant quote",
    cta: {
      label: "Design Your Shed",
      href: "/contact",
    },
    image: {
      src: "/images/pexels-shsh-10057229.jpg",
      alt: "Backyard shed with patio seating",
    },
  },
  services: servicesSectionContent,
  features: featuresSectionContent,
  process: {
    eyebrow: "How It Works",
    title: "A Simple Path to a Custom Shed",
    subtitle:
      "Design your shed with our online tool, submit for pricing, and let us handle the build from there.",
    cta: {
      label: "Get started",
      href: "/design-shed",
    },
    steps: [
      {
        step: "Step 1",
        icon: "design",
        title: "Design Your Shed",
        description:
          "Use our 3D configurator to choose the size, layout, doors, and finishes.",
      },
      {
        step: "Step 2",
        icon: "submit",
        title: "Submit for Quote",
        description:
          "Send your design and contact details so we can prepare a detailed estimate.",
      },
      {
        step: "Step 3",
        icon: "review",
        title: "Engineering Review",
        description:
          "We confirm specs, site needs, and timeline before moving into production.",
      },
      {
        step: "Step 4",
        icon: "delivery",
        title: "Manufacture & Delivery",
        description:
          "Your shed is built to spec and delivered ready for installation.",
      },
    ],
  },
  compliance: {
    title: "Compliance & Standards",
    subtitle:
      "Professional builds aligned with Australian regulations, approvals, and consumer protections.",
    items: [
      {
        icon: "australianStandards",
        title: "Australian Standards",
        description:
          "Designed to suit AS/NZS wind and timber framing guidance.",
      },
      {
        icon: "nccAligned",
        title: "NCC Alignment",
        description: "Build approach follows relevant NCC requirements.",
      },
      {
        icon: "councilSupport",
        title: "Council Compliance",
        description: "Documentation prepared to support local approvals.",
      },
      {
        icon: "engineeringCert",
        title: "Engineering Certification",
        description: "Site-specific certification available where required.",
      },
      {
        icon: "consumerGuarantees",
        title: "Consumer Guarantees",
        description: "Work delivered under Australian Consumer Law.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Customer Stories",
    title: "Backyards Made Better",
    subtitle:
      "Placeholder testimonials highlighting how HPG delivers smooth builds and standout outdoor spaces.",
    items: [
      {
        quote:
          "The entire process felt effortless. The shed design tool helped us visualize the layout, and the finished build matched every detail.",
        name: "Taylor Morgan",
        location: "Brisbane, QLD",
        project: "10x8 custom garden shed",
      },
      {
        quote:
          "HPG kept us updated at every step. Delivery was on schedule, and the patio feels like an extra room outdoors.",
        name: "Priya Shah",
        location: "Gold Coast, QLD",
        project: "Covered patio extension",
      },
      {
        quote:
          "We needed secure storage for tools and bikes. The team optimized the layout and made sure everything was weather-tight.",
        name: "Jordan Lee",
        location: "Sunshine Coast, QLD",
        project: "Family storage shed",
      },
      {
        quote:
          "From the quote request to final delivery, communication was clear and the craftsmanship was top-notch.",
        name: "Alex Nguyen",
        location: "Ipswich, QLD",
        project: "Workshop shed build",
      },
      {
        quote:
          "The shed blends perfectly with our backyard. The team handled permits and the install without any hassle for us.",
        name: "Renee Walters",
        location: "Toowoomba, QLD",
        project: "Backyard studio shed",
      },
    ],
  },
};
