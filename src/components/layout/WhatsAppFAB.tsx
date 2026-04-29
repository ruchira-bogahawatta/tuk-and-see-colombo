"use client";

import { usePathname } from "next/navigation";
import { WHATSAPP_NUMBER } from "@/data/tours";

export default function WhatsAppFAB() {
  const pathname = usePathname();
  const isTourDetail = /^\/tours\/.+/.test(pathname);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I%27d+like+to+enquire+about+a+Tuk+%26+See+Colombo+tour.`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 ${
        isTourDetail ? "hidden sm:flex" : "flex"
      }`}
    >
      {/* Official WhatsApp logo mark */}
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.504L4 29l7.697-1.804A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3Z"
          fill="white"
        />
        <path
          d="M16 5.5c-5.247 0-9.5 4.253-9.5 9.5 0 2.07.664 3.988 1.79 5.557l-.93 3.373 3.46-.908A9.453 9.453 0 0 0 16 24.5c5.247 0 9.5-4.253 9.5-9.5S21.247 5.5 16 5.5Zm4.94 13.22c-.207.578-1.207 1.107-1.645 1.147-.422.038-.817.19-2.752-.572-2.34-.91-3.82-3.3-3.937-3.453-.116-.153-.95-1.262-.95-2.41 0-1.148.6-1.712.812-1.944.212-.232.462-.29.616-.29l.443.008c.142.006.333-.054.521.397.194.463.66 1.61.717 1.726.058.116.097.252.02.406-.078.153-.117.248-.232.382-.116.134-.244.3-.348.402-.116.116-.236.242-.101.474.135.232.598.986 1.284 1.597.882.786 1.626 1.03 1.858 1.146.232.116.367.097.502-.058.135-.154.578-.674.732-.906.154-.232.308-.193.52-.116.212.077 1.348.636 1.58.752.23.116.385.174.441.27.058.096.058.558-.149 1.136Z"
          fill="#25D366"
        />
      </svg>
    </a>
  );
}
