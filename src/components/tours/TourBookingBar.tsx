"use client";

import { createPortal } from "react-dom";
import { WHATSAPP_NUMBER } from "@/data/tours";

export default function TourBookingBar({ tourName, price }: { tourName: string; price: string }) {
  const msg = encodeURIComponent(`Hi, I'd like to book the "${tourName}". Please let me know availability.`);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  const bar = (
    <div
      className="fixed inset-x-0 bottom-0 z-9999 border-t border-gray-100 bg-white shadow-2xl sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="text-xs text-muted">Starting from</p>
          <p className="text-xl font-black text-brand-dark">
            {price} <span className="text-sm font-normal text-muted">/ adult</span>
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-green-600 active:scale-95"
        >
          <svg viewBox="0 0 32 32" width="20" height="20" fill="none" aria-hidden="true">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.504L4 29l7.697-1.804A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3Z" fill="white" />
            <path d="M20.94 18.22c-.207.578-1.207 1.107-1.645 1.147-.422.038-.817.19-2.752-.572-2.34-.91-3.82-3.3-3.937-3.453-.116-.153-.95-1.262-.95-2.41 0-1.148.6-1.712.812-1.944.212-.232.462-.29.616-.29l.443.008c.142.006.333-.054.521.397.194.463.66 1.61.717 1.726.058.116.097.252.02.406-.078.153-.117.248-.232.382-.116.134-.244.3-.348.402-.116.116-.236.242-.101.474.135.232.598.986 1.284 1.597.882.786 1.626 1.03 1.858 1.146.232.116.367.097.502-.058.135-.154.578-.674.732-.906.154-.232.308-.193.52-.116.212.077 1.348.636 1.58.752.23.116.385.174.441.27.058.096.058.558-.149 1.136Z" fill="#25D366" />
          </svg>
          Book on WhatsApp
        </a>
      </div>
    </div>
  );

  if (typeof window === "undefined") return null;
  return createPortal(bar, document.body);
}
