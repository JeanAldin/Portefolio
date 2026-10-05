import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
}

const variants = {
  default: "bg-slate-800 text-slate-200 border-slate-700",
  accent: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  outline: "bg-transparent text-slate-300 border-slate-600",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
