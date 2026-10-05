
import { IconBox } from "@/components/ui/IconBox";
import type { ComponentType, SVGProps } from "react";
import type { ElementType } from "react";
interface ContactLinkCardProps {
  href: string;
  label: string;
  value: string;
  icon: ElementType<{ className?: string; strokeWidth?: number }>;
  external?: boolean;
  placeholder?: boolean;
}

export function ContactLinkCard({
  href,
  label,
  value,
  icon,
  external = false,
  placeholder = false,
}: ContactLinkCardProps) {
  const content = (
    <>
      <IconBox icon={icon} />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
          {placeholder ? (
            <span className="ml-2 normal-case text-amber-500/90"></span>
          ) : null}
        </p>
        <p className="mt-1 break-all text-base font-medium text-white group-hover:text-teal-300 sm:text-lg">
          {value}
        </p>
      </div>
    </>
  );

  const className =
    "group flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-teal-500/40 sm:p-8";

  if (placeholder) {
    return (
      <div
        className={`${className} cursor-default opacity-90`}
        title="Renseignez l’URL dans src/data/profile.ts"
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      className={className}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {content}
    </a>
  );
}
