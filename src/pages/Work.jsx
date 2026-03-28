import { Link } from "react-router-dom";
import { projects } from "../data/siteContent";
import Badge from "../components/ui/Badge";
import GlowCard from "../components/ui/GlowCard";
import PageShell from "../components/ui/PageShell";
import SectionHeading from "../components/ui/SectionHeading";

export default function Work() {
  return (
    <PageShell className="pt-32 pb-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="WORK"
            title="Projects"
            subtitle="A few projects and builds from my recent work."
          />

          <div className="flex flex-wrap gap-3">
            <Link to="/" className="btn-ghost" data-cursor="hover">
              Back Home
            </Link>
            <Link to="/resume" className="btn-primary" data-cursor="hover">
              View Resume
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <GlowCard key={p.title} className="overflow-hidden p-0">
              <img
                src={p.image}
                alt="Project cover"
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-7">
                <div className="text-xs tracking-[0.26em] text-white/45">
                  PROJECT
                </div>
                <div className="mt-3 text-xl font-semibold text-white">
                  {p.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {p.desc}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t.toUpperCase()}</Badge>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="text-xs tracking-[0.26em] text-white/45">NEXT</div>
          <div className="mt-3 text-2xl font-semibold text-white">
            Want a dedicated project page per project?
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
            I can expand each card into a full project page (problem - approach
            - implementation - results) with rich scroll-triggered animations.
          </p>
          <Link to="/contact" className="btn-primary mt-6" data-cursor="hover">
            Contact
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
