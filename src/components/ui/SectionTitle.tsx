interface SectionTitleProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionTitle({
  id,
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <header className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-teal-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="scroll-mt-28 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
    </header>
  );
}
