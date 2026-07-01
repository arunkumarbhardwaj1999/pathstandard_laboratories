interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = true,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const alignClass = isCenter ? "text-center mx-auto" : "";
  const titleColor = dark ? "text-white" : "text-ps-slate-900";
  const descColor = dark ? "text-white/70" : "text-ps-slate-600";
  const labelColor = dark ? "!text-ps-teal-light" : "text-ps-slate-500";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {label && (
        <p className={`text-eyebrow mb-3 ${labelColor}`}>{label}</p>
      )}
      <h2 className={`text-section-title ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${descColor} ${isCenter ? "mx-auto max-w-2xl" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
