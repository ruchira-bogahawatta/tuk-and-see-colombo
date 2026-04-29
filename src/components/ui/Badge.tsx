interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "golden" | "dark" | "outline";
  size?: "sm" | "md";
}

export default function Badge({ children, variant = "primary", size = "md" }: BadgeProps) {
  const variants = {
    primary: "bg-sky-100 text-primary border-sky-200",
    accent:  "bg-orange-100 text-accent border-orange-200",
    golden:  "bg-amber-100 text-amber-700 border-amber-200",
    dark:    "bg-brand-dark text-white border-brand-dark",
    outline: "bg-transparent text-brand-dark border-brand-dark",
  };
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border font-medium ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}
