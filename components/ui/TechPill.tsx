interface Props {
  label: string;
  className?: string;
}

export default function TechPill({ label, className = "" }: Props) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1 rounded-md
        text-xs font-mono
        bg-surface border border-surface-border
        text-text-secondary
        hover:border-accent/40 hover:text-accent
        transition-colors duration-150
        ${className}
      `}
    >
      {label}
    </span>
  );
}
