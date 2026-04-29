import { CheckCircle2, Info, XCircle } from "lucide-react";

interface Props {
  whatsIncluded: string[];
  additionalInfo: string[];
  cancellationPolicy: string;
}

export default function TourInclusions({ whatsIncluded, additionalInfo, cancellationPolicy }: Props) {
  return (
    <div className="space-y-6">
      {/* Included */}
      <div className="rounded-2xl border border-green-100 bg-green-50/60 p-6">
        <h2 className="font-heading text-xl font-bold text-brand-dark">What's Included</h2>
        <ul className="mt-4 space-y-2">
          {whatsIncluded.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-brand-dark">
              <CheckCircle2 size={16} className="shrink-0 text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Additional info */}
      <div className="rounded-2xl border border-sky-100 bg-surface p-6">
        <h2 className="font-heading text-xl font-bold text-brand-dark">Additional Information</h2>
        <ul className="mt-4 space-y-2">
          {additionalInfo.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
              <Info size={15} className="mt-0.5 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Cancellation */}
      <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
        <h2 className="font-heading text-lg font-bold text-brand-dark">Cancellation Policy</h2>
        <p className="mt-2 text-sm text-muted">{cancellationPolicy}</p>
      </div>
    </div>
  );
}
