import type { LucideIcon } from "lucide-react";
import type { ElementType,ReactNode } from "react";

interface IconBoxProps {
  icon: ElementType<{ className?: string; strokeWidth?: number }>;
  children?: ReactNode;
  className?: string;
  iconClassName?: string;
}

export function IconBox({
  icon: Icon,
  children,
  className = "",
  iconClassName = "text-teal-400",
}: IconBoxProps) {
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 ring-1 ring-teal-500/25 ${className}`}
      aria-hidden={children ? undefined : true}
    >
      <Icon className={`h-5 w-5 ${iconClassName}`} strokeWidth={1.75} />
      {children}
    </span>
  );
}
