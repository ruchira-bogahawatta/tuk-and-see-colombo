interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            light ? "text-sky-300" : "text-primary"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
        <span className={`ml-2 inline-block h-2 w-2 rounded-full align-middle ${light ? "bg-sky-300" : "bg-primary"}`} />
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-sky-100" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
