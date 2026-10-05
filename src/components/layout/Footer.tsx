import { profile } from "@/data/profile";
import { FiGithub,FiMail,FiLinkedin } from "react-icons/fi";
export function Footer() {
  const year = new Date().getFullYear();
  const { email, github, linkedin } = profile.contact;

  return (
    <footer className="border-t border-white/5 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:border-teal-500/40 hover:text-teal-300"
            aria-label="Envoyer un courriel"
          >
            <FiMail className="h-4 w-4" aria-hidden />
            Email
          </a>
          {github.url.trim() ? (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:border-teal-500/40 hover:text-teal-300"
              aria-label="Profil GitHub"
            >
              <FiGithub className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          ) : null}
          {linkedin.url.trim() ? (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400 transition hover:border-teal-500/40 hover:text-teal-300"
              aria-label="Profil LinkedIn"
            >
              <FiLinkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
          ) : null}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {year} {profile.fullName}. Portfolio développeur Full Stack.
          </p>
          <p className="max-w-md text-xs leading-relaxed">
            Les renseignements présentés sont déclarés sincères et exacts.
          </p>
        </div>
      </div>
    </footer>
  );
}
