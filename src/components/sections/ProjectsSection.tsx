"use client";

import {
  getAllTechnologies,
  projects as allProjects,
} from "@/data/profile";
import type { Project, ProjectKind } from "@/types/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { IconBox } from "@/components/ui/IconBox";
import { projectKindIcons, sectionMetaIcons } from "@/lib/icons";
import { Filter, Layers } from "lucide-react";
import { useMemo, useState } from "react";

const kindLabels: Record<ProjectKind, string> = {
  project: "Projet",
  internship: "Stage",
  hackathon: "Hackathon",
};

function ProjectCard({ project }: { project: Project }) {
  const KindIcon = projectKindIcons[project.kind];
  const CalendarIcon = sectionMetaIcons.calendar;

  return (
    <article
      className={`flex flex-col rounded-2xl border p-6 transition ${
        project.highlight
          ? "border-teal-500/40 bg-gradient-to-b from-teal-500/10 to-slate-900/40"
          : "border-white/10 bg-slate-900/40 hover:border-white/20"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <IconBox icon={KindIcon} className="h-10 w-10" />
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Badge variant={project.highlight ? "accent" : "default"}>
            {kindLabels[project.kind]}
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <CalendarIcon className="h-3.5 w-3.5" aria-hidden />
            {project.period}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Badge variant="outline">{tech}</Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProjectsSection() {
  const technologies = useMemo(() => getAllTechnologies(allProjects), []);
  const [techFilter, setTechFilter] = useState<string>("all");
  const [kindFilter, setKindFilter] = useState<ProjectKind | "all">("all");

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const kindOk = kindFilter === "all" || p.kind === kindFilter;
      const techOk =
        techFilter === "all" || p.technologies.includes(techFilter);
      return kindOk && techOk;
    });
  }, [kindFilter, techFilter]);

  return (
    <section id="projets" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="projets-title"
          eyebrow="Réalisations"
          title="Expériences & projets"
          description="Filtrez par technologie ou type de mission pour explorer le parcours."
        />

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <label
              htmlFor="kind-filter"
              className="mb-2 flex items-center gap-1.5 text-xs font-medium text-slate-500"
            >
              <Filter className="h-3.5 w-3.5 text-teal-500/80" aria-hidden />
              Type
            </label>
            <select
              id="kind-filter"
              value={kindFilter}
              onChange={(e) =>
                setKindFilter(e.target.value as ProjectKind | "all")
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-white sm:w-56"
            >
              <option value="all">Tous</option>
              <option value="project">Projets</option>
              <option value="internship">Stages</option>
              <option value="hackathon">Hackathons</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="tech-filter"
              className="mb-2 flex items-center gap-1.5 text-xs font-medium text-slate-500"
            >
              <Layers className="h-3.5 w-3.5 text-teal-500/80" aria-hidden />
              Technologie
            </label>
            <select
              id="tech-filter"
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-white"
            >
              <option value="all">Toutes les technologies</option>
              {technologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="mb-6 text-sm text-slate-500">
          {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-slate-400">
            Aucun projet ne correspond à ces filtres.
          </p>
        ) : null}
      </div>
    </section>
  );
}
