import type { CSSProperties } from "react";

export type PictureSource = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};

interface Props {
  picture: PictureSource;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders a responsive <picture> from a vite-imagetools `as=picture` import.
 * Serves AVIF → WebP → JPEG with srcset widths 640/960/1280/1920.
 */
export function HeroImage({
  picture,
  alt = "",
  className,
  style,
  sizes = "100vw",
  priority = false,
}: Props) {
  return (
    <picture>
      {Object.entries(picture.sources).map(([type, srcset]) => (
        <source key={type} type={`image/${type}`} srcSet={srcset} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        className={className}
        style={style}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}

/** Build a preload <link> descriptor for the AVIF variant of a hero picture. */
export function heroPreloadLink(picture: PictureSource, sizes = "100vw") {
  const srcset = picture.sources.avif ?? picture.sources.webp ?? picture.img.src;
  const type = picture.sources.avif
    ? "image/avif"
    : picture.sources.webp
      ? "image/webp"
      : "image/jpeg";
  return {
    rel: "preload",
    as: "image",
    href: picture.img.src,
    imagesrcset: srcset,
    imagesizes: sizes,
    type,
    fetchpriority: "high",
  };
}
