import { trainings } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { sectionMetaIcons } from "@/lib/icons";
import { BookOpen } from "lucide-react";

export function TrainingSection() {
  const byYear = [...trainings].sort((a, b) => b.year - a.year);
  const TrainingIcon = sectionMetaIcons.training;

  return (
    <section id="formations" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="formations-title"
          eyebrow="Perfectionnement"
          title="Formations continues"
          description="Montée en compétences sur le web, le backend, la data et le BI."
        />

        <ol className="relative border-l border-white/10 pl-6">
          {byYear.map((item) => (
            <li key={item.id} className="mb-8 ml-2 last:mb-0">
              <span
                className="absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-slate-950 bg-teal-400"
                aria-hidden
              />
              <div className="flex flex-wrap items-center gap-2">
                <TrainingIcon className="h-4 w-4 text-teal-400" aria-hidden />
                <time className="text-sm font-semibold text-teal-400">{item.year}</time>
              </div>
              <h3 className="mt-1 text-base font-medium text-white">{item.title}</h3>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {item.provider}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
