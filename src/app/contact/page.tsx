import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { PHONE_DISPLAY, EMAIL, ADDRESS, WHATSAPP_NUMBER } from "@/data/tours";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tuk & See Colombo — call, WhatsApp, or send a message to book your private tuk tuk tour of Colombo, Sri Lanka.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-brand-dark to-primary pt-24 pb-12 text-center sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">Get in Touch</p>
          <h1 className="font-heading text-3xl font-black text-white sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-base text-sky-100 sm:text-lg">
            Message us on WhatsApp for the fastest response, or fill in the form below.
          </p>
        </div>
      </section>

      <section className="bg-warm py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact details + map */}
            <div>
              <SectionHeading label="Reach Us" title="How to Find Us" />

              <div className="mt-8 space-y-5">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I%27d+like+to+enquire+about+a+tour`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-green-50 p-5 transition-colors hover:bg-green-100"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">WhatsApp (Fastest)</p>
                    <p className="text-sm text-muted">+{WHATSAPP_NUMBER}</p>
                  </div>
                </a>

                <a
                  href={`tel:${PHONE_DISPLAY}`}
                  className="flex items-center gap-4 rounded-2xl bg-surface p-5 transition-colors hover:bg-sky-100"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Call Us</p>
                    <p className="text-sm text-muted">{PHONE_DISPLAY}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 rounded-2xl bg-surface p-5 transition-colors hover:bg-sky-100"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Email</p>
                    <p className="text-sm text-muted">{EMAIL}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl bg-surface p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Location</p>
                    <p className="text-sm text-muted">{ADDRESS}</p>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="mt-8 overflow-hidden rounded-2xl shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.62209568697!2d79.77298!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tuk & See Colombo location"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <SectionHeading label="Message Us" title="Send a Message" />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
