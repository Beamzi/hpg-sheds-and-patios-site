import type { SplitImageTextProps } from "@/components/SplitImageText";

type AboutSectionContent = SplitImageTextProps & {
  id: string;
};

export const aboutContent: { sections: AboutSectionContent[] } = {
  sections: [
    {
      id: "who-we-are",
      eyebrow: "About Us",
      title: "Custom steel structures built for Southeast Queensland",
      description:
        "We supply and build custom steel framed sheds, granny flats, and patios for homes and rural properties across Southeast Queensland. With more than 25 years in the building and shed industry, we bring practical design guidance and reliable workmanship to every project.",
      highlights: [
        "Custom steel framed sheds, granny flats, and patios",
        "Over 25 years of building and shed industry experience",
        "Trusted support across Southeast Queensland",
      ],
      image: {
        src: "/gallery/4b5593ad-f96e-4899-928a-80e5deed6068.jpg",
        alt: "Steel framed shed and patio structure",
      },
      imagePosition: "right",
    },
    {
      id: "services",
      eyebrow: "Services & Areas",
      title: "Design, supply, and delivery tailored to your site",
      description:
        "Complete design, supply, and delivery of kit steel sheds in all types, sizes, and styles. We also build mezzanine floors, granny flats, and custom patio solutions, plus supply and install patio screens using Australian steel and quality products.",
      highlights: [
        "Kit steel sheds of all types, sizes, and styles",
        "Mezzanine floors and granny flats",
        "Custom patio solutions and patio screen installs",
        "Australian steel and quality products",
      ],
      image: {
        src: "/gallery/0f40a149-c63d-4fec-ac36-aee91334dff2.jpg",
        alt: "Custom shed build with steel framing",
      },
      imagePosition: "left",
    },
  ],
};
