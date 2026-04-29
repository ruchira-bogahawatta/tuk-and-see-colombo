import fs from "fs";
import path from "path";

export interface GalleryImage {
  src: string;
  alt: string;
}

function deriveAlt(filename: string): string {
  return filename
    .replace(/\.(jpe?g|png|webp|avif)$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public/images/gallery");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort()
      .map((f) => ({
        src: `/images/gallery/${f}`,
        alt: deriveAlt(f),
      }));
  } catch {
    return [];
  }
}
