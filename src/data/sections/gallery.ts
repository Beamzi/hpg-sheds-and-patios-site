export const gallerySectionContent = {
  eyebrow: "Our Work",
  title: "Recent Builds",
  subtitle:
    "A selection of sheds, patios and outdoor structures we’ve delivered for customers across the region.",
  controls: {
    previousLabel: "Previous image",
    nextLabel: "Next image",
  },

  exploreLabel: "Learn More",
  items: [
    {
      src: "/gallery/0f40a149-c63d-4fec-ac36-aee91334dff2.jpg",
      alt: "Backyard shed build",
    },
    {
      src: "/gallery/4b5593ad-f96e-4899-928a-80e5deed6068.jpg",
      alt: "Garden shed",
    },
    { src: "/gallery/IMG_4873.jpg", alt: "Custom shed" },
    { src: "/gallery/IMG_5007.jpg", alt: "Outdoor structure" },
    { src: "/gallery/IMG_6488.jpg", alt: "Shed and patio" },
  ],
};

export type GallerySectionContent = typeof gallerySectionContent;
