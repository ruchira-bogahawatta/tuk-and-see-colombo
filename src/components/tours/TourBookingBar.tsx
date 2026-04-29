"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/tours";

export default function TourBookingBar({ tourName, price }: { tourName: string; price: string }) {
  const msg = encodeURIComponent(`Hi, I'd like to book the "${tourName}". Please let me know availability.`);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-sky-100 bg-white/95 px-4 py-3 backdrop-blur-sm shadow-xl sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-muted">Starting from</p>
          <p className="font-bold text-accent text-lg">{price} <span className="text-xs font-normal text-muted">/ adult</span></p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-green-600"
        >
          <MessageCircle size={18} />
          Book on WhatsApp
        </a>
      </div>
    </div>
  );
}
