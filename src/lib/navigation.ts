import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  FolderGit2,
  GraduationCap,
  Home,
  Layers,
  Mail,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { id: "accueil", label: "Accueil", href: "#accueil", icon: Home },
  { id: "competences", label: "Compétences", href: "#competences", icon: Layers },
  { id: "projets", label: "Projets", href: "#projets", icon: FolderGit2 },
  { id: "formations", label: "Formations", href: "#formations", icon: BookMarked },
  { id: "parcours", label: "Parcours", href: "#parcours", icon: GraduationCap },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];
