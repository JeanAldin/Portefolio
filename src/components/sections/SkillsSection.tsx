import { skillCategories } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { IconBox } from "@/components/ui/IconBox";
import { skillCategoryIcons } from "@/lib/icons";
import { Layers } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="competences" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="competences-title"
          eyebrow="Expertise"
          title="Compétences informatiques"
          description="Stack web, mobile, backend, data et conception d'APIs REST."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = skillCategoryIcons[category.id] ?? Layers;
            return (
              <article
                key={category.id}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-teal-500/30"
              >
                <div className="flex items-center gap-3">
                  <IconBox icon={Icon} className="h-10 w-10" />
                  <h3 className="text-lg font-semibold text-white">{category.label}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <li key={skill}>
                      <Badge variant="accent">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
