interface Props {
  number?: string;
  label: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  number,
  label,
  title,
  className = "",
}: Props) {
  return (
    <div className={`mb-12 ${className}`}>
      {number && (
        <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-accent tracking-widest uppercase">
          <span>// {number}</span>
          <span className="text-surface-border">•</span>
          <span>{label}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text-primary leading-tight tracking-tight">
        {title}
      </h2>
      <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent to-accent-cyan rounded-full opacity-80" />
    </div>
  );
}
