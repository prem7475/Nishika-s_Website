import { profile } from "../data/siteContent";
import PageShell from "../components/ui/PageShell";
import SectionHeading from "../components/ui/SectionHeading";

export default function Resume() {
  const resumeSrc = profile.resumeSrc || "/resume.jpg";
  const isPdf = resumeSrc.toLowerCase().endsWith(".pdf");

  return (
    <PageShell className="pt-32 pb-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="RESUME"
          title="Resume / Profile"
          subtitle="View the resume directly in the site, or download it." 
        />

        <div className="mt-10 max-h-[78vh] overflow-auto rounded-3xl border border-white/10 bg-white/5">
          {isPdf ? (
            <iframe title="Resume" src={resumeSrc} className="h-[78vh] w-full" />
          ) : (
            <img
              src={resumeSrc}
              alt={`${profile.name} resume`}
              className="w-full object-contain"
              loading="lazy"
            />
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={resumeSrc}
            className="btn-primary"
            download
            data-cursor="hover"
          >
            Download Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-ghost"
            data-cursor="hover"
          >
            Email
          </a>
        </div>

        <div className="mt-4 text-xs text-white/45">
          Tip: Replace `public/resume.jpg` (or point `profile.resumeSrc` to a PDF)
          to update this page.
        </div>
      </div>
    </PageShell>
  );
}
