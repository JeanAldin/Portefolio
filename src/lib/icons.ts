import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  Code2,
  Filter,
  FolderKanban,
  Globe,
  GraduationCap,
  Layers,
  LayoutGrid,
  Mail,
  Server,
  Sparkles,
  Trophy,
  UserRound,
} from "lucide-react";
import type { ProjectKind } from "@/types/profile";

export const skillCategoryIcons: Record<string, LucideIcon> = {
  frontend: LayoutGrid,
  backend: Server,
  data: BarChart3,
  languages: Code2,
  soft: Globe,
};

export const projectKindIcons: Record<ProjectKind, LucideIcon> = {
  project: FolderKanban,
  internship: Building2,
  hackathon: Trophy,
};

export const sectionMetaIcons = {
  experience: Briefcase,
  specialty: Sparkles,
  training: GraduationCap,
  traits: UserRound,
  interests: Sparkles,
  filter: Filter,
  calendar: Calendar,
};
