import { CheckCircle2 } from "lucide-react";

export default function TourHighlights({ highlights }: { highlights: string[] }) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-surface p-6">
      <h2 className="font-heading text-xl font-bold text-brand-dark">Trip Highlights</h2>
      <ul className="mt-4 space-y-3">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-3">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
            <span className="text-sm leading-relaxed text-brand-dark">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
