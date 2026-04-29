"use client";

import { useState } from "react";
import { tours } from "@/data/tours";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Fallback: open WhatsApp with message
      const name = data.get("name") as string;
      const tour = data.get("tour") as string;
      const msg = data.get("message") as string;
      const waText = encodeURIComponent(`Hi, I'm ${name}. I'm interested in the ${tour || "Colombo tuk tuk tour"}. ${msg}`);
      window.open(`https://wa.me/94724119468?text=${waText}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 p-12 text-center">
        <CheckCircle2 size={48} className="text-green-500" />
        <h3 className="mt-4 font-heading text-xl font-bold text-brand-dark">Message Sent!</h3>
        <p className="mt-2 text-muted">We'll get back to you as soon as possible. You can also reach us on WhatsApp for faster response.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-primary underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from real users, catches bots */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-dark">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-dark">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-dark">
          Phone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 234 567 8900"
          className="w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="tour" className="mb-1.5 block text-sm font-medium text-brand-dark">
          Tour of Interest
        </label>
        <select
          id="tour"
          name="tour"
          className="w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Select a tour (optional)</option>
          {tours.map((t) => (
            <option key={t.slug} value={t.name}>{t.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-dark">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us your travel dates, group size, or any questions..."
          className="w-full resize-none rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow transition-all hover:bg-accent-dark disabled:opacity-60"
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <Send size={16} />
        )}
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
