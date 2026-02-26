import React from "react";
import { webshedWrapperContent } from "@/data/sections/webshed-wrapper";

export default function WebshedWrapper() {
  const { header } = webshedWrapperContent;

  return (
    <section className="h-[calc(98vh-var(--navbar-height))]    w-full">
      <div id="shed-root" className="h-full w-full overflow-hidden">
        <iframe
          allow="clipboard-read; clipboard-write; web-share"
          allowFullScreen
          src="https://hpgshedsandpatios.webshed.app/"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </section>
  );
}
