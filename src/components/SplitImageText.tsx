import Image from "next/image";
import type { ReactNode } from "react";

export type SplitImageTextProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  highlights?: string[];
  image?: {
    src: string;
    alt: string;
  };
  media?: ReactNode;
  imagePosition?: "left" | "right";
  imagePriority?: boolean;
};

export default function SplitImageText({
  eyebrow,
  title,
  description,
  highlights,
  image,
  media,
  imagePosition = "right",
  imagePriority = false,
}: SplitImageTextProps) {
  const isReversed = imagePosition === "left";

  return (
    <section className="split-section">
      <div
        className={`split-section-inner ${isReversed ? "split-section-reverse" : ""}`}
      >
        <div className="split-section-content">
          {eyebrow ? <p className="split-section-eyebrow">{eyebrow}</p> : null}
          <h2 className="split-section-title">{title}</h2>
          {description ? (
            <p className="split-section-text">{description}</p>
          ) : null}
          {highlights?.length ? (
            <ul className="split-section-list">
              {highlights.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {media ? (
          <div className="split-section-panel">{media}</div>
        ) : image ? (
          <div className="split-section-media">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={imagePriority}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
