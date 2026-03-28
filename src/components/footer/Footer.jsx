import { Link } from "react-router-dom";
import { profile } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="font-display text-lg tracking-wide text-gradient-gold">
            {profile.name}
          </div>
          <div className="mt-2 text-xs tracking-[0.22em] text-white/45">
            {profile.tagline}
          </div>
          <div className="mt-3 text-xs text-white/45">
            This site is hand-crafted, with care by me.
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-white/60">
          <Link to="/work" className="hover:text-white" data-cursor="hover">
            Work
          </Link>
          <Link to="/resume" className="hover:text-white" data-cursor="hover">
            Resume
          </Link>
          <Link to="/contact" className="hover:text-white" data-cursor="hover">
            Say Hello
          </Link>
        </div>

        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
