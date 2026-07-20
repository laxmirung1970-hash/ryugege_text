type SectionLabelProps = {
  index: string;
  label: string;
  light?: boolean;
  center?: boolean;
};

export function SectionLabel({
  index,
  label,
  light = false,
  center = false,
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="font-heading text-sm font-black text-tour-red">{index}</span>
      <span className="h-px w-8 bg-tour-red/40" />
      <span
        className={`text-xs font-bold uppercase tracking-[0.22em] ${
          light ? "text-gold" : "text-ink-soft"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
