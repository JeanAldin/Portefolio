import { profile } from "@/data/profile";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { IconBox } from "@/components/ui/IconBox";
import { sectionMetaIcons } from "@/lib/icons";
import Link from "next/link";
import {
  ArrowRight,
  FolderKanban,
  Code, ScanSearch,
  Mail,
  Phone,
} from "lucide-react";

export function HeroSection() {
  const initials = `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`;
  const { email, phoneHref, github, linkedin } = profile.contact;
  const githubReady = github.url.trim().length > 0;
  const linkedinReady = linkedin.url.trim().length > 0;

  return (
    <section
      id="accueil"
      className="relative scroll-mt-28 overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-teal-400">
            <FolderKanban className="h-4 w-4" aria-hidden />
            Portfolio professionnel
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.firstName}
            <br />
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              {profile.lastName}
            </span>
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-200">{profile.title}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Contacts rapides">
            <li>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-teal-500/40 hover:text-white"
              >
                <Mail className="h-4 w-4 text-teal-400" aria-hidden />
                Email
              </a>
            </li>
            <li>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-teal-500/40 hover:text-white"
              >
                <Phone className="h-4 w-4 text-teal-400" aria-hidden />
                Téléphone
              </a>
            </li>
            {githubReady ? (
              <li>
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-teal-500/40 hover:text-white"
                >
                  <Code className="h-4 w-4 text-teal-400" aria-hidden />
                  GitHub
                </a>
              </li>
            ) : null}
            {linkedinReady ? (
              <li>
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-teal-500/40 hover:text-white"
                >
                  <ScanSearch className="h-4 w-4 text-teal-400" aria-hidden />
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projets"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              <FolderKanban className="h-4 w-4" aria-hidden />
              Voir mes projets
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <IconBox icon={sectionMetaIcons.experience} />
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Expérience</dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  {profile.yearsOfExperience}+ ans
                </dd>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <IconBox icon={sectionMetaIcons.specialty} />
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Spécialité</dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  Full Stack & Mobile
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <ProfilePhoto
            src={profile.photoSrc}
            alt={`Photo de ${profile.fullName}`}
            initials={initials}
          />
        </div>
      </div>
    </section>
  );
}
