interface Props {
  label: string;
  className?: string;
}

export default function StatusBadge({ label, className = "" }: Props) {
  return (
    <span
      className={`
        inline-flex items-center gap-2 
        px-3 py-1.5 rounded-full 
        text-xs font-mono font-medium
        border border-accent/30 
        bg-accent/10 text-accent
        ${className}
      `}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      {label}
    </span>
  );
}
