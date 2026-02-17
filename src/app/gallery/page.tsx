import GalleryCarousel from "@/components/GalleryCarousel";
import { homeContent } from "@/data/pages/home";
import React from "react";

export default function GalleryPage() {
  return (
    <div>
      <GalleryCarousel
        content={homeContent.gallery}
        hasControls={true}
        hasPredominateInfo={true}
      />
    </div>
  );
}
