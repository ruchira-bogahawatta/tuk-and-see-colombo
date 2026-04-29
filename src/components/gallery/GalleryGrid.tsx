"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface Slot {
  current: GalleryImage;
  incoming: GalleryImage | null;
  swapping: boolean;
}

const ASPECTS = [
  "aspect-3/4",
  "aspect-video",
  "aspect-square",
  "aspect-4/3",
  "aspect-3/4",
  "aspect-square",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

type GalleryGridProps = {
  images: GalleryImage[];
  displayCount?: number;
  swapCount?: number;
  swapInterval?: number;
  className?: string;
};

export default function GalleryGrid({
  images,
  displayCount = 15,
  swapCount = 4,
  swapInterval = 5500,
  className = "columns-2 gap-3 sm:columns-3 lg:columns-4",
}: GalleryGridProps) {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [visible, setVisible] = useState(false);

  const slotsRef = useRef<Slot[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef<number | null>(null);

  const crossfadeMs = 1200;

  useEffect(() => {
    const initial: Slot[] = shuffle(images)
      .slice(0, displayCount)
      .map((img) => ({
        current: img,
        incoming: null,
        swapping: false,
      }));

    setSlots(initial);
    slotsRef.current = initial;

    const timer = setTimeout(() => setVisible(true), 100);

    return () => {
      clearTimeout(timer);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [images, displayCount]);

  useEffect(() => {
    if (images.length <= displayCount) return;

    const interval = setInterval(() => {
      const current = slotsRef.current;
      if (current.length === 0) return;

      const selectedSwapCount = Math.min(swapCount, current.length);

      const swapIndices = shuffle(
        Array.from({ length: current.length }, (_, i) => i)
      ).slice(0, selectedSwapCount);

      const shownSrcs = new Set(current.map((slot) => slot.current.src));
      const pool = shuffle(images.filter((img) => !shownSrcs.has(img.src)));
      const replacements = pool.slice(0, swapIndices.length);

      if (replacements.length === 0) return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      setSlots((prev) => {
        const next = prev.map((slot) => ({ ...slot }));

        swapIndices.forEach((idx, i) => {
          if (replacements[i]) {
            next[idx] = {
              ...next[idx],
              incoming: replacements[i],
              swapping: false,
            };
          }
        });

        slotsRef.current = next;
        return next;
      });

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = requestAnimationFrame(() => {
          setSlots((prev) => {
            const next = prev.map((slot) =>
              slot.incoming
                ? {
                    ...slot,
                    swapping: true,
                  }
                : slot
            );

            slotsRef.current = next;
            return next;
          });
        });
      });

      timeoutRef.current = setTimeout(() => {
        setSlots((prev) => {
          const next = prev.map((slot) =>
            slot.swapping && slot.incoming
              ? {
                  current: slot.incoming,
                  incoming: null,
                  swapping: false,
                }
              : slot
          );

          slotsRef.current = next;
          return next;
        });
      }, crossfadeMs + 150);
    }, swapInterval);

    return () => {
      clearInterval(interval);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [images, displayCount, swapCount, swapInterval]);

  return (
    <div
      className={`${className} transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {slots.map((slot, i) => (
        <div
          key={`${slot.current.src}-${i}`}
          className="mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm"
        >
          <div
            className={`group relative overflow-hidden ${
              ASPECTS[i % ASPECTS.length]
            }`}
          >
            <Image
              src={slot.current.src}
              alt={slot.current.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {slot.incoming && (
              <Image
                key={slot.incoming.src}
                src={slot.incoming.src}
                alt={slot.incoming.alt}
                fill
                className={`object-cover transition-all duration-[1200ms] ease-out ${
                  slot.swapping
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-110 opacity-0 blur-[2px]"
                }`}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 opacity-60" />
          </div>
        </div>
      ))}
    </div>
  );
}