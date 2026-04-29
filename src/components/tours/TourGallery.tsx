"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface TourGalleryProps {
  images: GalleryImage[];
  tourName: string;
}

export default function TourGallery({ images, tourName }: TourGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  if (!images.length) return null;

  const shown = images.slice(0, 5);
  const remaining = images.length - 5;

  return (
    <>
      {/* ── Section header ─────────────────────────────── */}
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-bold text-brand-dark flex items-center gap-2">
          <Images size={20} className="text-primary" />
          Tour Photos
        </h2>
        {images.length > 5 && (
          <button
            onClick={() => open(0)}
            className="text-sm font-semibold text-primary hover:underline"
          >
            View all {images.length} photos →
          </button>
        )}
      </div>

      {/* ── Desktop grid (Airbnb-style 5-panel) ───────── */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:gap-1.5 sm:h-[400px]">
        {/* Featured large image */}
        <button
          onClick={() => open(0)}
          className="relative col-span-2 row-span-2 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Open gallery — ${shown[0]?.alt}`}
        >
          {shown[0] && (
            <Image
              src={shown[0].src}
              alt={shown[0].alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
          )}
        </button>

        {/* Four smaller panels */}
        {shown.slice(1).map((img, i) => {
          const isLast = i === 3 && remaining > 0;
          return (
            <button
              key={img.src}
              onClick={() => open(i + 1)}
              className="relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={isLast ? `Show all ${images.length} photos` : `Open photo — ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="25vw"
              />
              {/* "More photos" overlay on last panel */}
              {isLast && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/55 text-white backdrop-blur-[1px]">
                  <Images size={24} />
                  <span className="text-sm font-bold">+{remaining} more</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Mobile: horizontal scroll strip ──────────── */}
      <div className="mt-4 sm:hidden">
        <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => open(i)}
              className="relative h-48 w-64 shrink-0 overflow-hidden rounded-xl snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Open photo — ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="256px"
              />
            </button>
          ))}
        </div>
        <p className="mt-1.5 text-xs text-muted text-right">
          {images.length} photos — tap to enlarge
        </p>
      </div>

      {/* ── Lightbox ──────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo gallery — ${tourName}`}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div
            className="relative mx-16 h-[75vh] w-full max-w-4xl sm:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>

          {/* Caption */}
          {images[lightboxIndex].alt && (
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 max-w-lg text-center text-sm text-white/70 px-4">
              {images[lightboxIndex].alt}
            </p>
          )}

          {/* Thumbnail strip */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden gap-2 sm:flex">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`relative h-12 w-16 overflow-hidden rounded-md transition-all ${
                  i === lightboxIndex
                    ? "ring-2 ring-primary ring-offset-1 ring-offset-black opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              >
                <Image src={img.src} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
