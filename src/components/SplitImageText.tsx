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
  /** Background image for the content (left) panel; shown at 50% opacity, object-cover. */
  contentBackgroundImage?: string;
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
  contentBackgroundImage,
}: SplitImageTextProps) {
  const isReversed = imagePosition === "left";

  const contentInner = (
    <>
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
    </>
  );

  return (
    <section className="split-section">
      <div
        className={`split-section-inner ${isReversed ? "split-section-reverse" : ""} ${contentBackgroundImage ? "split-section-inner-equal-height" : ""}`}
      >
        <div
          className={
            contentBackgroundImage
              ? "split-section-content split-section-content-with-bg"
              : "split-section-content"
          }
        >
          {contentBackgroundImage ? (
            <>
              <div
                className="split-section-content-bg"
                style={{
                  backgroundImage: `url(${contentBackgroundImage.replace(/"/g, "%22")})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.5,
                }}
              />
              <div className="split-section-content-inner">{contentInner}</div>
            </>
          ) : (
            contentInner
          )}
        </div>
        {media ? (
          <div className="split-section-media-slot">{media}</div>
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
