import { education, interests, personalTraits } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { IconBox } from "@/components/ui/IconBox";
import { sectionMetaIcons } from "@/lib/icons";
import { GraduationCap, Heart } from "lucide-react";

export function EducationSection() {
  return (
    <section id="parcours" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="parcours-title"
          eyebrow="Diplômes"
          title="Formations & qualités"
          description="Parcours académique à l'EMIT et traits personnels."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {education.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
              >
                <div className="flex gap-4">
                  <IconBox icon={GraduationCap} className="h-10 w-10" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-teal-400">
                        {item.period}
                      </span>
                      {item.status === "in_progress" ? (
                        <Badge variant="accent">En cours</Badge>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.degree}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                    {item.track ? (
                      <p className="mt-2 text-sm text-slate-500">Parcours : {item.track}</p>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-6">
            <article className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <IconBox icon={sectionMetaIcons.traits} className="h-10 w-10" />
                <h3 className="text-lg font-semibold text-white">Qualités personnelles</h3>
              </div>
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-400">
                {personalTraits.map((t) => (
                  <li key={t.id}>{t.text}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3">
                <IconBox icon={Heart} className="h-10 w-10" iconClassName="text-rose-400" />
                <h3 className="text-lg font-semibold text-white">Centres d&apos;intérêt</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <li key={i.id}>
                    <Badge>{i.text}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
