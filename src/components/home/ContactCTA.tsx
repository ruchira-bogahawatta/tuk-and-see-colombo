import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/data/tours";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary via-sky-500 to-brand-dark py-16 lg:py-28">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-200">
          Ready to explore?
        </p>
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Book an Unforgettable Ride Today
        </h2>
        <p className="mt-4 text-lg text-sky-100">
          Message us on WhatsApp or call directly — we'll confirm your tour within minutes.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I%27d+like+to+book+a+Colombo+tuk+tuk+tour`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-400 hover:shadow-xl sm:w-auto"
          >
            <MessageCircle size={20} />
            Book on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_DISPLAY}`}
            className="flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
          >
            <Phone size={20} />
            {PHONE_DISPLAY}
          </a>
        </div>

        <p className="mt-6 text-sm text-sky-200">
          Or{" "}
          <Link href="/contact" className="font-semibold text-white underline underline-offset-2 hover:no-underline">
            send us a message
          </Link>{" "}
          and we'll get back to you.
        </p>
      </div>
    </section>
  );
}
