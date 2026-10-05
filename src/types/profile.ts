export type ProjectKind = "project" | "internship" | "hackathon";

export interface SocialProfile {
  /** URL complète du profil */
  url: string;
  /** Texte affiché (ex. github.com/mon-compte) */
  display: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneHref: string;
  github: SocialProfile;
  linkedin: SocialProfile;
}

export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  tagline: string;
  photoSrc: string;
  contact: ContactInfo;
  yearsOfExperience: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  kind: ProjectKind;
  highlight?: boolean;
}

export interface Training {
  id: string;
  year: number;
  title: string;
  provider: string;
}

export interface Education {
  id: string;
  period: string;
  institution: string;
  degree: string;
  track?: string;
  status?: "completed" | "in_progress";
}

export interface PersonalTrait {
  id: string;
  text: string;
}

export interface Interest {
  id: string;
  text: string;
}
