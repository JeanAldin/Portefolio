import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactLinkCard } from "@/components/ui/ContactLinkCard";
import { FiGithub,FiMail,FiLinkedin,FiPhone } from "react-icons/fi";


function isLinkReady(url: string) {
  return url.trim().length > 0;
}

export function ContactSection() {
  const { email, phone, phoneHref, github, linkedin } = profile.contact;

  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          id="contact-title"
          eyebrow="Échange"
          title="Contact"
          description="Courriel, téléphone et réseaux professionnels."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <ContactLinkCard
            href={`mailto:${email}`}
            label="Courriel"
            value={email}
            icon={FiMail}
          />
          <ContactLinkCard
            href={phoneHref}
            label="Téléphone"
            value={phone}
            icon={FiPhone}
          />
          <ContactLinkCard
            href={github.url}
            label="GitHub"
            value={github.display}
            icon={FiGithub}
            external
            placeholder={!isLinkReady(github.url)}
          />
          <ContactLinkCard
            href={linkedin.url}
            label="LinkedIn"
            value={linkedin.display}
            icon={FiLinkedin}
            external
            placeholder={!isLinkReady(linkedin.url)}
          />
        </div>
      </div>
    </section>
  );
}
